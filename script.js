fetch('/templates/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;
  });

fetch('/templates/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('container-footer').innerHTML = data;
  });
fetch('form-container')
  .then(response => response.text())
  .then(data => {
    document.getElementById('contato').innerHTML = data;
  });

const parceiros = [
  {
    id: 1,
    imagem: "/assets/4You-logo.jpg",
    nome: "4YOU",
    descricao: "4YOU verbindet langlebige Qualität mit makelloser Ästhetik, um Ihr Badezimmer in einen wahren Wohlfühlraum zu verwandeln. Mehr als nur ein Raum wird es Teil einer offenen und einladenden Umgebung, perfekt für Momente der Entspannung oder Erneuerung. Mit einer Vielzahl von Designs, Funktionen und Oberflächen bietet 4YOU Optionen von praktisch bis anspruchsvoll, sodass Sie jedes Detail personalisieren und einen einzigartigen Raum schaffen können, der Ihre Persönlichkeit widerspiegelt und täglich Komfort bietet."

  },
  {
    id: 2,
    imagem: "/assets/bemm-logo.jpg",
    nome: "BEMM",
    descricao: "Seit 1979 liefert BEMM innovative Heizlösungen für Badezimmer und Wohnräume und verbindet dabei Design, Effizienz und Qualität. Spezialisiert auf Heizkörper für Wärmepumpen und Niedertemperatursysteme sorgt das Unternehmen für Komfort und nachhaltige Leistung in Neubauten, Renovierungen und gewerblichen Anwendungen."
  },
  {
    id: 3,
    imagem: "/assets/bette-logo.jpg",
    nome: "BETTE",
    descricao: "Das deutsche Familienunternehmen Bette spezialisiert sich auf Badelemente aus emailliertem Titanstahl, darunter Badewannen, Duschflächen, Duschwannen und Waschbecken. Wir sind Ihr vertrauensvoller Bette-Partner in Mülheim an der Ruhr und Umgebung und bieten Qualität, Langlebigkeit und anspruchsvolles Design."

  },
  {
    id: 4,
    imagem: "/assets/bosch-logo.jpg",
    nome: "BOSCH",
    descricao: "Bosch ist ein Maßstab für Spitzentechnologie, intelligente Heizlösungen und höchste Qualität. Seit über 100 Jahren sorgt das Unternehmen für warme und komfortable Häuser mit zuverlässigen, benutzerfreundlichen und nachhaltigen Geräten. Bosch engagiert sich für die Energiewende, unterstützt Klimaziele und fördert umweltfreundliche Projekte für eine grünere Zukunft in Deutschland."

  },
  {
    id: 5,
    imagem: "/assets/burgbad-logo.jpg",
    nome: "burgbad",
    descricao: "Badezimmermöbel in ihrer elegantesten Form. Auf der Suche nach Inspiration für Ihr Traumbadezimmer? Wir sind Ihr spezialisierter burgbad-Partner in Mülheim an der Ruhr. Mit der großen Auswahl an Waschtischen und Möbeln von burgbad finden Sie genau das Richtige, um einen einzigartigen, persönlichen Raum zu gestalten. Unabhängig von der Größe Ihres Badezimmers bietet burgbad maßgefertigte Möbel, die auf Ihre Wünsche zugeschnitten sind."

  },
  {
    id: 6,
    imagem: "/assets/daikin-logo.jpg",
    nome: "DAIKIN",
    descricao: "Mit modernster Technologie liefert Daikin seit über 90 Jahren Komfort und Bequemlichkeit in Heizung und Kühlung. Als weltweit führender Anbieter von Klimaanlagen und meistverkaufte Marke für Wärmepumpen in Europa setzt das Unternehmen auf Nachhaltigkeit ohne Kompromisse bei der Qualität. Energieeffizienz, alternative Kältemittel und umweltfreundliche Produktionsprozesse stehen im Mittelpunkt der Strategie, mit klarem Fokus auf langfristigen Klimaschutz. Schaffen Sie Ihr ideales Raumklima und sparen Sie Energie und Geld mit Daikins effizienten Lösungen."

  },
  {
    id: 7,
    imagem: "/assets/duravit-logo.jpg",
    nome: "Duravit",
    descricao: "Gegründet 1817 in Hornberg im Schwarzwald, ist Duravit AG heute einer der führenden internationalen Hersteller von Designerbädern. In über 130 Ländern vertreten, zeichnet sich das Unternehmen durch originelles Design, komfortsteigernde Technologie und höchste Qualität aus. In Zusammenarbeit mit renommierten Designern wie Philippe Starck, EOOS, Phoenix Design, Sieger Design, Kurt Merki Jr., Christian Werner, Matteo Thun und Cecilie Manz schafft Duravit exklusive Bäder, die die Lebensqualität nachhaltig verbessern."

  },
  {
    id: 8,
    imagem: "/assets/geberit-logo.jpg",
    nome: "Geberit",
    descricao: "Die Geberit Gruppe, europäischer Marktführer für Sanitärprodukte, ist weltweit tätig und in den meisten europäischen Ländern stark vertreten. Sie liefert hochwertige Lösungen in der Sanitärtechnik und Keramik für Badezimmer. Mit 26 Produktionsstätten, darunter vier im Ausland, und Hauptsitz in Rapperswil-Jona, Schweiz, beschäftigt das Unternehmen rund 12.000 Mitarbeiter in 50 Ländern. Im Jahr 2021 erzielte Geberit einen Nettoumsatz von 3,5 Milliarden CHF. Die Geberit-Aktien sind an der SIX Swiss Exchange notiert und seit 2012 Teil des SMI (Swiss Market Index)."

  },
  {
    id: 9,
    imagem: "/assets/grohe-logo.jpg",
    nome: "GROHE",
    descricao: "Mühelose, harmonische Badgestaltung: GROHE Cubeo und die neue Euro Ceramic bilden die perfekte Kombination. Das Duschsystem Rainshower Aqua Pure verwandelt Ihr Badezimmer in eine wahre Oase und bietet umfassende Individualisierungsmöglichkeiten und Stil. Maßgeschneiderter Luxus: Die Armaturen-Kollektion GROHE Allure Gravity definiert Individualität und exklusives Design neu."

  },
  {
    id: 10,
    imagem: "/assets/grundfos-logo.jpg",
    nome: "GRUNDFOS",
    descricao: "GRUNDFOS bietet einige der effizientesten Pumpen der Welt und sorgt für Komfort und Nachhaltigkeit in Wohnräumen. Das Unternehmen entwickelt Lösungen für Heizung, HLK, Warmwasser, Drucksysteme, Entwässerung und Abwasser. Mit über 19.000 Mitarbeitern produziert und vermarktet es jährlich Millionen von Pumpen und verbindet Innovation, Verantwortung und Umweltbewusstsein."

  },
  {
    id: 11,
    imagem: "/assets/hansa-logo.jpg",
    nome: "HANSA",
    descricao: "Die Hansa Armaturen GmbH ist spezialisiert auf innovative, hochwertige Sanitärarmaturen für Badezimmer und Küchen. Mit Sitz in Stuttgart blickt das Unternehmen auf eine über hundertjährige Tradition und höchste Qualität zurück. Die Produkte verbinden Funktionalität, Langlebigkeit und exklusives Design und erfüllen die Ansprüche von Kunden, die Exzellenz in jedem Detail suchen. Hansa setzt weiterhin auf Innovation und bietet moderne Lösungen, die Technik, Komfort und Ästhetik vereinen."
  },
  {
    id: 12,
    imagem: "/assets/kaldewei-logo.jpg",
    nome: "KALDEWEI",
    descricao: "KALDEWEI ist ein deutsches Familienunternehmen mit über 100 Jahren Tradition in Badlösungen, das modernen Luxus mit Nachhaltigkeit kombiniert. Das Portfolio umfasst Badewannen, Duschflächen und Waschbecken aus hochwertigem Stahl-Emaille und bietet elegantes Design, Langlebigkeit und 100 % Kreislauffähigkeit. 2021 wurde die KALDEWEI Limited Edition Nature Protect aus CO₂-armen Stahl eingeführt, um den CO₂-Fußabdruck zu reduzieren. Das Unternehmen unterstützt zudem das WWF Marine Conservation Program und engagiert sich für Umwelt und kommende Generationen."

  },
  {
    id: 13,
    imagem: "/assets/laufen-logo.jpg",
    nome: "LAUFEN",
    descricao: "Seit 1892 schafft der Schweizer Hersteller LAUFEN Badezimmerwelten, die Körper und Seele nähren. Mit langer Tradition in hochwertigem Handwerk fördert das Unternehmen eine ganzheitliche Badkultur, die auf Nachhaltigkeit, exzellentes Design, Innovation und Technik setzt. Das Badezimmer wird als Lebensraum betrachtet, mit umfassenden Lösungen wie Keramik, Armaturen, Badewannen, Duschwannen, Möbeln, Spiegeln und Installationssystemen, alle mit innovativer, einzigartiger und ansprechender Ästhetik."

  },
  {
    id: 14,
    imagem: "/assets/maico-logo.jpg",
    nome: "MAICO",
    descricao: "MAICO bietet ein breites Spektrum hochwertiger Lüftungslösungen für unterschiedliche Anwendungen. Als Spezialist für moderne Lösungen reicht das Angebot von kleinen Wohnbad-Lüftern bis hin zu komplexen Systemen für mehrstöckige Gebäude. Zudem werden kontrollierte Lüftung mit Wärmerückgewinnung, industrielle Lösungen, explosionsgeschützte Ventilatoren und neue Luftfiltergeräte zur Entfernung von Viren und Bakterien in öffentlichen Räumen angeboten. MAICO liefert für jede Anforderung eine professionelle Lösung."

  },
  {
    id: 15,
    imagem: "/assets/novelan-logo.jpg",
    nome: "NOVELAN",
    descricao: "Die Mission von NOVELAN ist es, den Zugang zu Wärmepumpen nachhaltig, einfach und effizient zu gestalten und eine klare Produktpalette sowie Systeme bereitzustellen, die auf die Bedürfnisse jedes Projekts zugeschnitten sind. Das Unternehmen legt Wert auf Effizienz in jeder Phase – von der Auswahl der passenden Lösung über schnelle Lieferung bis hin zur praktischen Installation und intuitiven Nutzung. So bietet NOVELAN Komfort, Energieeinsparung und verlässliche Lösungen für seine Kunden."
  }
];

