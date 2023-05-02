// Drag and Drop Interfaces

export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  // to signal the browser that the target is a valid drag target
  dragOverHandler(event: DragEvent): void;
  // to react to the actual drag&drop operation
  dropHandler(event: DragEvent): void;
  // to give some visual feedback to the user - to revert the visual update when the drag and drop action is cancelled
  dragLeaveHandler(event: DragEvent): void;
}
