// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Open resume function
function openResume() {
  window.open("./assets/21ME02035_Resume.pdf", "_blank");
}

// Contact form handling
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting and page reload

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Here you would typically send the data to a server
    // For now, just show a success message
    alert("Thank you for your message! I will get back to you soon.");

    // Clear the form
    document.getElementById("contact-form").reset();
  });

// Project Filtering System
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const loadMoreBtn = document.getElementById("load-more-btn");

  let currentFilter = "all";
  let visibleProjects = 3;
  const totalProjects = projectCards.length;

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Apply filter
      currentFilter = filter;
      filterProjects();
    });
  });

  function filterProjects() {
    projectCards.forEach((card, index) => {
      const categories = card.getAttribute("data-categories");
      const shouldShow =
        currentFilter === "all" || categories.includes(currentFilter);

      if (shouldShow && index < visibleProjects) {
        card.style.display = "block";
        card.classList.remove("project-hidden");
      } else {
        card.style.display = "none";
        card.classList.add("project-hidden");
      }
    });

    // Show/hide load more button
    if (currentFilter === "all" && visibleProjects < totalProjects) {
      loadMoreBtn.style.display = "block";
    } else {
      loadMoreBtn.style.display = "none";
    }
  }

  // Load more functionality
  loadMoreBtn.addEventListener("click", function () {
    visibleProjects = Math.min(visibleProjects + 3, totalProjects);
    filterProjects();

    if (visibleProjects >= totalProjects) {
      this.textContent = "All Projects Loaded";
      this.disabled = true;
      this.classList.add("opacity-50", "cursor-not-allowed");
    }
  });

  // Initialize
  filterProjects();
});

