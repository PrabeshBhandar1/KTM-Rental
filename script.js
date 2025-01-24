// /* Hamburger Menu */
document.addEventListener('DOMContentLoaded', function () {
  const menuList = document.getElementById("menuList");
  const hamburger = document.querySelector('.menu-icon i');

  // Toggle menu on hamburger click
  document.querySelector('.menu-icon').addEventListener('click', function () {
    toggleMenu();
  });

  // Close menu when a menu item is clicked
  menuList.querySelectorAll('li a').forEach(item => {
    item.addEventListener('click', function () {
      closeMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!menuList.contains(event.target) && !document.querySelector('.menu-icon').contains(event.target)) {
      closeMenu();
    }
  });

  function toggleMenu() {
    if (menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "") {
      menuList.style.maxHeight = "200px"; // Adjust height as needed
      hamburger.classList.remove('fa-bars');
     // hamburger.classList.add('fa-times');
    } else {
      closeMenu();
    }
  }

  function closeMenu() {
    menuList.style.maxHeight = "0px";
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
  }
});



