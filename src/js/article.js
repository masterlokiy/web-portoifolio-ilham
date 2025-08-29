// ======================= ARTICLE DATA =======================
const articles = [
  {
    id: 1,
    title:
      "Potato Leaf Disease Classification In Uncontrolled Environments (Process)",
    authors: "Ilhamme, A. Researcher, B. Scientist",
    journal: "In Progress",
    description:
      "A novel approach to image recognition using deep neural networks with improved accuracy and efficiency.",
    abstract:
      "This paper presents a novel architecture for convolutional neural networks that significantly improves image recognition accuracy while reducing computational requirements. Our approach combines attention mechanisms with traditional CNN layers to focus on relevant image features. We evaluated our model on several benchmark datasets and achieved state-of-the-art results with 15% fewer parameters than previous leading models.",
    category: ["AI Research", "Neural Networks"],
    keywords: ["Neural Networks", "Computer Vision", "Deep Learning"],
    date: "null",
    status: "Ongoing",
    doi: "In Progress",
    citation: "In Progress",
    downloadLink: "/page-plus/inprogress.html",
    viewLink: "/page-plus/inprogress.html",
  },
];

// ======================= RENDER ARTICLES =======================
function renderArticles(articlesToRender) {
  const articlesGrid = document.getElementById("articlesGrid");
  articlesGrid.innerHTML = "";

  articlesToRender.forEach((article) => {
    const articleCard = document.createElement("div");
    articleCard.className =
      "glass-card rounded-xl overflow-hidden shadow-lg p-5";

    // Format date
    const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    articleCard.innerHTML = `
            <div class="flex flex-wrap mb-3">
              ${article.category
                .map(
                  (cat) =>
                    `<span class="category-badge bg-blue-500/80">${cat}</span>`
                )
                .join("")}
            </div>
            <h3 class="text-xl font-bold mb-2">${article.title}</h3>
            <p class="text-lg text-blue-300 mb-2">${article.journal}</p>
            <p class="text-gray-300 mb-4">${article.description}</p>
            <div class="flex flex-wrap mb-4">
              ${article.keywords
                .map((kw) => `<span class="tech-badge">${kw}</span>`)
                .join("")}
            </div>
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm text-gray-400">${formattedDate}</span>
              <span class="text-sm text-gray-400">DOI: ${article.doi}</span>
            </div>
            <button onclick="showArticleDetails(${
              article.id
            })" class="detail-btn w-full">
              Read Abstract
            </button>
            <div class="flex justify-between mt-3">
              <a href="${
                article.downloadLink
              }" class="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                <i data-lucide="download" class="w-4 h-4 mr-1"></i> Download PDF
              </a>
              <a href="${
                article.viewLink
              }" class="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                <i data-lucide="external-link" class="w-4 h-4 mr-1"></i> View Online
              </a>
            </div>
          `;

    articlesGrid.appendChild(articleCard);
  });

  lucide.createIcons();
}

// ======================= SHOW ARTICLE DETAILS =======================
function showArticleDetails(articleId) {
  const article = articles.find((a) => a.id === articleId);
  if (!article) return;

  const modalContent = document.getElementById("modalContent");
  const modal = document.getElementById("articleModal");

  modalContent.innerHTML = `
          <div class="flex flex-wrap mb-4">
            ${article.category
              .map(
                (cat) =>
                  `<span class="category-badge bg-blue-500/80">${cat}</span>`
              )
              .join("")}
          </div>
          <h2 class="text-2xl font-bold mb-2">${article.title}</h2>
          <p class="text-lg text-blue-300 mb-2">${article.authors}</p>
          <p class="text-gray-300 mb-4">${article.journal}</p>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Abstract</h3>
            <p class="text-gray-300">${article.abstract}</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 class="text-lg font-semibold mb-2">Publication Date</h3>
              <p class="text-gray-300">${new Date(
                article.date
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">DOI</h3>
              <p class="text-gray-300">${article.doi}</p>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Keywords</h3>
            <div class="flex flex-wrap">
              ${article.keywords
                .map(
                  (kw) => `<span class="tech-badge bg-gray-700">${kw}</span>`
                )
                .join("")}
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Citation</h3>
            <p class="text-gray-300 text-sm">${article.citation}</p>
          </div>
          
          <div class="flex justify-between">
            <a href="${
              article.downloadLink
            }" class="detail-btn flex items-center">
              <i data-lucide="download" class="w-4 h-4 mr-2"></i> Download PDF
            </a>
            <a href="${article.viewLink}" class="detail-btn flex items-center">
              <i data-lucide="external-link" class="w-4 h-4 mr-2"></i> View Online
            </a>
          </div>
        `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  lucide.createIcons();
}

// ======================= CLOSE MODAL =======================
function closeModal() {
  const modal = document.getElementById("articleModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// ======================= FILTER & SORT =======================
let currentSort = "date-desc";
let currentFilter = "all";

function getFilteredArticles() {
  if (currentFilter === "all") {
    return [...articles];
  } else {
    return articles.filter((article) =>
      article.category.some((cat) => cat === currentFilter)
    );
  }
}

function getSortedArticles(articlesToSort) {
  const sortedArticles = [...articlesToSort];

  switch (currentSort) {
    case "date-desc":
      return sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "date-asc":
      return sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "name-asc":
      return sortedArticles.sort((a, b) => a.title.localeCompare(b.title));
    case "name-desc":
      return sortedArticles.sort((a, b) => b.title.localeCompare(a.title));
    default:
      return sortedArticles;
  }
}

function updateDisplayedArticles() {
  let displayedArticles = getFilteredArticles();
  displayedArticles = getSortedArticles(displayedArticles);
  renderArticles(displayedArticles);
}

// ======================= INIT =======================
document.addEventListener("DOMContentLoaded", function () {
  updateDisplayedArticles();
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

    updateDisplayedArticles();
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

    updateDisplayedArticles();
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
document.getElementById("articleModal").addEventListener("click", function (e) {
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