// Skills Data for Modal
const skillsData = {
  python: {
    title: "Python",
    proficiency: "Expert",
    expertise: ["Data Analysis", "Machine Learning", "Web Development"],
    technologies: ["Pandas", "NumPy", "Scikit-learn", "Flask"],
    projects: ["Customer Segmentation", "Churn Prediction", "Data Pipeline"],
    description: "Core programming language for data science and analytics",
  },
  sql: {
    title: "SQL",
    proficiency: "Advanced",
    expertise: ["Database Design", "Data Querying", "Performance Optimization"],
    technologies: ["MySQL", "PostgreSQL", "SQL Server", "BigQuery"],
    projects: [
      "Healthcare Data Pipeline",
      "E-commerce Analytics",
      "Customer Database",
    ],
    description:
      "Structured query language for database management and data extraction",
  },
  tableau: {
    title: "Tableau",
    proficiency: "Proficient",
    expertise: [
      "Data Visualization",
      "Dashboard Creation",
      "Business Intelligence",
    ],
    technologies: [
      "Tableau Desktop",
      "Tableau Server",
      "Tableau Prep",
      "Calculated Fields",
    ],
    projects: [
      "Sales Performance Dashboard",
      "Customer Analytics",
      "Executive Reports",
    ],
    description:
      "Powerful data visualization tool for creating interactive dashboards and reports",
  },
  excel: {
    title: "Excel",
    proficiency: "Skilled",
    expertise: ["Data Analysis", "Financial Modeling", "Reporting"],
    technologies: ["Pivot Tables", "VBA", "Power Query", "Advanced Formulas"],
    projects: ["Financial Analysis", "Sales Reports", "Data Cleaning"],
    description:
      "Versatile spreadsheet tool for data analysis and business reporting",
  },
  powerbi: {
    title: "Power BI",
    proficiency: "Proficient",
    expertise: ["Data Modeling", "DAX", "Report Development"],
    technologies: [
      "Power Query",
      "DAX Formulas",
      "Power BI Service",
      "Data Gateway",
    ],
    projects: [
      "Price Optimization Dashboard",
      "Business Intelligence",
      "KPI Tracking",
    ],
    description:
      "Microsoft's business analytics service for data visualization and insights",
  },
  r: {
    title: "R",
    proficiency: "Intermediate",
    expertise: ["Statistical Analysis", "Data Visualization", "Research"],
    technologies: ["ggplot2", "dplyr", "shiny", "R Markdown"],
    projects: [
      "Statistical Modeling",
      "Research Analysis",
      "Academic Projects",
    ],
    description:
      "Statistical computing language for data analysis and research",
  },
  scikit: {
    title: "Scikit-learn",
    proficiency: "Advanced",
    expertise: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
    ],
    technologies: [
      "Classification",
      "Regression",
      "Clustering",
      "Cross-validation",
    ],
    projects: [
      "Customer Segmentation",
      "Patient Outcome Prediction",
      "Sales Forecasting",
    ],
    description:
      "Comprehensive machine learning library for Python with robust algorithms and tools",
  },
  tensorflow: {
    title: "TensorFlow",
    proficiency: "Intermediate",
    expertise: ["Deep Learning", "Neural Networks", "Model Deployment"],
    technologies: ["Keras", "TensorFlow Lite", "TensorBoard", "SavedModel"],
    projects: [
      "Image Classification",
      "Natural Language Processing",
      "Neural Network Models",
    ],
    description:
      "Open-source deep learning framework for building and training neural networks",
  },
  pytorch: {
    title: "PyTorch",
    proficiency: "Intermediate",
    expertise: ["Deep Learning", "Research", "Dynamic Computation"],
    technologies: ["Autograd", "TorchScript", "Distributed Training", "ONNX"],
    projects: [
      "Computer Vision Models",
      "NLP Research",
      "Custom Neural Networks",
    ],
    description:
      "Flexible deep learning framework with dynamic computational graphs and research focus",
  },
  nlp: {
    title: "NLP",
    proficiency: "Intermediate",
    expertise: ["Text Processing", "Language Models", "Sentiment Analysis"],
    technologies: ["Transformers", "BERT", "GPT", "SpaCy"],
    projects: [
      "Text Classification",
      "Sentiment Analysis",
      "Language Understanding",
    ],
    description:
      "Natural Language Processing techniques for understanding and processing human language",
  },
  computervision: {
    title: "Computer Vision",
    proficiency: "Intermediate",
    expertise: ["Image Processing", "Object Detection", "Image Classification"],
    technologies: ["OpenCV", "CNN", "YOLO", "Image Segmentation"],
    projects: [
      "Medical Image Analysis",
      "Object Detection",
      "Image Recognition",
    ],
    description:
      "Computer vision techniques for analyzing and understanding digital images",
  },
  predictivemodeling: {
    title: "Predictive Modeling",
    proficiency: "Proficient",
    expertise: ["Time Series", "Forecasting", "Statistical Modeling"],
    technologies: ["ARIMA", "Prophet", "LSTM", "XGBoost"],
    projects: ["Sales Forecasting", "Demand Prediction", "Risk Assessment"],
    description:
      "Advanced modeling techniques for predicting future outcomes and trends",
  },
  git: {
    title: "Git",
    proficiency: "Proficient",
    expertise: ["Version Control", "Collaboration", "Code Management"],
    technologies: ["GitHub", "GitLab", "Bitbucket", "Git Flow"],
    projects: [
      "Portfolio Development",
      "Team Collaboration",
      "Code Versioning",
    ],
    description:
      "Distributed version control system for tracking changes and collaborating on code",
  },
  docker: {
    title: "Docker",
    proficiency: "Intermediate",
    expertise: ["Containerization", "Deployment", "Environment Management"],
    technologies: [
      "Docker Compose",
      "Docker Hub",
      "Multi-stage Builds",
      "Volumes",
    ],
    projects: [
      "ML Model Deployment",
      "Web Application Containers",
      "Development Environments",
    ],
    description:
      "Containerization platform for packaging and deploying applications consistently",
  },
  flask: {
    title: "Flask",
    proficiency: "Intermediate",
    expertise: ["Web Development", "API Development", "Backend Services"],
    technologies: ["Python", "REST APIs", "Jinja2", "SQLAlchemy"],
    projects: [
      "Churn Prediction API",
      "Data Dashboard Backend",
      "ML Model Services",
    ],
    description:
      "Lightweight web framework for building Python web applications and APIs",
  },
  aws: {
    title: "AWS",
    proficiency: "Basic",
    expertise: ["Cloud Computing", "Infrastructure", "Services"],
    technologies: ["EC2", "S3", "Lambda", "RDS"],
    projects: ["Cloud Deployment", "Data Storage", "Serverless Functions"],
    description:
      "Amazon Web Services cloud computing platform for scalable infrastructure",
  },
  jupyter: {
    title: "Jupyter",
    proficiency: "Proficient",
    expertise: [
      "Data Analysis",
      "Notebook Development",
      "Interactive Computing",
    ],
    technologies: ["Jupyter Notebook", "JupyterLab", "IPython", "Widgets"],
    projects: [
      "Data Exploration",
      "ML Model Development",
      "Interactive Reports",
    ],
    description:
      "Interactive computing environment for data science and machine learning",
  },
  streamlit: {
    title: "Streamlit",
    proficiency: "Intermediate",
    expertise: ["Web Applications", "Data Apps", "Rapid Prototyping"],
    technologies: [
      "Python",
      "Interactive Widgets",
      "Data Visualization",
      "Deployment",
    ],
    projects: ["ML Model Interfaces", "Data Dashboards", "Interactive Tools"],
    description:
      "Python library for creating interactive web applications for data science",
  },
};

