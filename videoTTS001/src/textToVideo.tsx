// Importamos hooks de React para manejar estado, ciclos de vida y referencias mutables
import { useState, useEffect, useRef } from "react";

// Función de traducción personalizada con la Api de Google Translate
import { translate } from "./translate";

// Hook personalizado que gestiona la reproducción de texto a voz (TTS) y el sistema de PNGTubers (avatares animados)
import { useTTSPlayer, PNG_TUBERS } from "./tts11labs";

// Definimos una interfaz para describir el formato de descripción de un patrimonio cultural
interface HeritageDescription {
  local: {
    short: string;
    extended: string;
  };
}

// Definimos la estructura de un elemento patrimonial
interface HeritageItem {
  id: string;
  name: string;
  description: HeritageDescription;
  imageUrl: string;
}

interface TextToVideoProps {
  heritageItems: HeritageItem[];
  // si se quiere meter mas idiomas habra que cambiar
  // este targetLanguage
  targetLanguage: "fr" | "en" | "es";
  descriptionLength: "short" | "extended";
}

const DEFAULT_IMAGE_URL =
  "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/ywx1rgzx6zwpavg3db1f";

/**
 * Componente principal que convierte texto de patrimonio en un "video" hablado con PNG tubers.
 * Permite navegación entre patrimonios, reproducción automática y muestra subtítulos.
 */
