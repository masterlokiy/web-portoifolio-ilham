// ======================= CERTIFICATE DATA =======================
const certificates = [
  {
    id: 1,
    title: "CCNAv7: Introduction to Networks",
    imageUrl: "/assets/images/certifications/1.jpg",
    date: "2024-01-05",
    issuer: "Cisco Networking Academy",
    description:
      "Certificate of Course Completion for CCNAv7: Introduction to Networks, covering switching, routing, IPv4/IPv6, OSI model, security best practices, and troubleshooting.",
  },

  {
    id: 2,
    title: "Fundamentals of Data Visualization",
    imageUrl: "/assets/images/certifications/2.jpg",
    date: "2024-05-23",
    issuer: "Dicoding Academy",
    description:
      "Certificate of completion for the Fundamentals of Data Visualization course, covering data preparation, visualization techniques using Google Sheets, and best practices in effective data storytelling and design.",
  },
  {
    id: 3,
    title: "Introduction to Programming with Python",
    imageUrl: "/assets/images/certifications/3.jpg",
    date: "2024-05-30",
    issuer: "Dicoding Academy",
    description:
      "Certificate of completion for the Introduction to Programming with Python course, focusing on the fundamentals of programming, Python syntax, and problem-solving through coding exercises.",
  },

  {
    id: 4,
    title: "Data Analysis with Python",
    imageUrl: "/assets/images/certifications/4.jpg",
    date: "2024-10-13",
    issuer: "Dicoding Academy",
    description:
      "Certificate of completion for the Data Analysis with Python course, covering data processing, exploratory data analysis (EDA), visualization, and essential Python libraries for data analytics.",
  },
  {
  id: 5,
  title: "Build Basic Generative Adversarial Networks (GANs)",
  imageUrl: "/assets/images/certifications/5.jpg",
  date: "2024-12-08",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the Build Basic GANs course, covering the fundamentals of Generative Adversarial Networks, including architecture, training techniques, and applications."
},
{
  id: 6,
  title: "Custom Models, Layers, and Loss Functions with TensorFlow",
  imageUrl: "/assets/images/certifications/6.jpg",
  date: "2024-11-27",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the TensorFlow course, focusing on building custom models, layers, and loss functions for advanced deep learning applications."
},
{
  id: 7,
  title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
  imageUrl: "/assets/images/certifications/7.jpg",
  date: "2024-10-14",
  issuer: "DeepLearning.AI & Stanford Online (via Coursera)",
  description: "Certificate of completion for the course covering unsupervised learning techniques, recommender systems, and reinforcement learning, taught by Andrew Ng."
},
{
  id: 8,
  title: "Natural Language Processing in TensorFlow",
  imageUrl: "/assets/images/certifications/8.jpg",
  date: "2024-11-10",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on building and training NLP models using TensorFlow, taught by Laurence Moroney."
},
{
  id: 9,
  title: "Supervised Machine Learning: Regression and Classification",
  imageUrl: "/assets/images/certifications/9.jpg",
  date: "2024-10-14",
  issuer: "DeepLearning.AI & Stanford University (via Coursera)",
  description: "Certificate of completion for the course on supervised learning fundamentals including regression and classification, taught by Andrew Ng."
},
{
  id: 10,
  title: "Advanced Learning Algorithms",
  imageUrl: "/assets/images/certifications/10.jpg",
  date: "2024-10-14",
  issuer: "DeepLearning.AI & Stanford University (via Coursera)",
  description: "Certificate of completion for the course on advanced learning algorithms including neural networks, decision trees, and ensemble methods, taught by Andrew Ng."
},
{
  id: 11,
  title: "Linear Algebra for Machine Learning and Data Science",
  imageUrl: "/assets/images/certifications/11.jpg",
  date: "2024-10-09",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on linear algebra foundations applied to machine learning and data science, taught by Luis Serrano."
},
{
  id: 12,
  title: "Browser-based Models with TensorFlow.js",
  imageUrl: "/assets/images/certifications/12.jpg",
  date: "2024-11-16",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on building and deploying machine learning models directly in the browser using TensorFlow.js, taught by Laurence Maroney."
},
{
  id: 13,
  title: "Data Pipelines with TensorFlow Data Services",
  imageUrl: "/assets/images/certifications/13.jpg",
  date: "2024-11-17",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on building efficient data pipelines with TensorFlow Data Services, taught by Laurence Maroney."
},
{
  id: 14,
  title: "Sequences, Time Series and Prediction",
  imageUrl: "/assets/images/certifications/14.jpg",
  date: "2024-11-11",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on sequences, time series analysis, and prediction using TensorFlow, taught by Laurence Maroney."
},
{
  id: 15,
  title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
  imageUrl: "/assets/images/certifications/15.jpg",
  date: "2024-10-27",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the foundational TensorFlow course covering AI, ML, and Deep Learning, taught by Laurence Maroney."
},
{
  id: 16,
  title: "Structuring Machine Learning Projects",
  imageUrl: "/assets/images/certifications/16.jpg",
  date: "2024-11-11",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on best practices in structuring machine learning projects, taught by Andrew Ng."
},
{
  id: 17,
  title: "Generative AI for Everyone",
  imageUrl: "/assets/images/certifications/17.jpg",
  date: "2024-11-29",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course introducing generative AI concepts and applications, taught by Andrew Ng."
},
{
  id: 18,
  title: "Device-based Models with TensorFlow Lite",
  imageUrl: "/assets/images/certifications/18.jpg",
  date: "2024-11-16",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on deploying machine learning models on devices using TensorFlow Lite, taught by Laurence Maroney."
},
{
  id: 19,
  title: "Crash Course on Python",
  imageUrl: "/assets/images/certifications/19.jpg",
  date: "2024-09-24",
  issuer: "Google (via Coursera)",
  description: "Certificate of completion for the introductory Python programming course, covering fundamentals of coding, functions, and problem-solving."
},
{
  id: 20,
  title: "Advanced Computer Vision with TensorFlow",
  imageUrl: "/assets/images/certifications/20.jpg",
  date: "2024-12-02",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the advanced course on computer vision using TensorFlow, covering object detection, image segmentation, and modern architectures."
},
{
  id: 21,
  title: "Using Python to Interact with the Operating System",
  imageUrl: "/assets/images/certifications/21.jpg",
  date: "2024-09-28",
  issuer: "Google (via Coursera)",
  description: "Certificate of completion for the course on using Python to interact with the operating system, including automation, file management, and process handling."
},
{
  id: 22,
  title: "Convolutional Neural Networks in TensorFlow",
  imageUrl: "/assets/images/certifications/22.jpg",
  date: "2024-11-07",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on building and training Convolutional Neural Networks (CNNs) in TensorFlow for image recognition and computer vision tasks."
},
{
  id: 23,
  title: "Custom and Distributed Training with TensorFlow",
  imageUrl: "/assets/images/certifications/23.jpg",
  date: "2024-11-28",
  issuer: "DeepLearning.AI (via Coursera)",
  description: "Certificate of completion for the course on building custom training loops and distributed training strategies with TensorFlow to scale deep learning models efficiently."
},
];

