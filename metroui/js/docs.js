
var metro_colors = [
    'black', 'white', 'lime', 'green', 'emerald', 'teal', 'blue', 'cyan', 'cobalt', 'indigo', 'violet',
    'pink', 'magenta', 'crimson', 'red', 'orange', 'amber', 'yellow', 'brown', 'olive',
    'steel', 'mauve', 'taupe', 'gray', 'dark', 'darker', 'darkBrown', 'darkCrimson',
    'darkMagenta', 'darkIndigo', 'darkCyan', 'darkCobalt', 'darkTeal', 'darkEmerald',
    'darkGreen', 'darkOrange', 'darkRed', 'darkPink', 'darkViolet', 'darkBlue',
    'lightBlue', 'lightRed', 'lightGreen', 'lighterBlue', 'lightTeal', 'lightOlive',
    'lightOrange', 'lightPink', 'grayDark', 'grayDarker', 'grayLight', 'grayLighter'
];

var adBlock = false;

function init(){
    "use strict";

    $("<div/>").load("header.html").insertBefore($(".page-content"));
    $("<div/>").load("footer.html", function(){
        //DoNothing();
    }).insertAfter($(".page-content"));
}

$(function(){
    "use strict";
    $("h1 .nav-button").addClass('transform');
});
