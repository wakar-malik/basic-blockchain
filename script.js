const menuIcon = document.querySelector(".menu-icon");
            const navContainer = document.querySelector(".nav-items__container");

            menuIcon.addEventListener("click", function (e) {
              if (!e.currentTarget.classList.contains("menu-icon")) {
                return;
              }

              navContainer.classList.toggle("nav-items__container__active");
            });