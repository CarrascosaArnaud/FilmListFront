const NavScript = () => {
  var prevScrollpos = window.scrollY;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0px";
    } else {
      document.getElementById("navbar").style.top = "-500px";
    }
    prevScrollpos = currentScrollPos;
  };
};

export default NavScript;
