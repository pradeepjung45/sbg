export interface CompanyProject {
  name: string;
  location: string;
  description: string;
  completedYear: string;
  image?: string;
}

export interface CompanyService {
  title: string;
  description: string;
  image?: string;
}

export interface ProjectSection {
  title: string;
  projects: {
    title: string;
    description: string;
    image?: string;
  }[];
}

export interface Article {
  title: string;
  url: string;
  source: string;
  description: string;
  date?: string;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  category: 'construction' | 'manufacturing' | 'trading';
  categoryIcon: string;
  logo?: string;
  heroImage?: string;
  overview: string;
  detailedServices?: CompanyService[];
  detailedProducts?: CompanyService[];
  services?: string[];
  products?: string[];
  projects?: CompanyProject[];
  projectSections?: ProjectSection[];
  clients?: string[];
  strengths: string[];
  certifications?: string[];
  articles?: Article[];
  gallery?: string[];
  contact: {
    email: string;
    locations: string[];
  };
  industry: string;
}

export const companiesData: Company[] = [
  // CONSTRUCTION
  {
    id: 'contech',
    name: 'Con‑Tech Construction',
    slug: 'contech-construction',
    category: 'construction',
    categoryIcon: '🏗️',
    logo: '/lovable-uploads/7631b361-1a89-439f-b3f6-bc7be2abecf8.png',
    heroImage: '/src/assets/contech-construction-hero.jpg',
    industry: 'Construction',
    overview: 'A pioneer in industrial and commercial construction, Con‑Tech delivers high-quality building solutions that meet global standards.',
    detailedServices: [
      {
        title: 'Factory and Warehouse Construction',
        description: 'Specialized in building large-scale industrial facilities with modern infrastructure and safety standards.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
      },
      {
        title: 'Steel Structure Buildings',
        description: 'Expert construction of durable steel framework buildings for industrial and commercial use.',
        image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b'
      },
      {
        title: 'Commercial Complexes',
        description: 'Development of modern commercial spaces including shopping centers, office buildings, and mixed-use developments.',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
      }
    ],
    projects: [
      { 
        name: 'Steel Plant Complex', 
        location: 'Bara',
        description: 'A comprehensive steel manufacturing facility with state-of-the-art production lines and environmental controls.',
        completedYear: '2022',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
      },
      { 
        name: 'Warehouse Hub', 
        location: 'Birgunj',
        description: 'Modern logistics and distribution center serving as a key trade gateway between Nepal and India.',
        completedYear: '2023',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
      },
      { 
        name: 'Commercial Plaza', 
        location: 'Butwal',
        description: 'Multi-story commercial complex featuring retail spaces, offices, and community facilities.',
        completedYear: '2021',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    ],
    strengths: [
      'In-house engineering',
      'Timely delivery',
      'Modern project management tools'
    ],
    projectSections: [
      {
        title: 'Electrification Works',
        projects: [
          {
            title: 'Reinforcement & Construction of Substation (NEA)',
            description: 'Construction of control building and structural works. Supply, installation, and erection of substation equipment. Execution of other related civil works.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
          },
          {
            title: 'Grid Substation Reinforcement Project (NEA)',
            description: 'Supply, installation, and erection of 132/66 and 132/33 substations. Installation of power transformers, VCBs, CTs, foundation structure works, and gantry structures.',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
          },
          {
            title: 'DEO Building Project, Lalitpur',
            description: 'RCC frame structure with electrical works, water supply, and sanitary systems.',
            image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
          },
          {
            title: 'Multipurpose RCC Building for Hulas Wire Industries',
            description: 'Construction of multipurpose RCC building.',
            image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b'
          },
          {
            title: 'KIA Plaza Showroom Building',
            description: 'Development of showroom building with required civil and electrical works.',
            image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
          }
        ]
      },
      {
        title: 'Quarry Excavation Works',
        projects: [
          {
            title: 'Production, Crushing & Removal of Overburden',
            description: 'Excavation in hard soil and boulder/rock mixed soil. Crushing of limestone using crusher machines. Transportation of crushed materials.',
            image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67'
          },
          {
            title: 'Rock Breaking',
            description: 'Breaking of hard rock using rock breakers.',
            image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff'
          },
          {
            title: 'Project for Hetauda Cement Udhyog',
            description: 'Executed in six packages from March 2002 to 2007.',
            image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb'
          }
        ]
      },
      {
        title: 'Roadwork Projects',
        projects: [
          {
            title: 'Sanfebagar-Mangalsen-Martadi Road Project',
            description: 'Upgrading of road (Ch. 0+000 to 29+300).',
            image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716'
          },
          {
            title: 'Dhalkebar-Janakpur Road Project',
            description: 'Upgrading under the Road Connectivity Sector.',
            image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
          },
          {
            title: 'Melamchi Water Supply Project',
            description: 'Gyalthum Adit Access Roads: Excavation in rock using hydraulic hammer, common excavation, stone masonry drains, retaining walls, gabion walls, crush drains, and improved subgrades.',
            image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552'
          },
          {
            title: 'Mudhe Sanischare-Khandbari Road Project',
            description: 'Earthwork, excavation, embankment filling, masonry side drains, stone masonry retaining structures, gabion filling, capping layer, Water Bound Macadam (WBM), and bio-engineering works.',
            image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb'
          },
          {
            title: 'Tribhuwan International Airport (TIA)',
            description: 'Extension of the turning pad at Runway 20 End. Subbase course, crushed stone base, drainage, and ducting works.',
            image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
          },
          {
            title: 'Amar Khola-Baglung Sector (Pokhara-Baglung Road)',
            description: 'Construction of earthwork, gabion work, concrete work, sub-base and base course, hot premix patching, slurry sealing, bituminous maintenance, traffic safety works, and single bituminous surface treatment.',
            image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff'
          },
          {
            title: 'Greenhouse under Everest Floriculture Project',
            description: 'Earthwork filling, trench excavation, river training work, greenhouse foundation, drainage works, and access roads.',
            image: 'https://images.unsplash.com/photo-1619158401996-b4458b5f7980'
          }
        ]
      }
    ],
    articles: [
      {
        title: 'Nepal Rastra Bank Resumes Services from Rebuilt Thapathali Office',
        url: 'https://www.fiscalnepal.com/2024/12/16/18854/nepal-rastra-bank-resumes-services-from-rebuilt-thapathali-office/',
        source: 'Fiscal Nepal',
        description: 'Nepal Rastra Bank has resumed Banking and Currency Management services from its newly rebuilt Thapathali office. The office, damaged in the 2015 earthquake, marks a significant infrastructure restoration milestone.',
        date: 'December 16, 2024'
      },
      {
        title: 'Contract Agreement Signed Between KIOCH and Con-Tech Pvt. Ltd.',
        url: 'https://kioch.org.np/contract-agreement-signed-between-kioch-and-con-tech-pvt-ltd/',
        source: 'KIOCH',
        description: 'Construction contract for the 200-Bed KIOCH-Kathmandu Children\'s Hospital Building at Budhanilkantha Municipality. This major healthcare infrastructure project showcases our commitment to essential public services.',
        date: 'July 10, 2022'
      },
      {
        title: 'Prime Minister Moving to New Residence with Bunkers',
        url: 'https://myrepublica.nagariknetwork.com/news/prime-minister-moving-to-new-residence-with-bunkers',
        source: 'My Republica',
        description: 'Prime Minister moves to a sophisticated government building with advanced security features including bunkers. The construction project represents high-security infrastructure development in Nepal.',
        date: 'November 29, 2021'
      }
    ],
    contact: {
      email: 'contech@sbgcompanies.com',
      locations: ['Kathmandu', 'Biratnagar']
    }
  },
  {
    id: 'maryada',
    name: 'Maryada Construction',
    slug: 'maryada-construction',
    category: 'construction',
    categoryIcon: '🏗️',
    logo: '/lovable-uploads/70097c48-70bb-4b7d-94de-f35b3daf0532.png',
    heroImage: '/src/assets/maryada-construction-hero.jpg',
    industry: 'Construction',
    overview: 'Maryada Construction focuses on large-scale infrastructure projects that connect and uplift communities.',
    detailedServices: [
      {
        title: 'Road and Highway Development',
        description: 'Construction of modern roads and highways connecting rural and urban areas across Nepal.',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
      },
      {
        title: 'Bridge Construction',
        description: 'Engineering and building bridges that enhance connectivity and support economic development.',
        image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552'
      },
      {
        title: 'Government Projects',
        description: 'Specialized in public infrastructure including schools, hospitals, and community centers.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
      }
    ],
    projects: [
      { 
        name: 'Solar-powered School Complex', 
        location: 'Okhaldhunga',
        description: 'Sustainable educational facility with integrated solar power systems and modern learning environments.',
        completedYear: '2023',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9'
      },
      { 
        name: 'Rural Road Network', 
        location: 'Province 1',
        description: 'Comprehensive road infrastructure connecting remote villages to main transportation networks.',
        completedYear: '2022',
        image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22'
      },
      { 
        name: 'Government Drainage Systems', 
        location: 'Janakpur',
        description: 'Modern urban drainage infrastructure improving flood management and public health.',
        completedYear: '2024',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1500673922987-e212871fec22',
      'https://images.unsplash.com/photo-1551038247-3d9af20df552',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    ],
    strengths: [
      'Strong government partnerships',
      'Sustainability-driven practices',
      'Road safety integration'
    ],
    contact: {
      email: 'maryada@sbgcompanies.com',
      locations: ['Okhaldhunga', 'Janakpur']
    }
  },
  {
    id: 'crystalline',
    name: 'Crystalline Developers',
    slug: 'crystalline-developers',
    category: 'construction',
    categoryIcon: '🏗️',
    logo: '/lovable-uploads/6dff211c-840c-430a-a978-1023a569ac6b.png',
    heroImage: '/src/assets/crystalline-developers-hero.jpg',
    industry: 'Construction',
    overview: 'Blending innovation and sustainability, Crystalline Developers creates modern, eco-conscious living and working spaces.',
    detailedServices: [
      {
        title: 'Urban residential complexes',
        description: 'Modern residential projects with sustainable design and green building practices.',
        image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop'
      },
      {
        title: 'Modular buildings',
        description: 'Prefabricated and modular construction solutions for efficient and quick assembly.',
        image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop'
      },
      {
        title: 'Modern construction materials',
        description: 'Eco-friendly and energy-efficient building materials for sustainable construction.',
        image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop'
      }
    ],
    projects: [
      { 
        name: 'Crystal Homes – Eco Housing', 
        location: 'Kathmandu',
        description: 'Sustainable residential complex with eco-friendly materials and energy-efficient design.',
        completedYear: '2023',
        image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop'
      },
      { 
        name: 'Prefab School Buildings', 
        location: 'Terai Region',
        description: 'Modular school buildings designed for quick assembly and earthquake resistance.',
        completedYear: '2022',
        image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop'
      }
    ],
    strengths: [
      'Green construction practices',
      'Energy-efficient materials',
      'Earthquake-resilient structures'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
    ],
    contact: {
      email: 'crystalline@sbgcompanies.com',
      locations: ['Kathmandu', 'Itahari']
    }
  },

  // MANUFACTURING
  {
    id: 'shyambaba-mill',
    name: 'Shyambaba Rice & Flour Mill',
    slug: 'shyambaba-rice-flour-mill',
    category: 'manufacturing',
    categoryIcon: '🏭',
    logo: '/lovable-uploads/698d8562-7fef-43cd-8bb6-924f9056f7bd.png',
    heroImage: '/src/assets/shyambaba-mill-hero.jpg',
    industry: 'Manufacturing',
    overview: 'Serving Nepal with high-quality, locally sourced rice and flour for over two decades.',
    detailedProducts: [
      {
        title: 'Premium Steam Sona Rice',
        description: 'High-quality aromatic steam sona rice with superior taste and nutritional value.',
        image: '/lovable-uploads/WhatsApp Image 2025-08-20 at 15.08.37 (1).jpeg'
      },
      {
        title: 'Fortified Flour (Gahini)',
        description: 'Nutrient-enriched flour with added vitamins and minerals for better health.',
        image: '/lovable-uploads/WhatsApp Image 2025-08-20 at 15.08.38 (1).jpeg'
      },
      {
        title: 'Traditional Wheat Flour',
        description: 'Premium quality wheat flour processed using traditional methods.',
        image: '/lovable-uploads/WhatsApp Image 2025-08-20 at 15.08.38.jpeg'
      }
    ],
    strengths: [
      'Trusted by hospitals, schools, and retailers',
      'Hygienic processing plant',
      'Consistent product quality'
    ],
    certifications: [
      'HACCP compliant',
      'Government food quality approvals'
    ],
    gallery: [
      '/lovable-uploads/WhatsApp Image 2025-08-20 at 15.08.39.jpeg',
      '/lovable-uploads/WhatsApp Image 2025-08-20 at 15.08.40 (1).jpeg',
      '/lovable-uploads/WhatsApp Image 2025-08-20 at 15.08.40.jpeg',
      '/lovable-uploads/WhatsApp Image 2025-08-20 at 15.09.09.jpeg',
      '/lovable-uploads/97e488e3-a638-48f9-a3ad-0b52307b3d84.png',
      '/lovable-uploads/98ae41c2-f9ee-4cbc-80f4-3ce88031aafd.png',
      '/lovable-uploads/52f97eba-76ef-4e87-85ba-4a19e9208c81.png',
      '/lovable-uploads/9bb1a949-1e39-4ce8-aa07-370cef47a85e.png',
      '/lovable-uploads/0ff6331b-3ba3-4aaa-b6d9-d6bcfdfe1835.png',
      '/lovable-uploads/83058633-32d4-4813-844e-edffecccc88b.png',
      '/lovable-uploads/c6783881-5873-4625-b1d2-3a7b92e8b3c6.png'
    ],
    contact: {
      email: 'mill@sbgcompanies.com',
      locations: ['Janakpur']
    }
  },
  {
    id: 'alto-plastic',
    name: 'Alto Plastic & Galvining Wire',
    slug: 'alto-plastic-galvining-wire',
    category: 'manufacturing',
    categoryIcon: '🏭',
    logo: '/lovable-uploads/60cd9cf1-f8ed-41b0-890c-b6aea51bf2a7.png',
    heroImage: '/src/assets/alto-plastic-hero.jpg',
    industry: 'Manufacturing',
    overview: 'A key player in industrial plastics and galvanized wire for construction and utility sectors.',
    products: [
      'HDPE/LDPE plastic sheets',
      'Galvanized iron wires',
      'Plastic ropes and netting'
    ],
    clients: [
      'Agriculture',
      'Fencing & Infrastructure',
      'Construction materials'
    ],
    strengths: [
      'Durable and weather-resistant materials',
      'Custom manufacturing capacity'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1553406830-ef2513450d76',
      'https://images.unsplash.com/photo-1613251464464-4f06a0e91618',
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0',
      'https://images.unsplash.com/photo-1492171983775-a51717616c0d'
    ],
    contact: {
      email: 'alto@sbgcompanies.com',
      locations: ['Biratnagar']
    }
  },
  {
    id: 'shangrila-distillery',
    name: 'Shangrila Distillery',
    slug: 'shangrila-distillery',
    category: 'manufacturing',
    categoryIcon: '🏭',
    logo: '/lovable-uploads/b81796a3-1312-4889-8745-b22ceb249261.png',
    heroImage: '/src/assets/shangrila-distillery-hero.jpg',
    industry: 'Manufacturing',
    overview: 'Chitwan-based premium distillery crafting fine spirits using traditional techniques and modern technology.',
    products: [
      'Fine whiskies',
      'Vodkas & liquors',
      'Private-label spirits'
    ],
    strengths: [
      'Quality grain sourcing',
      'Distillation purity',
      'Expanding export network'
    ],
    certifications: [
      'ISO-compliant',
      'Nepal Excise Approved'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1569529465841-dfecdab7503b',
      'https://images.unsplash.com/photo-1582833100154-c11c3b584c06',
      'https://images.unsplash.com/photo-1536935338788-846bb9981813',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
      'https://images.unsplash.com/photo-1571104508999-893933ded431'
    ],
    contact: {
      email: 'distillery@sbgcompanies.com',
      locations: ['Chitwan']
    }
  },
  {
    id: 'purbanchal',
    name: 'Purbanchal Construction Suppliers',
    slug: 'purbanchal-construction-suppliers',
    category: 'manufacturing',
    categoryIcon: '🏭',
    logo: '/lovable-uploads/17db2a86-0a52-4bdb-8232-feb5eb1a4122.png',
    heroImage: '/src/assets/purbanchal-suppliers-hero.jpg',
    industry: 'Manufacturing',
    overview: 'Specializing in ready-mix concrete and supply of heavy-duty construction equipment in Eastern Nepal.',
    services: [
      'Ready-mix concrete',
      'Concrete blocks, tiles',
      'Rental of mixers, loaders, and pumps'
    ],
    clients: [
      'Government projects',
      'Real estate developers',
      'Engineering firms'
    ],
    strengths: [
      'Timely batching plant supply',
      'Technically calibrated mixes'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64'
    ],
    contact: {
      email: 'pcs@sbgcompanies.com',
      locations: ['Morang']
    }
  },
  {
    id: 'janaki-cement',
    name: 'Janaki Cement',
    slug: 'janaki-cement',
    category: 'manufacturing',
    categoryIcon: '🏭',
    logo: '/lovable-uploads/e6fdc78e-e652-4cb4-b227-507f8f8adbf9.png',
    heroImage: '/lovable-uploads/cea0e4da-eb37-4c5f-afc2-2d2428e14088.png',
    industry: 'Manufacturing',
    overview: 'Producing high-strength cement that supports resilient infrastructure and modern buildings across Nepal.',
    products: [
      'OPC and PPC grade cement',
      'Bulk and bag supply',
      'Custom blends for project specs'
    ],
    strengths: [
      'Automated plant',
      'Proven durability',
      'Partner to major infra developers'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64'
    ],
    contact: {
      email: 'janaki@sbgcompanies.com',
      locations: ['Janakpur']
    }
  },
  {
    id: 'dhanusha-cement',
    name: 'Dhanusha Cement',
    slug: 'dhanusha-cement',
    category: 'manufacturing',
    categoryIcon: '🏭',
    logo: '/lovable-uploads/b30d205b-fe5d-47bd-8bc7-6bc287b26cdc.png',
    heroImage: '/src/assets/dhanusha-cement-hero.jpg',
    industry: 'Manufacturing',
    overview: 'Delivering consistent, reliable cement products built for Nepal\'s diverse terrain and climate.',
    detailedServices: [
      {
        title: 'Sandesh Cement',
        description: 'SANDESH OPC 43 GRADE\nBAG: 50 KG.',
        image: '/lovable-uploads/877fa578-70a4-4f96-aa10-b3d7c5551376.png'
      },
      {
        title: 'Sanima Cement',
        description: 'SANIMA OPC 43 GRADE\nBAG: 50 KG.',
        image: '/lovable-uploads/c69a3d44-11b1-44b5-b793-90beb34621ab.png'
      },
      {
        title: 'Arna Cement',
        description: 'ARNA OPC 43 GRADE\nBAG: 50 KG',
        image: '/lovable-uploads/25cbd765-35e0-49ff-b68a-80b2b2faef32.png'
      },
      {
        title: 'Bright Cement',
        description: 'BRIGHT OPC 43 GRADE\nBAG: 50 KG.',
        image: '/lovable-uploads/7fc2ddd9-d1d6-4c63-b09f-3090f6635085.png'
      }
    ],
    products: [
      'Ordinary Portland Cement',
      'Sulfate-resistant blends',
      'Construction grade testing reports'
    ],
    strengths: [
      'Strategically located plant',
      'Scalable distribution',
      'Affordable pricing'
    ],
    gallery: [
      '/lovable-uploads/877fa578-70a4-4f96-aa10-b3d7c5551376.png',
      '/lovable-uploads/c69a3d44-11b1-44b5-b793-90beb34621ab.png',
      '/lovable-uploads/25cbd765-35e0-49ff-b68a-80b2b2faef32.png',
      '/lovable-uploads/7fc2ddd9-d1d6-4c63-b09f-3090f6635085.png',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
    ],
    contact: {
      email: 'dhanusha@sbgcompanies.com',
      locations: ['Dhanusha']
    }
  },

  // ENTERPRISE & TRADING
  {
    id: 'premier-suppliers',
    name: 'Premier Suppliers',
    slug: 'premier-suppliers',
    category: 'trading',
    categoryIcon: '🏢',
    logo: '/lovable-uploads/2ea389af-736c-44f8-9c73-b3ecae6f209d.png',
    heroImage: '/src/assets/trading-bg.jpg',
    industry: 'Enterprise & Trading',
    overview: 'A dynamic and reliable import-export company engaged in the sourcing, distribution, and supply of a wide variety of products across international markets.',
    products: [
      'Wines, spirits, craft beers',
      'Soft drinks and specialty beverages',
      'Packaged and fresh food products',
      'HORECA supplies and disposables'
    ],
    clients: [
      'Hospitality sector',
      'Retail chains',
      'Manufacturing companies',
      'Wholesale distributors'
    ],
    strengths: [
      'International market expertise',
      'Custom sourcing solutions',
      'Comprehensive logistics support'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      'https://images.unsplash.com/photo-1501286353178-1ec881214838',
      'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      'https://images.unsplash.com/photo-1469041797191-50ace28483c3'
    ],
    contact: {
      email: 'premier@sbgcompanies.com',
      locations: ['Kathmandu', 'Biratnagar']
    }
  },
  {
    id: 'matarani',
    name: 'Matarani Enterprise',
    slug: 'matarani-enterprise',
    category: 'trading',
    categoryIcon: '🏢',
    logo: '/lovable-uploads/29bccde0-99b7-43df-8ff2-b73f2c27becb.png',
    heroImage: '/src/assets/matarani-enterprise-hero.jpg',
    industry: 'Enterprise & Trading',
    overview: 'Supplying essential food and beverage products to government bodies, hospitals, schools, and hospitality chains.',
    products: [
      'Grains, lentils, spices',
      'Packaged food items',
      'Beverages and dairy'
    ],
    clients: [
      'Public health departments',
      'Military bases',
      'Hotels and resorts'
    ],
    strengths: [
      'Government-tender ready',
      'Warehousing and cold storage'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17',
      'https://images.unsplash.com/photo-1488459716781-31db52582fe9',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      'https://images.unsplash.com/photo-1586201375761-83865001e31c',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e'
    ],
    contact: {
      email: 'matarani@sbgcompanies.com',
      locations: ['Kathmandu']
    }
  },
  {
    id: 'koili',
    name: 'Koili Multipurpose',
    slug: 'koili-multipurpose',
    category: 'trading',
    categoryIcon: '🏢',
    logo: '/lovable-uploads/3e0f2a02-9869-4af9-843f-9f35b2ba14e0.png',
    heroImage: '/src/assets/koili-multipurpose-hero.jpg',
    industry: 'Enterprise & Trading',
    overview: 'Multi-sector logistics and support services including transport, warehousing, and fulfillment.',
    services: [
      'Third-party logistics (3PL)',
      'Construction material transport',
      'Government contract delivery'
    ],
    strengths: [
      'Flexible fleet options',
      'Real-time tracking systems',
      'Regional depots'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      'https://images.unsplash.com/photo-1588287082427-6d55b55b4e66',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176',
      'https://images.unsplash.com/photo-1473042904451-00171c69419d',
      'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8'
    ],
    contact: {
      email: 'koili@sbgcompanies.com',
      locations: ['Birgunj']
    }
  },
  {
    id: 'shyambaba-enterprises',
    name: 'Shyambaba/Shyam Baba Enterprises',
    slug: 'shyambaba-enterprises',
    category: 'trading',
    categoryIcon: '🏢',
    logo: '/lovable-uploads/698d8562-7fef-43cd-8bb6-924f9056f7bd.png',
    heroImage: '/src/assets/shyambaba-enterprises-hero.jpg',
    industry: 'Enterprise & Trading',
    overview: 'Global trading arm engaged in import/export, commodity distribution, and cross-border business development.',
    services: [
      'Import of raw materials, tools, FMCG',
      'Export of spirits, construction goods',
      'Government & private procurement services'
    ],
    strengths: [
      'Global supplier network',
      'B2B negotiation and customs handling',
      'Strategic sourcing partners'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      'https://images.unsplash.com/photo-1529341091764-52fdc0d39b96',
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4'
    ],
    contact: {
      email: 'globaltrade@sbgcompanies.com',
      locations: ['Kathmandu', 'Mumbai (Partner Office)']
    }
  }
];

export const getCompanyBySlug = (slug: string): Company | undefined => {
  return companiesData.find(company => company.slug === slug);
};

export const getCompaniesByCategory = (category: Company['category']): Company[] => {
  return companiesData.filter(company => company.category === category);
};