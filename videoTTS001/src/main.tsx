import React from "react";
import ReactDOM from "react-dom/client";
import { TextToVideo } from "./textToVideo";

const rootElement = document.getElementById("root");
const myHeritageData = [
  {
    identifier: 18,
    name: "Suwon Hwaseong Fortress",
    latitude: 37.2811,
    longitude: 127.0157,
    image:
      "https://eu2.contabostorage.com/7fb97413b6c243adb4347dafa02551a9:ocity/heritage/images/1733934352393_hwaseong_fortress.png",
    addressProvince: "Gyeonggi Province",
    addressLocality: "Suwon",
    addressCountry: "KR",
    type: "Cultural",
    description: {
      local: {
        short:
          "Hwaseong Haenggung Palace is the largest temporary palace in Korea, with a total of 576 spaces, and it has beauty and grandeur.",
        extended:
          "정조는 1789년 10월, 아버지 사도세자의 무덤인 현륭원을 옮긴 이후 1800년(정조 24년) 1월까지 12년간 13차례에 걸쳐 수원행차를 거행했으며, 이때마다 화성행궁에 머물렀습니다. 1795년에는 화성행궁 봉수당에서 어머니 혜경궁 홍씨의 환갑을 기념하는 진찬연을 여는 등 여러 가지 행사를 거행하였습니다. 화성행궁은 평상시에는 화성유수부 유수가 집무하는 관청으로도 활용되었습니다. 그러나, 일제강점기 이후 갖가지 용도의 건물로 이용되면서, 그 모습을 잃게 되었습니다. 화성축성 200주년인 1996년부터 복원 공사를 시작해 2003년 일반인에게 공개하였습니다.",
      },
      english: {
        short:
          "Hwaseong Haenggung Palace is the largest temporary palace in Korea, with a total of 576 spaces, and it features beauty and grandeur.",
        extended:
          "After moving Hyeonryungwon, the tomb of his father, Crown Prince Sado, in October 1789, Jeongjo held 13 trips to Suwon for 12 years until January 1800, and each time he stayed at Hwaseong Haenggung Palace. In 1795, various events were held at Hwaseong Haenggung, including a banquet to commemorate the 60th birthday of his mother Hyegyeonggung Hong. The palace was also used as a government office. During the Japanese colonial period, it was repurposed for other uses and lost its appearance. Restoration began in 1996 and the palace reopened in 2003.",
      },
    },
  },
  {
    identifier: 2007,
    name: "Mirador del Mediterráneo",
    latitude: 39.08487017422064,
    longitude: -0.24853563658447264,
    image:
      "https://eu2.contabostorage.com/7fb97413b6c243adb4347dafa02551a9:ocity/heritage/images/bc86271253d17348dc4a84d5990675468218939b1719412247.jpg",
    addressProvince: "Valencia",
    addressLocality: "Tavernes de la Valldigna",
    addressCountry: "ES",
    type: "Natural",
    description: {
      local: {
        short:
          "Desde el llamado Mirador del Mediterráneo o de la Valldigna se divisa el paisaje agrario actual, ribeteado por el mar.",
        extended:
          "Desde el llamado Mirador del Mediterráneo o de la Valldigna se divisa el paisaje agrario actual, ribeteado por el mar. Los arrozales de antaño dieron paso a los huertos de naranjos a mediados del siglo XX. Hoy conviven el azul del mar, el pardo de la marjal y el verde de los árboles. Este paisaje forma parte de la “Ruta del Racó de Joana”, situada en Tavernes de la Valldigna, un tesoro de belleza natural y biodiversidad. El sendero serpentea a través de colinas y vegetación autóctona, ofreciendo vistas espectaculares. Alberga especies como encinas, romeros, tomillos, águilas, zorros y más.",
      },
      english: {
        short:
          "From the so-called Mirador del Mediterráneo or Mirador de la Valldigna you can see the current agricultural landscape, bordered by the sea.",
        extended:
          "From the so-called Mirador del Mediterráneo or Mirador de la Valldigna you can see the current agricultural landscape, bordered by the sea. The rice fields of yesteryear gave way to orange groves in the mid-20th century. Today, the blue of the sea coexists with the brown of the marshland and the green of the trees. This landscape is part of the well-known 'Ruta del Racó de Joana' in Tavernes de la Valldigna, a treasure of natural beauty and biodiversity. The trail winds through lush landscapes filled with native flora and fauna, offering an immersive hiking experience.",
      },
    },
  },
  {
    identifier: 1404,
    name: "La Casa de la Cultura",
    latitude: 39.739598493506705,
    longitude: -0.27137924407615976,
    image:
      "https://eu2.contabostorage.com/7fb97413b6c243adb4347dafa02551a9:ocity/heritage/images/8b984d247f407596e96cbb67db03d28514aaec441664443977.png",
    addressProvince: "Valencia",
    addressLocality: "Quart de les Valls",
    addressCountry: "ES",
    type: "Cultural",
    description: {
      local: {
        short:
          "Se trata de una iglesia asentada sobre un templo primitivo gótico que sería ampliado en el siglo XVIII.",
        extended:
          "Edificio de interés histórico-cultural, clasificado como Monumento Histórico Artístico Nacional. Antiguamente iglesia de San Miguel (siglo XVII), fue restaurada en los 80 y transformada en la Casa de Cultura. Conserva su estructura original con nave central, capillas laterales, coro alto y campanario.",
      },
      english: {
        short:
          "This is a church built over a primitive Gothic temple that was enlarged in the 18th century.",
        extended:
          "A building of historic-cultural interest, classified as a National Historic-Artistic Monument. Formerly the Church of San Miguel (17th century), it was restored in the 1980s and converted into the Casa de Cultura. It preserves the original structure, with a central nave, side chapels, upper choir, and bell tower.",
      },
    },
  },
  {
    identifier: 1998,
    name: "Lithuanian Language",
    latitude: 54.678422563507475,
    longitude: 25.28583120957031,
    image:
      "https://eu2.contabostorage.com/7fb97413b6c243adb4347dafa02551a9:ocity/heritage/images/lithuanian_language.jpg",
    addressProvince: "Vilnius City Municipality",
    addressLocality: "Vilnius",
    addressCountry: "LT",
    type: "Intangible",
    description: {
      local: {
        short:
          "Lietuvių kalba – iš baltų prokalbės kilusi lietuvių tautos kalba.",
        extended:
          "Lietuvių kalba – iš baltų prokalbės kilusi lietuvių tautos kalba, kuri Lietuvoje yra valstybinė, o Europos Sąjungoje – viena iš oficialiųjų kalbų. Lietuviškai kalba apie tris milijonus žmonių (dauguma jų gyvena Lietuvoje).",
      },
      english: {
        short:
          "Lithuanian is an East Baltic language belonging to the Baltic branch of the Indo-European family.",
        extended:
          "Lithuanian is an East Baltic language belonging to the Baltic branch of the Indo-European language family. It is the official language of Lithuania and one of the official languages of the EU. It has about 2.8 million native speakers in Lithuania and around 1 million abroad.",
      },
    },
  },
  {
    identifier: 959,
    name: "Abdel Algaum Gate",
    latitude: 15.6339430240317,
    longitude: 32.490977357153305,
    image:
      "https://eu2.contabostorage.com/7fb97413b6c243adb4347dafa02551a9:ocity/heritage/images/f50d46809e5ec7b5093913b1c1190fd13a19a4a81653583983.jpg",
    addressProvince: "Khartoum",
    addressLocality: "Khartoum",
    addressCountry: "SD",
    type: "Cultural",
    description: {
      local: {
        short: "Abdel Algaum Gate is one of the most famous gates in Khartoum.",
        extended:
          "It holds cultural and architectural significance and is known for its historical relevance in the region.",
      },
      english: {
        short: "Abdel Algaum Gate is one of the most famous gates in Khartoum.",
        extended:
          "This gate holds architectural and cultural significance in Khartoum and is a symbol of the city's historical heritage.",
      },
    },
  },
];

