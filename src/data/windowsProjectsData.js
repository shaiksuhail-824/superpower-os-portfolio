export const WINDOWS_PROJECTS = [
  {
    id: "paimana",
    appId: "paimana",
    iconName: "BrainCircuit",
    desktopIconText: "PAIMANA.exe",
    name: "PAIMANA AI",
    fullName: "AI-Powered Predictive Analytics and Early-Warning System for Infrastructure Projects",
    subtitle: "Central Infrastructure Risk Analytics & Early Warning",
    status: "Smart India Hackathon Prototype",
    statusBadge: "SIH Prototype / Active Research",
    statusType: "hackathon",
    githubUrl: "https://github.com/shaiksuhail-824/AI-Powered-Predictive-Analytics-Early-Warning-System-for-Infrastructure-Projects",
    categories: ["Machine Learning", "MLOps"],
    summary: "Early-warning intelligence system predicting project delay probability and cost overrun risks across 3,531 central infrastructure projects.",
    problemStatement: "Central mega-infrastructure projects frequently encounter timeline slippage and budget escalation. Conventional retrospective monthly reporting lacks forward-looking alerts, making it difficult to intervene before sanctioned commissioning dates expire.",
    projectOverview: "An intelligent early-warning analytics system developed for the Smart India Hackathon. It processes historical and longitudinal data across 3,531 central infrastructure projects from the Ministry of Statistics and Programme Implementation (MoSPI) to anticipate delay probabilities and cost escalation risks months in advance.",
    contributions: [
      "Engineered temporal feature extraction and preprocessing across longitudinal MoSPI infrastructure project records.",
      "Developed dual-target classifiers predicting schedule delay risks and cost overrun probabilities.",
      "Integrated TreeSHAP explainability to compute local and global risk factor attributions for project administrators.",
      "Built containerized FastAPI inference endpoints with role-based access control and Pydantic validation schemas.",
      "Created Docker Compose configurations for local multi-service orchestration."
    ],
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
    modelEvaluation: {
      architectures: "LightGBM and XGBoost gradient-boosted decision trees evaluated alongside Random Forest and regularized linear baselines.",
      evaluationStrategy: "Stratified 5-fold cross-validation with time-aware splitting to prevent temporal look-ahead leakage across project reporting epochs.",
      metrics: "PR-AUC and F1-score prioritized over standard accuracy due to heavy class imbalance in delayed vs on-time infrastructure projects.",
      interpretability: "TreeSHAP summary plots and waterfall plots provide transparent feature attribution for individual project predictions."
    },
    verificationNotes: "Complete source code, DVC pipeline manifests, model training scripts, and container definitions are publicly verifiable in the GitHub repository."
  },
  {
    id: "internship-intelligence",
    appId: "internship",
    iconName: "ShieldAlert",
    desktopIconText: "INTERN_INTEL.exe",
    name: "Internship Intelligence",
    fullName: "Internship Scam Prediction / Internship Intelligence Platform",
    subtitle: "Safe Opportunity Discovery & Risk Screening",
    status: "In Development / Planning",
    statusBadge: "Planning & Architecture Stage",
    statusType: "planning",
    githubUrl: "https://github.com/shaiksuhail-824/Intership_Scam_Prediction",
    categories: ["Machine Learning", "MLOps"],
    summary: "Opportunity discovery and risk screening platform designed to flag fraudulent internship listings and unverified recruiters.",
    problemStatement: "Students searching for internships frequently encounter unverified listings across dispersed channels, with increasing risks of fraudulent offers, suspicious recruitment fees, and illegitimate organizations.",
    projectOverview: "A student-centric opportunity analysis framework that screens internship listings for deception patterns—such as mandatory security deposits, illegitimate company domains, vague responsibilities, and non-transparent recruitment pipelines.",
    projectObjective: "To establish a safe opportunity discovery and risk-screening platform that flags fraudulent internship postings, unverified domains, and exploitative practices before candidates share sensitive personal data or pay illicit fees.",
    suspiciousOpportunityConcept: "The analysis concept focuses on extracting textual and structural risk indicators: presence of upfront payment requests, free-tier or mismatched email domains (e.g. gmail vs corporate domain), excessive stipend claims for entry-level roles, and absence of corporate registry numbers. Listings receive a risk score and explainable safety breakdown.",
    plannedArchitecture: [
      "Backend: Modular FastAPI REST service designed for validation and scoring endpoints.",
      "Data Versioning: DVC pipeline stages (dvc.yaml) for reproducible dataset gathering and transformation.",
      "Tracking: MLflow for metric and artifact logging during baseline classifier experiments.",
      "Containerization: Planned Docker containerization for isolated inference environments.",
      "Validation Schema: Strict Pydantic v2 schemas defining verified employer attributes and scam signals."
    ],
    contributions: [
      "Authored the system architecture specification for a modular FastAPI backend service.",
      "Structured DVC pipeline configurations for reproducible data acquisition and transformation.",
      "Drafted the data schema and collection protocol to assess scam signals vs legitimate internship postings.",
      "Documented risk scoring criteria and feature extraction strategies."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "DVC",
      "MLflow",
      "Docker (Planned)",
      "Pydantic v2",
      "Architecture & Planning"
    ],
    modelEvaluation: {
      architectures: "Baseline text classification using TF-IDF with Naive Bayes / Logistic Regression, transitioning to ensemble decision trees.",
      evaluationStrategy: "Holdout test sets evaluated across verified legitimate postings and synthetic/reported fraudulent listings.",
      metrics: "Recall and False Negative Rate on scam detection prioritized to protect applicants from missed threats.",
      interpretability: "Rule-based flag explanations combined with feature importance outputs."
    },
    verificationNotes: "Current implementation status: Architecture specification authored, data collection protocol drafted, and initial DVC pipeline configured. Note: Incomplete features such as Amazon Bedrock, RAG, and cloud deployment are planned architectural concepts, not completed implementations."
  },
  {
    id: "house-price-predictor",
    appId: "house-price",
    iconName: "Home",
    desktopIconText: "HOUSE_PRICE.exe",
    name: "House Price Predictor on AWS",
    fullName: "House Price Predictor on AWS — End-to-End Regression & Cloud Serving",
    subtitle: "End-to-End Regression & Cloud Serving",
    status: "Demonstration on AWS",
    statusBadge: "Deployed on AWS Elastic Beanstalk",
    statusType: "cloud",
    githubUrl: "https://github.com/shaiksuhail-824/house-price-predictor-AWS",
    categories: ["Machine Learning", "Cloud"],
    summary: "End-to-end regression application containerized with Docker and deployed to AWS Elastic Beanstalk with automated CI/CD.",
    problemStatement: "Estimating residential property market values accurately based on multi-variable housing attributes, minimizing multicollinearity, and delivering continuous price predictions through an accessible web interface.",
    projectOverview: "An applied regression modeling pipeline that predicts property values from complex residential attributes, encapsulated into a web service and shipped to AWS cloud infrastructure.",
    regressionProblemDetails: "Predicting continuous housing valuation from multi-dimensional property features (lot size, overall quality, year built, square footage, neighborhood indicators) while preventing model overfitting on correlated predictors.",
    mlWorkflow: [
      "Exploratory data analysis, missing value imputation, log-transformation of skewed target variables, and one-hot encoding of categorical features.",
      "Model evaluation comparing Linear Regression, Ridge, and Lasso regularization with k-fold cross-validation.",
      "Evaluation using Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), and R² score metrics.",
      "Pipeline serialization into reproducible model artifacts for runtime inference."
    ],
    applicationArchitecture: "Flask-based web application providing REST endpoints and an accessible HTML interface, containerized with Docker to ensure identical runtime behavior across local workstations and cloud instances.",
    awsDeploymentExperience: [
      "Containerized application packaged using multi-stage Docker build practices.",
      "Deployed to AWS Elastic Beanstalk environment with configured health checks.",
      "Configured AWS IAM user security credentials and least-privilege permission boundaries.",
      "Set up automated continuous deployment with GitHub Actions triggered on repository pushes."
    ],
    contributions: [
      "Trained an end-to-end regression model in scikit-learn evaluating Ridge and Lasso regularization with k-fold cross-validation.",
      "Packaged the web service into a container with Docker for portable execution.",
      "Deployed application to AWS Elastic Beanstalk using an automated GitHub Actions CI/CD deployment pipeline.",
      "Configured IAM roles and security policies for deployment access."
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Flask",
      "Docker",
      "AWS Elastic Beanstalk",
      "GitHub Actions",
      "AWS IAM"
    ],
    modelEvaluation: {
      architectures: "Ridge and Lasso regularized linear regression models evaluated against baseline Ordinary Least Squares.",
      evaluationStrategy: "5-fold cross-validation with standardized preprocessing pipelines to prevent data leakage.",
      metrics: "RMSE, MAE, and R² score on independent validation splits.",
      interpretability: "Standardized regression coefficients indicating positive and negative attribute valuation impacts."
    },
    verificationNotes: "Demonstrated through containerized AWS Elastic Beanstalk deployment; repository includes complete reproducible code, Dockerfile, and GitHub Actions workflow. Note: Built and verified as an engineering demonstration rather than an ongoing commercial service."
  }
];