// Project Modal System
const projectData = {
  "project-1": {
    title: "Customer Segmentation Analysis",
    domain: "Healthcare",
    description:
      "Implemented clustering algorithms to segment customers based on purchasing behavior, resulting in 15% increase in marketing ROI. Used K-means clustering with feature engineering and validation techniques.",
    techStack: ["Python", "K-means", "Tableau", "Pandas", "NumPy"],
    github: "https://github.com/example/customer-segmentation",
  },
  "project-2": {
    title: "Churn Prediction Model",
    domain: "E-commerce",
    description:
      "Developed a machine learning model to predict customer churn with 89% accuracy, enabling proactive retention strategies. Implemented XGBoost with hyperparameter tuning and cross-validation.",
    techStack: ["Python", "XGBoost", "Flask", "Scikit-learn", "Pandas"],
    github: "https://github.com/example/churn-prediction",
  },
  "project-3": {
    title: "Price Optimization Dashboard",
    domain: "E-commerce",
    description:
      "Created an interactive dashboard to analyze price elasticity and recommend optimal pricing, increasing margins by 8%. Built with SQL queries and Power BI visualizations.",
    techStack: ["SQL", "Power BI", "Regression", "Excel", "DAX"],
    github: "https://github.com/example/price-optimization",
  },
  "project-4": {
    title: "Patient Outcome Prediction",
    domain: "Healthcare",
    description:
      "Built predictive models for patient readmission risk using medical data, achieving 87% accuracy and reducing readmissions by 22%. Applied machine learning to healthcare datasets.",
    techStack: [
      "Python",
      "Scikit-learn",
      "Healthcare Data",
      "Pandas",
      "Matplotlib",
    ],
    github: "https://github.com/example/patient-prediction",
  },
  "project-5": {
    title: "Sales Performance Dashboard",
    domain: "E-commerce",
    description:
      "Developed interactive dashboards for sales team performance tracking, leading to 12% improvement in sales conversion rates. Created comprehensive KPI tracking system.",
    techStack: ["Python", "Tableau", "Sales Analytics", "SQL", "Pandas"],
    github: "https://github.com/example/sales-dashboard",
  },
  "project-6": {
    title: "Healthcare Data Pipeline",
    domain: "Healthcare",
    description:
      "Designed and implemented ETL pipelines for processing large-scale healthcare datasets, improving data quality by 35%. Built robust data validation and cleaning processes.",
    techStack: ["SQL", "ETL", "Healthcare", "Python", "Apache Airflow"],
    github: "https://github.com/example/healthcare-pipeline",
  },
};

// Case Study Modal System
const caseStudyData = {
  "case-1": {
    title: "E-commerce Optimization",
    domain: "E-commerce",
    description:
      "Analyzed user behavior data to optimize conversion funnel, resulting in 27% increase in conversion rate. Implemented A/B testing, funnel analysis, and user journey mapping to identify bottlenecks and optimize user experience.",
    techStack: [
      "Google Analytics",
      "A/B Testing",
      "Funnel Analysis",
      "User Journey Mapping",
      "Conversion Optimization",
    ],
    github: "https://github.com/example/ecommerce-optimization",
  },
  "case-2": {
    title: "Healthcare Analytics",
    domain: "Healthcare",
    description:
      "Predictive model for hospital readmissions achieving 22% reduction and $1.2M annual savings. Developed comprehensive risk assessment framework using patient demographics, medical history, and treatment patterns.",
    techStack: [
      "Predictive Modeling",
      "Risk Assessment",
      "Healthcare Data",
      "Statistical Analysis",
      "Cost Optimization",
    ],
    github: "https://github.com/example/healthcare-analytics",
  },
  "case-3": {
    title: "Sales Analytics",
    domain: "Sales",
    description:
      "Interactive dashboards for sales performance tracking, leading to 12% improvement in conversion rates. Created real-time KPI monitoring, sales forecasting, and performance analytics for sales teams.",
    techStack: [
      "Sales Analytics",
      "KPI Tracking",
      "Sales Forecasting",
      "Performance Analytics",
      "Real-time Monitoring",
    ],
    github: "https://github.com/example/sales-analytics",
  },
};

