import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};
function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
      return 'darkgreen';
  }
  else if (canDrop) {
      return 'darkkhaki';
  }
  else {
      return 'grey';
  }
}
// TODO: Accept a "single" or "multi" mode depending on the number of children that should go into the model.
// Needs some form of model management, including a getter and setter of some kind.
export const Dropzone = ({ children, name, onDrop }) => {
  const [{ canDrop, isOver, isOverCurrent }, drop] = useDrop({
      accept: 'any',
    drop: item => {
      if (isOverCurrent) {onDrop(item, name);}
        return {
          name,
          allowedDropEffect: 'any',
        }
      },
      collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
  });
  const isActive = canDrop && isOver && isOverCurrent;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (<div ref={drop} style={{ ...style, backgroundColor }}>
    {children}
  </div>);
};
