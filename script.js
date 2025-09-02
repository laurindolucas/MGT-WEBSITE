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
    descricao: "4YOU verbindet langlebige Qualität mit makelloser Ästhetik, um Ihr Badezimmer in einen wahren Wohlfühlraum zu verwandeln. Mehr als nur ein Raum wird es Teil einer offenen und einladenden Umgebung, perfekt für Momente der Entspannung oder Erneuerung. Mit einer Vielzahl von Designs, Funktionen und Oberflächen bietet 4YOU Optionen von praktisch bis anspruchsvoll, sodass Sie jedes Detail personalisieren und einen einzigartigen Raum schaffen können, der Ihre Persönlichkeit widerspiegelt und täglich Komfort bietet.",
    site: "https://parceiro1.com"
  },
  {
    id: 2,
    imagem: "/assets/bemm-logo.jpg",
    nome: "BEMM",
    descricao: "Seit 1979 liefert BEMM innovative Heizlösungen für Badezimmer und Wohnräume und verbindet dabei Design, Effizienz und Qualität. Spezialisiert auf Heizkörper für Wärmepumpen und Niedertemperatursysteme sorgt das Unternehmen für Komfort und nachhaltige Leistung in Neubauten, Renovierungen und gewerblichen Anwendungen.",
    site: "https://parceiro2.com"
  },
  {
    id: 3,
    imagem: "/assets/bette-logo.jpg",
    nome: "BETTE",
    descricao: "Das deutsche Familienunternehmen Bette spezialisiert sich auf Badelemente aus emailliertem Titanstahl, darunter Badewannen, Duschflächen, Duschwannen und Waschbecken. Wir sind Ihr vertrauensvoller Bette-Partner in Mülheim an der Ruhr und Umgebung und bieten Qualität, Langlebigkeit und anspruchsvolles Design.",
    site: "https://parceiro2.com"
  },
  {
    id: 4,
    imagem: "/assets/bosch-logo.jpg",
    nome: "BOSCH",
    descricao: "Bosch ist ein Maßstab für Spitzentechnologie, intelligente Heizlösungen und höchste Qualität. Seit über 100 Jahren sorgt das Unternehmen für warme und komfortable Häuser mit zuverlässigen, benutzerfreundlichen und nachhaltigen Geräten. Bosch engagiert sich für die Energiewende, unterstützt Klimaziele und fördert umweltfreundliche Projekte für eine grünere Zukunft in Deutschland.",
    site: "https://parceiro2.com"
  },
  {
    id: 5,
    imagem: "/assets/burgbad-logo.jpg",
    nome: "burgbad",
    descricao: "Badezimmermöbel in ihrer elegantesten Form. Auf der Suche nach Inspiration für Ihr Traumbadezimmer? Wir sind Ihr spezialisierter burgbad-Partner in Mülheim an der Ruhr. Mit der großen Auswahl an Waschtischen und Möbeln von burgbad finden Sie genau das Richtige, um einen einzigartigen, persönlichen Raum zu gestalten. Unabhängig von der Größe Ihres Badezimmers bietet burgbad maßgefertigte Möbel, die auf Ihre Wünsche zugeschnitten sind.",
    site: "https://parceiro2.com"
  },
  {
    id: 6,
    imagem: "/assets/daikin-logo.jpg",
    nome: "DAIKIN",
    descricao: "Mit modernster Technologie liefert Daikin seit über 90 Jahren Komfort und Bequemlichkeit in Heizung und Kühlung. Als weltweit führender Anbieter von Klimaanlagen und meistverkaufte Marke für Wärmepumpen in Europa setzt das Unternehmen auf Nachhaltigkeit ohne Kompromisse bei der Qualität. Energieeffizienz, alternative Kältemittel und umweltfreundliche Produktionsprozesse stehen im Mittelpunkt der Strategie, mit klarem Fokus auf langfristigen Klimaschutz. Schaffen Sie Ihr ideales Raumklima und sparen Sie Energie und Geld mit Daikins effizienten Lösungen.",
    site: "https://parceiro2.com"
  },
  {
    id: 7,
    imagem: "/assets/duravit-logo.jpg",
    nome: "Duravit",
    descricao: "Gegründet 1817 in Hornberg im Schwarzwald, ist Duravit AG heute einer der führenden internationalen Hersteller von Designerbädern. In über 130 Ländern vertreten, zeichnet sich das Unternehmen durch originelles Design, komfortsteigernde Technologie und höchste Qualität aus. In Zusammenarbeit mit renommierten Designern wie Philippe Starck, EOOS, Phoenix Design, Sieger Design, Kurt Merki Jr., Christian Werner, Matteo Thun und Cecilie Manz schafft Duravit exklusive Bäder, die die Lebensqualität nachhaltig verbessern.",
    site: "https://parceiro2.com"
  },
  {
    id: 8,
    imagem: "/assets/geberit-logo.jpg",
    nome: "Geberit",
    descricao: "Die Geberit Gruppe, europäischer Marktführer für Sanitärprodukte, ist weltweit tätig und in den meisten europäischen Ländern stark vertreten. Sie liefert hochwertige Lösungen in der Sanitärtechnik und Keramik für Badezimmer. Mit 26 Produktionsstätten, darunter vier im Ausland, und Hauptsitz in Rapperswil-Jona, Schweiz, beschäftigt das Unternehmen rund 12.000 Mitarbeiter in 50 Ländern. Im Jahr 2021 erzielte Geberit einen Nettoumsatz von 3,5 Milliarden CHF. Die Geberit-Aktien sind an der SIX Swiss Exchange notiert und seit 2012 Teil des SMI (Swiss Market Index).",
    site: "https://parceiro2.com"
  },
  {
    id: 9,
    imagem: "/assets/grohe-logo.jpg",
    nome: "GROHE",
    descricao: "Mühelose, harmonische Badgestaltung: GROHE Cubeo und die neue Euro Ceramic bilden die perfekte Kombination. Das Duschsystem Rainshower Aqua Pure verwandelt Ihr Badezimmer in eine wahre Oase und bietet umfassende Individualisierungsmöglichkeiten und Stil. Maßgeschneiderter Luxus: Die Armaturen-Kollektion GROHE Allure Gravity definiert Individualität und exklusives Design neu.",
    site: "https://parceiro2.com"
  },
  {
    id: 10,
    imagem: "/assets/grundfos-logo.jpg",
    nome: "GRUNDFOS",
    descricao: "GRUNDFOS bietet einige der effizientesten Pumpen der Welt und sorgt für Komfort und Nachhaltigkeit in Wohnräumen. Das Unternehmen entwickelt Lösungen für Heizung, HLK, Warmwasser, Drucksysteme, Entwässerung und Abwasser. Mit über 19.000 Mitarbeitern produziert und vermarktet es jährlich Millionen von Pumpen und verbindet Innovation, Verantwortung und Umweltbewusstsein.",
    site: "https://parceiro2.com"
  },
  {
    id: 11,
    imagem: "/assets/hansa-logo.jpg",
    nome: "HANSA",
    descricao: "Die Hansa Armaturen GmbH ist spezialisiert auf innovative, hochwertige Sanitärarmaturen für Badezimmer und Küchen. Mit Sitz in Stuttgart blickt das Unternehmen auf eine über hundertjährige Tradition und höchste Qualität zurück. Die Produkte verbinden Funktionalität, Langlebigkeit und exklusives Design und erfüllen die Ansprüche von Kunden, die Exzellenz in jedem Detail suchen. Hansa setzt weiterhin auf Innovation und bietet moderne Lösungen, die Technik, Komfort und Ästhetik vereinen.",
    site: "https://parceiro2.com"
  },
  {
    id: 12,
    imagem: "/assets/kaldewei-logo.jpg",
    nome: "KALDEWEI",
    descricao: "KALDEWEI ist ein deutsches Familienunternehmen mit über 100 Jahren Tradition in Badlösungen, das modernen Luxus mit Nachhaltigkeit kombiniert. Das Portfolio umfasst Badewannen, Duschflächen und Waschbecken aus hochwertigem Stahl-Emaille und bietet elegantes Design, Langlebigkeit und 100 % Kreislauffähigkeit. 2021 wurde die KALDEWEI Limited Edition Nature Protect aus CO₂-armen Stahl eingeführt, um den CO₂-Fußabdruck zu reduzieren. Das Unternehmen unterstützt zudem das WWF Marine Conservation Program und engagiert sich für Umwelt und kommende Generationen.",
    site: "https://parceiro2.com"
  },
  {
    id: 13,
    imagem: "/assets/laufen-logo.jpg",
    nome: "LAUFEN",
    descricao: "Seit 1892 schafft der Schweizer Hersteller LAUFEN Badezimmerwelten, die Körper und Seele nähren. Mit langer Tradition in hochwertigem Handwerk fördert das Unternehmen eine ganzheitliche Badkultur, die auf Nachhaltigkeit, exzellentes Design, Innovation und Technik setzt. Das Badezimmer wird als Lebensraum betrachtet, mit umfassenden Lösungen wie Keramik, Armaturen, Badewannen, Duschwannen, Möbeln, Spiegeln und Installationssystemen, alle mit innovativer, einzigartiger und ansprechender Ästhetik.",
    site: "https://parceiro2.com"
  },
  {
    id: 14,
    imagem: "/assets/maico-logo.jpg",
    nome: "MAICO",
    descricao: "MAICO bietet ein breites Spektrum hochwertiger Lüftungslösungen für unterschiedliche Anwendungen. Als Spezialist für moderne Lösungen reicht das Angebot von kleinen Wohnbad-Lüftern bis hin zu komplexen Systemen für mehrstöckige Gebäude. Zudem werden kontrollierte Lüftung mit Wärmerückgewinnung, industrielle Lösungen, explosionsgeschützte Ventilatoren und neue Luftfiltergeräte zur Entfernung von Viren und Bakterien in öffentlichen Räumen angeboten. MAICO liefert für jede Anforderung eine professionelle Lösung.",
    site: "https://parceiro3.com"
  },
  {
    id: 15,
    imagem: "/assets/novelan-logo.jpg",
    nome: "NOVELAN",
    descricao: "Die Mission von NOVELAN ist es, den Zugang zu Wärmepumpen nachhaltig, einfach und effizient zu gestalten und eine klare Produktpalette sowie Systeme bereitzustellen, die auf die Bedürfnisse jedes Projekts zugeschnitten sind. Das Unternehmen legt Wert auf Effizienz in jeder Phase – von der Auswahl der passenden Lösung über schnelle Lieferung bis hin zur praktischen Installation und intuitiven Nutzung. So bietet NOVELAN Komfort, Energieeinsparung und verlässliche Lösungen für seine Kunden.",
    site: "https://www.novelan.com/de/"
  }
];

