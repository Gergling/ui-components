import { useDrag } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  float: 'left',
};

export const DraggableItem = ({ children, onDrop }) => {
  const [{ opacity }, drag] = useDrag({
      item: { name: 'some-draggable-item', type: 'any', onDrop },
      end(item, monitor) {
          const dropResult = monitor.getDropResult();
          if (item && dropResult) {
            onDrop(item, dropResult);
            // Here we update the model.
            // A specific field has been added to a specific area.
            // console.log(item, dropResult)
              // let alertMessage = '';
              // const isDropAllowed = dropResult.allowedDropEffect === 'any' ||
              //     dropResult.allowedDropEffect === dropResult.dropEffect;
              // if (isDropAllowed) {
              //     const isCopyAction = dropResult.dropEffect === 'copy';
              //     const actionName = isCopyAction ? 'copied' : 'moved';
              //     alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`;
              // }
              // else {
              //     alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`;
              // }
              // alert(alertMessage);
          }
      },
      collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.4 : 1,
      }),
  });
  return (<div ref={drag} style={{ ...style, opacity }}>
    {children}
  </div>);
};
