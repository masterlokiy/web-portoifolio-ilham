// ======================= PROJECT DATA =======================
const experiences = [
  {
    id: 1,
    title: "Waiter",
    company: "Nana's Juice & Smoothies",
    description:
      "Responsible for attending to and serving juice customers in a friendly and efficient manner.",
    category: ["Job"],
    technologies: [],
    date: "2024-03-01",
    duration: "3 months",
    location: "Yogyakarta, Indonesia",
    responsibilities: [
      "Welcomed and served customers with professionalism and friendliness",
      "Took and delivered orders accurately and efficiently",
      "Maintained cleanliness and organization of the service area",
      "Assisted team members during peak hours to ensure smooth operations",
    ],
    achievements: [
      "Praised by customers for friendly and attentive service",
      "Contributed to maintaining a positive dining experience for guests",
    ],
  },
  {
    id: 2,
    title: "Microcontroller Final Project",
    company: "Amikom University Yogyakarta",
    description:
      "Developed a smart home system integrated with IFTTT, enabling control via Google Assistant. The system can control lights and doors and is capable of voice analysis.",
    category: ["Embedded Systems", "IoT"],
    technologies: ["Arduino", "C++", "IFTTT", "Google Assistant"],
    date: "2023-10-01",
    duration: "3 months",
    location: "Yogyakarta, Indonesia",
    responsibilities: [
      "Designed and implemented a smart home system using microcontrollers",
      "Integrated IFTTT for seamless automation and connectivity",
      "Enabled Google Assistant voice commands for light and door control",
      "Conducted testing and debugging to ensure system reliability",
    ],
    achievements: [
      "Successfully automated household appliances with voice control",
      "Demonstrated real-time IoT integration with cloud-based services",
    ],
  },

  {
    id: 3,
    title: "Advanced Programming Final Project",
    company: "Amikom University Yogyakarta",
    description:
      "Created a Windows Form application for game top-up using C#. Designed a database and ERD with SQL Server Management Studio, then configured and connected the database to the application.",
    category: ["Software Development", "Database"],
    technologies: ["C#", "Windows Forms", "SQL Server", "SSMS"],
    date: "2023-10-01",
    duration: "3 months",
    location: "Yogyakarta, Indonesia",
    responsibilities: [
      "Developed a Windows Form application for handling game top-ups",
      "Designed database schema and ERD using SQL Server Management Studio",
      "Configured SQL Server database and integrated it with the application",
      "Tested and debugged the application to ensure functionality",
    ],
    achievements: [
      "Successfully built a functional game top-up application with database integration",
      "Demonstrated ability to connect front-end (Windows Form) with back-end (SQL Server)",
    ],
  },

  {
    id: 4,
    title: "Web Programming Final Project",
    company: "Amikom University Yogyakarta",
    description:
      "Created a responsive and dynamic football news website. Designed a database and ERD (Entity-Relationship Diagram) using MySQL and integrated it with PHP.",
    category: ["Web Development", "Database"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    date: "2024-03-01",
    duration: "4 months",
    location: "Yogyakarta, Indonesia",
    responsibilities: [
      "Developed a responsive and dynamic football news website",
      "Designed ERD and relational database structure with MySQL",
      "Implemented backend logic using PHP for dynamic content",
      "Integrated database with the website to store and retrieve articles",
    ],
    achievements: [
      "Delivered a fully functional web application with responsive design",
      "Successfully combined front-end and back-end for real-world use cases",
    ],
  },
];

// ======================= RENDER EXPERIENCES =======================
function renderExperiences(experiencesToRender) {
  const experiencesGrid = document.getElementById("projectsGrid");
  experiencesGrid.innerHTML = "";

  experiencesToRender.forEach((experience) => {
    const experienceCard = document.createElement("div");
    experienceCard.className =
      "project-card glass-card rounded-xl overflow-hidden shadow-lg p-5";

    // Format date
    const formattedDate = new Date(experience.date).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
      }
    );

    experienceCard.innerHTML = `
            <div class="flex flex-wrap mb-3">
              ${experience.category
                .map(
                  (cat) =>
                    `<span class="category-badge bg-blue-500/80">${cat}</span>`
                )
                .join("")}
            </div>
            <h3 class="text-xl font-bold mb-2">${experience.title}</h3>
            <p class="text-lg text-blue-300 mb-2">${experience.company}</p>
            <p class="text-gray-300 mb-4">${experience.description}</p>
            <div class="flex flex-wrap mb-4">
              ${experience.technologies
                .map((tech) => `<span class="tech-badge">${tech}</span>`)
                .join("")}
            </div>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm text-gray-400">${formattedDate} • ${
      experience.duration
    }</span>
              <span class="text-sm text-gray-400">${experience.location}</span>
            </div>
            <button onclick="showExperienceDetails(${
              experience.id
            })" class="detail-btn w-full">
              See Details
            </button>
          `;

    experiencesGrid.appendChild(experienceCard);
  });

  lucide.createIcons();
}

