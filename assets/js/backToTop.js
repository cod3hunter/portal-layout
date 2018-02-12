// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("btnScrollTop").style.display = "block";
    } else {
        document.getElementById("btnScrollTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  $("HTML, BODY").animate({scrollTop: 0}, 500);

}
