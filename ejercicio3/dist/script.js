var draggables = document.querySelectorAll('.draggable');
var droppables = document.querySelectorAll('.droppable');
draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', function (e) {
        var dragEvent = e;
        var el = dragEvent.target;
        el.classList.add('dragging');
        dragEvent.dataTransfer.setData('text/plain', el.id);
    });
    draggable.addEventListener('dragend', function (e) {
        var el = e.target;
        el.classList.remove('dragging');
    });
});
droppables.forEach(function (droppable) {
    droppable.addEventListener('dragover', function (e) {
        e.preventDefault();
        var el = e.target;
    });
    droppable.addEventListener('drop', function (e) {
        e.preventDefault();
        var dragEvent = e;
        var dragEl = document.getElementById(dragEvent.dataTransfer.getData('text/plain'));
        var elToSwap = droppable.firstElementChild;
        if (elToSwap && elToSwap !== dragEl) {
            droppable.removeChild(elToSwap);
            dragEl.parentElement.appendChild(elToSwap);
        }
        droppable.appendChild(dragEl);
    });
});
