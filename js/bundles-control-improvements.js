$(document).ready(function() {
  function fbt() {
    if (window.innerWidth < 980) {
      $('.cbb-frequently-bought-selector-list')[0].style.setProperty('display', 'inherit', 'important');
    }
  }

  setTimeout(fbt, 1000);
});
