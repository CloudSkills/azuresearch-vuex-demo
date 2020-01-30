import mutations from "@/store/mutations";

const {
  SET_RESULTS,
  SET_FILTERS,
  SET_FACETS,
} = mutations;

const sampleData = {
  "@odata.context":
    "https://xxxx.search.windows.net/indexes('realestate-us-sample-index')/$metadata#docs(*)",
  "@odata.count": 4959,
  "@search.facets": {
    baths: [
      {
        count: 1833,
        value: 1
      },
      {
        count: 1350,
        value: 2
      },
      {
        count: 954,
        value: 3
      },
      {
        count: 616,
        value: 4
      },
      {
        count: 206,
        value: 5
      }
    ],
    beds: [
      {
        count: 1051,
        value: 1
      },
      {
        count: 994,
        value: 4
      },
      {
        count: 983,
        value: 5
      },
      {
        count: 982,
        value: 3
      },
      {
        count: 949,
        value: 2
      }
    ],
    type: [
      {
        count: 2513,
        value: "House"
      },
      {
        count: 2446,
        value: "Apartment"
      }
    ]
  },
  value: [
    {
      "@search.score": 1,
      listingId: "9384540",
      beds: 2,
      baths: 1,
      description:
        "This is a ranch style house and is a beautiful home.  This property has lake access located in a gated community and features sub-zero appliances, french doors throughout and a large laundry room.",
      description_de:
        "Dies ist ein Ranch-Stil-Haus und ist ein schönes Zuhause.  Diese Eigenschaft hat Zugang zum See Das Hotel liegt in einer gated community und Funktionen sub-Zero-Geräte, Französisch Türen im gesamten and eine große Waschküche.",
      description_fr:
        "Il s’agit d’une maison de style ranch et est une belle maison.  Cette propriété n’a accès au lac situé dans une communauté fermée et appareils caractéristiques Sub-zero, français les portes tout au long de and une grande buanderie.",
      description_it:
        "Si tratta di una casa in stile ranch è una bellissima casa.  Questa proprietà ha accesso diretto al lago Situato in una gated community ed elettrodomestici caratteristiche sub-zero, porte-finestre in tutto and una grande sala lavanderia.",
      description_es:
        "Esta es una casa de estilo rancho y es una hermosa casa.  Esta propiedad tiene acceso lago situado en una comunidad cerrada y aparatos de características sub-zero, francés puertas a lo largo de and un amplio lavadero.",
      description_pl:
        "Jest to dom styl ranczo i jest piękny dom.  Ten obiekt ma dostęp do jeziora położony w zamkniętym osiedlu i funkcje Sub-Zero urządzeń, Francuskie drzwi całym and duży pralnia.",
      description_nl:
        "Dit is een ranch stijl huis en is een mooi huis.  Deze eigenschap heeft meer toegang gelegen in een gated community en functies Sub-Zero apparaten, tuindeuren in de gehele and een grote wasruimte.",
      sqft: 1296,
      daysOnMarket: 69,
      status: "pending",
      source: "Jackson Turner Realtors",
      number: "11418",
      street: "21st Avenue Southwest",
      unit: null,
      type: "House",
      city: "Burien",
      region: "wa",
      countryCode: "us",
      postCode: "98146",
      location: {
        type: "Point",
        coordinates: [-122.36, 47.5004],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 364176,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd2bt1home.jpg",
      tags: [
        "ranch style house",
        "beautiful home",
        "lake access",
        "gated community",
        "sub-zero appliances",
        "french doors throughout",
        "large laundry room"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384541",
      beds: 1,
      baths: 1,
      description:
        "This is a bachelor apartment and is a dream home.  This property has great views located on a no outlet and features miele appliances, french doors throughout and lots of storage.",
      description_de:
        "Dies ist eine Bachelor-Wohnung und ist ein Traumhaus.  Dieses Hotel hat eine tolle Aussicht Das Hotel liegt auf einem keine Steckdose und Funktionen Miele Geräte, Französisch Türen im gesamten and viel Stauraum.",
      description_fr:
        "Il s’agit d’une Garçonnière et est une maison de rêve.  Cette propriété a une vue imprenable Situé sur une aucune prise et caractéristiques miele appareils, français les portes tout au long de and beaucoup de rangement.",
      description_it:
        "Si tratta di un appartamento di bachelor ed è una casa da sogno.  Questa proprietà ha una vista fantastica Situato su una non presa ed elettrodomestici miele caratteristiche, porte-finestre in tutto and sacco di stoccaggio.",
      description_es:
        "Este es un apartamento de soltero y es una casa de ensueño.  Esta propiedad tiene excelentes vistas situado en una sin salida y características miele electrodomésticos, francés puertas a lo largo de and montón de almacenamiento.",
      description_pl:
        "Jest to apartament licencjat i jest wymarzony dom.  Ten obiekt oferuje wspaniałe widoki na znajduje się na nie gniazda i funkcje urządzeń miele, Francuskie drzwi całym and mnóstwo miejsca do przechowywania.",
      description_nl:
        "Dit is een Bachelor in appartement en is een droomhuis.  Deze eigenschap heeft een fantastisch uitzicht gelegen op een geen stopcontact en functies miele apparaten, tuindeuren in de gehele and veel opslag.",
      sqft: 648,
      daysOnMarket: 168,
      status: "pending",
      source: "Boivin Realty",
      number: "428",
      street: "Northeast 190th Place",
      unit: "511",
      type: "Apartment",
      city: "Shoreline",
      region: "wa",
      countryCode: "us",
      postCode: "98155",
      location: {
        type: "Point",
        coordinates: [-122.325, 47.7675],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 158760,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd1bt1apt.jpg",
      tags: [
        "bachelor apartment",
        "dream home",
        "great views",
        "no outlet",
        "miele appliances",
        "french doors throughout",
        "lots of storage"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384542",
      beds: 3,
      baths: 3,
      description:
        "This is a bachelor apartment and is move-in ready.  This property has lake access located close to parks and features stainless steel appliances, a garden and two master suites.",
      description_de:
        "Dies ist eine Bachelor-Wohnung und Einzug bereit.  Diese Eigenschaft hat Zugang zum See Parks in der Nähe und Funktionen-Edelstahl-Geräte, einen Garten and zwei master-Suiten.",
      description_fr:
        "Il s’agit d’une Garçonnière et est prête à se déplacer en.  Cette propriété n’a accès au lac Situé à proximité de Parcs et les appareils d’acier inoxydable caractéristiques, un jardin and deux suites master.",
      description_it:
        "Si tratta di un appartamento di bachelor e si muovono in pronto.  Questa proprietà ha accesso diretto al lago Situato vicino ai parchi ed elettrodomestici in acciaio inox caratteristiche, un giardino and due master suite.",
      description_es:
        "Este es un apartamento de soltero y está lista para la mudanza.  Esta propiedad tiene acceso lago situado cerca de parques y electrodomésticos de acero inoxidable de características, un jardín and dos Masters suites.",
      description_pl:
        "Jest to apartament licencjat i jest gotowy do przeprowadzki.  Ten obiekt ma dostęp do jeziora usytuowany w pobliżu parków i funkcje urządzenia ze stali nierdzewnej, ogród and dwa apartamenty.",
      description_nl:
        "Dit is een Bachelor in appartement en bewegen-in klaar is.  Deze eigenschap heeft meer toegang vlakbij parken en functies roestvrijstalen apparaten, een tuin and twee master suites.",
      sqft: 5832,
      daysOnMarket: 99,
      status: "active",
      source: "Kevin Pelletier Homes",
      number: "3603",
      street: "51st Avenue Southwest",
      unit: "630",
      type: "Apartment",
      city: "Seattle",
      region: "wa",
      countryCode: "us",
      postCode: "98116",
      location: {
        type: "Point",
        coordinates: [-122.398, 47.5719],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 1586304,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd3bt3apt.jpg",
      tags: [
        "bachelor apartment",
        "move-in ready",
        "lake access",
        "parks",
        "stainless steel appliances",
        "garden",
        "two master suites"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384543",
      beds: 1,
      baths: 1,
      description:
        "This is a flat and is priced to sell.  This home provides lakefront property located close to a river and features a gas log fireplace, heated towel racks and a large walk in closet.",
      description_de:
        "Dies ist eine Wohnung und ist preislich um zu verkaufen.  Dieses Haus bietet Seeliegenschaft Das Hotel liegt in der Nähe eines Flusses und verfügt über eine Gas-log Kamin, beheizte Handtuchhalter and einen großen begehbaren Kleiderschrank.",
      description_fr:
        "Il s’agit d’un appartement un prix pour vendre.  Cette maison offre propriété au bord du lac Situé à proximité d’une rivière et dispose d’un gaz cheminée, ouvrez une session porte-serviette chauffant and une grande promenade dans le placard.",
      description_it:
        "Si tratta di un piatto ed è un prezzo di vendita.  Questa casa fornisce proprietà lungolago Situato vicino a un fiume e dispone di un gas camino, portasciugamani riscaldati and una grande cabina armadio.",
      description_es:
        "Se trata de un piso y tiene un precio para vender.  Esta casa ofrece propiedad de lago situado cerca de un río cuenta con un gas chimenea, de registro calefacción toalleros and un gran paseo en el armario.",
      description_pl:
        "Jest to płaska i jest w cenie sprzedaży.  Ten dom zapewnia lakefront Właściwość położony w pobliżu rzeki i funkcje gaz dziennika kominek, podgrzewanym wieszakiem and dużych odległości w szafie.",
      description_nl:
        "Dit is een flat zijn en wordt geprijst om te verkopen.  Dit huis biedt lakefront eigenschap vlakbij een rivier en is voorzien van een gas-log open haard, verwarmde handdoekrekken and een grote inloopkast.",
      sqft: 648,
      daysOnMarket: 150,
      status: "pending",
      source: "Morin Homes",
      number: "3432",
      street: "Belvidere Avenue Southwest",
      unit: "546",
      type: "Apartment",
      city: "Seattle",
      region: "wa",
      countryCode: "us",
      postCode: "98126",
      location: {
        type: "Point",
        coordinates: [-122.379, 47.5722],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 160704,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd1bt1apt.jpg",
      tags: [
        "flat",
        "priced to sell",
        "lakefront property",
        "river",
        "gas log fireplace",
        "heated towel racks",
        "large walk in closet"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384544",
      beds: 5,
      baths: 3,
      description:
        "This is a condo and is perfect for entertaining.  This home provides panoramic views located close to a river and features a gas log fireplace, beautiful bedroom floors and lots of storage.",
      description_de:
        "Dies ist eine Eigentumswohnung und ist perfekt für Unterhaltung.  Dieses Haus bietet einen Panoramablick auf Das Hotel liegt in der Nähe eines Flusses und verfügt über eine Gas-log Kamin, schöne Zimmer-Etagen and viel Stauraum.",
      description_fr:
        "Il s’agit d’un condo et est parfait pour se divertir.  Cette maison offre une vue panoramique Situé à proximité d’une rivière et dispose d’un gaz cheminée, ouvrez une session planchers de belle chambre and beaucoup de rangement.",
      description_it:
        "Si tratta di un condominio ed è perfetto per intrattenere.  Questa casa offre una vista panoramica Situato vicino a un fiume e dispone di un gas camino, piani di bella camera da letto and sacco di stoccaggio.",
      description_es:
        "Se trata de un condominio y es perfecto para el entretenimiento.  Esta casa ofrece vistas panorámicas situado cerca de un río cuenta con un gas chimenea, de registro pisos de dormitorio hermoso and montón de almacenamiento.",
      description_pl:
        "Jest to domek i jest idealny do zabawy.  Ten dom zapewnia panoramiczne widoki na położony w pobliżu rzeki i funkcje gaz dziennika kominek, piękna sypialnia podłogi and mnóstwo miejsca do przechowywania.",
      description_nl:
        "Dit is een condo en is perfect voor entertaining.  Dit huis biedt een panoramisch uitzicht vlakbij een rivier en is voorzien van een gas-log open haard, mooie slaapkamer vloeren and veel opslag.",
      sqft: 9720,
      daysOnMarket: 144,
      status: "active",
      source: "Adam Fisher Homes",
      number: "7152",
      street: "30th Avenue Southwest",
      unit: "476",
      type: "Apartment",
      city: "Seattle",
      region: "wa",
      countryCode: "us",
      postCode: "98126",
      location: {
        type: "Point",
        coordinates: [-122.371, 47.5376],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 2050920,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd5bt3apt.jpg",
      tags: [
        "condo",
        "entertaining",
        "panoramic views",
        "river",
        "gas log fireplace",
        "beautiful bedroom floors",
        "lots of storage"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384545",
      beds: 4,
      baths: 4,
      description:
        "This is a condo and is move in condition.  This home provides lakefront property located in a dead end street and features viking appliances, wood floors and a covered front porch.",
      description_de:
        "Dies ist eine Eigentumswohnung und ist in einem Zustand zu bewegen.  Dieses Haus bietet Seeliegenschaft Das Hotel liegt in einer Sackgasse und Funktionen Viking Geräte, Holzböden and eine überdachte Veranda.",
      description_fr:
        "Il s’agit d’un condo et y se déplacer en état.  Cette maison offre propriété au bord du lac situé dans un cul-de-sac et appareils de caractéristiques de viking, planchers de bois and une véranda couverte.",
      description_it:
        "Si tratta di un condominio ed è muoversi in condizione.  Questa casa fornisce proprietà lungolago Situato in una strada senza uscita e caratteristiche elettrodomestici viking, pavimenti in legno and un portico anteriore coperto.",
      description_es:
        "Se trata de un condominio y moverse en condiciones.  Esta casa ofrece propiedad de lago situado en un callejón sin salida calle y electrodomésticos viking de características, pisos de madera and un porche cubierto.",
      description_pl:
        "Jest to domek i jest w stanie przenieść.  Ten dom zapewnia lakefront Właściwość położony w ślepy zaułek ulicy i funkcje viking urządzeń, podłogi drewniane and weranda przednie.",
      description_nl:
        "Dit is een condo en verplaatsen in conditie.  Dit huis biedt lakefront eigenschap gelegen in een doodlopende straat en functies viking apparaten, houten vloeren and een overdekte veranda.",
      sqft: 10368,
      daysOnMarket: 216,
      status: "active",
      source: "Joshua Wilson Realtors",
      number: "16418",
      street: "14th Avenue Southwest",
      unit: "546",
      type: "Apartment",
      city: "Burien",
      region: "wa",
      countryCode: "us",
      postCode: "98166",
      location: {
        type: "Point",
        coordinates: [-122.352, 47.4554],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 2156544,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd4bt4apt.jpg",
      tags: [
        "condo",
        "move in condition",
        "lakefront property",
        "dead end street",
        "viking appliances",
        "wood floors",
        "covered front porch"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384546",
      beds: 1,
      baths: 1,
      description:
        "This is a bachelor apartment and is freshly painted.  Enjoy gleaming hardwood floors located in a no through road and features a home office, a generous backyard and a large walk in closet.",
      description_de:
        "Dies ist eine Bachelor-Wohnung und ist frisch gestrichen.  Genießen Sie glänzenden Holzböden Das Hotel liegt in einer Sackgasse und verfügt über ein home-Office ein großzügiger Garten and einen großen begehbaren Kleiderschrank.",
      description_fr:
        "Il s’agit d’une Garçonnière et est fraîchement peint.  Profitez de parquet brillant situé dans un non par route et dispose d’un bureau à domicile, un jardin généreux and une grande promenade dans le placard.",
      description_it:
        "Si tratta di un appartamento di bachelor ed è dipinta di fresco.  Godere di luccicanti pavimenti Situato in un no attraverso strada e dispone di un ufficio a casa, un generoso cortile and una grande cabina armadio.",
      description_es:
        "Este es un apartamento de soltero y está recién pintado.  Disfrutar relucientes pisos de madera situado en un no a través de la carretera y cuenta con una oficina en casa, un generoso patio trasero and un gran paseo en el armario.",
      description_pl:
        "Jest to apartament licencjat i jest świeżo malowane.  Ciesz się lśniące drewniane podłogi położony w nie poprzez drogi i posiada biuro w domu, hojny podwórku and dużych odległości w szafie.",
      description_nl:
        "Dit is een Bachelor in appartement en vers is geschilderd.  Geniet van de glanzende hardhoutvloeren gelegen in een niet door weg en beschikt over een kantoor aan huis, een royale achtertuin and een grote inloopkast.",
      sqft: 648,
      daysOnMarket: 60,
      status: "active",
      source: "William Lachance Realty",
      number: "2415",
      street: "Northeast Jewell Lane",
      unit: "406",
      type: "Apartment",
      city: "Issaquah",
      region: "wa",
      countryCode: "us",
      postCode: "98029",
      location: {
        type: "Point",
        coordinates: [-121.999, 47.5459],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 167832,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd1bt1apt.jpg",
      tags: [
        "bachelor apartment",
        "freshly painted",
        "hardwood floors",
        "no through road",
        "home office",
        "generous backyard",
        "large walk in closet"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384547",
      beds: 5,
      baths: 3,
      description:
        "This is a multi-story residence and is priced to sell.  This home provides lakefront property located within walking distance of a beach and features miele appliances, french doors throughout and a wet bar.",
      description_de:
        "Dies ist ein mehrstöckiges Wohnhaus und ist preislich um zu verkaufen.  Dieses Haus bietet Seeliegenschaft Das Hotel liegt nur wenige Gehminuten vom Strand und Funktionen Miele Geräte, Französisch Türen im gesamten and eine wet-bar.",
      description_fr:
        "Il s’agit d’une résidence de plusieurs étages un prix pour vendre.  Cette maison offre propriété au bord du lac Situé à proximité d’une plage et caractéristiques miele appareils, français les portes tout au long de and un wet-bar.",
      description_it:
        "Si tratta di un residence di multi-storia ed è un prezzo di vendita.  Questa casa fornisce proprietà lungolago Situato a poca distanza da una spiaggia ed elettrodomestici miele caratteristiche, porte-finestre in tutto and un wet bar.",
      description_es:
        "Se trata de una residencia de varios pisos y tiene un precio para vender.  Esta casa ofrece propiedad de lago situado a poca distancia de una playa y características miele electrodomésticos, francés puertas a lo largo de and una zona de bar.",
      description_pl:
        "Jest to historia wielu pobytu i jest w cenie sprzedaży.  Ten dom zapewnia lakefront Właściwość położony w odległości spaceru od plaży i funkcje urządzeń miele, Francuskie drzwi całym and barek.",
      description_nl:
        "Dit is een multi verhaal residentie zijn en wordt geprijst om te verkopen.  Dit huis biedt lakefront eigenschap gelegen op loopafstand van het strand en functies miele apparaten, tuindeuren in de gehele and een natte bar.",
      sqft: 9720,
      daysOnMarket: 42,
      status: "sold",
      source: "Timothy Wright Homes",
      number: "560",
      street: "Wilderness Peak Drive Northwest",
      unit: null,
      type: "House",
      city: "Issaquah",
      region: "wa",
      countryCode: "us",
      postCode: "98027",
      location: {
        type: "Point",
        coordinates: [-122.067, 47.5367],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 2371680,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd5bt3home.jpg",
      tags: [
        "multi-story residence",
        "priced to sell",
        "lakefront property",
        "walking distance of beach",
        "miele appliances",
        "french doors throughout",
        "wet bar"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384548",
      beds: 3,
      baths: 3,
      description:
        "This is a semi-detached house and is a great starter home.  This home provides lakefront property located close to parks and features miele appliances, a garden and a covered front porch.",
      description_de:
        "Dies ist eine Doppelhaushälfte und ist ein guter Einstieg nach Hause.  Dieses Haus bietet Seeliegenschaft Parks in der Nähe und Funktionen Miele Geräte, einen Garten and eine überdachte Veranda.",
      description_fr:
        "Il s’agit d’une maison jumelée et est une grande première maison.  Cette maison offre propriété au bord du lac Situé à proximité de Parcs et caractéristiques miele appareils, un jardin and une véranda couverte.",
      description_it:
        "Si tratta di una casa bifamiliare è una grande casa di avviamento.  Questa casa fornisce proprietà lungolago Situato vicino ai parchi ed elettrodomestici miele caratteristiche, un giardino and un portico anteriore coperto.",
      description_es:
        "Esta es una casa adosada y es un gran motor de arranque casa.  Esta casa ofrece propiedad de lago situado cerca de parques y características miele electrodomésticos, un jardín and un porche cubierto.",
      description_pl:
        "Jest to dom-bliźniak i jest wielkim starter do domu.  Ten dom zapewnia lakefront Właściwość usytuowany w pobliżu parków i funkcje urządzeń miele, ogród and weranda przednie.",
      description_nl:
        "Dit is een semi-vrijstaande woning en is een groot voorgerecht thuis.  Dit huis biedt lakefront eigenschap vlakbij parken en functies miele apparaten, een tuin and een overdekte veranda.",
      sqft: 5832,
      daysOnMarket: 132,
      status: "active",
      source: "Morgan Homes",
      number: "3231",
      street: "Northeast 25th Street",
      unit: null,
      type: "House",
      city: "Renton",
      region: "wa",
      countryCode: "us",
      postCode: "98056",
      location: {
        type: "Point",
        coordinates: [-122.176, 47.5134],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 1300536,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd3bt3home.jpg",
      tags: [
        "semi-detached house",
        "great starter home",
        "lakefront property",
        "parks",
        "miele appliances",
        "garden",
        "covered front porch"
      ]
    },
    {
      "@search.score": 1,
      listingId: "9384549",
      beds: 2,
      baths: 2,
      description:
        "This is a multi-storey house and is perfect for entertaining.  Enjoy lake front property located within walking distance of a beach and features an attached garage, crown mouldings and vaulted ceilings.",
      description_de:
        "Dies ist ein mehrstöckiges Haus und ist perfekt für Unterhaltung.  Genießen Sie See Immobilien Das Hotel liegt nur wenige Gehminuten vom Strand und verfügt über eine angebaute Garage Krone Formteile and Gewölbedecken.",
      description_fr:
        "Il s’agit d’une maison à plusieurs étages et est parfait pour se divertir.  Profitez de cette propriété front de lac Situé à proximité d’une plage et dispose d’un garage attenant, moulures and plafonds voûtés.",
      description_it:
        "Si tratta di una casa a più piani ed è perfetto per intrattenere.  Godere di proprietà fronte lago Situato a poca distanza da una spiaggia e dispone di un garage collegato, modanature corona and soffitti a volta.",
      description_es:
        "Esta es una casa de varios pisos y es perfecto para el entretenimiento.  Disfrute de propiedad frente lago situado a poca distancia de una playa y cuenta con un garaje adjunto, moldeados de corona and techos abovedados.",
      description_pl:
        "Jest to dom wielopoziomowy i jest idealny do zabawy.  Ciesz się lake front Właściwość położony w odległości spaceru od plaży i posiada garaż, sztukaterie and sklepienie.",
      description_nl:
        "Dit is een huis met meerdere verdiepingen en is perfect voor entertaining.  Geniet van lake eigendom gelegen op loopafstand van het strand en beschikt over een aangebouwde garage, kroon lijstwerk and gewelfde plafonds.",
      sqft: 2592,
      daysOnMarket: 162,
      status: "sold",
      source: "Justin Boucher Realtors",
      number: "1835",
      street: "Southeast 8th Place",
      unit: null,
      type: "House",
      city: "Renton",
      region: "wa",
      countryCode: "us",
      postCode: "98057",
      location: {
        type: "Point",
        coordinates: [-122.194, 47.4735],
        crs: {
          type: "name",
          properties: {
            name: "EPSG:4326"
          }
        }
      },
      price: 552096,
      thumbnail:
        "https://searchdatasets.blob.core.windows.net/images/bd2bt2home.jpg",
      tags: [
        "multi-storey house",
        "entertaining",
        "lake front property",
        "walking distance of beach",
        "attached garage",
        "crown mouldings",
        "vaulted ceilings"
      ]
    }
  ]
};

describe('mutations', () => {
  it("SET_RESULTS", () => {
    const state = {
      results: []
    };

    SET_RESULTS(state, sampleData.value);

    expect(state.results.length).toEqual(sampleData.value.length);
    expect(state.results).toContain(sampleData.value[0]);
  });

  it("SET_FACETS", () => {
    const state = {
      facets: []
    };

    SET_FACETS(state, sampleData["@search.facets"]);

    const expected = Object.getOwnPropertyNames(sampleData["@search.facets"]);
    const result = Object.getOwnPropertyNames(state.facets);

    expect(result).toEqual(expected);
  });

  it.each`
  description                 | initialState                    |     selected                                  |     expected
  ${'initial selection'}      | ${{}}                           | ${{facet: "beds", selected: [2]}}             | ${'(beds eq 2)'}, 
  ${'add to existing'}        | ${{beds: [2]}}                  | ${{facet: "beds", selected: [2, 3]}}          | ${'(beds eq 2 or beds eq 3)'}
  ${'remove from existing'}   | ${{beds: [2, 3]}}               | ${{facet: "beds", selected: [2]}}             | ${'(beds eq 2)'}
  ${'remove facet'}           | ${{beds: [2, 3], baths: [1]}}   | ${{facet: "beds", selected: null}}            | ${'(baths eq 1)'}
  ${'clear all'}              | ${{beds: [2, 3]}}               | ${{facet: "beds", selected: null}}            | ${''}}
  `('SET_FILTER - $description', ({initialState, selected, expected}) => {
  const state = {
    filters: initialState
  };

  SET_FILTERS(state, selected);

  expect(state.filterString).toEqual(expected);
  })
})