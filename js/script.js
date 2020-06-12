genElem = function (elemType, classes) {
    div = $("<" + elemType + "></" + elemType + ">");
    div.addClass(classes);
    return div;
}

$(document).ready(function () {
    let i = 0;

    $("#butty").click(function () {
        let note = $("<div></div>");
        let container = $("<div></div>");
        let heading = $("<h3></h3>");
        let heading_input = $("<input />");
        let para = $("<p></p>");
        let para_input = $("<textarea></textarea>");
        let ex = genElem("div", "ex");
        let butt = genElem("button", "butty butt");
        let img = genElem("img", "");

        note.addClass("note");
        container.addClass("note_container");
        heading_input.addClass("heading_class");
        para_input.addClass("para_class");

        note.attr("id", i);
        heading_input.attr("type", "text");
        butt.attr("type", "button");
        img.attr("src", "images/minus.png");

        heading.text("Note Title");
        para.text("Note Body");

        butt.click(function () { 
            note.remove();
        });

        heading.click(function () {
            heading_input.val($(this).text());
            heading.before(heading_input);
            heading.detach();
            heading_input.focus();
        });

        heading_input.blur(function () {
            heading.text($(this).val());
            heading_input.before(heading);
            heading_input.detach();
        });

        para.click(function () {
            para_input.val($(this).text());
            para.before(para_input);
            para.detach();
            para_input.focus();
        });

        para_input.blur(function () {
            para.text($(this).val());
            para_input.before(para);
            para_input.detach();
        });

        container.append(heading);
        container.append($("<hr />"));
        container.append(para);
        note.append(container);
        butt.append(img);
        ex.append(butt);
        note.append(ex);

        $(".plus").before(note);

        i++;
    });
});