export const TextToVideo = ({
  heritageItems: initialHeritageItems = [],
  targetLanguage: initialTargetLanguage = "es",
  descriptionLength: initialDescriptionLength = "extended",
}: TextToVideoProps) => {
  const [heritageItems, setHeritageItems] =
    useState<HeritageItem[]>(initialHeritageItems);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState<
    "short" | "extended"
  >(initialDescriptionLength);
  const [targetLanguage, setTargetLanguage] = useState<"en" | "es" | "fr">(
    initialTargetLanguage
  );
  const [displayText, setDisplayText] = useState("");
  // TODO: limpiar codigo de input y pruebas rapidas de heritages
  const [jsonInput, setJsonInput] = useState("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [testText, setTestText] = useState("");
  const [testImageUrl, setTestImageUrl] = useState("");
  const [sentences, setSentences] = useState<string[]>([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [voiceId, setVoiceId] = useState("Nh2zY9kknu6z4pZy6FhD"); // Voz por defecto
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const sentenceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoAdvanceRef = useRef(autoAdvance);
  const currentItemRef = useRef(currentItemIndex);
  const heritageItemsRef = useRef(heritageItems);

  /**
   * Efecto para sincronizar las referencias con los estados actuales
   * Esto asegura que las referencias siempre tengan los valores más recientes
   * incluso dentro de callbacks asíncronos
   */
  useEffect(() => {
    autoAdvanceRef.current = autoAdvance;
    currentItemRef.current = currentItemIndex;
    heritageItemsRef.current = heritageItems;
  }, [autoAdvance, currentItemIndex, heritageItems]);

  const currentItem = heritageItems[currentItemIndex] || {
    id: "default",
    name: "Patrimonio Cultural",
    description: {
      local: {
        short: "Ingrese un JSON válido para comenzar",
        extended: "Ingrese un JSON válido para comenzar",
      },
    },
    imageUrl: "",
  };

  /**
   * Hook personalizado para el reproductor de Text-to-Speech
   * Gestiona la reproducción de audio y la animación del avatar PNGTuber
   * @param text - Texto a convertir a voz
   * @param lang - Idioma de la voz
   * @param onStop - Callback que se ejecuta al terminar la reproducción
   * @param voiceId - ID de la voz a utilizar
   * @param apiKey - Clave de API para el servicio TTS
   */
  const {
    isPlaying,
    progress,
    currentPNGTuber,
    play: startTTS,
    stop: stopTTS,
  } = useTTSPlayer({
    text: displayText,
    lang: targetLanguage,
    onStop: () => {
      if (autoAdvanceRef.current && heritageItemsRef.current.length > 1) {
        setIsLoadingNext(true);
        const nextIndex =
          (currentItemRef.current + 1) % heritageItemsRef.current.length;
        setCurrentItemIndex(nextIndex);
      }
    },
    voiceId: voiceId,
    apiKey: "sk_fcf711f6cba8630638aef7a7e1802559a1e9d029461b55cf",
  });

  /**
   * Efecto para manejar el avance automático al siguiente patrimonio
   * Se activa cuando isLoadingNext cambia y hay texto para mostrar
   * Espera un breve momento antes de iniciar la reproducción automática
   */
  useEffect(() => {
    if (isLoadingNext && displayText && !displayText.includes("JSON válido")) {
      const timer = setTimeout(() => {
        if (!isPlaying) {
          handlePlay();
        }
        setIsLoadingNext(false);
      }, 500);
      // si baja de 500 el tiemout, el tts reproduce el audio anterior
      // asi que no hay que tocar esto
      return () => clearTimeout(timer);
    }
  }, [isLoadingNext, displayText, isPlaying]);

  /**
   * Función para cargar y validar datos de patrimonio desde un JSON
   * Parsea el input JSON, valida la estructura y actualiza el estado
   * Muestra errores si el JSON es inválido o no tiene el formato correcto
   */
  const loadHeritageFromJson = () => {
    try {
      const parsedItems = JSON.parse(jsonInput);
      if (!Array.isArray(parsedItems))
        throw new Error("El JSON debe ser un array de objetos");

      const validatedItems = parsedItems.map((item, index) => ({
        id: item.id?.toString() || `item-${index}`,
        name: item.name || `Patrimonio ${index + 1}`,
        description: {
          local: item.description?.local || { short: "", extended: "" },
        },
        imageUrl: item.image || "",
      }));

      setHeritageItems(validatedItems);
      setCurrentItemIndex(0);
      setJsonError(null);
    } catch (error: any) {
      setJsonError(`Error en el JSON: ${error.message}`);
    }
  };

  /**
   * Efecto para traducir el texto de descripción al idioma seleccionado
   * Se ejecuta cuando cambia el elemento actual, la longitud de descripción o el idioma objetivo
   * Utiliza la función translate para obtener la traducción asíncrona
   */
  useEffect(() => {
    const fetchTranslation = async () => {
      const text = currentItem.description.local[descriptionLength];
      if (text) {
        try {
          const translatedText = await translate(text, targetLanguage);
          setDisplayText(translatedText);
        } catch (error) {
          console.error("Error en traducción:", error);
          setDisplayText(text);
        }
      }
    };

    fetchTranslation();
  }, [currentItem, descriptionLength, targetLanguage]);

  /**
   * Función para iniciar la reproducción del texto a voz
   * Verifica que haya texto válido antes de iniciar la reproducción
   * Muestra una alerta si no hay contenido para reproducir
   */
  const handlePlay = () => {
    if (!displayText.trim() || displayText.includes("JSON válido")) {
      alert("No hay contenido para reproducir");
      return;
    }

    startTTS();
  };

  /**
   * Función para detener la reproducción actual
   * Limpia temporizadores y resetea el estado de carga
   */
  const handleStop = () => {
    stopTTS();
    setIsLoadingNext(false);

    if (sentenceTimerRef.current) {
      clearTimeout(sentenceTimerRef.current);
    }
  };

  /**
   * Función para navegar al elemento patrimonial anterior
   * Implementa un comportamiento circular (vuelve al último cuando está en el primero)
   */
  const handlePrev = () => {
    setCurrentItemIndex((prev) =>
      prev > 0 ? prev - 1 : heritageItems.length - 1
    );
  };

  /**
   * Función para navegar al siguiente elemento patrimonial
   * Implementa un comportamiento circular (vuelve al primero cuando está en el último)
   */
  const handleNext = () => {
    setCurrentItemIndex((prev) =>
      prev < heritageItems.length - 1 ? prev + 1 : 0
    );
  };

  /**
   * Efecto de limpieza al desmontar el componente
   * Asegura que se cancelen todos los temporizadores pendientes
   */
  useEffect(() => {
    return () => {
      if (sentenceTimerRef.current) clearTimeout(sentenceTimerRef.current);
    };
  }, []);

  /**
   * Efecto para dividir el texto en oraciones para los subtítulos
   * Separa el texto por signos de puntuación y filtra oraciones vacías
   * Se ejecuta cada vez que cambia el texto a mostrar
   */
  useEffect(() => {
    if (displayText) {
      const newSentences = displayText
        .split(/(?<=[.!?])\s+/g)
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      setSentences(newSentences);
      setCurrentSentenceIndex(0);
    }
  }, [displayText]);

  /**
   * Efecto para controlar la transición entre oraciones en los subtítulos
   * Calcula la duración de cada oración basada en su longitud
   * Avanza automáticamente a la siguiente oración mientras se reproduce el audio
   */
  useEffect(() => {
    if (!isPlaying || sentences.length === 0) return;

    if (sentenceTimerRef.current) clearTimeout(sentenceTimerRef.current);

    const currentSentence = sentences[currentSentenceIndex];
    const duration = 1500 + currentSentence.length * 50;

    sentenceTimerRef.current = setTimeout(() => {
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, duration);
  }, [isPlaying, sentences, currentSentenceIndex]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Simulador de Patrimonio Cultural</h2>

      <div style={styles.controlsRow}>
        <select
          value={descriptionLength}
          onChange={(e) =>
            setDescriptionLength(e.target.value as "short" | "extended")
          }
          style={styles.select}
        >
          <option value="short">Descripción Corta</option>
          <option value="extended">Descripción Extendida</option>
        </select>

        <select
          value={targetLanguage}
          onChange={(e) =>
            setTargetLanguage(e.target.value as "fr" | "en" | "es")
          }
          style={styles.select}
        >
          <option value="en">Inglés</option>
          <option value="es">Español</option>
          <option value="fr">Francés</option>
        </select>

        <select
          value={voiceId}
          onChange={(e) => setVoiceId(e.target.value)}
          style={styles.select}
        >
          <option value="21m00Tcm4TlvDq8ikWAM">Voz Mujer</option>
          <option value="iLzHtPh0bW6RGWRG0Xo5">Voz Hombre</option>
          <option value="Nh2zY9kknu6z4pZy6FhD">Voz Hombre Joven</option>
        </select>

        <button
          onClick={() => setAutoAdvance(!autoAdvance)}
          style={{
            ...styles.autoAdvanceButton,
            backgroundColor: autoAdvance ? "#34a853" : "#ea4335",
          }}
        >
          {autoAdvance ? "⏩ AUTO ON" : "⏩ AUTO OFF"}
        </button>
      </div>

      {/* TODO: todo lo de dentro del viewer es lo que se hará componente, lo de fuera es temporal */}
      <div style={styles.viewer}>
        <div style={styles.itemCounter as React.CSSProperties}>
          {heritageItems.length > 0
            ? `${currentItemIndex + 1}/${heritageItems.length}`
            : "0/0"}
        </div>

        <button
          onClick={handlePrev}
          disabled={heritageItems.length === 0}
          style={{
            ...styles.navButton,
            ...styles.navButtonLeft,
          }}
          title="Anterior"
          onMouseOver={() => setHoveredLeft(true)}
          onMouseOut={() => setHoveredLeft(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "24px",
              height: "24px",
              transition: "transform 0.2s ease-in-out",
              transform: hoveredLeft ? "scale(1.5)" : "scale(1)",
            }}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={heritageItems.length === 0}
          style={{ ...styles.navButton, ...styles.navButtonRight }}
          title="Siguiente"
          onMouseOver={() => setHoveredRight(true)}
          onMouseOut={() => setHoveredRight(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "24px",
              height: "24px",
              transition: "transform 0.2s ease-in-out",
              transform: hoveredRight ? "scale(1.5)" : "scale(1)",
            }}
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <img
          src={currentItem.imageUrl || DEFAULT_IMAGE_URL}
          alt="Background"
          style={{
            ...styles.backgroundImage,
            opacity: isPlaying ? 1 : 0.7,
          }}
          onError={(e) => (e.currentTarget.src = DEFAULT_IMAGE_URL)}
        />

        {isPlaying && (
          <>
            <img
              src={PNG_TUBERS[currentPNGTuber]}
              alt="Avatar"
              style={{
                ...styles.avatar,
                transform: `scale(${progress % 10 < 5 ? 4 : 4.05})`,
              }}
            />
            {/* TODO: darlse estilo al caption */}
            <div style={styles.caption}>
              <h4 style={styles.captionTitle}>{currentItem.name}</h4>
              <p style={styles.captionText}>
                {sentences.length > 0 && sentences[currentSentenceIndex]}
              </p>
            </div>
          </>
        )}

        {isLoadingNext && (
          <div style={styles.loadingOverlay}>
            <div style={styles.loadingSpinner}></div>
            <p>Cargando siguiente patrimonio...</p>
          </div>
        )}

        <div style={styles.playbackControls}>
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              disabled={heritageItems.length === 0 || isLoadingNext}
              style={{
                ...styles.playButton,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 8.5 L9 15.5 L16 12 Z" />
              </svg>
            </button>
          ) : (
            <button onClick={handleStop} style={styles.stopButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="10" y1="8" x2="10" y2="16" />
                <line x1="14" y1="8" x2="14" y2="16" />
              </svg>
            </button>
          )}
        </div>

        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "30px",
  },
  controlsRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  select: {
    padding: "10px",
    width: "200px",
    marginBottom: "10px",
  },
  autoAdvanceButton: {
    padding: "10px 15px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  section: {
    width: "100%",
    maxWidth: "800px",
    marginBottom: "20px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  textarea: {
    width: "100%",
    height: "200px",
    padding: "10px",
    fontFamily: "monospace",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
  buttonPrimary: {
    padding: "10px 15px",
    backgroundColor: "#4285f4",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  buttonSuccess: {
    padding: "10px 15px",
    backgroundColor: "#34a853",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  infoBox: {
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px",
    borderLeft: "4px solid #4285f4",
  },
  // TODO: version mobil
  viewer: {
    width: "700px",
    height: "400px",
    position: "relative" as const,
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#000",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },

  itemCounter: {
    position: "absolute",
    color: "white",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "5px 10px",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: "10px",
    fontWeight: "bold",
    zIndex: 2,
  },

  navButton: {
    position: "absolute" as const,
    top: "45%",
    padding: "10px",
    fontSize: "20px",
    backgroundColor: "rgba(0,0,0,0.7)",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    cursor: "pointer",
  },

  navButtonLeft: {
    left: "10px",
  },

  navButtonRight: {
    right: "10px",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    transition: "opacity 0.3s",
  },
  avatar: {
    position: "absolute" as const,
    right: "20px",
    bottom: "20px",
    width: "120px",
    height: "120px",
    objectFit: "contain" as const,
    transition: "transform 0.3s",
  },
  caption: {
    position: "absolute" as const,
    bottom: "0",
    left: "0",
    right: "0",
    padding: "10px",
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    minHeight: "60px",
    fontSize: "16px",
    lineHeight: "1.4",
  },
  captionTitle: {
    margin: "0 0 5px 0",
    fontSize: "18px",
    fontWeight: "bold",
    marginRight: "1rem",
  },
  captionText: {
    margin: "0",
    fontSize: "16px",
    textAlign: "center" as const,
  },
  loadingOverlay: {
    position: "absolute" as const,
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    zIndex: 10,
  },
  loadingSpinner: {
    border: "4px solid rgba(255,255,255,0.3)",
    borderRadius: "50%",
    borderTop: "4px solid #4285f4",
    width: "40px",
    height: "40px",
    animation: "spin 1s linear infinite",
    marginBottom: "10px",
  },
  progressBar: {
    position: "absolute" as const,
    bottom: "0",
    left: "0",
    right: "0",
    height: "4px",
    backgroundColor: "rgba(255,255,255,0.3)",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4285f4",
    transition: "width 0.1s linear",
  },
  playbackControls: {
    position: "absolute" as const,
    top: "45%",
    border: "none",
    borderRadius: "50%",
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  playButton: {
    border: "none",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.7)",
    cursor: "pointer",
  },
  stopButton: {
    border: "none",
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.7)",
    cursor: "pointer",
  },
};
