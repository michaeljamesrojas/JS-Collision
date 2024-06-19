// create class node with name, x, y, and id and radius
class Node {
    constructor(name, x, y, radius) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

let nodeCollection = [];
$(document).ready(function() {
   AddRandomNode('A');
   setTimeout(()=>{
    AddRandomNode('B');
   },500);
   setTimeout(()=>{
    AddRandomNode('C');
   },1000);
   setTimeout(()=>{
    AddRandomNode('D');
   },1500);
   
  
});

function AddRandomNode(name){
    // randomize the position of the node
    let xPos = Math.floor(Math.random() * 500);
    let yPos = Math.floor(Math.random() * 500);
    let radius = Math.floor(Math.random() * 10);
    AddNode(name, xPos, yPos, radius);
}

function AddNode(name, x = 0, y = 0, radius = 0){
    // instantiate a new node
    let node = new Node(name, x, y, radius);
    nodeCollection.push(node);
    console.log('collection: ', nodeCollection);
    $("#space").append(`
        <div id="`+name+`" class="draggable">
            <div class="origin"></div>
            <p  class="label"><small id="label`+name+`">r - px</small></p>
        </div>
    `);
    // set the position of the node
    $('#' + name).css('left', x + 'px');
    $('#' + name).css('top', y + 'px');
    $('#' + name).css('width', radius + 'px');
    $('#' + name).css('height', radius + 'px');
    $('#' + name).css('border-radius', radius + 'px');

    //update the label
    $('#label' + name).text(x + ':' + y);


    $('#' + name).draggable({
        cursor:'move',
        start: function(event, ui) {
            console.log('Drag Started');
        },
        stop: function(event, ui){
            console.log('Drag Stopped');
        },
        drag: function(event,ui){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
            console.log('Dragged to: ', xPos, ':',yPos);
            $('#label' + name).text(xPos.toFixed(2) + ':' + yPos.toFixed(2))
        }
    });
    
}

function hasCollision(){

}

