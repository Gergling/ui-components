import { useDrag } from 'react-dnd';

const styleBase = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
};

export const DraggableItem = ({ children, onDrop, style }) => {
  const styleExtension = { ...styleBase, ...style };
  const [{ opacity }, drag] = useDrag({
      item: { name: 'some-draggable-item', type: 'any', onDrop },
      end(item, monitor) {
          const dropResult = monitor.getDropResult();
          if (item && dropResult) {
            onDrop(item, dropResult);
          }
      },
      collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.4 : 1,
      }),
  });
  return (<div ref={drag} style={{ ...styleExtension, opacity }}>
    {children}
  </div>);
};
