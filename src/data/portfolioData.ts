export interface Project {
  id: string;
  title: string;
  subtitle: string;
  technologies: string[];
  description: string;
  highlights: string[];
  image: string;
  category: 'AI/ML' | 'Web' | 'Data Analytics' | 'Python App';
  githubUrl?: string;
  liveDemoUrl?: string;
  hasResearchPaper?: boolean;
  researchPaperTitle?: string;
  demoType: 'interview' | 'stress' | 'analytics' | 'taskmanager';
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  period: string;
  badgeCode?: string;
  category: 'AI' | 'Database' | 'Programming' | 'Cybersecurity' | 'Soft Skills';
  skillsGained: string[];
}

export interface Achievement {
  id: string;
  title: string;
  badge: string;
  organization: string;
  description: string;
  metric?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface PortfolioDataType {
  personal: {
    name: string;
    role: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    cgpa: string;
    degree: string;
    college: string;
    summary: string;
    photo?: string;
    originalPhoto: string;
    executivePortrait?: string;
    executiveFormal?: string;
    executiveSmile?: string;
    originalCloseUp?: string;
    resumes: {
      title: string;
      filename: string;
      url: string;
      badge: string;
    }[];
  };
  achievements: Achievement[];
  internships: Internship[];
  projects: Project[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  education: {
    degree: string;
    duration: string;
    college: string;
    location: string;
    cgpa: string;
    scale: string;
    keyCourses: string[];
  };
  languages: { name: string; level: string; stars: number }[];
  declaration: string;
}

export const PORTFOLIO_DATA: PortfolioDataType = {
  personal: {
    name: "Sakshi Shridhar Chinta",
    role: "Computer Science & Engineering Graduate | AI/ML & Python Developer",
    location: "Solapur, Maharashtra, India",
    phone: "+91 9022511674",
    email: "chintasakshi30@gmail.com",
    linkedin: "https://www.linkedin.com/in/sakshi-chinta",
    github: "https://github.com/sakshichinta",
    cgpa: "8.32",
    degree: "Bachelor of Technology (Computer Science & Engineering) - 2026",
    college: "Shree Siddheshwar Women's College of Engineering, Solapur",
    summary:
      "Computer Science & Engineering graduate with hands-on experience in Python, SQL, MySQL, and AI/ML fundamentals. Strong foundation in Object-Oriented Programming (OOP), problem-solving, and database concepts, coupled with practical experience through corporate internships and full-stack AI projects. Detail-oriented in data annotation, quality validation, and delivering robust software solutions.",
    photo: "/assets/aistudio/Professional_Portrait_in_Blazer_and_White_Shirt_baf7f985.png",
    originalPhoto: "/assets/aistudio/Professional_Portrait_in_Blazer_and_White_Shirt_baf7f985.png",
    originalCloseUp: "/assets/aistudio/Professional_Portrait_in_Blazer_and_White_Shirt_baf7f985.png",
    resumes: [
      {
        title: "AI & ML Focused Resume",
        filename: "Sakshi_ChintaAI_1238fd5d.pdf",
        url: "/assets/aistudio/Sakshi_ChintaAI_1238fd5d.pdf",
        badge: "AI/ML & Data Focus"
      },
      {
        title: "Software Developer Resume",
        filename: "Sakshi_ChintaD_69b120d2.pdf",
        url: "/assets/aistudio/Sakshi_ChintaD_69b120d2.pdf",
        badge: "Developer & Core CS Focus"
      }
    ]
  },

  achievements: [
    {
      id: "codevita",
      title: "TCS CodeVita Season 13 Global Rank",
      badge: "Global Rank 3458",
      organization: "Tata Consultancy Services (TCS)",
      description: "Competed globally alongside tens of thousands of international engineering competitors in algorithmic problem-solving and competitive programming.",
      metric: "Rank #3458 Worldwide"
    },
    {
      id: "research-paper",
      title: "Authored Research Paper on AI Interview Platform",
      badge: "Published Research Author",
      organization: "Computer Science Research Journal",
      description: "Researched, authored, and presented a paper detailing automated natural language evaluation and topic-wise algorithmic question delivery for candidate preparation.",
      metric: "Peer Reviewed"
    }
  ],

  internships: [
    {
      id: "interlace",
      role: "Python & MySQL Intern",
      company: "Interlace IT",
      location: "Solapur, Maharashtra",
      period: "2024",
      summary: "Completed a specialized engineering internship focusing on Python programming, algorithmic logic building, and MySQL relational database design, indexing, and querying.",
      responsibilities: [
        "Authored modular Python scripts for automated backend data processing and workflow routines.",
        "Learned relational database fundamentals, entity-relationship table schemas, constraints, and indexing in MySQL.",
        "Engineered optimized SQL & MySQL queries for multi-table joins, subqueries, and secure data retrieval.",
        "Conducted code refactoring and bug fixing across internal client applications using VS Code and MySQL Workbench."
      ],
      technologies: ["Python", "MySQL", "SQL", "VS Code", "MySQL Workbench"],
      achievements: [
        "Streamlined query performance by structuring normalized MySQL relational schemas.",
        "Built automated Python data ingestion routines reducing manual formatting time."
      ]
    },
    {
      id: "kill-spiders",
      role: "Data Analytics Intern",
      company: "Kill Spiders (Institute)",
      location: "Pune, Maharashtra",
      period: "2024",
      summary: "Comprehensive technical and practical project internship at Kill Spiders Institute, applying Python, SQL, Excel, and Power BI to solve real-world data retrieval, transformation, statistical reporting, and business analytics challenges.",
      responsibilities: [
        "Developed and executed complex SQL queries for data aggregation, KPI reporting, and trend discovery.",
        "Performed data cleansing, missing-value imputation, and schema transformation using Python Pandas & NumPy.",
        "Built interactive visual business intelligence dashboards in Power BI and Microsoft Excel.",
        "Strengthened algorithmic problem-solving and analytical thinking through intensive assignments and practical projects."
      ],
      technologies: ["Python", "SQL", "Power BI", "Microsoft Excel", "Pandas", "NumPy"],
      achievements: [
        "Created an end-to-end data pipeline from raw relational dumps to interactive executive KPI dashboards.",
        "Mastered advanced analytical queries including window functions, CTEs, and grouping sets."
      ]
    }
  ],

  projects: [
    {
      id: "ai-interview",
      title: "AI Interview Preparation Platform",
      subtitle: "Full-Stack Intelligent Mock Interview & Assessment System",
      technologies: ["Python", "JavaScript", "HTML5", "CSS3", "Machine Learning", "REST APIs"],
      description: "An intelligent web application designed for comprehensive interview preparation featuring topic-wise technical questions, instant solution verification, and structured difficulty curves.",
      highlights: [
        "Architected a responsive, intuitive interface for seamless user engagement and rapid question practice.",
        "Engineered backend modules in Python for algorithmic topic categorization and solution evaluation.",
        "Authored a published research paper detailing the platform's architectural innovations.",
        "Integrated dynamic difficulty adjustment based on candidate performance metrics."
      ],
      image: "/src/assets/images/interview_prep_platform_1793439038985.jpg",
      category: "AI/ML",
      hasResearchPaper: true,
      researchPaperTitle: "Adaptive AI-Driven Question Distribution & Performance Evaluation for Technical Interview Candidates",
      demoType: "interview"
    },
    {
      id: "stress-detection",
      title: "Facial Expression-Based Stress Detection",
      subtitle: "Computer Vision & Machine Learning Biometric Classifier",
      technologies: ["Python", "Scikit-learn", "OpenCV", "NumPy", "Matplotlib"],
      description: "A machine learning and computer vision system to recognize micro facial expressions and categorize stress-related biometric patterns with high statistical accuracy.",
      highlights: [
        "Captured and preprocessed facial image datasets with landmark extraction and facial contour mapping.",
        "Applied supervised machine learning classification algorithms to distinguish between relaxed, neutral, and stressed states.",
        "Generated visual classification reports and stress trend graphs utilizing Matplotlib and Scikit-learn metrics.",
        "Designed real-time frame evaluation pipeline capable of low-latency inference."
      ],
      image: "/src/assets/images/facial_stress_detection_1793439039940.jpg",
      category: "AI/ML",
      demoType: "stress"
    },
    {
      id: "employee-analytics",
      title: "Employee Performance Analytics & KPI Dashboard",
      subtitle: "Business Intelligence & SQL Database Reporting Suite",
      technologies: ["SQL", "MySQL", "Power BI", "Python", "Microsoft Excel"],
      description: "Comprehensive relational database design and interactive business intelligence dashboard analyzing workforce productivity, retention, and departmental KPIs.",
      highlights: [
        "Designed a normalized relational database schema with rigorous constraints and indexing in MySQL.",
        "Calculated key employee performance indices (KPIs), promotion eligibility, and retention metrics.",
        "Constructed interactive executive dashboards in Power BI with dynamic slicers and drill-down views.",
        "Authored automated SQL views for periodic automated performance reports."
      ],
      image: "/src/assets/images/employee_kpi_dashboard_1793439038922.jpg",
      category: "Data Analytics",
      demoType: "analytics"
    },
    {
      id: "task-manager",
      title: "Python Task Management Application",
      subtitle: "Desktop Productivity Software with Object-Oriented Architecture",
      technologies: ["Python", "Tkinter", "OOP", "File I/O", "Data Validation"],
      description: "A clean desktop application for task orchestration featuring structured Python OOP principles, persistent storage, status tracking, and event-driven GUI handling.",
      highlights: [
        "Implemented complete CRUD (Create, Read, Update, Delete) lifecycle for task items with deadline tracking.",
        "Employed robust Object-Oriented Programming (OOP) patterns, encapsulation, and event handling in Tkinter.",
        "Engineered input validation and persistent file-based JSON/CSV data storage routines.",
        "Designed intuitive user experience with status categorization (Pending, In Progress, Completed)."
      ],
      image: "/src/assets/images/interview_prep_platform_1793439038985.jpg",
      category: "Python App",
      demoType: "taskmanager"
    }
  ],

  skillCategories: [
    {
      name: "Programming & Core CS",
      description: "Strong foundation in algorithmic logic, OOP, and software engineering",
      skills: [
        { name: "Python", level: 90, note: "Core, Scripting, Automation" },
        { name: "OOP (Object-Oriented Programming)", level: 88, note: "Inheritance, Polymorphism, Design" },
        { name: "Data Structures & Algorithms", level: 82, note: "Competitive problem solving" },
        { name: "JavaScript", level: 78, note: "ES6+, DOM, Asynchronous" }
      ]
    },
    {
      name: "Databases & SQL",
      description: "Relational database schema modeling, querying, and performance tuning",
      skills: [
        { name: "SQL", level: 88, note: "Complex Joins, Subqueries, Aggregations" },
        { name: "MySQL", level: 85, note: "Schema design, Constraints, Indexing" },
        { name: "MySQL Workbench", level: 84, note: "ER diagrams, Visual querying" },
        { name: "Data Retrieval & Storage", level: 86, note: "CRUD, Normalization" }
      ]
    },
    {
      name: "AI / ML & Data Science",
      description: "Model building, data manipulation, feature extraction, and analytics",
      skills: [
        { name: "Pandas & NumPy", level: 85, note: "Data wrangling, Vectorization" },
        { name: "Scikit-learn", level: 80, note: "Supervised classification, Regression" },
        { name: "Matplotlib & Visualization", level: 82, note: "Statistical plots, Distributions" },
        { name: "Machine Learning Fundamentals", level: 82, note: "Evaluation metrics, Pipelines" }
      ]
    },
    {
      name: "Data Operations & Analytics",
      description: "Data annotation, quality control, categorization, and executive BI",
      skills: [
        { name: "Power BI", level: 84, note: "Interactive dashboards, DAX, Slicers" },
        { name: "Microsoft Excel", level: 88, note: "VLOOKUP, Pivot Tables, Formulas" },
        { name: "Data Annotation & Labeling", level: 90, note: "Categorization, Validation" },
        { name: "Quality Checking & KPI Reporting", level: 86, note: "Data consistency & metrics" }
      ]
    },
    {
      name: "Web & Developer Tools",
      description: "Modern developer workflow tools, version control, and frontend tech",
      skills: [
        { name: "HTML5 & CSS3", level: 88, note: "Semantic layout, Responsive styling" },
        { name: "Git & GitHub", level: 82, note: "Version control, Repositories" },
        { name: "VS Code & Jupyter Notebook", level: 90, note: "Daily development & experimentation" }
      ]
    }
  ],

  certifications: [
    {
      id: "ibm-ai",
      title: "Artificial Intelligence Fundamentals",
      organization: "IBM SkillsBuild",
      period: "August 2024 / 2025",
      category: "AI",
      skillsGained: [
        "Machine Learning Concepts",
        "Neural Networks & Deep Learning",
        "AI Ethics & Governance",
        "Natural Language Processing"
      ]
    },
    {
      id: "nptel-dbms",
      title: "Database Management System Certification",
      organization: "NPTEL (National Programme on Technology Enhanced Learning)",
      period: "July - September 2024",
      category: "Database",
      skillsGained: [
        "Relational Algebra & Calculus",
        "Normalization & Functional Dependencies",
        "Transaction Management & ACID properties",
        "Query Optimization"
      ]
    },
    {
      id: "nptel-python",
      title: "Python Certification",
      organization: "NPTEL (National Programme on Technology Enhanced Learning)",
      period: "January - April 2024",
      category: "Programming",
      skillsGained: [
        "Python Data Structures & Collections",
        "Object-Oriented Programming (OOP)",
        "File Processing & Exception Handling",
        "Standard Library Modules"
      ]
    },
    {
      id: "mitcon-ds",
      title: "Workshop on Data Science & Cybersecurity",
      organization: "Mitcon, Pune",
      period: "May 2025",
      category: "Cybersecurity",
      skillsGained: [
        "Data Science Lifecycle",
        "Network Security Fundamentals",
        "Threat Modeling & Vulnerability Assessment",
        "Practical Security Principles"
      ]
    },
    {
      id: "naandi-softskills",
      title: "Soft Skills Training",
      organization: "Naandi Foundation",
      period: "July 2025",
      category: "Soft Skills",
      skillsGained: [
        "Professional Communication & Etiquette",
        "Collaborative Team Problem Solving",
        "Interview Preparation & Leadership",
        "Presentation & Public Speaking"
      ]
    }
  ],

  education: {
    degree: "Bachelor of Technology (Computer Science & Engineering)",
    duration: "2022 - 2026",
    college: "Shree Siddheshwar Women's College of Engineering",
    location: "Solapur, Maharashtra",
    cgpa: "8.32",
    scale: "10.0",
    keyCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Machine Learning & Artificial Intelligence",
      "Operating Systems & Computer Networks",
      "Software Engineering & Testing"
    ]
  },

  languages: [
    { name: "English", level: "Professional Working Proficiency", stars: 5 },
    { name: "Hindi", level: "Native / Bilingual", stars: 5 },
    { name: "Marathi", level: "Native / Bilingual", stars: 5 },
    { name: "Telugu", level: "Native / Bilingual", stars: 5 }
  ],

  declaration: "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. — Sakshi Shridhar Chinta"
};
