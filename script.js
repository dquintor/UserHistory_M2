document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) Welcome message (on-screen banner)
  // =========================
  const header = document.querySelector("header");
  if (header) {
    const banner = document.createElement("div");
    banner.setAttribute("role", "status");
    banner.style.padding = "12px 16px";
    banner.style.margin = "12px auto";
    banner.style.maxWidth = "800px";
    banner.style.borderRadius = "12px";
    banner.style.background = "#edede8";
    banner.style.display = "flex";
    banner.style.justifyContent = "space-between";
    banner.style.alignItems = "center";
    banner.style.gap = "12px";

    const msg = document.createElement("span");
    msg.textContent = "Welcome! 👋 Thanks for visiting my portfolio.";

    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.textContent = "×";
    closeBtn.setAttribute("aria-label", "Close welcome message");
    closeBtn.style.fontSize = "20px";
    closeBtn.style.lineHeight = "1";
    closeBtn.style.padding = "0 10px";
    closeBtn.style.borderRadius = "10px";
    closeBtn.style.border = "none";
    closeBtn.style.cursor = "pointer";

    closeBtn.addEventListener("click", () => banner.remove());

    banner.appendChild(msg);
    banner.appendChild(closeBtn);

    // Insert banner right after header
    header.insertAdjacentElement("afterend", banner);
  }

  // =========================
  // 2) Change "About me" paragraph text (Read more / less)
  // =========================
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    const aboutP = aboutSection.querySelector("p");
    if (aboutP) {
      const originalText = aboutP.textContent.trim();
      const expandedText =
        originalText +
        " I enjoy improving user experience, organizing content clearly, and continuously learning new web technologies.";

      const aboutBtn = document.createElement("button");
      aboutBtn.type = "button";
      aboutBtn.textContent = "Read more";
      aboutBtn.style.marginTop = "10px";
      aboutBtn.style.padding = "10px 14px";
      aboutBtn.style.borderRadius = "12px";
      aboutBtn.style.border = "none";
      aboutBtn.style.cursor = "pointer";

      let expanded = false;

      aboutBtn.addEventListener("click", () => {
        expanded = !expanded;
        aboutP.textContent = expanded ? expandedText : originalText;
        aboutBtn.textContent = expanded ? "Read less" : "Read more";
      });

      aboutSection.appendChild(aboutBtn);
    }
  }

  // =========================
  // 3) Dynamic button effect: Show/Hide projects (real content)
  // =========================
  const projectsSection = document.querySelector("#projects");
  if (projectsSection) {
    const projectItems = Array.from(projectsSection.querySelectorAll("li"));

    if (projectItems.length > 3) {
      // hide everything after the first 3
      projectItems.slice(3).forEach((li) => (li.style.display = "none"));

      const toggleProjectsBtn = document.createElement("button");
      toggleProjectsBtn.type = "button";
      toggleProjectsBtn.textContent = "Show all projects";
      toggleProjectsBtn.style.marginTop = "12px";
      toggleProjectsBtn.style.padding = "10px 14px";
      toggleProjectsBtn.style.borderRadius = "12px";
      toggleProjectsBtn.style.border = "none";
      toggleProjectsBtn.style.cursor = "pointer";

      let showingAll = false;

      toggleProjectsBtn.addEventListener("click", () => {
        showingAll = !showingAll;

        projectItems.slice(3).forEach((li) => {
          li.style.display = showingAll ? "" : "none";
        });

        toggleProjectsBtn.textContent = showingAll
          ? "Show fewer projects"
          : "Show all projects";
      });

      projectsSection.appendChild(toggleProjectsBtn);
    }
  }

  // =========================
  // Bonus: Contact form submit feedback (no reload)
  // =========================
  const form = document.querySelector("#contact form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const input = form.querySelector('input[name="message"]');
      const value = input ? input.value.trim() : "";

      const feedback = document.createElement("p");
      feedback.style.marginTop = "10px";
      feedback.textContent = value
        ? `Thanks! Your message was received: "${value}"`
        : "Thanks! Your message was sent.";

      // remove old feedback if exists
      const old = form.querySelector("[data-feedback]");
      if (old) old.remove();

      feedback.setAttribute("data-feedback", "true");
      form.appendChild(feedback);

      if (input) input.value = "";
    });
  }
});