// ======================= RENDER CERTIFICATES =======================
function renderCertificates(certificatesToRender) {
  const certificatesGrid = document.getElementById("certificatesGrid");
  certificatesGrid.innerHTML = "";
  certificatesToRender.forEach((cert) => {
    const certCard = document.createElement("div");
    certCard.className =
      "glass-card rounded-xl overflow-hidden shadow-lg p-4 flex flex-col";
    certCard.innerHTML = `
      <div class="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <img src="${cert.imageUrl}" alt="${cert.title}" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      <div class="flex-grow flex flex-col justify-between">
        <h3 class="text-xl font-bold text-center mb-4">${cert.title}</h3>
        <div class="text-center text-sm text-gray-300 mb-4">
          <div>Issued: ${formatDate(cert.date)}</div>
          <div>By: ${cert.issuer}</div>
        </div>
        <button onclick="showCertificateDetails(${cert.id})" class="detail-btn w-full mt-auto">
          See Detail
        </button>
      </div>
    `;
    certificatesGrid.appendChild(certCard);
  });
  lucide.createIcons();
}

// ======================= SORT FUNCTIONALITY =======================
function sortCertificates(sortType) {
  const sortedCertificates = [...certificates];

  switch (sortType) {
    case "newest":
      sortedCertificates.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "oldest":
      sortedCertificates.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "title-asc":
      sortedCertificates.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sortedCertificates.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      break;
  }

  renderCertificates(sortedCertificates);
}
function toggleSort(sortType) {
  const sortMap = {
    "date-desc": "newest",
    "date-asc": "oldest",
    "name-asc": "title-asc",
    "name-desc": "title-desc",
  };

  const sortBtn = document.getElementById("sortBtn");
  const dropdown = document.getElementById("sortDropdown");
  const options = document.querySelectorAll("#sortDropdown .sort-option");

  // cek apakah opsi yang diklik sudah aktif
  const selected = document.querySelector("#sortDropdown .sort-option.selected-option");
if (selected && selected.getAttribute("data-value") === sortType) {
  // ==== Reset ke default ====
  options.forEach((opt) => opt.classList.remove("selected-option"));
  if (sortBtn) sortBtn.classList.remove("active-btn");
  dropdown.classList.add("opacity-0", "invisible");

  // render ulang default (Newest First misalnya)
  sortCertificates("newest");  

  return; // stop biar tidak lanjut highlight opsi
}


  // ==== Apply Sort ====
  sortCertificates(sortMap[sortType]);

  // aktifkan tombol utama
  if (sortBtn) sortBtn.classList.add("active-btn");

  // highlight opsi yang dipilih
  options.forEach((opt) => {
    opt.classList.remove("selected-option");
    if (opt.getAttribute("data-value") === sortType) {
      opt.classList.add("selected-option");
    }
  });

  // Tutup dropdown
  dropdown.classList.add("opacity-0", "invisible");
}

