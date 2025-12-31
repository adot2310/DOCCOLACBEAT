export default function NeonModal({ title, onClose, children }) {
  return (
    <div className="modalOverlay" onClick={onClose} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="modalTop">
          <div style={{ fontWeight: 800 }}>{title}</div>
          <button className="btn" onClick={onClose} type="button">
            Đóng ✖
          </button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}
