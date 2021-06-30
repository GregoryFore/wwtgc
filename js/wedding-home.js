window.onscroll = function () { scrollNavBar() };

function scrollNavBar() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("sticky")
    } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        document.getElementById("navbar").classList.remove("sticky")
    }

}
