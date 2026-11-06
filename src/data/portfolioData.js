export const PERSONAL_INFO = {
  name: "Suhail Shaik",
  fullName: "Shaik Suhail",
  brand: "SUHAIL.SYS",
  systemLabel: "PORTFOLIO OS",
  headline: "From ML Experiments to Production-Ready Systems.",
  bio: "I'm a Computer Science student at RGUKT Ongole focused on machine learning, MLOps, and cloud deployment—turning models into reproducible, containerized systems that can be tested and shipped.",
  resumeUrl: "resume.html",
  resumePdfUrl: "assets/resume.pdf",
  email: "shaiksuhail74818@gmail.com",
  socials: {
    github: "https://github.com/shaiksuhail-824",
    linkedin: "https://www.linkedin.com/in/shaiksuhail824/"
  },
  coreCapabilities: [
    {
      title: "Data Versioning",
      tool: "DVC",
      description: "Tracking raw and processed datasets, artifact hashes, and reproducible pipeline stages."
    },
    {
      title: "Experiment Tracking",
      tool: "MLflow",
      description: "Logging hyperparameters, loss curves, validation metrics, and model artifacts systematically."
    },
    {
      title: "Model Deployment",
      tool: "Docker & FastAPI",
      description: "Packaging trained models into lightweight containerized REST APIs for reliable inference."
    }
  ]
};

export const ABOUT_TEXT = {
  heading: "The Engineering Journey",
  paragraphs: [
    "I'm a Computer Science student focused on machine learning and MLOps. I build projects that take models beyond experimentation through versioned datasets, experiment tracking, automated testing, and containerized deployment.",
    "I'm developing my skills by building practical projects and learning how to make ML workflows reproducible, testable, and deployable."
  ]
};

export const ABOUT_STAGES = [
  {
    step: "01",
    phase: "BUILD",
    title: "ML Foundations & Modeling",
    summary:
      "Learning core machine learning algorithms, statistical data analysis, and feature engineering to develop models that solve real-world prediction challenges.",
    keyTools: ["Python", "scikit-learn", "pandas", "NumPy", "Feature Engineering"]
  },
  {
    step: "02",
    phase: "REPRODUCE",
    title: "Versioned Data & Workflows",
    summary:
      "Transitioning away from one-off Jupyter notebooks by using DVC for data versioning, MLflow for experiment tracking, and Makefiles for repeatable commands.",
    keyTools: ["DVC", "MLflow", "Makefiles", "Git", "Pipeline DAGs"]
  },
  {
    step: "03",
    phase: "SHIP",
    title: "Packaging & Cloud Delivery",
    summary:
      "Packaging applications into Docker containers, writing clean REST inference endpoints with FastAPI, and deploying services onto cloud infrastructure.",
    keyTools: ["Docker", "FastAPI", "AWS Elastic Beanstalk", "GitHub Actions"]
  }
];