// ======================= SHOW EXPERIENCE DETAILS =======================
function showExperienceDetails(experienceId) {
  const experience = experiences.find((exp) => exp.id === experienceId);
  if (!experience) return;

  const modalContent = document.getElementById("modalContent");
  const modal = document.getElementById("projectModal");

  modalContent.innerHTML = `
          <div class="flex flex-wrap mb-4">
            ${experience.category
              .map(
                (cat) =>
                  `<span class="category-badge bg-blue-500/80">${cat}</span>`
              )
              .join("")}
          </div>
          <h2 class="text-2xl font-bold mb-2">${experience.title}</h2>
          <p class="text-xl text-blue-300 mb-4">${experience.company}</p>
          <p class="text-gray-300 mb-6">${experience.description}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 class="text-lg font-semibold mb-2">Duration</h3>
              <p class="text-gray-300">${experience.duration}</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Location</h3>
              <p class="text-gray-300">${experience.location}</p>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Technologies</h3>
            <div class="flex flex-wrap">
              ${experience.technologies
                .map((tech) => `<span class="tech-badge">${tech}</span>`)
                .join("")}
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Responsibilities</h3>
            <ul class="list-disc list-inside text-gray-300">
              ${experience.responsibilities
                .map((resp) => `<li>${resp}</li>`)
                .join("")}
            </ul>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Key Achievements</h3>
            <ul class="list-disc list-inside text-gray-300">
              ${experience.achievements
                .map((ach) => `<li>${ach}</li>`)
                .join("")}
            </ul>
          </div>
        `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ======================= CLOSE MODAL =======================
function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// ======================= FILTER & SORT =======================
let currentSort = "date-desc";
let currentFilter = "all";

function getFilteredExperiences() {
  if (currentFilter === "all") {
    return [...experiences];
  } else {
    return experiences.filter((experience) =>
      experience.category.some((cat) => cat === currentFilter)
    );
  }
}

function getSortedExperiences(experiencesToSort) {
  const sortedExperiences = [...experiencesToSort];

  switch (currentSort) {
    case "date-desc":
      return sortedExperiences.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    case "date-asc":
      return sortedExperiences.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    case "name-asc":
      return sortedExperiences.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sortedExperiences.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sortedExperiences;
  }
}

function updateDisplayedExperiences() {
  let displayedExperiences = getFilteredExperiences();
  displayedExperiences = getSortedExperiences(displayedExperiences);
  renderExperiences(displayedExperiences);
}

// ======================= INIT =======================
document.addEventListener("DOMContentLoaded", function () {
  updateDisplayedExperiences();
  setupEventListeners();
});

// ======================= FILTER & SORT =======================
function setupEventListeners() {
  // Sorting
  window.toggleSort = function (type) {
    const sortBtn = document.getElementById("sortBtn");

    if (currentSort === type) {
      currentSort = "";
      sortBtn.classList.remove("active-btn");
      document.querySelectorAll(".sort-option").forEach((option) => {
        option.classList.remove("selected-option");
      });
    } else {
      currentSort = type;
      sortBtn.classList.add("active-btn");
      markSelectedOption("sort", type);
    }

    updateDisplayedExperiences();
  };

  // Filtering
  window.toggleCategory = function (category) {
    const filterBtn = document.getElementById("filterBtn");

    if (currentFilter === category) {
      currentFilter = "all";
      filterBtn.classList.remove("active-btn");
      document.querySelectorAll(".filter-option").forEach((option) => {
        option.classList.remove("selected-option");
      });
    } else {
      currentFilter = category;
      filterBtn.classList.add("active-btn");
      markSelectedOption("filter", category);
    }

    updateDisplayedExperiences();
  };
}

// ======================= ACTIVE MENU =======================
lucide.createIcons();

function markSelectedOption(optionType, value) {
  const allOptions = document.querySelectorAll(`.${optionType}-option`);
  allOptions.forEach((option) => {
    option.classList.remove("selected-option");
  });

  const selectedOption = document.querySelector(
    `.${optionType}-option[data-value="${value}"]`
  );
  if (selectedOption) {
    selectedOption.classList.add("selected-option");
  }
}

// ======================= DROPDOWN =======================
function toggleSortDropdown() {
  const dropdown = document.getElementById("sortDropdown");
  const filterDropdown = document.getElementById("filterDropdown");

  filterDropdown.classList.add("opacity-0", "invisible");
  dropdown.classList.toggle("opacity-0");
  dropdown.classList.toggle("invisible");
}

function toggleFilterDropdown() {
  const dropdown = document.getElementById("filterDropdown");
  const sortDropdown = document.getElementById("sortDropdown");

  sortDropdown.classList.add("opacity-0", "invisible");
  dropdown.classList.toggle("opacity-0");
  dropdown.classList.toggle("invisible");
}

document.addEventListener("click", function (event) {
  const sortBtn = document.getElementById("sortBtn");
  const filterBtn = document.getElementById("filterBtn");
  const sortDropdown = document.getElementById("sortDropdown");
  const filterDropdown = document.getElementById("filterDropdown");

  if (!sortBtn.contains(event.target) && !sortDropdown.contains(event.target)) {
    sortDropdown.classList.add("opacity-0", "invisible");
  }
  if (
    !filterBtn.contains(event.target) &&
    !filterDropdown.contains(event.target)
  ) {
    filterDropdown.classList.add("opacity-0", "invisible");
  }
});

// Close modal when clicking outside
document.getElementById("projectModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// ======================= HAMBURGER MENU =======================
document.addEventListener("DOMContentLoaded", function () {
  if (!currentSort) currentSort = "date-desc";
  if (!currentFilter) currentFilter = "all";

  function closeMenu() {
    const leftMenu = document.querySelector(".vertical-menu");
    const rightMenu = document.querySelector(".fixed.right-6");
    const overlay = document.getElementById("overlay");
    const hamburgerBtn = document.getElementById("hamburgerBtn");

    // Jika elemen-elemen ini tidak ada (misalnya di mode desktop), hentikan fungsi
    if (!hamburgerBtn || !leftMenu || !rightMenu || !overlay) return;

    leftMenu.classList.remove("active");
    rightMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburgerBtn.classList.remove("active"); // Ini penting, jangan dihapus
  }

  // ================= Setup Hamburger Menu =================
  function setupHamburgerMenu() {
    if (document.getElementById("hamburgerBtn")) return;

    const hamburgerBtn = document.createElement("div");
    hamburgerBtn.className = "hamburger-btn";
    hamburgerBtn.id = "hamburgerBtn";
    hamburgerBtn.innerHTML = `
      <i data-lucide="menu" class="hamburger-icon menu-icon w-7 h-7"></i>
      <i data-lucide="x" class="hamburger-icon close-icon w-7 h-7"></i>
    `;
    document.body.appendChild(hamburgerBtn);

    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    lucide.createIcons();

    const menuIcon = hamburgerBtn.querySelector(".menu-icon");
    const closeIcon = hamburgerBtn.querySelector(".close-icon");
    const leftMenu = document.querySelector(".vertical-menu");
    const rightMenu = document.querySelector(".fixed.right-6");

    function openMenu() {
      leftMenu.classList.add("active");
      rightMenu.classList.add("active");
      overlay.classList.add("active");
      hamburgerBtn.classList.add("active"); // Ini penting, jangan dihapus
    }

    hamburgerBtn.addEventListener("click", () => {
      const leftMenu = document.querySelector(".vertical-menu");
      if (leftMenu.classList.contains("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener("click", closeMenu);
  }

  // ================= Update Menu Styles for Mobile =================
  function updateMenuStylesForMobile() {
    const leftMenu = document.querySelector(".vertical-menu");
    const rightMenu = document.querySelector(".fixed.right-6");

    leftMenu.style.left = "0";
    leftMenu.style.transform = "translateX(-5000%)";
    leftMenu.style.padding = "2rem 1rem";
    leftMenu.style.maxWidth = "100px";
    leftMenu.style.transition = "transform 0.5s ease";
    leftMenu.style.zIndex = "40";
    leftMenu.style.justifyContent = "center";
    leftMenu.style.marginBottom = "0";
    leftMenu.classList.add("mobile-menu");

    rightMenu.style.right = "0";
    rightMenu.style.transform = "translateX(5000%)";
    rightMenu.style.backdropFilter = "blur(10px)";
    rightMenu.style.maxWidth = "100%";
    rightMenu.style.transition = "transform 0.5s ease";
    rightMenu.style.zIndex = "40";
    rightMenu.style.justifyContent = "center";
    rightMenu.classList.add("mobile-menu");
  }

  // ================= Check Screen Size =================
  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      updateMenuStylesForMobile();
      setupHamburgerMenu();
    } else {
      const leftMenu = document.querySelector(".vertical-menu");
      const rightMenu = document.querySelector(".fixed.right-6");
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      const overlay = document.getElementById("overlay");

      leftMenu.style.cssText = "";
      leftMenu.classList.remove("mobile-menu", "active");

      rightMenu.style.cssText = "";
      rightMenu.classList.remove("mobile-menu", "active");

      if (hamburgerBtn) hamburgerBtn.remove();
      if (overlay) overlay.remove();
    }
  }

  // ================= Init =================
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});