function openModel(id) {
  const parceiro = parceiros.find(p => p.id === id);

  if (parceiro) {
    document.getElementById('model-title').innerText = parceiro.nome;
    document.getElementById('model-description').innerText = parceiro.descricao;
    document.getElementById('model-image').src = parceiro.imagem;
    document.getElementById('overlay').style.display = 'flex';
  }
}

function closeModel() {
  document.getElementById('overlay').style.display = 'none';
}



function openServicePage(id) {
  const panel = document.getElementById("service-panel");
  const image = document.getElementById("details-service-image");
  const title = document.getElementById("details-service-title");
  const subtitle = document.getElementById("details-service-subtitle");
  const description = document.getElementById("details-service-description");


  const services = {
    1: {
      title: "Klimaanlagen",
      subtitle: "Kühlung und Klimasteuerung",
      description: "Der Komfort in Ihren Wohn- oder Arbeitsräumen hängt stark vom Raumklima ab, wobei Temperatur und Luftfeuchtigkeit eine wesentliche Rolle spielen. Die Wahl des richtigen Klimasystems gewährleistet nicht nur eine angenehme Umgebung, sondern auch Effizienz und langfristige Zuverlässigkeit. Unser Team bietet Ihnen eine fachkundige Beratung, um die am besten geeignete Lösung für Sie zu finden. Anschließend folgt die professionelle Installation, die auf Ihre speziellen Bedürfnisse zugeschnitten ist. Über die Installation hinaus bieten wir auch eine umfassende Wartung und Service an, damit Ihr System Jahr für Jahr seine beste Leistung erbringt. Ob für Privathäuser, Gewerbeobjekte oder öffentliche Einrichtungen, unsere Expertise in fortschrittlicher Klimaanlagentechnik garantiert ein optimales Raumklima, das Komfort, Effizienz und Innovation vereint.",
      image: "/assets/servicesIMG/AirconditioningIMG.jpg"
    },
    2: {
      title: "Bau und Modernisierung von Heizungsanlagen",
      subtitle: "Effiziente und zuverlässige Heizungslösungen",
      description: "Wir sind anerkannte professionelle Installateure von Heizungssystemen und liefern Lösungen, die technische Präzision, Zuverlässigkeit und außergewöhnlichen Service vereinen. Neben vertrauenswürdiger und kompetenter Beratung führen wir jedes Projekt mit Professionalität und einem tiefen Verständnis für Ihre individuellen Bedürfnisse durch. Von der Begleitung bei der Auswahl des am besten geeigneten Heizsystems für Ihr Gebäude bis hin zur Präsentation und Installation kompletter, auf Ihre Anforderungen zugeschnittener Lösungen, liegt unser Fokus stets auf Komfort, Effizienz und langfristigem Wert. Unsere Expertise deckt das gesamte Spektrum der Heizungsdienstleistungen ab, einschließlich Fußbodenheizung, fortschrittlicher Heizsysteme, hydraulischem Abgleich und modernem Kesselaustausch, sowie der Integration von Öfen und Kaminen für Funktionalität und Atmosphäre. Zusätzlich zur Planung und Installation bieten wir auch umfassende Wartungs- und Reparaturdienste an, um die Zuverlässigkeit und Leistung Ihres Systems über die Zeit zu gewährleisten. Ob für private Wohnsitze oder gewerbliche und öffentliche Einrichtungen, unser Team hat sich zum Ziel gesetzt, Heizungslösungen zu liefern, die Innovation, Langlebigkeit und Premium-Qualität vereinen.",
      image: "/assets/servicesIMG/heatingIMG.jpg"
    },
    3: {
      title: "Erneuerbare Energien",
      subtitle: "Innovative und nachhaltige Energiesysteme",
      description: "Für diejenigen, die eine umfassende, klare und fachkundige Beratung zur Nutzung erneuerbarer Energien suchen, bieten wir maßgeschneiderte Beratung und professionelle Umsetzung, die auf Ihre individuellen Bedürfnisse zugeschnitten ist. Unser Team nimmt sich die Zeit, die verfügbaren Optionen im Detail zu erklären und Ihnen zu helfen, zu verstehen, wie Sie die Energiekosten effektiv senken und gleichzeitig das am besten für Ihren Lebensstil und Ihre langfristigen Ziele geeignete Energiesystem wählen können. Wir unterstützen Sie auch bei der Prüfung der Anspruchsberechtigung für staatliche Förderungen, um sicherzustellen, dass Sie alle verfügbaren Vorteile beim Übergang zu nachhaltigen Lösungen nutzen können. Unsere Expertise erstreckt sich über moderne erneuerbare Energiequellen, von Wärmepumpen und Solarthermieanlagen bis hin zu Photovoltaik-Technologie, Biomasse, Holzpelletheizungen und Kraft-Wärme-Kopplungsanlagen. Neben präziser Planung und professioneller Installation können Sie sich auf uns für die laufende Wartung, den technischen Support und zuverlässige Reparaturdienste verlassen. Ob für private Haushalte, Unternehmen oder öffentliche Einrichtungen, wir sind bestrebt, Lösungen für erneuerbare Energien zu liefern, die Innovation, Effizienz und Nachhaltigkeit verbinden – um einen echten Mehrwert für Sie und die Umwelt zu schaffen.",
      image: "/assets/servicesIMG/renewableIMG.jpg"
    },
    4: {
      title: "Kontrollierte Wohnraumlüftung / Lüftungsanlagen",
      subtitle: "Gesunde Raumluft und Energieeffizienz",
      description: "Die Sicherstellung einer hochwertigen Raumluft ist entscheidend für Komfort, Gesundheit und den langfristigen Wert Ihrer Immobilie. Wir sind auf kontrollierte Wohnraumlüftung spezialisiert und bieten umfassende Lösungen, die die Luftqualität verbessern und gleichzeitig die Energieeffizienz optimieren. Unsere Dienstleistungen umfassen den gesamten Prozess, von der sorgfältigen Planung und professionellen Installation in Neubauten und bestehenden Gebäuden bis hin zur laufenden Wartung und Systemoptimierung. Wir bieten Ihnen eine fachkundige Beratung, die auf Ihre spezifischen Bedürfnisse zugeschnitten ist, um Ihnen bei der Auswahl des richtigen Systems zu helfen und dessen effizienten Betrieb das ganze Jahr über zu gewährleisten. Unser Team konzentriert sich auf die Bereitstellung von Lösungen, die nicht nur den Komfort und das Wohlbefinden verbessern, sondern auch zur Nachhaltigkeit und Langlebigkeit Ihres Gebäudes beitragen. Ob für private Wohnsitze oder gewerbliche Einrichtungen, wir sorgen dafür, dass Ihr Lüftungssystem eine sichere, saubere und komfortable Umgebung bietet, mit professioneller Unterstützung bei jedem Schritt.",
      image: "/assets/servicesIMG/controlledIMG.jpg"
    },
    5: {
      title: "Badbau und Renovierung",
      subtitle: "Exklusives und maßgeschneidertes Baddesign",
      description: "Egal, ob Sie ein komplett neues Badezimmer bauen, ein bestehendes renovieren oder ein modernes Upgrade anstreben, wir bieten einen umfassenden Service, der technische Expertise, raffiniertes Design und absolute Exklusivität vereint. Unsere Arbeit geht weit über die Sanitärinstallation hinaus: Wir gestalten moderne, maßgeschneiderte Badezimmer, die Ihren Lebensstil harmonisch widerspiegeln und sich nahtlos in Ihr Zuhause einfügen. Durch eine detaillierte Beratung begleiten wir Sie in jeder Phase – von der Planung bis zur Ausführung – und liefern transparente, personalisierte Lösungen, die Funktionalität, Komfort und zeitlose Eleganz verschmelzen. Mit unserer Expertise in neuen Badprojekten, kompletten Renovierungen, subtilen Modernisierungen und barrierefreien Designanpassungen gewährleisten wir Ergebnisse, die sowohl Praktikabilität als auch Raffinesse verkörpern. Wir sind auch auf Wellness-Bäder spezialisiert, die Ihren Raum in ein wahres privates Spa verwandeln, und bieten hochwertige Sanitärinstallationen für gewerbliche und öffentliche Einrichtungen, immer mit der gleichen Hingabe zu Detail, Langlebigkeit und Premium-Verarbeitung. Jedes Projekt wird mit Exzellenz ausgeführt, damit Ihr Badezimmer nicht nur ein funktionaler Raum, sondern ein Erlebnis von Komfort, Stil und Luxus wird.",
      image: "/assets/servicesIMG/bathroomIMG.jpg"
    },
    6: {
      title: "Trinkwasser-, Regenwasser- und Abwassertechnik",
      subtitle: "Umfassende Lösungen für das Wassermanagement",
      description: "Wasser ist die wichtigste Ressource des Lebens und bildet die Grundlage unserer täglichen Routinen und unseres Wohlbefindens. Vom Trinken und Kochen bis zum Baden, Waschen und der Nutzung von Haushaltsgeräten hängt jeder Aspekt des modernen Lebens von einem zuverlässigen Wassersystem ab. Wir sorgen dafür, dass in Ihrem Haus alles reibungslos fließt, einwandfrei funktioniert und den höchsten Standards an Sauberkeit und Effizienz entspricht. Unsere Expertise deckt das gesamte Spektrum des Wassermanagements ab, einschließlich der Installation von Trinkwassersystemen, der Gebäudeentwässerung und Abwasserlösungen, der Regenwassernutzung sowie der Wasseraufbereitung und -enthärtung. Über private Haushalte hinaus bieten wir auch maßgeschneiderte Lösungen für gewerbliche und öffentliche Einrichtungen, wobei wir stets technische Präzision mit langanhaltender Zuverlässigkeit kombinieren. Mit professioneller Planung, fachkundiger Ausführung und engagierter Wartung schaffen wir Systeme, die Sicherheit, Nachhaltigkeit und Komfort in jedem Tropfen garantieren.",
      image: "/assets/servicesIMG/drinkingIMG.jpg"
    },
    7: {
      title: "Prüfungen und Wartung",
      subtitle: "Proaktive Pflege und langfristige Zuverlässigkeit",
      description: "Der langfristige Schutz und Erhalt Ihrer Investition beginnt mit regelmäßigen Systeminspektionen. Eine proaktive Wartung erhöht nicht nur die Sicherheit, sondern hilft auch, potenzielle Einsparungen zu identifizieren und wertvolle Ressourcen zu schonen. Durch die frühzeitige Erkennung von Mängeln können kostspielige Reparaturen vermieden werden, was eine höhere Zuverlässigkeit und Sorgenfreiheit gewährleistet. In Zusammenarbeit mit führenden Herstellern führen wir professionelle Inspektionen und Wartungen an einer Vielzahl von Systemen durch. Unsere Expertise umfasst Gasprüfungen, Heizungsüberprüfungen, Trinkwasserinspektionen, Lecksuche und Rohrreinigung sowie Wasserschadensanierung und Gebäudetrocknung. Jeder Service wird mit Präzision und Sorgfalt ausgeführt, um sicherzustellen, dass Ihre Systeme effizient, nachhaltig und ohne Unterbrechung funktionieren.",
      image: "/assets/servicesIMG/checksIMG.jpg"
    },
    8: {
      title: "Gewerbliche Kältetechnik",
      subtitle: "Maßgeschneiderte Kühl- und Konservierungslösungen",
      description: "Verlassen Sie sich auf unsere Expertise in der Schutz- und Sicherheitstechnik, um Ihre Systeme rund um die Uhr zuverlässig am Laufen zu halten. Wir entwerfen maßgeschneiderte Kühllösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind und einen konstanten Komfort, Sicherheit und die langfristige Erhaltung Ihrer Anlagen gewährleisten. Unsere Dienstleistungen decken jeden Aspekt der gewerblichen Kältetechnik ab, von der Systemplanung und Installation über die Verrohrung, Kältemaschinen und Generatoren bis hin zur umfassenden Wartung, um Effizienz und Langlebigkeit zu garantieren. Ob für gewerbliche Einrichtungen oder öffentliche Institutionen, wir liefern professionelle Lösungen, die Präzision, Zuverlässigkeit und langfristigen Wert vereinen.",
      image: "/assets/servicesIMG/commercialIMG.jpg"
    }

  };

  if (services[id]) {
    image.src = services[id].image;
    title.textContent = services[id].title;
    subtitle.textContent = services[id].subtitle;
    description.textContent = services[id].description;
  }

  panel.classList.add("open");
  document.querySelector(".services-section").classList.add("panel-open");
}

function closeServicePanel() {
  const panel = document.getElementById("service-panel");
  panel.classList.remove("open");
  document.querySelector(".services-section").classList.remove("panel-open");
}

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const animatedElements = document.querySelectorAll(".fade-in, .slide-left, .slide-right, .zoom-in");

animatedElements.forEach(el => observer.observe(el));

function openButtonAbout() {
  document.getElementById("btn-about").onclick = () => {
    window.location.href = "aboutUs.html";
  };
}
function openButtonService() {
  document.getElementById("btn-seeMore").onclick = () => {
    window.location.href = "services.html";
  };
}