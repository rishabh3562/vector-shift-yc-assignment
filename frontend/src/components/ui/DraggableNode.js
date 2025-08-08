import { handleDragStart, handleDragEnd } from '../../utils/dragAndDrop';

export const DraggableNode = ({ type, label }) => {
  return (
    <div
      className={type}
      onDragStart={(event) => handleDragStart(event, type)}
      onDragEnd={handleDragEnd}
      style={{ 
        cursor: 'grab', 
        minWidth: '80px', 
        height: '60px',
        display: 'flex', 
        alignItems: 'center', 
        borderRadius: '8px',
        backgroundColor: '#1C2536',
        justifyContent: 'center', 
        flexDirection: 'column'
      }} 
      draggable
    >
      <span style={{ color: '#fff' }}>{label}</span>
    </div>
  );
};