function openModel(id) {
  const parceiro = parceiros.find(p => p.id === id);

  if (parceiro) {
    document.getElementById('model-title').innerText = parceiro.nome;
    document.getElementById('model-description').innerText = parceiro.descricao;
    document.getElementById('model-image').src = parceiro.imagem;
    document.getElementById('btn-vist-site').onclick = () => {
      window.open(parceiro.site, '_blank');
    };
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
            title: "Air conditioning systems",
          subtitle: "Cooling and climate control",
            description: "Comfort within your living or working space depends greatly on the indoor climate and atmosphere, where temperature and humidity play an essential role. Choosing the right air conditioning system ensures not only a pleasant environment but also efficiency and long-term reliability. Our team provides expert consultation to help you select the most suitable solution, followed by professional installation tailored to your specific needs. Beyond installation, we also offer comprehensive maintenance and service to keep your system performing at its best year after year. Whether for private homes, commercial properties, or public institutions, our expertise in advanced air conditioning technology guarantees an optimal indoor climate, combining comfort, efficiency, and innovation.",
            image: "/assets/servicesIMG/AirconditioningIMG.jpg"
        },
        2: {
            title: "Construction and modernization of heating",
             subtitle: "Efficient and reliable heating solutions",
            description: "We are recognized as professional heating system installers, delivering solutions that combine technical precision, reliability, and exceptional service. Beyond offering trusted and competent consultation, we carry out every project with professionalism and a deep understanding of your individual needs. From guiding you through the process of selecting the most suitable heating system for your building, to presenting and installing complete solutions tailored to your requirements, our focus is always on comfort, efficiency, and long-term value. Our expertise covers the full spectrum of heating services, including underfloor heating, advanced heating systems, hydraulic balancing, and modern boiler replacements, as well as the integration of stoves and fireplaces for both functionality and atmosphere. In addition to planning and installation, we also provide comprehensive maintenance and repair services, ensuring the reliability and performance of your system over time. Whether for private residences or commercial and public facilities, our team is dedicated to delivering heating solutions that merge innovation, durability, and premium quality.",
            image: "/assets/servicesIMG/heatingIMG.jpg"
        },
        3: {
            title: "Renewable energy",
            subtitle: "Innovative and sustainable energy systems",
            description: "For those seeking comprehensive, clear, and expert guidance on the use of renewable energy, we provide tailored advice and professional implementation designed to meet your individual needs. Our team takes the time to explain the available options in detail, helping you understand how to effectively reduce utility costs while choosing the energy system best suited to your lifestyle and long-term goals. We also assist with evaluating eligibility for government subsidies, ensuring you benefit from all available advantages when transitioning to sustainable solutions. Our expertise spans modern renewable energy sources, from heat pumps and thermal solar systems to photovoltaic technology, biomass, wood pellet heating, and combined heat and power systems. In addition to precise planning and professional installation, you can rely on us for ongoing maintenance, technical support, and reliable repair services. Whether for private households, businesses, or public institutions, we are committed to delivering renewable energy solutions that combine innovation, efficiency, and sustainability — creating real value for both you and the environment.We implement solar, wind, and other renewable energy solutions to reduce costs and protect the planet.",
            image: "/assets/servicesIMG/renewableIMG.jpg"
        },
        4: {
            title: "Controlled residential ventilation / ventilation systems",
           subtitle: "Healthy indoor air and energy efficiency",
            description: "Ensuring high-quality indoor air is essential for comfort, health, and the long-term value of your property. We specialize in controlled residential ventilation, offering comprehensive solutions that enhance air quality while optimizing energy efficiency. Our services cover the entire process, from careful planning and professional installation in new constructions and existing buildings to ongoing maintenance and system optimization. We provide expert guidance tailored to your specific needs, helping you choose the right system and ensuring it operates efficiently year-round. Our team focuses on delivering solutions that not only improve comfort and well-being but also contribute to sustainability and the longevity of your building. Whether for private residences or commercial facilities, we ensure that your ventilation system provides a safe, clean, and comfortable environment, with professional support every step of the way.",
            image: "/assets/servicesIMG/controlledIMG.jpg"
        },
        5: {
            title: "Bathroom construction and renovation",
             subtitle: "Exclusive and tailor-made bathroom design",
            description: "Whether you are building a completely new bathroom, renovating an existing one, or seeking a modern upgrade, we provide a comprehensive service that combines technical expertise, refined design, and absolute exclusivity. Our work goes far beyond plumbing: we craft contemporary, tailor-made bathrooms that harmoniously reflect your lifestyle and seamlessly integrate into your home. Through detailed consultation, we guide you at every stage — from planning to execution — delivering transparent, personalized solutions that merge functionality, comfort, and timeless elegance. With expertise in new bathroom projects, full-scale renovations, subtle modernizations, and accessible design adaptations, we ensure results that embody both practicality and sophistication. We also specialize in wellness bathrooms, transforming your space into a true private spa, and provide high-quality sanitary installations for commercial and public facilities, always with the same dedication to detail, durability, and premium finish. Every project is carried out with excellence, so your bathroom becomes not just a functional space, but an experience of comfort, style, and luxury.",
            image: "/assets/servicesIMG/bathroomIMG.jpg"
        },
        6: {
            title: "Drinking water, rainwater and wastewater technology",
           subtitle: "Comprehensive water management solutions",
            description: "Water is life’s most essential resource, forming the foundation of our daily routines and well-being. From drinking and cooking to bathing, washing, and the use of household appliances, every aspect of modern living depends on a reliable water system. We ensure that everything in your home flows smoothly, functions flawlessly, and meets the highest standards of cleanliness and efficiency. Our expertise covers the full spectrum of water management, including the installation of drinking water systems, building drainage and wastewater solutions, rainwater harvesting, as well as water treatment and softening. Beyond private households, we also provide tailored solutions for commercial and public facilities, always combining technical precision with long-lasting reliability. With professional planning, expert execution, and dedicated maintenance, we create systems that guarantee safety, sustainability, and comfort in every drop.",
            image: "/assets/servicesIMG/drinkingIMG.jpg"
        },
        7: {
            title: "Checks and maintenance",
              subtitle: "Proactive care and long-term reliability",
            description: "Protecting and preserving your investment over the long term begins with regular system inspections. Proactive maintenance not only increases safety but also helps identify potential savings and conserve valuable resources. By detecting defects early, costly repairs can be avoided, ensuring greater reliability and peace of mind. Working in partnership with leading manufacturers, we provide professional inspections and maintenance across a wide range of systems. Our expertise includes gas checks, heating tests, potable water inspections, leak detection, and pipe cleaning, as well as water damage repair and building drying services. Every service is carried out with precision and care, ensuring that your systems operate efficiently, sustainably, and without interruption.",
            image: "/assets/servicesIMG/checksIMG.jpg"
        },
        8: {
            title: "Commercial refrigeration technology",
            subtitle: "Customized cooling and preservation solutions",
            description: "Rely on our expertise in protection and safety technology to keep your systems running reliably around the clock. We design customized refrigeration solutions tailored to your specific requirements, ensuring consistent comfort, safety, and the long-term preservation of your assets. Our services cover every aspect of commercial refrigeration, from system planning and installation to piping, refrigeration units, and generators, as well as comprehensive maintenance to guarantee efficiency and durability. Whether for commercial facilities or public institutions, we deliver professional solutions that combine precision, reliability, and long-term value.",
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