const heritagesRuta = [
  {
    "id": 374,
    "name": "Auditorio Municipal",
    "date": "2021-01-22T00:00:00.000Z",
    "country_id": 207,
    "state_id": 1175,
    "city_id": 33045,
    "organization": "Vera Ruiz - Tourist Info Buñol",
    "ownership": "81",
    "periodicity": "",
    "email": "vera8827@hotmail.com",
    "image_copyright": "Joaquin Matamales",
    "sound_of_heritage": null,
    "image": "[\"9d6b0bc2af9472009740c8f7c70b7bea0a5551bd1611395302.jpg\"]",
    "short_heritage_description": "\nOpen-air auditorium with spectacular night vision.",
    "extended_heritage_description": "This municipal property is located on the San Luís promenade next to the hermitage dedicated to Saint Luís. It was inaugurated in 1989 as a result of the great impulse and growth that the two Buñol musical societies had experienced. The auditorium has an approximate capacity of 2,500 people. It is an impressive view at night because it is outdoors encased in a rock, which facilitates its acoustics, and the music is heard in a privileged environment.",
    "short_local_heritage_description": "Auditorio al aire libre con una espectacular  visión nocturna.",
    "extended_local_heritage_description": "De propiedad municipal se encuentra en el paseo San Luís junto a la ermita dedicado al Santo que da nombre al paseo. Se inauguró en 1989 a raíz del gran impulso y crecimiento que habían experimentado las dos sociedades musicales de Buñol. El Auditorio tiene una capacidad aproximada para 2.500 personas a pie de la roca cortada. Espectacular su visión nocturna pues al encontrarse al aire libre y estar encajonada por la roca cortada, que facilita su acústica, se escucha la música en un entorno privilegiado.",
    "tags": [],
    "subtype": "87",
    "documentation": "",
    "is_museum": false,
    "is_protected": false,
    "is_verified": true,
    "protected_values": {},
    "latitude": 39.419224695716466,
    "longitude": -0.797573847807318,
    "heritage_field_id": 1,
    "created_at": "2021-01-22T00:00:00.000Z",
    "updated_at": "2024-09-13T18:45:59.369Z",
    "deleted_at": null,
    "heritageField": {
        "id": 1,
        "name": "Cultural"
    },
    "city": {
        "id": 33045,
        "name": "Buñol",
        "state_id": 1175,
        "state_code": "V",
        "country_id": 207,
        "country_code": "ES",
        "latitude": "39.41667000",
        "longitude": "-0.78333000",
        "created_at": "2019-10-06T00:15:38.000Z",
        "updated_at": "2022-08-29T13:35:40.000Z",
        "flag": true,
        "wikidataid": "Q853762"
    },
    "country": {
        "id": 207,
        "name": "Spain",
        "iso3": "ESP",
        "numeric_code": "724",
        "iso2": "ES",
        "phonecode": "34",
        "capital": "Madrid",
        "currency": "EUR",
        "currency_name": "Euro",
        "currency_symbol": "€",
        "tld": ".es",
        "native": "España",
        "region": "Europe",
        "region_id": 4,
        "subregion": "Southern Europe",
        "subregion_id": 16,
        "nationality": "Spanish",
        "timezones": "[{\"zoneName\":\"Africa/Ceuta\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"},{\"zoneName\":\"Atlantic/Canary\",\"gmtOffset\":0,\"gmtOffsetName\":\"UTC±00\",\"abbreviation\":\"WET\",\"tzName\":\"Western European Time\"},{\"zoneName\":\"Europe/Madrid\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"}]",
        "translations": "{\"kr\":\"스페인\",\"pt-BR\":\"Espanha\",\"pt\":\"Espanha\",\"nl\":\"Spanje\",\"hr\":\"Španjolska\",\"fa\":\"اسپانیا\",\"de\":\"Spanien\",\"es\":\"España\",\"fr\":\"Espagne\",\"ja\":\"スペイン\",\"it\":\"Spagna\",\"cn\":\"西班牙\",\"tr\":\"İspanya\"}",
        "latitude": "40.00000000",
        "longitude": "-4.00000000",
        "emoji": "🇪🇸",
        "emojiu": "U+1F1EA U+1F1F8",
        "created_at": "2018-07-21T09:11:03.000Z",
        "updated_at": "2023-08-09T21:23:19.000Z",
        "flag": true,
        "wikidataid": "Q29"
    },
    "links": [
        {
            "id": 556,
            "heritage_list_id": 374,
            "name": "",
            "url": "https://turismolahoya.xn--buol-hqa.es/visitas-virtuales/"
        }
    ],
    "heritageContent": []
  },
  {
    "id": 381,
    "name": "Concierto Mano a Mano",
    "date": "2021-01-22T00:00:00.000Z",
    "country_id": 207,
    "state_id": 1175,
    "city_id": 33045,
    "organization": "Vera Ruiz - Tourist Info Buñol",
    "ownership": "81",
    "periodicity": "",
    "email": "vera8827@hotmail.com",
    "image_copyright": "Amparo Pardo",
    "sound_of_heritage": null,
    "image": "[\"9066d43cec55a2bf4d28bdfc25c9a5c3f8bfce5c1611402516.jpg\"]",
    "short_heritage_description": "Regional festival of interest to tourists. It is the annual concert of the two Buñol bands, the Artistic Musical Society and the Harmonica Musical Instructional Center, two of the best exponents of bands of the Valencian Community and Spain.",
    "extended_heritage_description": "The Mano a Mano has its origin in 1974, being the mayor of the town José Enrique Silla Criado and party councilor Joaquín Carrascosa Ortiz. First it was done on the Wednesday of fairs and from 1978 on it went to Tuesday. In 2006 it was brought forward to the Saturday before the start of the Fair and Festivities, to avoid the noise inherent in the operation of the fair. In these years it was presented in the party book as \"Extraordinary musical concert by the two bands. With the arrival of democracy in 1979, this concert was kept with the same name, taking place on the Tuesday of the holidays, despite the fact that this event was popularly known as “Mano a Mano” since the late seventies. , officially in the holiday book was not collected until 1988. Since it is an oral tradition, it is said that the origin was the comment between musicians of both bands, who said that they were going to “help out”. The Mano a Mano is today the annual concert held by the two Buñol societies, the La Artística Musical Society and the La Harmonica Musical Instructional Center, two of the greatest exponents of the band scene of the Valencian Community and of Spain, both awarded in competitions and world bands.",
    "short_local_heritage_description": "Fiesta de interés turístico autonómico. Es el concierto que anualmente celebran las dos sociedades de Buñol, la S. M. La Artística y el C.I.M. La Armónica, dos de las máximas exponentes del panorama bandístico de la Comunidad Valenciana y España.",
    "extended_local_heritage_description": "El Mano a Mano tiene su origen en el año 1974, siendo alcalde de la localidad José Enrique Silla Criado y concejal de fiestas Joaquín Carrascosa Ortiz. Primero se hacía el miércoles de ferias y a partir de 1978 se pasó al martes. En 2006 se adelantó al sábado anterior al inicio de la Feria y Fiestas, para evitar los ruidos inherentes al funcionamiento de la feria. En estos años se presentaba en el libro de fiestas como “Extraordinario concierto musical a cargo de las dos bandas”. Con la llegada de la democracia en 1979 se mantuvo con el mismo nombre este concierto, celebrándose el martes de las fiestas, a pesar de que popularmente ya se le conocía como “Mano a Mano” a este evento desde finales de la década de los setenta, oficialmente en el libro de fiestas no se recogió hasta el año 1988. Puesto que se trata de una tradición oral, se cuenta que el origen fue el comentario entre músicos de ambas bandas, que decían que iban “a echar un mano mano”. El Mano a Mano es hoy día el concierto que anualmente celebran las dos sociedades de Buñol, la Sociedad Musical La Artística y el Centro Instructivo Musical La Armónica, dos de las máximas exponentes del panorama bandístico de la Comunidad Valenciana y de España, ambas galardonadas en certámenes y mundiales de bandas.",
    "tags": [],
    "subtype": "104",
    "documentation": "",
    "is_museum": false,
    "is_protected": false,
    "is_verified": true,
    "protected_values": {},
    "latitude": 39.41858649782217,
    "longitude": -0.7972573471435607,
    "heritage_field_id": 3,
    "created_at": "2021-01-22T00:00:00.000Z",
    "updated_at": "2024-09-13T18:45:59.790Z",
    "deleted_at": null,
    "heritageField": {
        "id": 3,
        "name": "Mixed"
    },
    "city": {
        "id": 33045,
        "name": "Buñol",
        "state_id": 1175,
        "state_code": "V",
        "country_id": 207,
        "country_code": "ES",
        "latitude": "39.41667000",
        "longitude": "-0.78333000",
        "created_at": "2019-10-06T00:15:38.000Z",
        "updated_at": "2022-08-29T13:35:40.000Z",
        "flag": true,
        "wikidataid": "Q853762"
    },
    "country": {
        "id": 207,
        "name": "Spain",
        "iso3": "ESP",
        "numeric_code": "724",
        "iso2": "ES",
        "phonecode": "34",
        "capital": "Madrid",
        "currency": "EUR",
        "currency_name": "Euro",
        "currency_symbol": "€",
        "tld": ".es",
        "native": "España",
        "region": "Europe",
        "region_id": 4,
        "subregion": "Southern Europe",
        "subregion_id": 16,
        "nationality": "Spanish",
        "timezones": "[{\"zoneName\":\"Africa/Ceuta\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"},{\"zoneName\":\"Atlantic/Canary\",\"gmtOffset\":0,\"gmtOffsetName\":\"UTC±00\",\"abbreviation\":\"WET\",\"tzName\":\"Western European Time\"},{\"zoneName\":\"Europe/Madrid\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"}]",
        "translations": "{\"kr\":\"스페인\",\"pt-BR\":\"Espanha\",\"pt\":\"Espanha\",\"nl\":\"Spanje\",\"hr\":\"Španjolska\",\"fa\":\"اسپانیا\",\"de\":\"Spanien\",\"es\":\"España\",\"fr\":\"Espagne\",\"ja\":\"スペイン\",\"it\":\"Spagna\",\"cn\":\"西班牙\",\"tr\":\"İspanya\"}",
        "latitude": "40.00000000",
        "longitude": "-4.00000000",
        "emoji": "🇪🇸",
        "emojiu": "U+1F1EA U+1F1F8",
        "created_at": "2018-07-21T09:11:03.000Z",
        "updated_at": "2023-08-09T21:23:19.000Z",
        "flag": true,
        "wikidataid": "Q29"
    },
    "links": [],
    "heritageContent": []
  },
  {
    "id": 373,
    "name": "Parque de San Luis",
    "date": "2021-01-22T00:00:00.000Z",
    "country_id": 207,
    "state_id": 1175,
    "city_id": 33045,
    "organization": "Vera Ruiz - Tourist Info Buñol",
    "ownership": "81",
    "periodicity": "",
    "email": "vera8827@hotmail.com",
    "image_copyright": "Arancha Bonillo",
    "sound_of_heritage": null,
    "image": "[\"fb4a0705cc4cfaee7f764f6fef10234d7cda71391611395025.jpg\"]",
    "short_heritage_description": "\nIt is a park with a intimate festive tradition in Buñol.",
    "extended_heritage_description": "San Luis  is an urban park located at the western end of the town, between the Cuco road and viewpoint and the Buñol river. It is a park with a deep festive tradition in Buñol, as it hosts a lot of events of cultural, social and recreational significance. In a leisurely and refreshing walk through the park, you can see the San Luís Beltrán Hermitage of Neo-Gothic style, remodeled in 1896. Next to it you can admire the waters that emanate from the spring, which is very close to the fountain of San Luis which has four water pipes flowing from the limestone wall. Taking advantage of the rocky headland in the Cuco area, an open-air Municipal Auditorium was built in the second half of the 20th century, where the town's musical concerts are held.",
    "short_local_heritage_description": "Se trata de un parque de profunda tradición festiva de Buñol.",
    "extended_local_heritage_description": "El paseo de San Luís es un parque urbano situado en el extremo oeste del municipio entre la carretera y mirador del Cuco y el río Buñol. En él se suceden multitud de actos y eventos de relevancia cultural, social y lúdica. En un pausado y refrescante paseo por el parque podemos ver la Ermita de San Luís Beltrán de estilo neogótico remodelada en 1896. Junto a ella podemos admirar las aguas surgentes del manantial muy cerca también de la fuente de San Luís con 4 generosos caños de agua que manan de la pared de toba caliza. Aprovechando el farallón rocoso de la zona del Cuco se construyó en la segunda mitad del S. XX un Auditorio Municipal al aire libre donde se celebran los conciertos musicales del municipio. En el recinto podemos detenernos para relajarnos y disfrutar de las terrazas y restaurantes que nos ofrecen platos típicos de la comarca",
    "tags": [
        117,
        117,
        120
    ],
    "subtype": "0",
    "documentation": "",
    "is_museum": false,
    "is_protected": false,
    "is_verified": true,
    "protected_values": {},
    "latitude": 39.41911694842999,
    "longitude": -0.7975577545532286,
    "heritage_field_id": 4,
    "created_at": "2021-01-22T00:00:00.000Z",
    "updated_at": "2024-09-25T08:56:36.794Z",
    "deleted_at": null,
    "heritageField": null,
    "city": {
        "id": 33045,
        "name": "Buñol",
        "state_id": 1175,
        "state_code": "V",
        "country_id": 207,
        "country_code": "ES",
        "latitude": "39.41667000",
        "longitude": "-0.78333000",
        "created_at": "2019-10-06T00:15:38.000Z",
        "updated_at": "2022-08-29T13:35:40.000Z",
        "flag": true,
        "wikidataid": "Q853762"
    },
    "country": {
        "id": 207,
        "name": "Spain",
        "iso3": "ESP",
        "numeric_code": "724",
        "iso2": "ES",
        "phonecode": "34",
        "capital": "Madrid",
        "currency": "EUR",
        "currency_name": "Euro",
        "currency_symbol": "€",
        "tld": ".es",
        "native": "España",
        "region": "Europe",
        "region_id": 4,
        "subregion": "Southern Europe",
        "subregion_id": 16,
        "nationality": "Spanish",
        "timezones": "[{\"zoneName\":\"Africa/Ceuta\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"},{\"zoneName\":\"Atlantic/Canary\",\"gmtOffset\":0,\"gmtOffsetName\":\"UTC±00\",\"abbreviation\":\"WET\",\"tzName\":\"Western European Time\"},{\"zoneName\":\"Europe/Madrid\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"}]",
        "translations": "{\"kr\":\"스페인\",\"pt-BR\":\"Espanha\",\"pt\":\"Espanha\",\"nl\":\"Spanje\",\"hr\":\"Španjolska\",\"fa\":\"اسپانیا\",\"de\":\"Spanien\",\"es\":\"España\",\"fr\":\"Espagne\",\"ja\":\"スペイン\",\"it\":\"Spagna\",\"cn\":\"西班牙\",\"tr\":\"İspanya\"}",
        "latitude": "40.00000000",
        "longitude": "-4.00000000",
        "emoji": "🇪🇸",
        "emojiu": "U+1F1EA U+1F1F8",
        "created_at": "2018-07-21T09:11:03.000Z",
        "updated_at": "2023-08-09T21:23:19.000Z",
        "flag": true,
        "wikidataid": "Q29"
    },
    "links": [],
    "heritageContent": []
  },
  {
    "id": 1340,
    "name": "Castillo de Buñol",
    "date": "2022-09-22T00:00:00.000Z",
    "country_id": 207,
    "state_id": 1175,
    "city_id": 33045,
    "organization": "O-CITY Official",
    "ownership": "350",
    "periodicity": "",
    "email": "o-city@epsg.upv.es",
    "image_copyright": "Tu Comarca",
    "sound_of_heritage": null,
    "image": "[\"c571707bb33423bac20f11f00d779deaf44db6001663932814.jfif\"]",
    "short_heritage_description": "The castle of Buñol (11th-13th c.) in the province of Valencia is a Christian fortress located in the centre of the town, in the highest part of the town, on two rocky massifs where there was an earlier Islamic settlement.",
    "extended_heritage_description": "Buñol Castle, built on two masses of rock, dominates the city of Buñol and the surrounding area known as La Hoya de Buñol. Its strategic importance is based on its proximity to the border between Valencia and Castilla. The origins of the castle date back to the 11th century. Later it would be expanded and modified in Christian times. The structure of the current architectural complex was built in different phases between the 14th and 19th centuries. Restoration works on the fortress began in the second half of the 20th century and continue today.  Jaime I conquered the castle in 1238 and handed over the lordship to Rodrigo de Linaza. After several owners, in 1425, the fortress was finally acquired by the Berenguer Mercader family, when the area became a county. After the expulsion of the Moors in 1609, the county suffered a great depopulation, which forced the count to repopulate the area with people coming mostly from the Kingdom of Valencia, but also from Castile, Mallorca and Navarre with the obligation to live in the Ville. The emancipation of the county domain caused the castle to lose its residential character and after the Carlist conflicts and a frustrated project to convert some of the chambers into a hospital, at the end of the 19th century people began to occupy it, building their houses inside the enclosure. .  Of Muslim origin, its functions have been varied: castle, manor house, barracks, jail, administrative center, popular neighborhood and now a tourist attraction. Located in the urban area between the Buñol river and a gorge called Borrunes, and separated by two artificial moats linked by bridges defended by towers that also function as gates. It is divided into two different enclosures, linked by a bridge that bridges the gap between the two mounds.  The first enclosure is a polygon, formed by a straight wall, its angles flanked by two towers and a central tower built to defend the entrance gate. Here is the Plaza de Armas (military courtyard), where the visitor will find a surveillance path that runs along the upper wall complete with loopholes to shoot arrows. This area, today, still contains a number of houses built against the original wall. In the center of the castle we find a tower known as the Torre del Homenaje that serves as a passage to the second enclosure of the castle (south enclosure).  The southern enclosure houses the residential structures of the fortress. A part of the Gothic palace has been preserved - the room known as El Oscurico, where exhibitions and cultural events are held - which still contains the original ashlar arches inside. The old palace of the counts -La Casa Señorial- is the structure of the south façade. Inside we can currently find the Tourist Office and the Archaeological Collection along with the Muslim remains of a waterwheel well and a grain silo. The church of El Salvador today houses an ethnological exhibition. It was probably built between the second half of the 13th century and the first half of the 14th century. It is a nave with a semicircular vault, lunettes and two transversal arches that divide it into three sections. In this area there are also some inhabited houses. Calle del Castillo ends at a steep slope that gives access to the old part of the city -Calle de los Mallorquines- after crossing the fortified gate called La Torreta. This access is made up of a staircase on a bent axis and a tower located on the lowest level of the castle enclosure.  In 1957 the Buñol Pro-Castillo Association was created and the need to recover and restore the monument as a vestige of historical and strategic importance was raised. In 1964 it was declared a National Historic-Artistic Monument. Today it is the center of the urban nucleus that has been growing around it.",
    "short_local_heritage_description": "El castillo de Buñol (s. XI - XII) en la provincia de Valencia es una fortaleza cristiana que se sitúa en el centro de la población, en su parte más elevada, sobre dos macizos rocosos en los que hubo un asentamiento islámico anterior. ",
    "extended_local_heritage_description": " El Castillo de Buñol, construido sobre dos moles de roca, domina la ciudad de Buñol y el área circundante conocida como La Hoya de Buñol. Su importancia estratégica se basa en su proximidad a la frontera entre Valencia y Castilla. Los orígenes del castillo se remontan al siglo XI. Posteriormente sería ampliado y modificado en época cristiana. La estructura del actual conjunto arquitectónico se construyó en diferentes fases entre los siglos XIV y XIX. Las obras de restauración de la fortaleza comenzaron durante la segunda mitad del siglo XX y continúan en la actualidad.  Jaime I conquistó el castillo en 1238 y entregó el señorío a Rodrigo de Linaza. Tras varios propietarios, en 1425, la fortaleza fue finalmente adquirida por la familia Berenguer Mercader, cuando la zona se convirtió en condado.   Tras la expulsión de los moriscos en 1609, el condado sufrió una gran despoblación, lo que obligó al conde a repoblar la zona con gentes procedentes en su mayoría del Reino de Valencia, pero también de Castilla, Mallorca y Navarra con la obligación de vivir en la villa. La emancipación del dominio condal hizo que el castillo perdiera su carácter residencial y tras los conflictos carlistas y un proyecto frustrado de reconversión de algunas de las cámaras en hospital, a finales del siglo XIX la gente comenzó a ocuparlo construyendo sus casas en el interior del recinto.  De origen musulmán, sus funciones han sido variadas: castillo, casa solariega, cuartel, cárcel, centro administrativo, barrio popular y ahora atracción turística Situado en el casco urbano entre el río Buñol y un desfiladero llamado Borrunes, y separado por dos fosos artificiales unidos por puentes defendidos por torres que también funcionan como puertas.  Está dividido en dos recintos diferenciados, unidos por un puente que salva la diferencia entre ambos montículos.  El primer recinto es un polígono, formado por una muralla recta, sus ángulos flanqueados por dos torres y una torre central construida para defender la puerta de entrada.  Aquí se encuentra la Plaza de Armas (patio militar), donde el visitante encontrará un camino de vigilancia que recorre la muralla superior completado con aspilleras para disparar flechas. Esta zona, hoy en día, todavía contiene un número de casas construidas contra la muralla original. En el centro del castillo encontramos una torre conocida como Torre del Homenaje que sirve de paso al segundo recinto del castillo (recinto sur).    El recinto sur alberga las estructuras residenciales de la fortaleza. Se conserva una parte del palacio gótico -el salón conocido como El Oscurico, donde se celebran exposiciones y actos culturales- que todavía contiene en su interior los arcos originales de sillería. El antiguo palacio de los condes -La Casa Señorial- es la estructura de la fachada sur. En su interior podemos encontrar actualmente la Oficina de Turismo y la Colección Arqueológica junto con los restos musulmanes de un pozo de noria y un silo de cereal. La iglesia de El Salvador alberga hoy una exposición etnológica. Probablemente fue construida entre la segunda mitad del siglo XIII y la primera del XIV. Es una nave con bóveda de medio punto, lunetos y dos arcos transversales que la dividen en tres tramos. En esta zona también hay algunas casas habitadas. La calle del Castillo desemboca en una empinada cuesta que da acceso al casco antiguo de la ciudad -calle de los Mallorquines- tras cruzar la puerta fortificada llamada La Torreta. Este acceso se compone de una escalera sobre un eje acodado y una torre situada en el nivel más bajo del recinto del castillo.  En 1957 se creó la Asociación Pro-Castillo de Buñol y se planteó la necesidad de recuperar y restaurar el monumento como vestigio de importancia histórica y estratégica. En 1964 fue declarado Monumento Histórico-Artístico Nacional. Hoy es el centro del núcleo urbano que ha ido creciendo a su alrededor.",
    "tags": [],
    "subtype": "87",
    "documentation": "",
    "is_museum": false,
    "is_protected": true,
    "is_verified": true,
    "protected_values": {},
    "latitude": 39.41964739500122,
    "longitude": -0.7906430197128356,
    "heritage_field_id": 1,
    "created_at": "2022-09-22T00:00:00.000Z",
    "updated_at": "2024-09-13T18:45:59.576Z",
    "deleted_at": null,
    "heritageField": {
        "id": 1,
        "name": "Cultural"
    },
    "city": {
        "id": 33045,
        "name": "Buñol",
        "state_id": 1175,
        "state_code": "V",
        "country_id": 207,
        "country_code": "ES",
        "latitude": "39.41667000",
        "longitude": "-0.78333000",
        "created_at": "2019-10-06T00:15:38.000Z",
        "updated_at": "2022-08-29T13:35:40.000Z",
        "flag": true,
        "wikidataid": "Q853762"
    },
    "country": {
        "id": 207,
        "name": "Spain",
        "iso3": "ESP",
        "numeric_code": "724",
        "iso2": "ES",
        "phonecode": "34",
        "capital": "Madrid",
        "currency": "EUR",
        "currency_name": "Euro",
        "currency_symbol": "€",
        "tld": ".es",
        "native": "España",
        "region": "Europe",
        "region_id": 4,
        "subregion": "Southern Europe",
        "subregion_id": 16,
        "nationality": "Spanish",
        "timezones": "[{\"zoneName\":\"Africa/Ceuta\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"},{\"zoneName\":\"Atlantic/Canary\",\"gmtOffset\":0,\"gmtOffsetName\":\"UTC±00\",\"abbreviation\":\"WET\",\"tzName\":\"Western European Time\"},{\"zoneName\":\"Europe/Madrid\",\"gmtOffset\":3600,\"gmtOffsetName\":\"UTC+01:00\",\"abbreviation\":\"CET\",\"tzName\":\"Central European Time\"}]",
        "translations": "{\"kr\":\"스페인\",\"pt-BR\":\"Espanha\",\"pt\":\"Espanha\",\"nl\":\"Spanje\",\"hr\":\"Španjolska\",\"fa\":\"اسپانیا\",\"de\":\"Spanien\",\"es\":\"España\",\"fr\":\"Espagne\",\"ja\":\"スペイン\",\"it\":\"Spagna\",\"cn\":\"西班牙\",\"tr\":\"İspanya\"}",
        "latitude": "40.00000000",
        "longitude": "-4.00000000",
        "emoji": "🇪🇸",
        "emojiu": "U+1F1EA U+1F1F8",
        "created_at": "2018-07-21T09:11:03.000Z",
        "updated_at": "2023-08-09T21:23:19.000Z",
        "flag": true,
        "wikidataid": "Q29"
    },
    "links": [
        {
            "id": 1343,
            "heritage_list_id": 1340,
            "name": "Spain Heritage",
            "url": "https://www.spainheritagenetwork.com/castillos/castillo-de-bunol"
        },
        {
            "id": 1342,
            "heritage_list_id": 1340,
            "name": "Buñol Turismo",
            "url": "https://turismolahoya.xn--buol-hqa.es/castillo-de-bunol/"
        },
        {
            "id": 1344,
            "heritage_list_id": 1340,
            "name": "Turismo La Hoya",
            "url": "https://turismolahoya.xn--buol-hqa.es/castillo-de-bunol/"
        }
    ],
    "heritageContent": [
        {
            "id": 1917,
            "name": "Museo Castillo de Buñol",
            "date": "2023-02-07T00:00:00.000Z",
            "description": "En el Castillo de Buñol se encuentra el Museo del Castillo rodeado por una fortaleza medieval que tiene sus orígenes en el siglo XI-XII, fue remodelado en el siglo XIV tras la conquista cristiana y que aún hoy en día permanece lleno de vida.",
            "is_official_content": false,
            "is_verified": true,
            "allow_adaptations": "0",
            "allow_commercial": false,
            "education_level": "University",
            "education_level_grade": 0,
            "education_center": "NHL Hogeschool y KRAKOWSKA AKADEMIA IM. ANDRZEJA FRYCZA MODRZEWSKIEGO",
            "owner_user_id": 328,
            "authors_user_id": [
                346,
                343
            ],
            "teacher_user_id": [
                328
            ],
            "file": "8d65165e08a40f10cdc5c57cb86d7544d7d432091675861486.mp4",
            "content_type_id": 6,
            "heritage_id": 1340,
            "created_at": "2024-10-03T15:48:08.554Z",
            "updated_at": "2024-10-03T15:48:08.554Z",
            "deleted_at": null,
            "content_type": {
                "id": 6,
                "name": "Video"
            }
        },
        {
            "id": 2009,
            "name": "O-CITY video Castillo de Buñol - dron",
            "date": "2023-04-20T00:00:00.000Z",
            "description": "Vídeo con imágenes grabadas con dron del Castillo de Buñol (Valencia), fortaleza cristiana construida sobre un asentamiento islámico, entre los siglos XI-XII.  Video with images recorded with a drone of the Castle of Buñol (Valencia), a Christian fortress built over an Islamic settlement between the 11th and 12th centuries.",
            "is_official_content": false,
            "is_verified": true,
            "allow_adaptations": "1",
            "allow_commercial": false,
            "education_level": "",
            "education_level_grade": 0,
            "education_center": "Agencia Toda Media",
            "owner_user_id": 350,
            "authors_user_id": [
                350
            ],
            "teacher_user_id": [],
            "file": "b0ba8bc84aec8ba520c27d68e1be4c84528429b41682097279.mp4",
            "content_type_id": 6,
            "heritage_id": 1340,
            "created_at": "2024-10-03T15:48:09.331Z",
            "updated_at": "2024-10-03T15:48:09.331Z",
            "deleted_at": null,
            "content_type": {
                "id": 6,
                "name": "Video"
            }
        }
    ]
  },
]

