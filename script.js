let nodeCollection = [];
$(document).ready(function() {
   AddNode('A');
   setTimeout(()=>{
    AddNode('B');
   },500);
   setTimeout(()=>{
    AddNode('C');
   },1000);
   setTimeout(()=>{
    AddNode('D');
   },1500);


});

function AddNode(name){
    nodeCollection.push(name);
    console.log('collection: ', nodeCollection);
    $("#space").append(
        <div id="+name+" class="draggable">
            <div class="origin"></div>
            <p  class="label"><small id="label+name+">r - px</small></p>
        </div>
    );
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