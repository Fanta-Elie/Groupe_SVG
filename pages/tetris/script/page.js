var navbar = document.getElementById("navbar");
var chapters = Array.from(document.getElementsByClassName("chapter"));
for (var i = 0; i < chapters.length; i++) {
    var subtitle = chapters[i].firstElementChild.firstElementChild;
    subtitle.setAttribute("id", "" + ("chapter" + i));
    var li = document.createElement("li");
    navbar.appendChild(li);
    var a = document.createElement("a");
    a.setAttribute("href", "" + ("#chapter" + i));
    a.innerHTML = subtitle.innerHTML;
    a.innerHTML = a.innerHTML.split("-")[0];
    li.appendChild(a);
    var parts = chapters[i].getElementsByClassName("part");
    var ul;
    if (parts.length != 0) {
        ul = document.createElement("ul");
        li.appendChild(ul);
    }
    ;
    for (var e = 0; e < parts.length; e++) {
        parts[e].setAttribute("id", "" + ("part" + i + "-" + e));
        var li_1 = document.createElement("li");
        ul.appendChild(li_1);
        var a_1 = document.createElement("a");
        a_1.setAttribute("href", "" + ("#part" + i + "-" + e));
        a_1.innerHTML = parts[e].firstElementChild.innerHTML;
        li_1.appendChild(a_1);
    }
    ;
}
;
navbar.appendChild(document.createElement("hr"));
var backToTop = document.createElement("a");
backToTop.setAttribute("id", "toTop");
backToTop.setAttribute("style", "cursor:pointer");
backToTop.innerHTML = "Back to Top";
navbar.appendChild(backToTop);
