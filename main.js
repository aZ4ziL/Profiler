const sidebarToggle = document.getElementById("sidebarToggle");

const sidebar = document.getElementById("sidebar");

const arrowIcon = document.getElementById("arrowIcon");

let collapse = false;

sidebarToggle.addEventListener(
  "click",
  () => {
    if (collapse) {
      sidebar.classList.add("ms-[-400px]");
      arrowIcon.classList.remove("fa-arrow-right");
      arrowIcon.classList.add("fa-arrow-left");
      collapse = false;
    } else {
      sidebar.classList.remove("ms-[-400px]");
      arrowIcon.classList.remove("fa-arrow-left");
      arrowIcon.classList.add("fa-arrow-right");
      collapse = true;
    }
  },
  true
);