export const DESKTOP_ICONS = [
  {
    id: "about",
    title: "My Computer",
    subtext: "SUHAIL.SYS",
    appType: "about",
    targetId: "about",
    icon: "Cpu",
    color: "#60a5fa"
  },
  {
    id: "paimana",
    title: "PAIMANA AI",
    subtext: "Infra Analytics",
    appType: "project",
    targetId: "paimana",
    icon: "BrainCircuit",
    color: "#00f2fe"
  },
  {
    id: "internship",
    title: "Internship Intel",
    subtext: "Scam Detection",
    appType: "project",
    targetId: "internship-intelligence",
    icon: "ShieldAlert",
    color: "#a78bfa"
  },
  {
    id: "house-price",
    title: "House Price AWS",
    subtext: "Cloud Serving",
    appType: "project",
    targetId: "house-price-predictor",
    icon: "Home",
    color: "#34d399"
  },
  {
    id: "explorer",
    title: "Project Explorer",
    subtext: "Recruiter View",
    appType: "explorer",
    targetId: "explorer",
    icon: "FolderGit2",
    color: "#fbbf24"
  },
  {
    id: "terminal",
    title: "MS-DOS Prompt",
    subtext: "Terminal",
    appType: "terminal",
    targetId: "terminal",
    icon: "Terminal",
    color: "#38bdf8"
  },
  {
    id: "themes",
    title: "Display Themes",
    subtext: "Classic / Neon",
    appType: "themes",
    targetId: "themes",
    icon: "Palette",
    color: "#f472b6"
  },
  {
    id: "resume",
    title: "Resume.doc",
    subtext: "Web & PDF",
    appType: "link",
    url: "resume.html",
    icon: "FileText",
    color: "#e2e8f0"
  }
];

export const SYSTEM_SPECS = {
  osName: "SUHAIL.SYS Version 98 (Second Edition)",
  processor: "Computer Science Undergraduate @ RGUKT Ongole",
  focus: "Machine Learning, MLOps, Containerization & AWS Cloud",
  coreStack: "Python, Scikit-learn, DVC, MLflow, Docker, FastAPI, AWS, GitHub Actions",
  portfolioUrl: "index.html",
  resumeUrl: "resume.html",
  githubUrl: "https://github.com/shaiksuhail-824",
  linkedinUrl: "https://www.linkedin.com/in/shaiksuhail824/"
};
