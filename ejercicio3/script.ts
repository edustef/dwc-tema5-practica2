let draggables = document.querySelectorAll('.draggable');
let droppables = document.querySelectorAll('.droppable');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', e => {
    let dragEvent :DragEvent = <DragEvent>e;

    const el = <HTMLElement>dragEvent.target;
    el.classList.add('dragging');
    dragEvent.dataTransfer.setData('text/plain', el.id);
  });

  draggable.addEventListener('dragend', e => {
    const el = <HTMLElement>e.target;
    el.classList.remove('dragging');
  });
});

droppables.forEach(droppable => {
  droppable.addEventListener('dragover', e => {
    e.preventDefault();
    
    const el = <HTMLElement>e.target;
  });

  droppable.addEventListener('drop', e => {
    e.preventDefault();
    let dragEvent :DragEvent = <DragEvent>e;
    let dragEl = document.getElementById(dragEvent.dataTransfer.getData('text/plain'));
    let elToSwap = droppable.firstElementChild;
    
    if(elToSwap && elToSwap !== dragEl) {
      droppable.removeChild(elToSwap);
      dragEl.parentElement.appendChild(elToSwap);
    }
    droppable.appendChild(dragEl);
  })
});