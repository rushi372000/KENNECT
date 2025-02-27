import styles from "../styles/Home";

const Modal = ({ issues, onClose }) => {
  return (
    <div className="modalOverlay" style={styles.modalOverlay} onClick={onClose}>
      <div
        className="modal"
        style={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <h3 style={styles.modalTitle}>Repository Issues</h3>
          <button
            className="closeButton"
            style={styles.closeButton}
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>#</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Created At</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue, index) => (
              <tr key={issue.id}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{issue.title}</td>
                <td style={styles.td}>{issue.state}</td>
                <td style={styles.td}>
                  {new Date(issue.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;
