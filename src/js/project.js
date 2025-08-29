// ======================= PROJECT DATA =======================
const projects = [
  {
    id: 1,
    title: "Potato Leaf Disease Detection",
    description:
      "A computer vision system to detect diseases in potato leaves using deep learning.",
    category: ["Computer Vision", "Machine Learning"],
    technologies: ["Python", "TensorFlow", "OpenCV"],
    date: "2025-7-30",
    imageUrl: "/assets/images/potato-diseases-bg.jpg",
    viewLink: "https://potato-leaf-disease-classification-v2.streamlit.app/",
  },
  {
    id: 2,
    title: "Luma",
    description:
      "As a brave cat with the mysterious power to merge with light, your destiny is to embark on a dangerous journey.",
    category: ["Game Development"],
    technologies: ["Godot", "GDScript", "Pixel Art"],
    date: "2025-07-28",
    imageUrl: "/assets/images/luma.png",
    viewLink: "https://krissedu.itch.io/luma",
  },
  {
    id: 3,
    title: "Pawon Butomo Landing Page",
    description:
      "A responsive landing page for Pawon Butomo, featuring product catalog, about us, and contact section.",
    about:
      "Pawon Butomo is a responsive website developed with custom CSS. It includes a fixed navbar, hero section, product catalog, about us, and footer, providing a modern and user-friendly interface.",
    category: ["Web Development"],
    technologies: ["HTML", "CSS", "JavaScript"],
    date: "2023-07-3",
    imageUrl: "/assets/images/pawon-butomo.png",
    viewLink: "https://pawon-butomo.vercel.app/",
  },
  {
    id: 4,
    title: "Jump to Sky",
    description: "An endless jumping game built with Godot Engine.",
    about:
      "Jump to Sky is a 2D endless jumping game developed using Godot Engine. The player controls a character to jump across platforms, aiming for the highest score while avoiding obstacles.",
    category: ["Game Development"],
    technologies: ["Godot Engine", "GDScript"],
    date: "2025-01-16",
    imageUrl: "/assets/images/logo_ilhamme.png",
    viewLink: "https://github.com/masterlokiy/jump-to-sky",
  },
  {
    id: 5,
    title: "TopGame",
    description: "Top-up gaming account system with SQL Server integration.",
    about:
      "TopGame is a Windows Form application developed in C# that allows users to top-up their gaming accounts. The application integrates with a SQL Server database, which was designed using SQL Server Management Studio.",
    category: ["Desktop App"],
    technologies: ["C#", "SQL Server", "WinForms"],
    date: "2024-12-8",
    imageUrl: "/assets/images/logo_ilhamme.png",
    viewLink: "https://github.com/masterlokiy/TOPUPGAME",
  },
];

// ======================= RENDER PROJECTS =======================
function renderProjects(projectsToRender) {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = "";

  projectsToRender.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className =
      "project-card glass-card rounded-xl overflow-hidden shadow-lg clickable-card";

    // Format date
    const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    projectCard.innerHTML = `
      ${
        project.viewLink
          ? `<a href="${project.viewLink}" target="_blank" class="card-link"></a>`
          : ""
      }
      <div class="h-48 overflow-hidden">
        <img src="${project.imageUrl}" alt="${project.title}"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
      </div>
      <div class="p-5">
        <div class="flex flex-wrap mb-3">
          ${project.category
            .map(
              (cat) =>
                `<span class="category-badge ${
                  project.categoryColor || "bg-blue-500/80"
                }">${cat}</span>`
            )
            .join("")}
        </div>
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-gray-300 mb-4">${project.description}</p>
        <div class="flex flex-wrap mb-4">
          ${project.technologies
            .map((tech) => `<span class="tech-badge">${tech}</span>`)
            .join("")}
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-400">${formattedDate}</span>
        </div>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });

  lucide.createIcons({ context: projectsGrid });
}

// ======================= FILTER & SORT =======================
function getFilteredProjects() {
  if (currentFilter === "all") {
    return [...projects];
  } else {
    return projects.filter((project) =>
      project.category.some((cat) => cat === currentFilter)
    );
  }
}

function getSortedProjects(projectsToSort) {
  const sortedProjects = [...projectsToSort];

  switch (currentSort) {
    case "date-desc":
      return sortedProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "date-asc":
      return sortedProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "name-asc":
      return sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sortedProjects.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sortedProjects;
  }
}

function updateDisplayedProjects() {
  let displayedProjects = getFilteredProjects();
  displayedProjects = getSortedProjects(displayedProjects);
  renderProjects(displayedProjects);
}

// ======================= INIT =======================
document.addEventListener("DOMContentLoaded", function () {
  updateDisplayedProjects();
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
      // PANGGIL LANGSUNG DI SINI
      if (typeof closeMenu === "function") {
        closeMenu();
      }
    }

    updateDisplayedProjects();
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
      // PANGGIL LANGSUNG DI SINI
      if (typeof closeMenu === "function") {
        closeMenu();
      }
    }

    updateDisplayedProjects();
  };
}

// ======================= ACTIVE MENU =======================
lucide.createIcons();

let currentSort = "";
let currentFilter = "all";

const currentPage = window.location.pathname.split("/").pop();
const activeColors = {
  "project.html": "active-blue",
  "pengalaman.html": "active-green",
  "artikel.html": "active-purple",
  "sertifikasi.html": "active-yellow",
};

document.querySelectorAll(".fixed.right-6 a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage && activeColors[href]) {
    link.classList.add(...activeColors[href].split(" "));
  }
});

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
