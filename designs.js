var colorPicker = $("#colorPicker");
var canvas = $("#pixelCanvas");
var sizePicker = $("#sizePicker");
var inputHeight = $("#inputHeight");
var inputWeight = $("#inputWeight");


// Select color input
var color = colorPicker.val();
colorPicker.change(function(){
    color = colorPicker.val();
})

// paint the cell once you click on such a cell
canvas.on("click", "td", function(){
    $(this).css('background-color', color);
})

canvas.on("mousemove", "td", function(button){
    if (button.buttons ==1) {
        $(this).css('background-color', color);
    }
    
})

// reset the canvas
$("#reset").click(function(e) {
    $("td").css('background-color', 'transparent');
});

$("#remove").click(function(e) {
    $("td").remove()
});

// Select size input
sizePicker.submit(function(e){
    e.preventDefault();
    var y = inputHeight.val();
    var x = inputWeight.val();
    makeGrid(x, y)
})

// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {
    // y reps number of rows
    for (var i = 0; i < y; i++) {
        canvas.append('<tr>')

        // select this row and append tds
        var row = $("tr:eq("+ i +")")
        for (var j = 0; j < x; j++) {
            row.append("<td>");
        }
    }

}
