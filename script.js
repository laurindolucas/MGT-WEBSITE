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
    descricao: "4YOU combines lasting quality with impeccable aesthetics to transform your bathroom into a true space of well-being. More than just a room, it becomes part of an open and welcoming environment, perfect for moments of relaxation or renewal. With a variety of designs, functions, and finishes, 4YOU offers options ranging from practical to sophisticated, allowing you to personalize every detail and create a unique space that reflects your personality and brings comfort every day.",
    site: "https://parceiro1.com"
  },
  {
    id: 2,
    imagem: "/assets/bemm-logo.jpg",
    nome: "BEMM",
    descricao: "Since 1979, BEMM has been delivering innovative bathroom and room heaters, combining design, efficiency, and quality. Specializing in radiators for heat pumps and low-temperature systems, the company ensures comfort and sustainable performance in new projects, renovations, and commercial applications.",
    site: "https://parceiro2.com"
  },
  {
    id: 3,
    imagem: "/assets/bette-logo.jpg",
    nome: "BETTE",
    descricao: "The German family-owned company Bette specializes in bathroom elements made from enamelled titanium steel, including bathtubs, shower surfaces, shower trays, and basins. We are your trusted Bette partner in Mülheim an der Ruhr and the surrounding region, delivering quality, durability, and sophisticated design.",
    site: "https://parceiro2.com"
  },
  {
    id: 4,
    imagem: "/assets/bosch-logo.jpg",
    nome: "BOSCH",
    descricao: "Bosch is a benchmark in cutting-edge technology, intelligent heating solutions, and superior quality. For over 100 years, it has ensured warm and comfortable homes with reliable, user-friendly, and sustainable appliances. Committed to the transition to clean energy, Bosch supports climate goals and promotes eco-friendly projects for a greener future in Germany.",
    site: "https://parceiro2.com"
  },
  {
    id: 5,
    imagem: "/assets/burgbad-logo.jpg",
    nome: "burgbad",
    descricao: "Bathroom furniture in its most elegant form. Looking for inspiration for your dream bathroom? We are your specialist burgbad partner in Mülheim an der Ruhr. With burgbad’s wide selection of vanities and bathroom furniture, you will find exactly what you need to create a unique and personalized space. No matter the size of your bathroom, burgbad offers custom-made furniture designed to meet your wishes.",
    site: "https://parceiro2.com"
  },
  {
    id: 6,
    imagem: "/assets/daikin-logo.jpg",
    nome: "DAIKIN",
    descricao: "With cutting-edge technologies, Daikin has been delivering comfort and convenience in heating and cooling for over 90 years. A global leader in air conditioning technology and the top seller of heat pumps in Europe, the brand is committed to sustainability without compromising quality. Energy efficiency, alternative refrigerants, and eco-friendly production processes are at the core of its environmental strategy, with a clear focus on long-term climate protection. Create your ideal indoor climate while saving energy and money with Daikin’s efficient solutions.",
    site: "https://parceiro2.com"
  },
  {
    id: 7,
    imagem: "/assets/duravit-logo.jpg",
    nome: "Duravit",
    descricao: "Founded in 1817 in Hornberg, in the Black Forest, Duravit AG is now one of the leading international manufacturers of designer bathrooms. Present in over 130 countries, the company stands out for original design, comfort-enhancing technology, and superior quality. In collaboration with renowned designers such as Philippe Starck, EOOS, Phoenix Design, Sieger Design, Kurt Merki Jr., Christian Werner, Matteo Thun, and Cecilie Manz, Duravit creates exclusive bathrooms that sustainably enhance quality of life.",
    site: "https://parceiro2.com"
  },
  {
    id: 8,
    imagem: "/assets/geberit-logo.jpg",
    nome: "Geberit",
    descricao: "The Geberit Group, the European market leader in sanitary products, operates globally with a strong local presence in most European countries, delivering high-value solutions in sanitary technology and bathroom ceramics. With 26 production facilities, including four abroad, and headquartered in Rapperswil-Jona, Switzerland, the company employs around 12,000 people in 50 countries. In 2021, Geberit recorded net sales of CHF 3.5 billion. Geberit shares are listed on the SIX Swiss Exchange and have been part of the SMI (Swiss Market Index) since 2012.",
    site: "https://parceiro2.com"
  },
  {
    id: 9,
    imagem: "/assets/grohe-logo.jpg",
    nome: "GROHE",
    descricao: "Effortless harmonious bathroom design: GROHE Cubeo and the new Euro Ceramic make the perfect combination. The Rainshower Aqua Pure shower system turns your bathroom into a true oasis, offering extensive customization and style. Tailored luxury: the GROHE Allure Gravity faucet collection redefines individuality and exclusive design.",
    site: "https://parceiro2.com"
  },
  {
    id: 10,
    imagem: "/assets/grundfos-logo.jpg",
    nome: "GRUNDFOS",
    descricao: "GRUNDFOS provides some of the world’s most efficient pumps, ensuring comfort and sustainability in homes. The company develops solutions for heating, HVAC, hot water, pressurization, drainage, and wastewater. With over 19,000 employees, it produces and markets millions of pumps annually, combining innovation, responsibility, and environmental care.",
    site: "https://parceiro2.com"
  },
  {
    id: 11,
    imagem: "/assets/hansa-logo.jpg",
    nome: "HANSA",
    descricao: "Hansa Armaturen GmbH specializes in innovative, high-quality sanitary fittings for bathrooms and kitchens.Headquartered in Stuttgart, the company has a tradition of over a hundred years, synonymous with superior quality. Its products combine functionality, durability, and exclusive design, meeting the needs of customers seeking excellence in every detail. Hansa continues to innovate, providing modern solutions that blend technology, comfort, and aesthetics.",
    site: "https://parceiro2.com"
  },
  {
    id: 12,
    imagem: "/assets/kaldewei-logo.jpg",
    nome: "KALDEWEI",
    descricao: "KALDEWEI is a German family-owned company with over 100 years of tradition in bathroom solutions, combining modern luxury and sustainability. Its portfolio includes bathtubs, shower surfaces, and washbasins made from premium steel enamel, offering elegant design, durability, and 100% circularity. In 2021, it launched the KALDEWEI Limited Edition Nature Protect, made from low-CO2 steel, helping to reduce the carbon footprint. The company also supports the WWF Marine Conservation Program, committed to the environment and future generations.",
    site: "https://parceiro2.com"
  },
  {
    id: 13,
    imagem: "/assets/laufen-logo.jpg",
    nome: "LAUFEN",
    descricao: "Since 1892, Swiss manufacturer LAUFEN has been creating bathroom worlds that nurture body and soul. With a long tradition of high-quality craftsmanship, the company fosters a holistic bathroom culture focused on sustainability, excellent design, innovation, and technology. LAUFEN views the bathroom as a living space, offering comprehensive solutions including ceramics, fittings, bathtubs, shower trays, furniture, mirrors, and installation systems, all with innovative, unique, and captivating aesthetics.",
    site: "https://parceiro2.com"
  },
  {
    id: 14,
    imagem: "/assets/maico-logo.jpg",
    nome: "MAICO",
    descricao: "MAICO provides a wide range of high-quality ventilation solutions for various applications. As a specialist in modern solutions, MAICO offers everything from small residential bathroom fans to complex systems for multi-story buildings. It also provides controlled ventilation with heat recovery, industrial solutions, explosion-proof fans, and new air filtration units to remove viruses and bacteria in public spaces. MAICO delivers a professional solution for every need.",
    site: "https://parceiro3.com"
  },
  {
    id: 15,
    imagem: "/assets/novelan-logo.jpg",
    nome: "NOVELAN",
    descricao: "NOVELAN's mission is to make access to heat pumps sustainable, simple, and efficient, providing a clear range of products and systems tailored to each project’s needs. The company focuses on ensuring efficiency at every stage, from selecting the right solution and delivering it quickly to practical installation and smooth, intuitive operation. In doing so, NOVELAN aims to offer comfort, energy savings, and reliable solutions for its customers.",
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

    // Exemplo de dados (pode vir de API, JSON ou até dataset dos cards)
    const services = {
        1: {
            title: "Air conditioning systems",
            subtitle: "Cooling and climate control",
            description: "We provide installation, repair, and maintenance of air conditioning systems for homes and businesses.",
            image: "/assets/servicesIMG/AirconditioningIMG.jpg"
        },
        2: {
            title: "Construction and modernization of heating",
            subtitle: "Heating solutions",
            description: "Efficient and modern heating systems to keep your environment comfortable.",
            image: "/assets/servicesIMG/heatingIMG.jpg"
        },
        3: {
            title: "Renewable energy",
            subtitle: "Sustainable solutions",
            description: "We implement solar, wind, and other renewable energy solutions to reduce costs and protect the planet.",
            image: "/assets/servicesIMG/renewableIMG.jpg"
        },
        4: {
            title: "Controlled residential ventilation / ventilation systems",
            subtitle: "Sustainable solutions",
            description: "We implement solar, wind, and other renewable energy solutions to reduce costs and protect the planet.",
            image: "/assets/servicesIMG/controlledIMG.jpg"
        },
        5: {
            title: "Bathroom construction and renovation",
            subtitle: "Sustainable solutions",
            description: "We implement solar, wind, and other renewable energy solutions to reduce costs and protect the planet.",
            image: "/assets/servicesIMG/bathroomIMG.jpg"
        },
        6: {
            title: "Drinking water, rainwater and wastewater technology",
            subtitle: "Sustainable solutions",
            description: "We implement solar, wind, and other renewable energy solutions to reduce costs and protect the planet.",
            image: "/assets/servicesIMG/drinkingIMG.jpg"
        },
        7: {
            title: "Checks and maintenance",
            subtitle: "Sustainable solutions",
            description: "We implement solar, wind, and other renewable energy solutions to reduce costs and protect the planet.",
            image: "/assets/servicesIMG/checksIMG.jpg"
        },
        8: {
            title: "Commercial refrigeration technology",
            subtitle: "Sustainable solutions",
            description: "We implement solar, wind, and other renewable energy solutions to reduce costs and protect the planet.",
            image: "/assets/servicesIMG/commercialIMG.jpg"
        }
       
    };

    // Atualiza conteúdo do painel
    if (services[id]) {
        image.src = services[id].image;
        title.textContent = services[id].title;
        subtitle.textContent = services[id].subtitle;
        description.textContent = services[id].description;
    }

    // Abre o painel
    panel.classList.add("open");
    document.querySelector(".services-section").classList.add("panel-open");
}

function closeServicePanel() {
    const panel = document.getElementById("service-panel");
    panel.classList.remove("open");
    document.querySelector(".services-section").classList.remove("panel-open");
}