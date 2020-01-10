
// set images array
var imageset1 = [];
var imageset2 = [];
var imageset3 = [];

// Prepare images for display
for (i=0; i<6; i++) {
	j = i+1;
    imageset1[i] = "image" + j + ".jpg";
    imageset2[i] = "image" + j + ".jpg";
    imageset3[i] = "image" + j + ".jpg";   
}

// randomize the pieces to display
imageset1.sort(function() {return 0.5 - Math.random()});
imageset2.sort(function() {return 0.5 - Math.random()});
imageset3.sort(function() {return 0.5 - Math.random()});

// Append them to dom and make them draggable
for (i=0; i<6; i++) {

    $('#pieces1').append("<img src=\"images/pieces/"+imageset1[i]+"\" id=\"piece1of"+i+"\" draggable=true ondragstart=\"drag(this, event);\">");

    $('#pieces2').append("<img src=\"images/pieces/"+imageset2[i]+"\" id=\"piece2of"+i+"\" draggable=true ondragstart=\"drag(this, event);\">");

    $('#pieces3').append("<img src=\"images/pieces/"+imageset3[i]+"\" id=\"piece3of"+i+"\" draggable=true ondragstart=\"drag(this, event);\">");    
}

// add drag and drop functions on the frame divs
function drag(draggableitem, e) {
	e.dataTransfer.setData("Text", draggableitem.id);	
}

function drop(target, e) {
    var id = e.dataTransfer.getData('Text');
    console.log(id);
	target.appendChild(document.getElementById(id));
	e.preventDefault();
}

function allowDrop(ev) {
    ev.preventDefault();
}