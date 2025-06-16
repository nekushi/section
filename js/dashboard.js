document.addEventListener("DOMContentLoaded", function () {
  // Sidebar toggle functionality
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");
  const sidebarOverlay = document.querySelector(".sidebar-overlay");

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      localStorage.setItem(
        "sidebarCollapsed",
        sidebar.classList.contains("collapsed")
      );
    });

    // Check if sidebar was collapsed in previous session
    if (localStorage.getItem("sidebarCollapsed") === "true") {
      sidebar.classList.add("collapsed");
    }
  }

  // Mobile sidebar toggle
  const menuToggle = document.querySelector(".menu-toggle");

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    if (menuToggle) menuToggle.classList.toggle("active");
    if (sidebarOverlay) sidebarOverlay.classList.toggle("active");

    // Prevent body scrolling when sidebar is open
    document.body.classList.toggle("sidebar-open");
  }

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleSidebar();
    });
  }

  // Close sidebar when clicking on overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", toggleSidebar);
  }

  // Close sidebar when clicking outside on mobile
  document.addEventListener("click", function (event) {
    if (window.innerWidth <= 992) {
      if (
        sidebar &&
        !sidebar.contains(event.target) &&
        menuToggle &&
        !menuToggle.contains(event.target) &&
        sidebar.classList.contains("active")
      ) {
        toggleSidebar();
      }
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    // If window is resized larger than mobile breakpoint, remove active class
    if (
      window.innerWidth > 992 &&
      sidebar &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("active");
      if (sidebarOverlay) sidebarOverlay.classList.remove("active");
      document.body.classList.remove("sidebar-open");
    }
  });

  // SPA Navigation
  function handleNavigation() {
    const path = window.location.pathname;
    const hash = window.location.hash;

    // Find the active page from pathname
    let activePage = path.split("/").pop().replace(".html", "");
    if (activePage === "dashboard" || activePage === "") {
      activePage = "announcements";
    }

    // If there's a hash, it overrides the pathname
    if (hash) {
      activePage = hash.substring(1); // Remove the # character
    }

    // Update sidebar active state
    const navLinks = document.querySelectorAll(".sidebar-nav a");
    navLinks.forEach((link) => {
      const linkPage = link
        .getAttribute("href")
        .replace(".html", "")
        .replace("#", "");
      if (linkPage === activePage) {
        link.parentElement.classList.add("active");
      } else {
        link.parentElement.classList.remove("active");
      }
    });

    // Update page title
    const pageTitle = document.querySelector("title");
    if (pageTitle) {
      pageTitle.textContent = `BSCS 3A - ${
        activePage.charAt(0).toUpperCase() + activePage.slice(1)
      }`;
    }

    // Load content if using hash-based navigation
    if (hash) {
      loadContent(activePage);
    }
  }

  // Function to load content without page refresh with improved transitions
  function loadContent(page) {
    const mainContent = document.querySelector(".main-content");
    if (!mainContent) return;

    // Get all sections
    const sections = document.querySelectorAll(".component-section");
    const activeSection = document.getElementById(page);

    if (!activeSection) return;

    // Fade out current active sections
    sections.forEach((section) => {
      if (!section.classList.contains("hidden")) {
        // Apply fade out effect
        section.style.opacity = "0";
        // section.style.transition = "opacity 0.3s ease";

        // After fade out, hide and reset the section
        setTimeout(() => {
          section.classList.add("hidden");
          section.style.opacity = "";
          section.style.transition = "";
        }, 10);
      } else {
        // Just hide non-active sections
        section.classList.add("hidden");
      }
    });

    // Slight delay before showing new section for smooth transition
    setTimeout(() => {
      // Show the requested section with fade in
      activeSection.classList.remove("hidden");
      activeSection.style.opacity = "0";

      // Force browser to recognize the change before fading in
      setTimeout(() => {
        // activeSection.style.transition = "opacity 0.3s ease";
        activeSection.style.opacity = "1";

        // Clean up styles after animation
        setTimeout(() => {
          activeSection.style.transition = "";
        }, 300);
      }, 10);
    }, 300);

    // Ensure consistent height for component content
    const componentContents = document.querySelectorAll(".component-content");
    componentContents.forEach((content) => {
      // Reset any inline height
      content.style.height = "";
    });

    // Close mobile sidebar after navigation
    if (
      window.innerWidth <= 992 &&
      sidebar &&
      sidebar.classList.contains("active")
    ) {
      toggleSidebar();
    }
  }

  // Handle link clicks for SPA navigation
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // If it's a hash link, prevent default and update hash
      if (href.startsWith("#")) {
        e.preventDefault();
        const page = href.substring(1);
        window.location.hash = page;
        loadContent(page);
      }
    });
  });

  // Listen for hash changes
  window.addEventListener("hashchange", handleNavigation);

  // Initial navigation check
  handleNavigation();

  // Button actions (placeholders for future functionality)
  const actionButtons = document.querySelectorAll(".btn-icon, .btn-send");

  actionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // This is where you would add actual functionality
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
  }
});
