var paragraph = [];

function getParagraph() {
    var repeat;
    for (repeat = 1; repeat <= 6; repeat = repeat + 1) {
        console.log(repeat);
        var Lines = document.getElementById("type_the_part_here_" + repeat).value
        paragraph.push(Lines);
    }
    document.getElementById("display_name_with_commas").innerHTML = paragraph;
    var MichealEssien = paragraph.join(" , ");
    document.getElementById("display_name_without_commas").innerHTML = MichealEssien;
}