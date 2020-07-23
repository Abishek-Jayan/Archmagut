genElem = function (elemType, classes) {
    div = $("<" + elemType + "></" + elemType + ">");
    div.addClass(classes);
    return div;
}

note_add = function (id, title, body, posi, colr) {
    let note = genElem("div", "note");
    let container = genElem("div", "note_container");
    let heading = genElem("h3", "heading");
    let heading_input = genElem("input", "heading_class");
    let para = genElem("p", "");
    let para_input = genElem("textarea", "para_class");
    let ex = genElem("div", "ex");
    let butt = genElem("button", "butty butt");
    let img = genElem("img", "");
    let imgarr = genElem("img", "");
    let rearrbutt = genElem("button", "butty butt rearr");
    let dropdown = genElem("span","")
    let dropdown_cont1 = genElem ("button","fucko")
    let dropdown_cont2 = genElem ("button","fucko")
    let dropdown_cont3 = genElem ("button","fucko")
    let dropdown_cont4 = genElem ("button","fucko")
    let dropdown_cont5 = genElem ("button","fucko")
    let dropdown_cont6 = genElem ("button","fucko")
    let dropdown_cont7 = genElem ("button","fucko")
    let dropdown_cont8 = genElem ("button","fucko")
    let colour = colr;
    let csrfy = $('input[name="csrfmiddlewaretoken"]').val();
    note.attr("id", id);    
    heading_input.attr("type", "text");
    butt.attr("type", "button");
    img.attr("src", "/static/Notes/images/minus.png");
    note.attr("style", colour);
    imgarr.attr("src", "/static/Notes/images/drag.png");
    rearrbutt.attr("id", id);

    heading.text(title);
    para.text(body);
    dropdown_cont1.attr("style", "background:#ff6060");
    dropdown_cont2.attr("style", "background:#feb236");
    dropdown_cont3.attr("style", "background:#8bd33d");
    dropdown_cont4.attr("style", "background:rgba(87, 87, 240, 0.705)");
    dropdown_cont5.attr("style", "background:#632900");
    dropdown_cont6.attr("style", "background:#4d026d");
    dropdown_cont7.attr("style", "background:#8a8a8a");
    dropdown_cont8.attr("style", "background:#ff00bf");

    $(dropdown_cont1).click(function(){
        colour = "background: linear-gradient(to bottom right, #910000, #ff6060)"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
        
    });
    $(dropdown_cont2).click(function(){
        colour = "background: linear-gradient(to bottom right, #b67308, #feb236);"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
    });
    $(dropdown_cont3).click(function(){
        colour = "background: linear-gradient(to bottom right, #63a31e, #8bd33d)"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
    });
    $(dropdown_cont4).click(function(){
        colour = "background:linear-gradient(to bottom right, rgba(40, 40, 92, 0.705), rgba(87, 87, 240, 0.705))"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
        
    });
    $(dropdown_cont5).click(function(){
        colour = "background: linear-gradient(to bottom right,#632900, #e96507)"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
        
    });
    
    $(dropdown_cont6).click(function(){
        colour = "background: linear-gradient(to bottom right,#4d026d, #a403e9)"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
        
    });
    $(dropdown_cont7).click(function(){
        colour = "background: linear-gradient(to bottom right,#8a8a8a, #ffffff)"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
        
    });
    $(dropdown_cont8).click(function(){
        colour = "background: linear-gradient(to bottom right,#85005d, #ff00bf)"
        $.ajax({
            type: 'POST',
            url: '/ncol',
            data: {
                csrfmiddlewaretoken: csrfy,
                colour : colour,
                id : note.attr("id"), 
            },
            dataType: 'json',
            success: function (results) {
                note.attr("style",results);
            }            
        });
        
    });
    
    $(butt).click(function () {
        data = {
            id : note.attr("id"),
        }
        $.ajax({
            type: 'DELETE',
            url: '/nc',
            data: data,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrfy);
                
            },
            dataType: 'json',
            success: function (results) {
                note.remove();
                alert("Note no "+id+" has been removed");
                
            }
        });
        
    });

    $(heading).click(function () {
        $(heading_input).val($(this).text());
        $(heading).before(heading_input);
        heading.detach();
        heading_input.focus();
    });

    heading_input.blur(function () {
        data = {
            csrfmiddlewaretoken: csrfy,
                title : heading_input.val(),
                body : para.text(),
                id : note.attr("id"),
        }
        heading.text($(this).val());
        heading_input.before(heading);
        heading_input.detach();
        $.ajax({
            type: 'POST',
            url: '/nmos',
            data: data,
            dataType: 'json',
            success: function (results) {}            
        });
    });

    para.click(function () {
        para_input.val($(this).text());
        para.before(para_input);
        para.detach();
        para_input.focus();
    });

    para_input.blur(function () {
        data = {
            csrfmiddlewaretoken: csrfy,
                title : heading.text(),
                body : para_input.val(),
                id : note.attr("id"),
        }
        para.text($(this).val());
        para_input.before(para);
        para_input.detach();
        $.ajax({
            type: 'POST',
            url: '/nmos',
            data: data,
            dataType: 'json',
            success: function (results) {}
        });
    });

    container.append(heading);
    container.append($("<hr />"));
    container.append(para);
    note.append(container);
    rearrbutt.append(imgarr);
    dropdown.append(dropdown_cont1);
    dropdown.append(dropdown_cont2);
    dropdown.append(dropdown_cont3);
    dropdown.append(dropdown_cont4);
    dropdown.append(dropdown_cont5);
    dropdown.append(dropdown_cont6);
    dropdown.append(dropdown_cont7);
    dropdown.append(dropdown_cont8);
    rearrbutt.append(dropdown);
    ex.append(rearrbutt);
    butt.append(img);
    ex.append(butt);
    note.append(ex);

    $(".plus").before(note);

   /* $(".rearr").click(function () {
        let eleid = rearrbutt.attr("id");
        console.log(eleid);

    });*/
}

$(document).ready(function () {
    let i = 0;
    let csrfy = $('input[name="csrfmiddlewaretoken"]').val();

    $.ajax({
        type: 'GET',
        url: '/nc',
        contentType: "application/json",
        dataType: 'json',
        success: function (results) {
            results.notes.forEach(function (item, index) {
                note_add(item.id, item.Title, item.Body, item.Position , item.Colour);
                if (item.Position > i)
                    i = item.Position;
            });

        }
    });
    

    $("#butty").click(function () {
        i++;
        let data = {
            csrfmiddlewaretoken: csrfy,
            title: 'Note Title',
            body: 'Note Body',
            position: i,
            colr: 'background:linear-gradient(to bottom right, rgba(40, 40, 92, 0.705), rgba(87, 87, 240, 0.705));',
        }
        $.ajax({
            type: 'POST',
            url: '/nc',
            data: data,
            dataType: 'json',
            success: function (results) {
                note_add(results.id, data.title, data.body, data.position, data.colr);
            }
        });
    });

   
});
