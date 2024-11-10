console.log("help, bootstrap me jode la vida :'( ");

/* LOADER SCREEN */
var contador = 0;

function carga() {
    if (contador <= 100) {
        document.getElementById("porcentaje").innerHTML = contador + "%";
        contador = contador + 1;
        setTimeout(carga, 50);
    } else {
        document.getElementById("carga").style.top = "-100%";
    }
}

window.onload = function () {
    carga();
}

/* SEARCH BAR */
$(document).ready(function () {
    $('#search-icon').on('click', function () {
      const $searchInput = $('#search-input');
      
      if ($searchInput.hasClass('open')) {
        $searchInput.removeClass('open');
        $searchInput.css({ 
            width: '0', 
            display: 'none' 
        });
      } else {
        $searchInput.addClass('open');
        $searchInput.css({ 
            width: '200px', 
            display: 'block',
            position: 'absolute',
            right: '40px'
        }); 
        $searchInput.focus(); 
      }
    });
  });

  /* LIGHT & DARK THEME */
  $(document).ready(function () {
    const themeToggle = $("#theme-toggle");
    const logoLight = $("#logo-light"); 
    const logoDark = $("#logo-dark");   
    let isDarkTheme = true;
  
    const themes = {
      dark: {
        "--clr-light": "#FFF4E2",
        "--clr-dark": "#3C291B",
        icon: '<i class="bi bi-sun-fill" style="font-size: 1.5rem; color: var(--clr-light);"></i>',
        rotation: "90deg"
      },
      light: {
        "--clr-light": "#3C291B",
        "--clr-dark": "#FFF4E2",
        icon: '<i class="bi bi-moon-stars-fill" style="font-size: 1.5rem; color: var(--clr-light);"></i>',
        rotation: "0deg"
      }
    };
  
    function applyTheme(theme) {
      $.each(theme, function (property, value) {
        document.documentElement.style.setProperty(property, value);
      });
      themeToggle.html(theme.icon);
      themeToggle.css("transform", `rotate(${theme.rotation})`); 
      
      if (isDarkTheme) {
        logoLight.show();
        logoDark.hide();
      } else {
        logoLight.hide();
        logoDark.show();
      }
    }
  
    function toggleTheme() {
      isDarkTheme = !isDarkTheme;
      const selectedTheme = isDarkTheme ? themes.dark : themes.light;
      $("body").toggleClass("dark"); 
      applyTheme(selectedTheme);
    }
  
    themeToggle.on("click", toggleTheme);
  
    applyTheme(isDarkTheme ? themes.dark : themes.light);
});