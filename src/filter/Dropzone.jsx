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
      return '#222';
  }
}
// TODO: Accept a "single" or "multi" mode depending on the number of children that should go into the model.
// Needs some form of model management, including a getter and setter of some kind.
export const Dropzone = ({ children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    // TODO: Make a system to accept specific types.
      accept: 'any',
      drop: () => ({
          name: `Dustbin`,
          allowedDropEffect: 'any',
      }),
      collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
      }),
  });
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (<div ref={drop} style={{ ...style, backgroundColor }}>
    <div>Dropzone!</div>
    Mostly this should just be an area that looks decorative.
    Also need to include items already in this zone.
    Zone needs to "close" if it's occupied and can only take one item.
    Need a hover mechanism to lay out where things can be dropped properly.
    {children}
  </div>);
};
