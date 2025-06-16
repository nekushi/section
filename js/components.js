document.addEventListener("DOMContentLoaded", function () {
  // Sidebar toggle functionality
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
    });
  }

  // Mobile sidebar toggle
  const menuToggle = document.querySelector(".menu-toggle");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    if (window.innerWidth <= 992) {
      if (
        !sidebar.contains(event.target) &&
        !menuToggle.contains(event.target) &&
        sidebar.classList.contains("active")
      ) {
        sidebar.classList.remove("active");
      }
    }
  });

  // Component navigation
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  const sections = document.querySelectorAll(".component-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      // Update active class on nav links
      navLinks.forEach((navLink) => {
        navLink.parentElement.classList.remove("active");
      });
      this.parentElement.classList.add("active");

      // Show the target section, hide others
      sections.forEach((section) => {
        section.classList.add("hidden");
      });
      document.querySelector(targetId).classList.remove("hidden");

      // Close mobile sidebar after navigation
      if (window.innerWidth <= 992) {
        sidebar.classList.remove("active");
      }
    });
  });

  // Button actions (placeholders for future functionality)
  const actionButtons = document.querySelectorAll(".btn-icon, .btn-send");

  actionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // This is where you would add actual functionality
      // For now, just a placeholder
      const buttonType = this.querySelector("i").className;
      console.log(`Button clicked: ${buttonType}`);
    });
  });

  // Chat input functionality
  const chatInput = document.querySelector(".chat-input input");
  const sendButton = document.querySelector(".btn-send");

  if (chatInput && sendButton) {
    // Send message on Enter key
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && this.value.trim() !== "") {
        sendMessage(this.value);
        this.value = "";
      }
    });

    // Send message on button click
    sendButton.addEventListener("click", function () {
      if (chatInput.value.trim() !== "") {
        sendMessage(chatInput.value);
        chatInput.value = "";
      }
    });
  }

  // Function to handle sending a message (placeholder)
  function sendMessage(message) {
    console.log(`Message sent: ${message}`);
    // This is where you would add actual message sending functionality
    // For now, just logging to console
  }
});