// Skills Modal functionality
const skillsModal = document.getElementById("skills-modal");
const skillsModalTitle = document.getElementById("skills-modal-title");
const skillsProficiency = document.getElementById("skills-proficiency");
const skillsExpertise = document.getElementById("skills-expertise");
const skillsTechnologies = document.getElementById("skills-technologies");
const skillsProjects = document.getElementById("skills-projects");
const skillsDescription = document.getElementById("skills-description");
const closeSkillsModal = document.getElementById("close-skills-modal");
const skillsModalCloseBtn = document.getElementById("skills-modal-close-btn");

// Project Modal functionality
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDomain = document.getElementById("modal-domain");
const modalDescription = document.getElementById("modal-description");
const modalTechStack = document.getElementById("modal-tech-stack");
const modalGithub = document.getElementById("modal-github");
const modalSectionTitle = document.getElementById("modal-section-title");
const modalStatus = document.getElementById("modal-status");
const closeModal = document.getElementById("close-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

function openSkillsModal(skillId) {
  const data = skillsData[skillId];

  if (data) {
    skillsModalTitle.textContent = data.title;
    skillsProficiency.textContent = data.proficiency;

    // Clear and populate expertise areas
    skillsExpertise.innerHTML = "";
    data.expertise.forEach((area) => {
      const tag = document.createElement("span");
      tag.className =
        "px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full";
      tag.textContent = area;
      skillsExpertise.appendChild(tag);
    });

    // Clear and populate technologies
    skillsTechnologies.innerHTML = "";
    data.technologies.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className =
        "px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full";
      tag.textContent = tech;
      skillsTechnologies.appendChild(tag);
    });

    // Clear and populate projects
    skillsProjects.innerHTML = "";
    data.projects.forEach((project) => {
      const tag = document.createElement("span");
      tag.className =
        "px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full";
      tag.textContent = project;
      skillsProjects.appendChild(tag);
    });

    skillsDescription.textContent = data.description;

    // Show modal with smooth animation
    skillsModal.classList.remove("hidden");
    // Small delay to ensure the modal is visible before adding show class
    requestAnimationFrame(() => {
      skillsModal.classList.add("show");
    });
  }
}

function closeSkillsModalFunc() {
  // Remove show class to trigger exit animation
  skillsModal.classList.remove("show");
  // Wait for animation to complete before hiding
  setTimeout(() => {
    skillsModal.classList.add("hidden");
  }, 300);
}

function openModal(projectId) {
  let data = null;
  let isCaseStudy = false;

  // Check if it's a project or case study
  if (projectId.startsWith("project-")) {
    data = projectData[projectId];
  } else if (projectId.startsWith("case-")) {
    data = caseStudyData[projectId];
    isCaseStudy = true;
  }

  if (data) {
    modalTitle.textContent = data.title;
    modalDomain.textContent = data.domain;

    // Show different content for case studies vs projects
    if (isCaseStudy) {
      // Case study specific content
      modalSectionTitle.textContent = "Case Study Analysis";
      modalStatus.textContent = "Completed";
      modalDescription.innerHTML = `
              <div class="space-y-6">
                <div class="border-b border-gray-100 pb-4">
                  <h4 class="font-semibold text-gray-900 mb-3 text-base">Business Challenge</h4>
                  <p class="text-gray-600 leading-relaxed text-sm">${data.description}</p>
                </div>
                <div class="border-b border-gray-100 pb-4">
                  <h4 class="font-semibold text-gray-900 mb-3 text-base">Methodology</h4>
                  <p class="text-gray-600 leading-relaxed text-sm">Applied advanced analytics techniques including data exploration, statistical modeling, and business intelligence tools to address the core business problem.</p>
                </div>
                <div class="pb-2">
                  <h4 class="font-semibold text-gray-900 mb-3 text-base">Key Insights</h4>
                  <p class="text-gray-600 leading-relaxed text-sm">Identified critical patterns and trends that led to actionable recommendations for business improvement and strategic decision-making.</p>
                </div>
              </div>
            `;
    } else {
      // Project specific content
      modalSectionTitle.textContent = "Project Overview";
      modalStatus.textContent = "Completed";
      modalDescription.textContent = data.description;
    }

    modalGithub.textContent = "View on GitHub";
    modalGithub.href = data.github;

    // Clear and populate tech stack
    modalTechStack.innerHTML = "";
    data.techStack.forEach((tech) => {
      const tag = document.createElement("span");
      tag.className =
        "px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full";
      tag.textContent = tech;
      modalTechStack.appendChild(tag);
    });

    // Show modal with smooth animation
    modal.classList.remove("hidden");
    // Small delay to ensure the modal is visible before adding show class
    requestAnimationFrame(() => {
      modal.classList.add("show");
    });
  }
}