export const SKILLS_CATEGORIES = [
  {
    id: "ml-analysis",
    title: "Machine Learning and Data Analysis",
    icon: "Brain",
    description: "Developing predictive estimators, exploratory data analysis, and cross-validation pipelines.",
    applied: [
      "Scikit-learn",
      "Feature Engineering",
      "Exploratory Data Analysis (EDA)",
      "Cross-Validation & Metrics",
      "Pandas & NumPy",
      "Matplotlib & Seaborn"
    ],
    learning: [
      "Deep Learning Fundamentals",
      "PyTorch",
      "TreeSHAP / Model Explainability"
    ]
  },
  {
    id: "data-experiments",
    title: "Data and Experiment Management",
    icon: "Database",
    description: "Ensuring reproducibility through dataset hashing, pipeline stage tracking, and metric logging.",
    applied: [
      "DVC (Data Version Control)",
      "MLflow (Metrics & Artifacts)",
      "Dataset & Model Versioning",
      "Git & GitHub",
      "Pipeline DAGs (dvc.yaml)"
    ],
    learning: [
      "MLflow Model Registry Staging",
      "Automated Data Schema Validation"
    ]
  },
  {
    id: "backend-app",
    title: "Backend and Application Development",
    icon: "Server",
    description: "Serving machine learning inference through structured, validated web endpoints.",
    applied: [
      "FastAPI",
      "Flask",
      "Pydantic v2 Schema Validation",
      "RESTful API Design",
      "Streamlit"
    ],
    learning: [
      "Asynchronous Inference Endpoints",
      "Automated Endpoint Contract Testing"
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps and Cloud",
    icon: "Cloud",
    description: "Containerizing runtimes, setting up automated CI checks, and deploying to cloud infrastructure.",
    applied: [
      "Docker (Containerization)",
      "AWS Elastic Beanstalk",
      "AWS IAM Fundamentals",
      "GitHub Actions CI/CD",
      "Linux & Bash Scripting"
    ],
    learning: [
      "Amazon ECS & ECR",
      "CloudWatch Monitoring",
      "Cloud Architecture Patterns"
    ]
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code",
    description: "Languages used for machine learning engineering, systems programming, and database queries.",
    applied: [
      "Python",
      "C",
      "Java",
      "SQL"
    ],
    learning: [
      "TypeScript",
      "Modern Web Tooling (Next.js / React)"
    ]
  }
];

export const PROJECTS = [
  {
    id: "infrastructure-analytics",
    name: "AI-Powered Predictive Analytics and Early-Warning System for Infrastructure Projects",
    subtitle: "Central Infrastructure Risk Analytics",
    status: "Smart India Hackathon",
    statusColor: "text-amber-300 bg-amber-950/40 border-amber-500/30",
    problem:
      "Central mega-infrastructure projects frequently encounter timeline slippage and budget escalation. Conventional retrospective monthly reporting lacks forward-looking alerts, making it difficult to intervene before sanctioned commissioning dates expire.",
    contribution:
      "Engineered temporal feature extraction across longitudinal MoSPI infrastructure project data (3,531 projects), developed dual-target classifiers for schedule delay and cost overrun risk, integrated TreeSHAP explainability for project-level risk factors, and built containerized FastAPI inference endpoints with role-based access control.",
    technologies: [
      "Python 3.12",
      "Scikit-learn",
      "LightGBM",
      "XGBoost",
      "SHAP",
      "FastAPI",
      "DVC",
      "MLflow",
      "Docker Compose",
      "GitHub Actions",
      "Next.js"
    ],
    githubUrl:
      "https://github.com/shaiksuhail-824/AI-Powered-Predictive-Analytics-Early-Warning-System-for-Infrastructure-Projects",
    demoUrl: null
  },
  {
    id: "internship-intelligence",
    name: "Internship Scam Prediction / Internship Intelligence Platform",
    subtitle: "Safe Opportunity Discovery & Risk Screening",
    status: "In Development / Planning",
    statusColor: "text-cyan-300 bg-cyan-950/40 border-cyan-500/30",
    problem:
      "Students searching for internships frequently encounter unverified listings across dispersed channels, with increasing risks of fraudulent offers, suspicious recruitment fees, and illegitimate organizations.",
    contribution:
      "Authored the system architecture specification for a modular FastAPI backend, structured DVC pipeline configurations for reproducible data processing, and drafted the data schema and collection protocol to assess scam signals vs. legitimate internship opportunities.",
    technologies: [
      "Python",
      "FastAPI",
      "DVC",
      "MLflow",
      "Docker (Planned)",
      "Architecture & Planning"
    ],
    githubUrl: "https://github.com/shaiksuhail-824/Intership_Scam_Prediction",
    demoUrl: null
  },
  {
    id: "house-price-predictor",
    name: "House Price Predictor on AWS",
    subtitle: "End-to-End Regression & Cloud Serving",
    status: "Deployed on AWS",
    statusColor: "text-emerald-300 bg-emerald-950/40 border-emerald-500/30",
    problem:
      "Estimating residential property market values accurately based on multi-variable housing attributes, minimizing multicollinearity, and delivering continuous price predictions through an accessible web interface.",
    contribution:
      "Trained an end-to-end regression model in scikit-learn evaluating Ridge and Lasso regularization with k-fold cross-validation. Packaged the web service into a container with Docker and deployed to AWS Elastic Beanstalk using an automated GitHub Actions CI/CD deployment pipeline.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Flask",
      "Docker",
      "AWS Elastic Beanstalk",
      "GitHub Actions",
      "IAM"
    ],
    githubUrl: "https://github.com/shaiksuhail-824/house-price-predictor-AWS",
    demoUrl: null
  }
];