// Default load -> Newest First
document.addEventListener("DOMContentLoaded", function () {
  toggleSort("date-desc");
  lucide.createIcons();
});


// ======================= DATE FORMATTING =======================
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// ======================= MODAL LOGIC =======================
function showCertificateDetails(certId) {
  const certificate = certificates.find((c) => c.id === certId);
  if (!certificate) return;

  const modalContent = document.getElementById("modalContent");
  const modal = document.getElementById("certificateModal");

  modalContent.innerHTML = `
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold mb-2">${certificate.title}</h2>
      <p class="text-gray-300">Issued: ${formatDate(certificate.date)}</p>
      <p class="text-gray-300">By: ${certificate.issuer}</p>
    </div>
    <div class="mb-6">
      <img src="${certificate.imageUrl}" alt="${certificate.title}" class="w-full h-auto rounded-lg mx-auto max-w-md">
    </div>
    <div class="bg-gray-800 p-4 rounded-lg">
      <h3 class="text-lg font-semibold mb-2">Description</h3>
      <p class="text-gray-300">${certificate.description}</p>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("certificateModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

document.getElementById("certificateModal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// ======================= DROPDOWN LOGIC =======================
function toggleSortDropdown() {
  const dropdown = document.getElementById("sortDropdown");
  dropdown.classList.toggle("opacity-0");
  dropdown.classList.toggle("invisible");
}

document.addEventListener("click", function (event) {
  const sortBtn = document.getElementById("sortBtn");
  const sortDropdown = document.getElementById("sortDropdown");

  if (!sortBtn.contains(event.target) && !sortDropdown.contains(event.target)) {
    sortDropdown.classList.add("opacity-0", "invisible");
  }
});

// ======================= INITIAL PAGE LOAD =======================
document.addEventListener("DOMContentLoaded", function () {
  toggleSort("date-desc"); // default -> Newest First aktif
  lucide.createIcons();
});

// ======================= HAMBURGER MENU LOGIC =======================
document.addEventListener("DOMContentLoaded", function () {
  function closeMenu() {
    const leftMenu = document.querySelector(".vertical-menu");
    const rightMenu = document.querySelector(".fixed.right-6");
    const overlay = document.getElementById("overlay");
    const hamburgerBtn = document.getElementById("hamburgerBtn");

    if (!hamburgerBtn || !leftMenu || !rightMenu || !overlay) return;

    leftMenu.classList.remove("active");
    rightMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburgerBtn.classList.remove("active");
  }

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

    const leftMenu = document.querySelector(".vertical-menu");
    const rightMenu = document.querySelector(".fixed.right-6");

    hamburgerBtn.addEventListener("click", () => {
      if (leftMenu.classList.contains("active")) {
        closeMenu();
      } else {
        leftMenu.classList.add("active");
        rightMenu.classList.add("active");
        overlay.classList.add("active");
        hamburgerBtn.classList.add("active");
      }
    });

    overlay.addEventListener("click", closeMenu);
  }

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
    rightMenu.style.maxWidth = "100%";
    rightMenu.style.transition = "transform 0.5s ease";
    rightMenu.style.zIndex = "40";
    rightMenu.style.justifyContent = "center";
    rightMenu.classList.add("mobile-menu");
  }

  function checkScreenSize() {
    const leftMenu = document.querySelector(".vertical-menu");
    const rightMenu = document.querySelector(".fixed.right-6");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const overlay = document.getElementById("overlay");

    if (window.innerWidth <= 768) {
      updateMenuStylesForMobile();
      setupHamburgerMenu();
    } else {
      leftMenu.style.cssText = "";
      leftMenu.classList.remove("mobile-menu", "active");
      rightMenu.style.cssText = "";
      rightMenu.classList.remove("mobile-menu", "active");

      if (hamburgerBtn) hamburgerBtn.remove();
      if (overlay) overlay.remove();
    }
  }

  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);

});