const heritages: {
  identifier: any; name: any; latitude: any; longitude: any; image: string; addressProvince: any; // viene en city.state_code, se debería de pedir entera para tener el nombre
  addressLocality: any; addressCountry: any; type: any; description: { local: { short: any; extended: any; }; english: { short: any; extended: any; }; };
}[] = [];

heritagesRuta.forEach((heritage) => {
  heritages.push(transformHeritageObject(heritage));
})

function transformHeritageObject(obj: any) {
  // link imagen
  const IMAGE_BASE_URL = "https://o-city.com/";
  let image = "";
  try {
    const images = JSON.parse(obj.image);
    if (Array.isArray(images) && images.length > 0) {
      image = IMAGE_BASE_URL + images[0];
    }
  } catch {
    image = IMAGE_BASE_URL + obj.image;
  }

  return {
    identifier: obj.id,
    name: obj.name,
    latitude: obj.latitude,
    longitude: obj.longitude,
    image: image,
    addressProvince: obj.city?.state_code || "", // viene en city.state_code, se debería de pedir entera para tener el nombre
    addressLocality: obj.city?.name || "",
    addressCountry: obj.country?.iso2 || "",
    type: obj.heritageField?.name || "Unknown",
    description: {
      local: {
        short: obj.short_local_heritage_description?.trim() || "",
        extended: obj.extended_local_heritage_description?.trim() || ""
      },
      english: {
        short: obj.short_heritage_description?.trim() || "",
        extended: obj.extended_heritage_description?.trim() || ""
      }
    }
  };
}

console.log(myHeritageData);
console.log(heritages);


if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <TextToVideo
      heritageItems={heritages}
      targetLanguage="es"
      descriptionLength="extended"
    />
  );
}