export const ENGINEERING_LAB_TOPICS = [
  {
    id: "dvc-versioning",
    step: "01",
    title: "Data Versioning and Reproducibility with DVC",
    state: "Implemented in Projects",
    stateType: "demonstrated",
    icon: "Database",
    summary:
      "Decoupling large datasets and model files from Git by tracking SHA-256 hashes in .dvc files and managing pipeline stages via dvc.yaml.",
    details: [
      "Hash-based tracking of raw and processed dataset states",
      "Multi-stage pipeline definition in dvc.yaml with dependency graphs",
      "Enables exact data checkout corresponding to specific Git commits"
    ],
    tooling: ["DVC", "Git", "S3 Storage"]
  },
  {
    id: "mlflow-tracking",
    step: "02",
    title: "Experiment Tracking and Model Registration with MLflow",
    state: "Implemented in Projects",
    stateType: "demonstrated",
    icon: "Activity",
    summary:
      "Systematic logging of hyperparameters, evaluation metrics (F1, PR-AUC, RMSE, R²), and serialized model weights across experimental runs.",
    details: [
      "Automated tracking of training parameters and evaluation runs",
      "Saving model artifacts, loss curves, and environment dependencies",
      "Exploring Model Registry capabilities for version tagging"
    ],
    tooling: ["MLflow", "Python Client", "Artifact Stores"]
  },
  {
    id: "makefile-automation",
    step: "03",
    title: "Makefile-Based Workflow Automation",
    state: "Implemented in Projects",
    stateType: "demonstrated",
    icon: "Terminal",
    summary:
      "Standardizing multi-step engineering commands into declarative Makefile targets for consistent local setup, testing, and reproduction.",
    details: [
      "make install for repeatable virtual environment and dependency setup",
      "make test for automated syntax linting and unit test execution",
      "make train for reproducible end-to-end model training execution"
    ],
    tooling: ["GNU Make", "Bash", "Virtualenv / uv"]
  },
  {
    id: "docker-packaging",
    step: "04",
    title: "Docker-Based Application Packaging",
    state: "Implemented in Projects",
    stateType: "demonstrated",
    icon: "Box",
    summary:
      "Encapsulating Python model runtimes and web inference services into lightweight Docker containers to eliminate environment discrepancies.",
    details: [
      "Multi-stage Docker builds to reduce image attack surface and size",
      "Consistent runtime isolation from local workstation to cloud servers",
      "Containerizing FastAPI and Flask prediction endpoints"
    ],
    tooling: ["Docker", "Linux Containers", "FastAPI / Flask"]
  },
  {
    id: "github-actions-ci",
    step: "05",
    title: "GitHub Actions CI/CD Workflows",
    state: "Practicing & Refining",
    stateType: "practicing",
    icon: "GitBranch",
    summary:
      "Writing automated pull request checks that run code linting, automated tests, and validation before merging changes.",
    details: [
      "Automated workflow triggers on git push and pull requests",
      "Environment configuration, dependency installation, and test gates",
      "Validation of pipeline scripts and container build steps"
    ],
    tooling: ["GitHub Actions", "YAML", "Pytest"]
  },
  {
    id: "aws-deployment",
    step: "06",
    title: "AWS Application Deployment Practice",
    state: "Hands-on Practice",
    stateType: "practicing",
    icon: "Cloud",
    summary:
      "Deploying containerized web applications onto AWS cloud infrastructure and practicing identity and permission boundaries.",
    details: [
      "Application deployment using AWS Elastic Beanstalk",
      "Configuring IAM users and policies with least-privilege principles",
      "Learning ECS and ECR container orchestration workflows"
    ],
    tooling: ["AWS Elastic Beanstalk", "AWS IAM", "AWS Amplify Hosting"]
  },
  {
    id: "debugging-testing",
    step: "07",
    title: "Debugging, Testing, and Pipeline Improvements",
    state: "Ongoing Learning",
    stateType: "learning",
    icon: "CheckCircle",
    summary:
      "Applying software engineering best practices to ML workflows—unit testing components, preventing data leakage, and validating schemas.",
    details: [
      "Writing unit tests with Pytest for feature transformations and inference",
      "Strict input schema validation with Pydantic v2 models",
      "Detecting and eliminating data leakage across train/test splits"
    ],
    tooling: ["Pytest", "Pydantic", "Ruff", "Static Analysis"]
  }
];

