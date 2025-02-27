const styles = {
  root: {
    "--primary": "#0366d6",
    "--secondary": "#586069",
    "--success": "#2cbe4e",
    "--danger": "#cb2431",
    "--warning": "#f66a0a",
    "--light": "#f6f8fa",
    "--dark": "#24292e",
    "--border": "#e1e4e8",
  },
  body: {
    backgroundColor: "#fafbfc",
    color: "var(--dark)",
    lineHeight: 1.5,
    padding: "20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "30px",
  },
  h1: {
    marginBottom: "16px",
  },
  h2: {
    marginBottom: "16px",
  },
  h3: {
    marginBottom: "16px",
  },
  searchSection: {
    backgroundColor: "white",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "20px",
    marginBottom: "30px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: 600,
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "var(--primary)",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 16px",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  buttonHover: {
    backgroundColor: "#0256b4",
  },
  card: {
    backgroundColor: "white",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "20px",
    marginBottom: "20px",
  },
  summaryStats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "30px",
  },
  statCard: {
    backgroundColor: "white",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "16px",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "28px",
    fontWeight: 600,
    margin: "10px 0",
  },
  statLabel: {
    color: "var(--secondary)",
    fontSize: "14px",
  },
  chartsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "30px",
  },
  loading: {
    textAlign: "center",
    padding: "40px",
    fontSize: "18px",
    color: "var(--secondary)",
  },
  error: {
    backgroundColor: "#ffdce0",
    color: "var(--danger)",
    padding: "16px",
    borderRadius: "6px",
    marginBottom: "20px",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "6px",
    width: "90%",
    maxWidth: "900px",
    maxHeight: "80vh",
    overflowY: "auto",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  },
  modalHeader: {
    padding: "16px 20px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: "18px",
    fontWeight: 600,
  },
  closeButton: {
    background: "none",
    border: "none",
    color: "var(--secondary)",
    fontSize: "20px",
    cursor: "pointer",
  },
  modalBody: {
    padding: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid var(--border)",
    backgroundColor: "var(--light)",
    fontWeight: 600,
  },
  td: {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid var(--border)",
  },
  trHover: {
    backgroundColor: "#f1f4f8",
  },
  badge: {
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: 600,
  },
  badgeOpen: {
    backgroundColor: "#dbedff",
    color: "var(--primary)",
  },
  badgeClosed: {
    backgroundColor: "#def2d6",
    color: "var(--success)",
  },
  chartContainer: {
    width: "100%",
    height: "300px",
    position: "relative",
  },
};

export default styles;
