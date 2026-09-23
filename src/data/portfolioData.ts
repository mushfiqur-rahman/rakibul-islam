export interface DocumentLink {
  title: string;
  url: string;
  type?: 'certificate' | 'transcript' | 'paper' | 'letter' | 'doc' | 'external';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  thesis?: string;
  thesisDoc?: string;
  concentration?: string[];
  minor?: string[];
  result?: string;
  documents: DocumentLink[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'accepted';
  volumeInfo?: string;
  doiOrUrl?: string;
  docUrl?: string;
  abstract: string;
  keywords: string[];
  bibtex: string;
}

export interface ConferenceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  date: string;
  year: number;
  category: 'international' | 'national' | 'competition';
  description?: string;
  documents: DocumentLink[];
  role?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: 'IEEE' | 'APNIC' | 'ICANN' | 'BYLCx' | 'Cisco' | 'Red Hat' | 'MikroTik' | 'Govt';
  code?: string;
  center?: string;
  docUrl?: string;
  category: string;
}

export interface MembershipItem {
  organization: string;
  chapter: string;
  role: string;
  memberId?: string;
  docUrl?: string;
}

export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  type: 'award' | 'fellowship' | 'scholarship' | 'grant';
  description: string;
  amountOrBenefit?: string;
  docUrl?: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tools: string[];
  docUrl?: string;
}

export interface ResourceItem {
  title: string;
  category: 'LaTeX' | 'Cloud Shell' | 'Publishing Template';
  description: string;
  url: string;
}