export const MISSION_CONTROL_STAGES = [
  {
    id: "DATA",
    number: "01",
    short: "DATA",
    title: "Data Preparation & Versioning",
    subtitle: "Validation & Versioning",
    shortDescription: "Validate datasets and track versions with DVC.",
    purpose: "Validate and prepare the dataset.",
    tools: ["Python", "pandas", "DVC"],
    example: "Dataset validation and data-versioning workflows.",
    learningOutcome: "Making data preparation repeatable.",
    statusNote: "Practiced in tabular learning projects using DVC and Git hash commits.",
    commandSimulation: "dvc repro data_validation"
  },
  {
    id: "FEATURES",
    number: "02",
    short: "FEATURES",
    title: "Feature Transformation",
    subtitle: "Cleaning & Preprocessing",
    shortDescription: "Clean data and prepare model-ready features.",
    purpose: "Transform raw records into model-ready inputs.",
    tools: ["pandas", "NumPy", "scikit-learn"],
    example: "Preprocessing, feature preparation, and train/test splitting.",
    learningOutcome: "Preparing consistent model inputs.",
    statusNote: "Applied in infrastructure analytics and house price regression pipelines.",
    commandSimulation: "python -m src.features.build_features"
  },
  {
    id: "TRAIN",
    number: "03",
    short: "TRAIN",
    title: "Model Training & Evaluation",
    subtitle: "Estimators & Tuning",
    shortDescription: "Train models and compare their performance.",
    purpose: "Train and evaluate candidate models.",
    tools: ["scikit-learn", "Optuna"],
    example: "Comparing candidate models and evaluating metrics in the fraud-detection learning project.",
    learningOutcome: "Using evaluation results to guide model selection.",
    statusNote: "Evaluated using k-fold cross-validation in regression and classification experiments.",
    commandSimulation: "python src/models/tune.py --trials 20"
  },
  {
    id: "TRACK",
    number: "04",
    short: "TRACK",
    title: "Experiment Tracking & Registry",
    subtitle: "Metrics & Artifacts",
    shortDescription: "Track experiments, metrics, and model versions with MLflow.",
    purpose: "Record experiments, metrics, and model artifacts.",
    tools: ["MLflow", "DVC"],
    example: "Experiment tracking and model-registration work.",
    learningOutcome: "Improving reproducibility and experiment traceability.",
    statusNote: "Tracked with local MLflow SQLite backend and artifact store directories.",
    commandSimulation: "mlflow experiments log --metric-f1 0.98"
  },
  {
    id: "DEPLOY",
    number: "05",
    short: "DEPLOY",
    title: "Packaging & Cloud Delivery",
    subtitle: "Containers & Endpoints",
    shortDescription: "Package applications with Docker and deploy APIs.",
    purpose: "Package an application and automate checks and deployment.",
    tools: ["Docker", "FastAPI", "GitHub Actions", "AWS"],
    example: "Containerized applications, CI workflows, and AWS deployment practice.",
    learningOutcome: "Understanding the path from a local application to cloud infrastructure.",
    statusNote: "Demonstrated with Docker and Elastic Beanstalk; actively learning ECS orchestration.",
    commandSimulation: "docker run -p 8000:8000 ml-service:v1"
  }
];
