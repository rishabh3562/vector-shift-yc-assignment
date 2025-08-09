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
        background: 'linear-gradient(135deg, #b089f6, #5809d8)',
        justifyContent: 'center', 
        flexDirection: 'column',
        border: '2px solid rgba(176, 137, 246, 0.3)',
        boxShadow: '0 4px 8px rgba(176, 137, 246, 0.2)',
        transition: 'all 0.3s ease',
      }} 
      draggable
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px) scale(1.05)';
        e.target.style.boxShadow = '0 6px 12px rgba(176, 137, 246, 0.3)';
        e.target.style.background = 'linear-gradient(135deg, #5809d8, #2f0676)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = '0 4px 8px rgba(176, 137, 246, 0.2)';
        e.target.style.background = 'linear-gradient(135deg, #b089f6, #5809d8)';
      }}
    >
      <span style={{ color: '#fff' }}>{label}</span>
    </div>
  );
};