export const PERSONAL_INFO = {
  name: "Md. Rakibul Islam",
  nickname: "Rakib",
  role: "Academic Researcher & Network Systems Engineer",
  tagline: "Specializing in 5G Cellular Handover Optimization, Network Security, SDN & Distributed Cloud Systems",
  location: "Thunder Bay, Ontario, Canada",
  bio: "Computer Science and Engineering graduate from Green University of Bangladesh with over two years of rigorous academic research experience and multiple peer-reviewed publications. Passionate about 5G mobility management, network virtualization, and cybersecurity. Founding Chair of IEEE Computer Society Student Branch Chapter at GUB, global member of the Internet Society, and certified in Cisco, Red Hat Linux, and MikroTik networking architectures.",
  email: "mushfiq.style@gmail.com",
  secondaryEmail: "rakib248arin@gmail.com",
  phone: "+880 1700-000000",
  educationHighlight: "B.Sc. in CSE (Dec 2020), Green University of Bangladesh",
  thesisTitle: "Mobility Management in 5G Cellular Network Based on E-MOORA Algorithm",
  researchInterests: [
    "5G Cellular Mobility Management",
    "Network Security & CyberOps",
    "Software Defined Networking (SDN)",
    "Satellite Channels Allocation",
    "Cloud Computing & Virtualization",
    "Internet of Things (IoT) Solutions",
    "Device-to-Device (D2D) Communication",
    "System Administration & Linux"
  ],
  stats: [
    { label: "Research Papers", value: "3+" },
    { label: "Industry Certifications", value: "30+" },
    { label: "Conferences & Summits", value: "20+" },
    { label: "IEEE / ISOC Chapters", value: "8+" }
  ],
  profiles: [
    { name: "ResearchGate", url: "https://www.researchgate.net/profile/Md_Islam1028", category: "academic" },
    { name: "Google Scholar", url: "https://scholar.google.com/scholar?scilib=1", category: "academic" },
    { name: "ORCID", url: "https://orcid.org/0000-0003-1291-5059", category: "academic" },
    { name: "Academia.edu", url: "https://green.academia.edu/ARiNAHSANRAKiB", category: "academic" },
    { name: "Publons (ResearcherID)", url: "https://publons.com/researcher/3046599/md-rakibul-islam/", category: "academic" },
    { name: "MUN Yaffle", url: "https://mun.yaffle.ca/people/5405", category: "academic" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/md-rakibul-islam-37626a133/", category: "social" },
    { name: "Medium", url: "https://medium.com/@rakib248arin", category: "social" },
    { name: "Quora", url: "https://www.quora.com/profile/Md-Rakibul-Islam-82", category: "social" },
    { name: "beBee", url: "https://www.bebee.com/bee/md-rakibul-islam-dhaka-division", category: "social" },
    { name: "Facebook", url: "https://www.facebook.com/arinahsan.rakib", category: "social" },
    { name: "Instagram", url: "https://www.instagram.com/arinahsan_rakib/", category: "social" },
    { name: "Wix Personal Site", url: "https://rakibnh.wixsite.com/rakibnhgub", category: "archive" }
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Science (B.Sc.) in Computer Science and Engineering",
    institution: "Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    period: "2016 – Dec 2020",
    thesis: "Mobility Management in 5G Cellular Network Based on E-MOORA Algorithm",
    thesisDoc: "https://drive.google.com/file/d/1HqfnscLa8CQCmHQuzdT2t3skcJ5omx4u/view?usp=sharing",
    concentration: ["Computer Network", "TCP/IP Suite", "IPv6 Migration", "Topology Design"],
    minor: ["Networking Layers", "CDMA", "FTDMA", "TDMA Protocols"],
    result: "Graduated with Honors",
    documents: [
      {
        title: "B.Sc Thesis & Conference Paper",
        url: "https://drive.google.com/file/d/1HqfnscLa8CQCmHQuzdT2t3skcJ5omx4u/view?usp=sharing",
        type: "paper"
      }
    ]
  },
  {
    degree: "Higher Secondary School Certificate (H.S.C.) — Science Group",
    institution: "Hamidpur Al Hera College",
    location: "Jessore, Bangladesh",
    period: "2011 – 2013",
    result: "GPA 4.30 / 5.00",
    documents: [
      {
        title: "H.S.C Certificate",
        url: "https://drive.google.com/file/d/0BwOuMLEgMKgCNnJuMnZVSWJiRVk/view?usp=sharing",
        type: "certificate"
      },
      {
        title: "H.S.C Academic Transcript",
        url: "https://drive.google.com/file/d/0BwOuMLEgMKgCUlVSanRZbGU3TGM/view?usp=sharing",
        type: "transcript"
      }
    ]
  },
  {
    degree: "Secondary School Certificate (S.S.C.) — Science Group",
    institution: "Jaljhara Siddiquia Fadil Madrasah",
    location: "Manirampur, Jessore, Bangladesh",
    period: "2009 – 2011",
    result: "GPA 5.00 / 5.00 (Golden / Perfect GPA)",
    documents: [
      {
        title: "S.S.C Certificate",
        url: "https://drive.google.com/file/d/1IdlZK84Cu8nVgOxOx4C4E6Nw8CmgHXm0/view?usp=sharing",
        type: "certificate"
      },
      {
        title: "S.S.C Academic Transcript",
        url: "https://drive.google.com/file/d/1H5uz9AKJk5EgOAOilVf-dyn-20VJEYO-/view?usp=sharing",
        type: "transcript"
      }
    ]
  }
];

export const PUBLICATIONS_DATA: PublicationItem[] = [
  {
    id: "palas2021multicriteria",
    title: "Multi-criteria handover mobility management in 5G cellular network",
    authors: [
      "M. R. Palas",
      "Md. Rakibul Islam",
      "P. Roy",
      "M. A. Razzaque",
      "A. Alsanad",
      "S. A. AlQahtani",
      "M. M. Hassan"
    ],
    venue: "Computer Communications (Elsevier)",
    year: 2021,
    type: "journal",
    volumeInfo: "Vol. 174, pp. 81-91",
    doiOrUrl: "https://doi.org/10.1016/j.comcom.2021.04.015",
    docUrl: "https://drive.google.com/file/d/1HqfnscLa8CQCmHQuzdT2t3skcJ5omx4u/view?usp=sharing",
    abstract: "The 5G cellular network delivers ultra-high data rates, low latency, and massive connectivity through dense heterogeneous small cells. However, frequent and unnecessary handovers (HO) result in significant signaling overhead and dropped connections. This paper proposes a robust multi-criteria handover mobility management framework employing the Extended Multi-Objective Optimization on the basis of Ratio Analysis (E-MOORA) algorithm to make intelligent handover decisions factoring in signal strength, bandwidth, latency, velocity, and energy consumption.",
    keywords: ["5G cellular network", "Handover management", "Mobility management", "E-MOORA algorithm", "Heterogeneous small cells"],
    bibtex: `@article{palas2021multi,
  title={Multi-criteria handover mobility management in 5G cellular network},
  author={Palas, M.R. and Islam, Md. Rakibul and Roy, P. and Razzaque, M.A. and Alsanad, A. and AlQahtani, S.A. and Hassan, M.M.},
  journal={Computer Communications},
  volume={174},
  pages={81--91},
  year={2021},
  publisher={Elsevier},
  doi={10.1016/j.comcom.2021.04.015}
}`
  },
  {
    id: "islam2020smallcell",
    title: "Multi-Criteria Handover Mobility Management in 5G Small Cell Cellular Network",
    authors: ["Md. Rakibul Islam", "M. R. Palas", "M. A. Razzaque"],
    venue: "IEEE Computer Society Bangladesh Chapter Winter Symposium (IEEE CS BDC WS 2020)",
    year: 2020,
    type: "conference",
    volumeInfo: "IEEE CS BDC WS Proceedings",
    docUrl: "https://drive.google.com/file/d/1CjQhZur3z2Af4KS-1AuXTfKrsC3O__Zq/view?usp=sharing",
    abstract: "Presented research addressing the critical mobility challenges in 5G small cell topologies. The model incorporates multi-criteria metrics including RSSI, target base station capacity, user trajectory, and handover failure probability to minimize ping-pong effects and ensure seamless call handovers.",
    keywords: ["5G Small Cells", "Handover Decision", "IEEE Computer Society", "QoS"],
    bibtex: `@inproceedings{islam2020multicriteria,
  title={Multi-Criteria Handover Mobility Management in 5G Small Cell Cellular Network},
  author={Islam, Md. Rakibul and Palas, M. R. and Razzaque, M. A.},
  booktitle={2020 IEEE Computer Society Bangladesh Chapter Winter Symposium (IEEE CS BDC WS)},
  year={2020},
  organization={IEEE}
}`
  },
  {
    id: "islam2020smartagri",
    title: "Smart Agriculture for Rural Farmer By Using IoT",
    authors: ["Md. Rakibul Islam et al."],
    venue: "3rd International Conference on Food and Agricultural Economics (ICFAE), Alanya Alaaddin Keykubat University, Turkey",
    year: 2020,
    type: "accepted",
    docUrl: "https://drive.google.com/file/d/1HqfnscLa8CQCmHQuzdT2t3skcJ5omx4u/view",
    abstract: "A low-power IoT sensing architecture tailored for rural smallholder farmers. The system monitors soil moisture, temperature, and automated drip irrigation control with cellular telemetry, lowering costs while optimizing crop yields.",
    keywords: ["IoT", "Smart Agriculture", "Wireless Sensor Networks", "Rural Telemetry"],
    bibtex: `@inproceedings{islam2020smartagriculture,
  title={Smart Agriculture for Rural Farmer By Using IoT},
  author={Islam, Md. Rakibul and others},
  booktitle={3rd International Conference on Food and Agricultural Economics (ICFAE)},
  year={2020},
  address={Alanya, Turkey}
}`
  }
];

export const CONFERENCES_DATA: ConferenceItem[] = [
  // International
  {
    id: "aws-2020",
    title: "AWS Summit Online 2020",
    organization: "Amazon Web Services (AWS)",
    location: "Online / Global",
    date: "2020",
    year: 2020,
    category: "international",
    description: "Deep dive technical sessions on cloud architectures, VPC networking, enterprise container deployments, and serverless compute.",
    documents: [{ title: "AWS Summit Certificate", url: "https://drive.google.com/file/d/1uVBWfrVkawYAIIRBesuXvQfS2d4YsZG6/view?usp=sharing", type: "certificate" }]
  },
  {
    id: "resilient-youth-2020",
    title: "Resilient Youth Leadership Summit (Dhaka–OIC Youth Capital 2020)",
    organization: "Islamic Cooperation Youth Forum (ICYF), Ministry of Youth & Sports & Ministry of Foreign Affairs, Bangladesh",
    location: "Dhaka, Bangladesh",
    date: "27–28 July 2020",
    year: 2020,
    category: "international",
    description: "Selected youth delegate representing international youth development, crisis governance, and collaborative technology initiatives across OIC member nations.",
    documents: [{ title: "Summit Certificate", url: "https://drive.google.com/file/d/1adPoiL3IkBt-gjepGxg6n3HlQ9YIPPWR/view?usp=sharing", type: "certificate" }]
  },
  {
    id: "cambridge-rsdp-2020",
    title: "Bootcamp on Youth Leadership for Humanitarianism",
    organization: "Resilience and Sustainable Development Programme (RSDP), Institute for Manufacturing, University of Cambridge; with MoFA, UNHCR & IOM",
    location: "Cambridge RSDP / Bangladesh",
    date: "2020",
    year: 2020,
    category: "international",
    description: "Rigorous executive training on system resilience, disaster communication networks, and humanitarian data logistics.",
    documents: [{ title: "Bootcamp Certificate", url: "https://drive.google.com/file/d/16A8hVP_uQPrGVW32c0Mr39gfCvmiQXgr/view?usp=sharing", type: "certificate" }]
  },
  {
    id: "sti-2019",
    title: "Int'l Conference on Sustainable Technologies for Industry 4.0 (STI 2019)",
    organization: "Green University of Bangladesh",
    location: "Purbachal American City, Rupgonj, Bangladesh",
    date: "24–25 December 2019",
    year: 2019,
    category: "international",
    description: "International academic conference focusing on IoT, cybersecurity, automation, and 5G networking infrastructure.",
    documents: []
  },
  {
    id: "jbratrc-robotics-2019",
    title: "JBRATRC Workshop on Robotics (STI 2019)",
    organization: "Japan-Bangladesh Robotics & Advanced Technology Research Center",
    location: "Dhaka, Bangladesh",
    date: "December 2019",
    year: 2019,
    category: "international",
    description: "Hands-on training on autonomous sensor integration, real-time robotics telemetry, and microcontroller control systems.",
    documents: []
  },
  {
    id: "global-ai-bootcamp-2019",
    title: "Global AI Bootcamp 2019",
    organization: "Microsoft / Global AI Community",
    location: "Dhaka, Bangladesh",
    date: "14 December 2019",
    year: 2019,
    category: "international",
    description: "Worldwide full-day event delving into machine learning modeling, Azure cloud intelligence, and computer vision architectures.",
    documents: []
  },
  {
    id: "global-goals-2019",
    title: "Global Goals Summit 2019 — Top 150 Asia-Pacific Delegate",
    organization: "Youthnow / UN-HABITAT",
    location: "Grand Season Hotel, Kuala Lumpur, Malaysia",
    date: "20–22 January 2019",
    year: 2019,
    category: "international",
    role: "Global Goals Action Ambassador",
    description: "Honored among the Top 150 emerging leaders in the Asia-Pacific region advocating for Sustainable Development Goals, tech diplomacy, and connectivity.",
    documents: [{ title: "Acceptance Letter", url: "https://drive.google.com/file/d/1KSNQ5CITbF1MhSjh6ItNnPnjcZjQ9aIi/view?usp=sharing", type: "letter" }]
  },
  {
    id: "hpair-2018",
    title: "Harvard Project for Asian and International Relations (HPAIR 2018)",
    organization: "Harvard University & Sunway University",
    location: "Kuala Lumpur, Malaysia",
    date: "August 2018",
    year: 2018,
    category: "international",
    role: "International Delegate (Full Flight Sponsorship)",
    description: "Prestigious Harvard international conference uniting delegates across 60+ countries to address geopolitical technology shifts, energy transformation, and digital infrastructure.",
    documents: [
      { title: "Acceptance Letter", url: "https://drive.google.com/file/d/1kl8Ix3ix5Kyval1G8E6pgh-4NvtTeavu/view?usp=sharing", type: "letter" },
      { title: "Finance Support Letter", url: "https://drive.google.com/file/d/11u6Pnko8Gqq_UcRV5NFkVoCDkERk4ZeF/view?usp=sharing", type: "doc" },
      { title: "Visa Support Letter", url: "https://drive.google.com/file/d/1tEBlNMWlpzMRCpIgWR1DOwr3a0TUk1bw/view?usp=sharing", type: "doc" }
    ]
  },
  {
    id: "flc-2018",
    title: "Future Leader Congress 2018",
    organization: "United Nations ESCAP (UN ESCAP)",
    location: "Bangkok, Thailand",
    date: "2018",
    year: 2018,
    category: "international",
    role: "Selected Delegate",
    description: "High-level congress addressing socio-economic development and technological bridging across developing Asia-Pacific nations.",
    documents: [{ title: "Acceptance Letter", url: "https://drive.google.com/file/d/1O85MSIbNBrgzUkIE32mt-UCNxiSbXc1B/view?usp=sharing", type: "letter" }]
  },
  {
    id: "asia-student-summit-2018",
    title: "Asia Student Summit 2018",
    organization: "IYD & Asia Youth International",
    location: "Seoul, South Korea",
    date: "July 2018 (Sessions 1 & 2)",
    year: 2018,
    category: "international",
    description: "International symposium exploring Asian youth leadership, technological innovation, and academic exchange.",
    documents: [{ title: "Acceptance Letter", url: "https://drive.google.com/file/d/1PZQ8KyGvJNny6O0Uta79siNJ_dLaYP5h/view?usp=sharing", type: "letter" }]
  },
  {
    id: "apflc-2017",
    title: "Asia Pacific Future Leadership Conference (APFLC 2017)",
    organization: "Asia Pacific Future Leader Initiative",
    location: "Kuala Lumpur, Malaysia",
    date: "December 2017",
    year: 2017,
    category: "international",
    role: "Sponsored Delegate",
    description: "Keynote sessions by global venture leaders Sarah Chen & James Poon on technology entrepreneurship, scalable leadership, and regional innovation.",
    documents: [
      { title: "Conference Certificate", url: "https://drive.google.com/file/d/1D43lnfbLSVehNs1Vv961uBgKlM1kDNm-/view?usp=sharing", type: "certificate" },
      { title: "Offer Letter", url: "https://drive.google.com/file/d/1y9vbkTqonTTDdUiCx099qBR2pxsROYFC/view?usp=sharing", type: "letter" }
    ]
  },

  // National
  {
    id: "sdn-seminar-2019",
    title: "Software Defined Network (SDN) Seminar",
    organization: "IEEE SB & CS SBC, Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    date: "2019",
    year: 2019,
    category: "national",
    description: "Featuring Md. Ahsan Habib (IEEE CS BD Chapter Secretary) & Md. Habibur Rahman (Daffodil International) on OpenFlow protocols and network control planes.",
    documents: []
  },
  {
    id: "optimization-workshop-2019",
    title: "Workshop on Introduction to Optimization",
    organization: "Green University of Bangladesh City Campus",
    location: "Dhaka, Bangladesh",
    date: "19 June 2019",
    year: 2019,
    category: "national",
    description: "Led by Sujan Sarker (University of Dhaka), focusing on linear programming, mathematical modeling, and multi-objective heuristics.",
    documents: []
  },
  {
    id: "research-methodology-2019",
    title: "Seminar on Research Methodology",
    organization: "GUB Research Cell",
    location: "Dhaka, Bangladesh",
    date: "15 March 2019",
    year: 2019,
    category: "national",
    description: "Facilitated by Prof. Dr. Md. Abdur Razzaque, covering scientific hypothesis formulation, experiment design, and quantitative validation.",
    documents: []
  },
  {
    id: "latex-overleaf-2018",
    title: "Introduction to LaTeX, Overleaf & GUB Thesis Template",
    organization: "IEEE Student Branch GUB",
    location: "Dhaka, Bangladesh",
    date: "12 November 2018",
    year: 2018,
    category: "national",
    description: "Led by Ashaduzzaman, comprehensive training on scientific typesetting, BibTeX bibliographies, and university thesis preparation.",
    documents: []
  },
  {
    id: "it-professionals-2018",
    title: "IT Professionals Meetup 2018",
    organization: "Bangladesh Computer Council / ICT Division",
    location: "BICC, Dhaka, Bangladesh",
    date: "10 March 2018",
    year: 2018,
    category: "national",
    description: "National gathering of software architects, network engineers, and system administrators discussing national IT infrastructure.",
    documents: [{ title: "Meetup Certificate", url: "https://drive.google.com/file/d/13vf0Pj5dvn6UH4sKfdyJDN_hmMcAj5_j/view?usp=sharing", type: "certificate" }]
  },
  {
    id: "business-innovation-2018",
    title: "Business Innovation Summit 2018",
    organization: "BICC",
    location: "Dhaka, Bangladesh",
    date: "10 March 2018",
    year: 2018,
    category: "national",
    description: "Sessions on scalable startups, digital fintech transformation, and telecom monetization.",
    documents: [{ title: "Summit Certificate", url: "https://drive.google.com/file/d/1wY8MEfg0WqmifGz1CBBS1AD-aKTz6nXM/view?usp=sharing", type: "certificate" }]
  },
  {
    id: "topic-selection-2018",
    title: "How to Select a Research Topic in Computer Science",
    organization: "Green University of Bangladesh",
    location: "Dhaka, Bangladesh",
    date: "January 2018",
    year: 2018,
    category: "national",
    description: "Conducted by Dr. Saiful Azad (Universiti Malaysia Pahang), examining emerging literature gaps and research proposal formulation.",
    documents: []
  },
  {
    id: "scientific-paper-2017",
    title: "Writing and Publishing a Scientific Research Paper",
    organization: "GUB Research Division",
    location: "Dhaka, Bangladesh",
    date: "22 August 2017",
    year: 2017,
    category: "national",
    description: "Led by Prof. Dr. Md. Abdur Razzaque, exploring peer review mechanics, journal selection, and IEEE formatting standards.",
    documents: []
  },
  {
    id: "sdn-sddc-2016",
    title: "Software Defined Networking and Software Defined Data Centre",
    organization: "Green University CSE Dept",
    location: "Dhaka, Bangladesh",
    date: "2016",
    year: 2016,
    category: "national",
    description: "Presented by Md. Arman Hossain (UXC Connect, Sydney) on modern multi-tenant virtualized network fabric.",
    documents: []
  },
  {
    id: "cybersecurity-education-2016",
    title: "Cyber Security Awareness and Education",
    organization: "GUB",
    location: "Dhaka, Bangladesh",
    date: "2016",
    year: 2016,
    category: "national",
    description: "Conducted by Prof. Abdus Shamim Khan (CISSP, CISA, USA) addressing vulnerability vectors and intrusion response.",
    documents: []
  },

  // Competition
  {
    id: "cisco-competition-2020",
    title: "Cisco Networking Academy Skill Competition Bangladesh 2020",
    organization: "Cisco Networking Academy",
    location: "National / Bangladesh",
    date: "2020",
    year: 2020,
    category: "competition",
    role: "National Competitor",
    description: "Competitive national skill assessment evaluating advanced IP routing, switching configurations, subnetting design, and cybersecurity incident forensics.",
    documents: [{ title: "Competition Certificate", url: "https://drive.google.com/file/d/10Wo3ibs2nShp3qWkbdplPg48G72d_gDD/view?usp=sharing", type: "certificate" }]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  // Cisco & Enterprise Network
  {
    id: "ccna",
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    center: "PeopleNTech",
    docUrl: "https://drive.google.com/file/d/1SCturTr4wU7z2t280k9KHy8l8Q2tPtlw/view?usp=sharing",
    category: "Network Engineering"
  },
  {
    id: "cyberops",
    name: "Cisco Certified CyberOps Associate",
    issuer: "Cisco",
    center: "AT Computer Solutions",
    docUrl: "https://drive.google.com/file/d/1iD8LtM8Ajt7PRZbW2FlEq_6CbBDdmAF4/view?usp=sharing",
    category: "Cybersecurity & SOC"
  },
  {
    id: "ccnp-sec",
    name: "Cisco Certified Network Professionals, Security (Trainee)",
    issuer: "Cisco",
    center: "AT Computer Solutions",
    category: "Network Security"
  },
  {
    id: "rhcsa-openstack",
    name: "RHCSA in Red Hat OpenStack",
    issuer: "Red Hat",
    center: "OpenStack Bangladesh Chapter",
    docUrl: "https://drive.google.com/file/d/1e2SDVOvwshqxb24FWtCwWeuDH91TlhmY/view?usp=sharing",
    category: "Cloud Infrastructure"
  },
  {
    id: "rhce",
    name: "Red Hat Certified Engineer (RHCE)",
    issuer: "Red Hat",
    center: "BITM (BASIS Institute of Technology & Management)",
    category: "Linux Administration"
  },
  {
    id: "rhcsa",
    name: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    center: "BITM (BASIS Institute of Technology & Management)",
    category: "Linux Administration"
  },
  {
    id: "mtcna",
    name: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik",
    center: "AT Computer Solutions",
    category: "Routing & ISP Management"
  },

  // IEEE Certifications
  {
    id: "ieee-cloud",
    name: "Cloud Computing: Introduction",
    issuer: "IEEE",
    docUrl: "https://drive.google.com/file/d/1C4pRBOL5yoSoTpq9jSBvoFSRK4Z759PQ/view?usp=sharing",
    category: "Cloud Computing"
  },
  {
    id: "ieee-cyber-fundamentals",
    name: "System Fundamentals for Cyber Security",
    issuer: "IEEE",
    docUrl: "https://drive.google.com/file/d/1VDlAdsuVcsSi4ASf_GMxgH1zKFGcBh8R/view?usp=sharing",
    category: "Cybersecurity"
  },
  {
    id: "ieee-4g-lte",
    name: "4G Broadband LTE",
    issuer: "IEEE",
    docUrl: "https://drive.google.com/file/d/1nNr39pCTGKun13pygOWwD4CcSO2U3HN-/view?usp=sharing",
    category: "Wireless Communications"
  },
  {
    id: "ieee-leadership",
    name: "An Introduction to Leadership: A Primer for the Practitioner",
    issuer: "IEEE",
    docUrl: "https://drive.google.com/file/d/1Ylfb_RC56oeuNO6NKXKwG1UYkdSICci1/view?usp=sharing",
    category: "Leadership & Management"
  },
  {
    id: "ieee-patent",
    name: "Fundamentals of Patent Protection for Engineers",
    issuer: "IEEE",
    docUrl: "https://drive.google.com/file/d/1W7IsnNuwru7d5r3dpaaKzJMcbG-txbcw/view?usp=sharing",
    category: "Intellectual Property"
  },

  // APNIC Certifications
  {
    id: "apnic-cyber",
    name: "Introduction to Cybersecurity",
    issuer: "APNIC",
    docUrl: "https://drive.google.com/file/d/1SgGtGq2Bd7T_dxLbTyTv7PBPuD9pKuOS/view?usp=sharing",
    category: "Network Security"
  },
  {
    id: "apnic-policy",
    name: "Policy Development Process",
    issuer: "APNIC",
    docUrl: "https://drive.google.com/file/d/1XAqOONo1cC8BY4lRo8HaXffkcQy3Ir0G/view?usp=sharing",
    category: "Internet Governance"
  },
  {
    id: "apnic-routing",
    name: "Routing Basics Course",
    issuer: "APNIC",
    docUrl: "https://drive.google.com/file/d/1OHHAvh6Ig-V705DWEH0fT9AhPod434Iq/view?usp=sharing",
    category: "IP Routing"
  },
  {
    id: "apnic-net-sec",
    name: "Network Security Fundamentals",
    issuer: "APNIC",
    docUrl: "https://drive.google.com/file/d/18HhDldKxRGVdND__eQpnpztuWeCLEl2R/view?usp=sharing",
    category: "Network Security"
  },

  // ICANN (Internet Corporation for Assigned Names and Numbers)
  {
    id: "icann-102",
    code: "102.1",
    name: "Introduction to ICANN",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1rvZe-lCzTf-1bKsJwWs-OrSOvdwIB7lF/view?usp=sharing",
    category: "Internet Governance"
  },
  {
    id: "icann-111",
    code: "111.1",
    name: "Domain Names Demystified",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1nDP6FCS12JnAKmmiH9TEWQr7LcSBrA4P/view?usp=sharing",
    category: "DNS Architecture"
  },
  {
    id: "icann-131",
    code: "131.1",
    name: "Introduction to the GNSO",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1BQYnnpariPfGFkcv0XHXkM0tZt_ww6_O/view?usp=sharing",
    category: "Internet Governance"
  },
  {
    id: "icann-134",
    code: "134.1",
    name: "Get to Know ICANN for Business",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/13sSpEd-JshQT1gIBGdxK8l6zJL4tNrQE/view?usp=sharing",
    category: "Business Strategy"
  },
  {
    id: "icann-150",
    code: "150.1",
    name: "Onboarding: ccNSO",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1lQxgR1ndkD4FdlmDY-BHh_03KUkEXieh/view?usp=sharing",
    category: "Country Code TLDs"
  },
  {
    id: "icann-151",
    code: "151.1",
    name: "Onboarding: ISPCP",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1ZZMW8Fp9-N7cKfeJ_FfpA3e6JP234Nw_/view?usp=sharing",
    category: "ISP Protocols"
  },
  {
    id: "icann-152",
    code: "152.1",
    name: "Onboarding: IPC",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/15tCPkrLmi84WltQL5FsddxIGHio0mris/view?usp=sharing",
    category: "IP Constituency"
  },
  {
    id: "icann-153",
    code: "153.1",
    name: "Onboarding: GAC",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1byWzgdiUpt9rSFcHUdaQpQxgv3vnCg1U/view?usp=sharing",
    category: "Gov Advisory Committee"
  },
  {
    id: "icann-200",
    code: "200.1",
    name: "Visual Guide to the History of the Internet",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1pBPh4qy5L2XTmoT_LTRQb3V287Q3xtlU/view?usp=sharing",
    category: "Internet History"
  },
  {
    id: "icann-304",
    code: "304.1",
    name: "Organizational Reviews: Key Resources",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1ZgoBZCspWL5r_a72mbzqUFzxBYx0Fd2T/view?usp=sharing",
    category: "Governance Review"
  },
  {
    id: "icann-305",
    code: "305.1",
    name: "Specific Reviews: Key Resources",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1IoDWQVlePsm7AoOXNL-TH0k4avrGYF3p/view?usp=sharing",
    category: "Governance Review"
  },
  {
    id: "icann-400",
    code: "400.1",
    name: "Cybersecurity Basics",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1UW4DJ4oooQA5sMRacnzYr0HFmf3Lmtyk/view?usp=sharing",
    category: "Cybersecurity"
  },
  {
    id: "icann-500",
    code: "500.1",
    name: "Internet Diplomacy",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1hlijGFD08LVgwG8EUlYAKBcbU_66FWWB/view?usp=sharing",
    category: "Policy & Diplomacy"
  },
  {
    id: "icann-600",
    code: "600.1",
    name: "RAA Registrar Training",
    issuer: "ICANN",
    docUrl: "https://drive.google.com/file/d/1LpbrOzpkDca_MKaBWa3I6cWnAvsE2leM/view?usp=sharing",
    category: "Registrar Accreditation"
  },

  // BYLCx Certifications
  {
    id: "bylcx-emails",
    name: "Writing Professional Emails",
    issuer: "BYLCx",
    docUrl: "https://drive.google.com/file/d/1bW-UMMuy_GGtryLEBD4b0J441o5YDFui/view?usp=sharing",
    category: "Professional Communication"
  },
  {
    id: "bylcx-creative",
    name: "Creative Thinking in a Rapidly Changing Workplace",
    issuer: "BYLCx",
    docUrl: "https://drive.google.com/file/d/1ZMRCk6yH_Vp4kKe9HvotB56PCDxnAg_N/view?usp=sharing",
    category: "Workplace Innovation"
  },
  {
    id: "bylcx-sql",
    name: "SQL for Data Science",
    issuer: "BYLCx",
    docUrl: "https://drive.google.com/file/d/19p6d3C9-nddU37iJC1bTvVPp91kSW3X5/view?usp=sharing",
    category: "Data Science"
  },
  {
    id: "bylcx-citizenship",
    name: "Digital Citizenship",
    issuer: "BYLCx",
    docUrl: "https://drive.google.com/file/d/1x9vyhHr4px8t6Ms1NugSSLxRJ_vs4ZOX/view?usp=sharing",
    category: "Digital Ethics"
  },
  {
    id: "bylcx-storytelling",
    name: "Storytelling in the 21st Century",
    issuer: "BYLCx",
    docUrl: "https://drive.google.com/file/d/1c77tbUrrqQwT0rM86VET3XQ1KZ0TMS8m/view?usp=sharing",
    category: "Communication"
  },

  // Government & Health
  {
    id: "gov-covid",
    name: "Coronavirus Diseases (COVID-19) Prevention",
    issuer: "Govt",
    docUrl: "https://drive.google.com/file/d/1fXj6LLoTo9DAlf_DRibrq2myXFfvWXia/view?usp=sharing",
    category: "Public Health Awareness"
  }
];

export const MEMBERSHIPS_DATA: MembershipItem[] = [
  {
    organization: "Internet Society (ISOC)",
    chapter: "Global Membership",
    role: "Global Member",
    memberId: "2176707"
  },
  {
    organization: "Internet Society (ISOC)",
    chapter: "Bangladesh Chapter (Region Asia-Pacific)",
    role: "Chapter Member",
    docUrl: "https://drive.google.com/file/d/142zVHFtir3E3qfCeMEN-1lQBnDDBfki0/view?usp=sharing"
  },
  {
    organization: "Internet Society (ISOC)",
    chapter: "Canada Chapter",
    role: "Member",
    docUrl: "https://drive.google.com/file/d/1nzK_ORLLPcjnc5X1Rk1GT5X27GGizbAd/view"
  },
  {
    organization: "Internet Society (ISOC)",
    chapter: "Canada Québec Chapter",
    role: "Member",
    docUrl: "https://drive.google.com/file/d/1ueGSh0ii91jTItbGXThWaklFnf8yVhI5/view?usp=sharing"
  },
  {
    organization: "Internet Society (ISOC)",
    chapter: "Netherlands Chapter",
    role: "Member",
    docUrl: "https://drive.google.com/file/d/1JgquAg-RD6chiFVwdxEK4vUgZfVvxZHp/view?usp=sharing"
  },
  {
    organization: "Internet Society (ISOC)",
    chapter: "Japan Chapter",
    role: "Member",
    docUrl: "https://drive.google.com/file/d/1Y4l0wGQhAwrdQBvxQOOKSV26hIHrTHhp/view?usp=sharing"
  },
  {
    organization: "Internet Society (ISOC)",
    chapter: "Cybersecurity Special Interest Group (SIG)",
    role: "Special Interest Member",
    docUrl: "https://drive.google.com/file/d/1vngAzKJOxg4fQ_ggoL_u68wgZU34WY_x/view?usp=sharing"
  },
  {
    organization: "Internet Society (ISOC)",
    chapter: "InterPlanetary Networking SIG (IPNSIG)",
    role: "Special Interest Member",
    docUrl: "https://drive.google.com/file/d/1Ayeme7h21b7XRsTyG_BRhDe5DLYmc4Sv/view?usp=sharing"
  },
  {
    organization: "IEEE",
    chapter: "Region 10 – Asia and Pacific / Section: Bangladesh",
    role: "Active Member",
    docUrl: "https://drive.google.com/file/d/1qVFCQUERGEQ_87WC52TbfTq-MaojxAP9/view?usp=sharing"
  },
  {
    organization: "IEEE Computer Society",
    chapter: "Bangladesh Chapter",
    role: "Member",
    memberId: "95617491",
    docUrl: "https://drive.google.com/file/d/1YHA9AYcS8QPmFmgaCZ5BXGX-3077CwSA/view?usp=sharing"
  },
  {
    organization: "IEEE",
    chapter: "General Membership",
    role: "Member",
    docUrl: "https://drive.google.com/file/d/1PUzaNVui1J1xFhrKQTVp-k67ZkakaLT4/view?usp=sharing"
  }
];

export const LEADERSHIP_DATA = [
  {
    title: "Founding Chair",
    organization: "IEEE Computer Society Student Branch Chapter, Green University of Bangladesh (GUB)",
    year: "2019",
    description: "Pioneered and established the official IEEE Computer Society Student Branch Chapter at Green University of Bangladesh. Led technical seminars, national hackathons, and research mentorship programs.",
    documents: [
      { title: "Founding Chapter Document", url: "https://drive.google.com/file/d/1M2_T2e_qu457k8sWvdx0LEG1X-2npYbS/view?usp=sharing", type: "doc" },
      { title: "Establishment Docs", url: "https://drive.google.com/file/d/1qPXEGwPaTdqdQAwp7pQOAcx3k482NRs0/view?usp=sharing", type: "doc" }
    ]
  },
  {
    title: "Official Ambassador",
    organization: "International Youth Math Challenge (IYMC 2019)",
    year: "2019",
    description: "Coordinated university-level qualification rounds and supported mathematical problem solving among engineering undergraduates.",
    documents: [
      { title: "IYMC Ambassador Certificate", url: "https://drive.google.com/file/d/1-sX2kZzrygRUpCgUD1JfD1I1BEg7c5_v/view?usp=sharing", type: "certificate" }
    ]
  },
  {
    title: "Official Ambassador",
    organization: "International Astronomy and Astrophysics Competition (IAAC 2019)",
    year: "2019",
    description: "Encouraged scientific inquiry and promoted astronomical calculation challenges across student chapters.",
    documents: [
      { title: "IAAC Ambassador Certificate", url: "https://drive.google.com/file/d/1VsZzs9MjPYVg3Eyh7f8psht26Bv_CKnC/view?usp=sharing", type: "certificate" }
    ]
  },
  {
    title: "Information Secretary",
    organization: "Green University Computer Club (GUCC)",
    year: "2019",
    description: "Managed university-wide technical communications, workshop registrations, tech fairs, and programming contest logistical updates.",
    documents: [
      { title: "Appointment Document", url: "https://drive.google.com/file/d/1ddx-pDry44clp-EPxZu2gu9MpqsJPCFZ/view", type: "doc" }
    ]
  },
  {
    title: "Campus Director",
    organization: "Hult Prize at Green University of Bangladesh",
    year: "2018",
    description: "Organized the on-campus round for the world's largest student social entrepreneurship competition ('the Nobel Prize for students').",
    documents: [
      { title: "Campus Director Document", url: "https://drive.google.com/file/d/1zJR3V3ROpb3MrNxLjFHPzuUwr33bBpCR/view?usp=sharing", type: "doc" }
    ]
  },
  {
    title: "Campus Ambassador",
    organization: "Project Alokitoshishu (garbobangladesh.com)",
    year: "2017",
    description: "Advocated for child rights, underprivileged youth education, and grassroots community literacy drives.",
    documents: []
  },
  {
    title: "National & Regional Math Olympiad Placer",
    organization: "Bangladesh Mathematical Olympiad",
    year: "School & College Years",
    description: "Active competitor and prize winner in national and regional mathematical olympiad contests.",
    documents: [
      { title: "Olympiad Document", url: "https://drive.google.com/file/d/0BwOuMLEgMKgCcEtObjNsWENlNGFyelNNV0pfOXBFQkJFNFF3/view?usp=sharing", type: "doc" }
    ]
  },
  {
    title: "Theatrical Actor",
    organization: "Protifolon Cultural Academy",
    year: "2003 – 2006",
    description: "Participated as a stage performer and dramatic actor in classical and contemporary theatrical productions.",
    documents: []
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    title: "Best Student Branch Chapter Award",
    issuer: "IEEE Computer Society Bangladesh Chapter",
    year: "2019",
    type: "award",
    description: "Recognized as the most outstanding IEEE Computer Society student branch chapter in Bangladesh for exceptional technical workshops, member growth, and research engagement under founding leadership.",
    docUrl: "https://drive.google.com/file/d/1XbznFd8aDZWKHVXAQq3d6QvkxzlebLg7/view?usp=sharing"
  },
  {
    title: "Outstanding Volunteer Award",
    issuer: "IEEE Computer Society Bangladesh Chapter",
    year: "2019",
    type: "award",
    description: "Conferred for tireless community service, student mentorship, and leadership in elevating computer science student chapters nationwide.",
    docUrl: "https://drive.google.com/file/d/1W6kaKwXBguRz3SOuC6ZA4sdB7kiLh8EM/view?usp=sharing"
  },
  {
    title: "Server Administration and Cloud Management Fellowship",
    issuer: "BITM SEIP Project (Ministry of ICT & Finance, Bangladesh)",
    year: "Feb – May 2019",
    type: "fellowship",
    description: "Highly competitive national research fellowship and grant in enterprise Linux server administration, cloud deployment, and system security.",
    amountOrBenefit: "Grant: 9,223 BDT Stipend"
  },
  {
    title: "Harvard Project for Asian and International Relations (HPAIR 2018) Travel Grant",
    issuer: "US-Bangla Airlines",
    year: "Aug 2018",
    type: "grant",
    description: "Awarded full international round-trip air ticket sponsorship to participate as a delegate at HPAIR 2018 in Kuala Lumpur, Malaysia.",
    amountOrBenefit: "Full Round-Trip Air Travel"
  },
  {
    title: "Asia Pacific Future Leadership Conference (APFLC 2017) Travel Grant",
    issuer: "US-Bangla Airlines",
    year: "Dec 2017",
    type: "grant",
    description: "Awarded sponsored international round-trip air ticket to attend the APFLC leadership summit in Malaysia.",
    amountOrBenefit: "Full Round-Trip Air Travel"
  },
  {
    title: "Master's International Scholarship",
    issuer: "Asia Pacific University (APU), Malaysia",
    year: "Postgraduate Offer",
    type: "scholarship",
    description: "Merit-based postgraduate scholarship for advanced Master's studies in Computer Science / Technology.",
    docUrl: "https://drive.google.com/file/d/1lJty4J62lVxVpQloFphg8H827IUi82Fd/view?usp=sharing"
  },
  {
    title: "Master's International Scholarship",
    issuer: "Staffordshire University, United Kingdom",
    year: "Postgraduate Offer",
    type: "scholarship",
    description: "Postgraduate international academic scholarship for graduate study in computing and digital systems.",
    docUrl: "https://drive.google.com/file/d/1lJty4J62lVxVpQloFphg8H827IUi82Fd/view?usp=sharing"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Firewall Configuration & Network Security Proposal",
    category: "Enterprise Network Security",
    description: "A comprehensive network security proposal and Cisco Packet Tracer implementation tailored for small to medium enterprise offices. Engineered DMZ zoning, access control lists (ACLs), stateful inspection policies, NAT/PAT translation, and port security against unauthorized intrusion.",
    tools: ["Cisco Packet Tracer", "Cisco ASA Firewall", "ACL Rules", "NAT/PAT", "DMZ Architecture"],
    docUrl: "https://drive.google.com/file/d/12WcP-z84udXGtoiIfIJgTQqcsJZ9lj10/view?usp=sharing"
  },
  {
    title: "5G E-MOORA Handover Mobility Management Simulation",
    category: "Cellular & Wireless Communications",
    description: "Simulation testbed evaluating handover performance across heterogeneous 5G microcell clusters. Integrated multi-criteria attributes including received signal strength (RSS), speed, traffic load, and bandwidth to avoid unnecessary ping-pong handovers.",
    tools: ["MATLAB", "E-MOORA Algorithm", "5G Small Cells", "Mobility Management", "QoS Optimization"],
    docUrl: "https://drive.google.com/file/d/1HqfnscLa8CQCmHQuzdT2t3skcJ5omx4u/view?usp=sharing"
  },
  {
    title: "IoT Smart Agriculture Telemetry Node",
    category: "Embedded Systems & IoT",
    description: "End-to-end low power remote crop monitoring framework linking microcontrollers, moisture sensors, and GSM/cellular telemetry to an automated cloud dashboard for agricultural optimization in rural farming sectors.",
    tools: ["IoT Sensors", "GSM / Cellular Telemetry", "Arduino / Microcontroller", "Cloud Database"],
    docUrl: "https://drive.google.com/file/d/1HqfnscLa8CQCmHQuzdT2t3skcJ5omx4u/view"
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  // Google Cloud Shell Guides
  {
    title: "GCP NAT (Network Address Translation) Configuration",
    category: "Cloud Shell",
    description: "Step-by-step terminal commands and network routing instructions for configuring Cloud NAT on Google Cloud Platform.",
    url: "https://drive.google.com/file/d/1oNN9rLybqjw4X6g_3N1NtHZf0TnRIwje/view?usp=sharing"
  },
  {
    title: "GCP Virtual Machine (VM) Provisioning & Management",
    category: "Cloud Shell",
    description: "Command-line scripts to create, configure firewalls, and manage compute engine instances in Google Cloud Shell.",
    url: "https://drive.google.com/file/d/13V2wJBPdXygG16zR4rFVIEYFYia5H4gw/view?usp=sharing"
  },
  {
    title: "GCP VPC (Virtual Private Cloud) Networking Guide",
    category: "Cloud Shell",
    description: "Architectural blueprint for custom subnets, peering, route tables, and firewall rules in Google Cloud Platform.",
    url: "https://drive.google.com/file/d/1Q1ncJXJz2yo3nvWHSYlDDrKMaH0Cz4ze/view?usp=sharing"
  },
  {
    title: "Comprehensive Google Cloud Platform Command Line Cheatsheet",
    category: "Cloud Shell",
    description: "Handcrafted master cheatsheet summarizing critical gcloud CLI commands for IAM, storage, networks, and compute.",
    url: "https://drive.google.com/file/d/1RlZlxgOOQ92-udCNm4I-hs1A-EJrw4Bg/view?usp=sharing"
  },

  // LaTeX Templates for GUB Students
  {
    title: "GUB Official Thesis & Final Year Project Book Template",
    category: "LaTeX",
    description: "Standardized LaTeX typesetting package for Green University undergraduate and graduate thesis submissions.",
    url: "https://drive.google.com/open?id=1WUHT-fxgFgHg6fMXLeuuL8kPQdGU6C6J"
  },
  {
    title: "GUB Assignment & Lab Report Template",
    category: "LaTeX",
    description: "Clean, elegant LaTeX document template with pre-styled title page, code listing, and tabular math environments.",
    url: "https://drive.google.com/open?id=1ld6Z0KR_I_mYOzmM6HvOw4lV83bpgrXn"
  },
  {
    title: "GUB Journal Article Template",
    category: "LaTeX",
    description: "Two-column academic article format adhering to departmental publication guidelines.",
    url: "https://drive.google.com/open?id=1uQ2xvYWYLQxlq1Jj58aEHYkUTr-pJW1x"
  },

  // LaTeX Tutorials & Helpers
  {
    title: "Learn LaTeX in 30 Minutes (Overleaf Guide)",
    category: "LaTeX",
    description: "Curated quickstart guide to mastering mathematical typesetting, citations, and structural cross-references.",
    url: "https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes"
  },
  {
    title: "LaTeX Table Generator Tool",
    category: "LaTeX",
    description: "Interactive visual tool to generate error-free LaTeX table syntax with custom borders and alignments.",
    url: "https://www.tablesgenerator.com/"
  },
  {
    title: "How to Write Algorithms in LaTeX",
    category: "LaTeX",
    description: "Step-by-step tutorial on using algorithm2e and algorithmicx packages with pseudo-code formatting.",
    url: "http://shantoroy.com/latex/how-to-write-algorithm-in-latex/"
  },

  // Publishing Templates
  {
    title: "IEEE Conference Template in Overleaf (Option 1)",
    category: "Publishing Template",
    description: "Cloud-ready Overleaf template for preparing papers destined for IEEE sponsored conferences and symposia.",
    url: "https://www.overleaf.com/latex/templates/preparation-of-papers-for-ieee-sponsored-conferences-and-symposia/zfnqfzzzxghk"
  },
  {
    title: "IEEE Conference Template in Overleaf (Option 2)",
    category: "Publishing Template",
    description: "Alternative IEEE conference paper structure with sample figure macros and reference styles.",
    url: "https://www.overleaf.com/latex/templates/ieee-conference-template-example/nsncsyjfmpxy"
  },
  {
    title: "IEEE Official Conference Publishing Templates Hub",
    category: "Publishing Template",
    description: "Official IEEE portal containing the latest standard LaTeX and Microsoft Word templates for authors.",
    url: "https://www.ieee.org/conferences/publishing/templates.html"
  },
  {
    title: "IEEE Transactions & Journal Template in Overleaf",
    category: "Publishing Template",
    description: "Standard peer-reviewed IEEE journal template supporting author bios, complex equations, and double-blind setups.",
    url: "https://www.overleaf.com/latex/templates/ieee-journal-paper-template/jbbbdkztwxrd"
  },
  {
    title: "Elsevier Article Template for Peer Review",
    category: "Publishing Template",
    description: "Official Elsevier article class with modern bibtex bibliography styling for scientific journals.",
    url: "https://www.overleaf.com/latex/templates/elsevier-article-template-with-different-bibliography-styles/npwqmwvhvvrk"
  },
  {
    title: "Springer Book Chapter & Conference Template",
    category: "Publishing Template",
    description: "Standard LNCS (Lecture Notes in Computer Science) Springer book chapter and proceedings template.",
    url: "https://www.overleaf.com/latex/templates/springer-book-chapter/hrdcrfynnzjn"
  }
];

export const GALLERY_EVENTS = [
  {
    id: "g1",
    title: "Founding Ceremony of IEEE CS Student Branch Chapter",
    location: "Green University of Bangladesh",
    year: "2019",
    category: "Leadership",
    description: "Establishing the IEEE Computer Society Student Branch Chapter as Founding Chair with departmental heads and student members."
  },
  {
    id: "g2",
    title: "Harvard Project for Asian and International Relations (HPAIR 2018)",
    location: "Sunway University, Malaysia",
    year: "2018",
    category: "International Summit",
    description: "Engaging in global international dialogue with student delegates and global technology thinkers."
  },
  {
    id: "g3",
    title: "Global Goals Summit 2019 Delegation",
    location: "Kuala Lumpur, Malaysia",
    year: "2019",
    category: "International Summit",
    description: "Representing Bangladesh as a Top 150 Asia-Pacific youth delegate for UN SDGs."
  },
  {
    id: "g4",
    title: "IEEE CS Bangladesh Chapter Winter Symposium (IEEE CS BDC WS)",
    location: "Dhaka, Bangladesh",
    year: "2020",
    category: "Research Presentation",
    description: "Presenting peer-reviewed paper on 5G small cell handover mobility management."
  },
  {
    id: "g5",
    title: "Asia Pacific Future Leadership Conference (APFLC)",
    location: "Kuala Lumpur, Malaysia",
    year: "2017",
    category: "International Summit",
    description: "Attending leadership masterclasses sponsored by US-Bangla Airlines."
  },
  {
    id: "g6",
    title: "Cambridge RSDP Humanitarian Leadership Bootcamp",
    location: "Online / Cambridge RSDP",
    year: "2020",
    category: "Academic Training",
    description: "Intensive systems training on humanitarian resilience with University of Cambridge RSDP."
  },
  {
    id: "g7",
    title: "Green University Computer Club & Hackathon Organization",
    location: "Green University Campus",
    year: "2019",
    category: "Campus Leadership",
    description: "Organizing coding contests, LaTeX workshops, and computing seminars as Information Secretary."
  },
  {
    id: "g8",
    title: "Cisco Networking Skill Competition Assessment",
    location: "Cisco Academy Lab",
    year: "2020",
    category: "Engineering Competition",
    description: "Executing complex packet routing, firewall security, and subnetting topologies."
  }
];
