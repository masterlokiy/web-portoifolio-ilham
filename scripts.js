const profileImg = document.getElementById("profileImage");
const modalClone = document.getElementById("modalClone");
const cloneImg = document.getElementById("cloneImage");
const overlay = document.getElementById("modalOverlay");

let currentRotateX = 0;
let currentRotateY = 0;

// When profile image is clicked
profileImg.addEventListener("click", () => {
  const rect = profileImg.getBoundingClientRect();

  // Set clone src and initial style
  cloneImg.src = profileImg.src;
  cloneImg.style.position = "absolute";
  cloneImg.style.top = `${rect.top}px`;
  cloneImg.style.left = `${rect.left}px`;
  cloneImg.style.width = `${rect.width}px`;
  cloneImg.style.height = `${rect.height}px`;
  cloneImg.style.transform = "translate(0, 0) scale(1)";
  cloneImg.style.objectFit = "cover";
  cloneImg.style.transition = "all 0.5s ease";
  cloneImg.style.zIndex = "50";

  // Show clone and hide original
  profileImg.style.visibility = "hidden";
  cloneImg.style.visibility = "visible";
  modalClone.classList.remove("pointer-events-none");
  overlay.classList.add("opacity-100");

  // Animate to the center of the screen
  requestAnimationFrame(() => {
    cloneImg.style.top = "50%";
    cloneImg.style.left = "50%";
    cloneImg.style.transform = "translate(-50%, -50%) scale(1.1)";
    cloneImg.style.width = "400px";
    cloneImg.style.height = "auto";
  });
});

// When overlay is clicked
overlay.addEventListener("click", () => {
  const rect = profileImg.getBoundingClientRect();

  // Hide overlay
  overlay.classList.remove("opacity-100");

  // Animate clone back to original position
  cloneImg.style.top = `${rect.top}px`;
  cloneImg.style.left = `${rect.left}px`;
  cloneImg.style.width = `${rect.width}px`;
  cloneImg.style.height = `${rect.height}px`;
  cloneImg.style.transform = "translate(0, 0) scale(1)";

  // After animation ends (0.5s), reset
  setTimeout(() => {
    modalClone.classList.add("pointer-events-none");
    profileImg.style.visibility = "visible";

    // Remove clone: clear src and style
    cloneImg.removeAttribute("src");
    cloneImg.removeAttribute("style");
  }, 500);
});

// Close modal on ESC key
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    !modalClone.classList.contains("pointer-events-none")
  ) {
    overlay.click();
  }
});

// Initialize Lucide icons
lucide.createIcons();
