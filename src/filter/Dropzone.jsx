import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  color: 'darkgrey',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  border: 'dotted 3px',
};
function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
      return 'darkgreen';
  }
  else if (canDrop) {
      return 'darkkhaki';
  }
  else {
      return 'lightgrey';
  }
}
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