function closeModalFunc() {
  // Remove show class to trigger exit animation
  modal.classList.remove("show");
  // Wait for animation to complete before hiding
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

// Skills Modal Event listeners
closeSkillsModal.addEventListener("click", closeSkillsModalFunc);
skillsModalCloseBtn.addEventListener("click", closeSkillsModalFunc);

// Close skills modal when clicking outside
skillsModal.addEventListener("click", (e) => {
  if (e.target === skillsModal) {
    closeSkillsModalFunc();
  }
});

// Project Modal Event listeners
closeModal.addEventListener("click", closeModalFunc);
modalCloseBtn.addEventListener("click", closeModalFunc);

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFunc();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModalFunc();
  }
});

// Add click handlers to all View Details buttons
document.addEventListener("DOMContentLoaded", function () {
  // Project buttons
  const viewDetailsButtons = document.querySelectorAll(".project-card button");
  viewDetailsButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const projectId = `project-${index + 1}`;
      openModal(projectId);
    });
  });

  // Case study buttons
  const caseStudyButtons = document.querySelectorAll(".case-study-btn");
  caseStudyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const caseId = button.getAttribute("data-case");
      openModal(caseId);
    });
  });

  // Progress Bar Functionality
  const progressBar = document.querySelector(".progress-bar-fill");

  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";
    });
  }

  // Navigation highlighting functionality
  const navLinks = document.querySelectorAll(".nav-link");
  console.log("Found navigation links:", navLinks.length);

  if (navLinks.length === 0) return;

  // Function to highlight active navigation link
  function highlightActiveLink(activeLink) {
    navLinks.forEach((link) => {
      link.classList.remove("text-gray-900", "font-semibold", "active");
      link.classList.add("text-gray-700", "font-medium");
    });

    if (activeLink) {
      activeLink.classList.remove("text-gray-700", "font-medium");
      activeLink.classList.add("text-gray-900", "font-semibold", "active");
    }
  }

  // Throttled scroll handler for better performance
  let ticking = false;
  let scrollHighlightingDisabled = false;

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Skip highlighting if disabled (during programmatic scroll)
        if (scrollHighlightingDisabled) {
          ticking = false;
          return;
        }

        const scrollTop = window.pageYOffset;
        let currentSection = "";

        // Find current section based on scroll position
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;

          if (
            scrollTop >= sectionTop &&
            scrollTop < sectionTop + sectionHeight
          ) {
            currentSection = section.getAttribute("id");
          }
        });

        // Determine which navigation link should be active
        let activeLink = null;

        if (scrollTop < 100) {
          // At the top, highlight Home
          activeLink = document.querySelector('a[href="#"]');
        } else if (currentSection) {
          // In a section, highlight the corresponding link
          activeLink = document.querySelector(`a[href="#${currentSection}"]`);
        }

        // Update highlighting
        if (activeLink) {
          highlightActiveLink(activeLink);
        }

        ticking = false;
      });
      ticking = true;
    }
  }

  // Click event handlers for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Navigation link clicked:", this.textContent, this.href);

      const href = this.getAttribute("href");
      const targetElement =
        href === "#" ? document.body : document.querySelector(href);

      console.log("Target element found:", targetElement);

      if (targetElement) {
        // Close mobile menu if open
        const mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden");
        }

        // Update highlighting immediately for instant visual feedback
        highlightActiveLink(this);

        // Disable scroll-based highlighting temporarily
        scrollHighlightingDisabled = true;

        console.log("Attempting smooth scroll to:", href);

        // Smooth scroll to target with easing
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Re-enable scroll-based highlighting after scroll completes
        setTimeout(() => {
          scrollHighlightingDisabled = false;
        }, 1000);
      } else {
        console.log("Target element not found for:", href);
      }
    });
  });

  // Initialize highlighting on page load
  function initializeHighlighting() {
    const homeLink = document.querySelector('a[href="#"]');
    if (homeLink) {
      highlightActiveLink(homeLink);
    }
  }

  // Initialize on DOM ready
  initializeHighlighting();

  // Also initialize after a short delay to ensure proper rendering
  setTimeout(initializeHighlighting, 100);

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Initial call to set correct state
  handleScroll();
});
