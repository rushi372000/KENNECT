import { useState } from "react";
import { fetchRepositoryIssues } from "../services/api";
import { processData } from "../services/dataProcessing";
import StatusChart from "../components/Charts/StatusChart";
import WeeklyIssuesChart from "../components/Charts/WeeklyIssuesChart";
import NewVsClosedChart from "../components/Charts/NewVsClosedChart";
import ClosureRateChart from "../components/Charts/ClosureRateChart";
import Modal from "../components/Modal";
import styles from "../styles/Home";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const [repo, setRepo] = useState("");
  const [stats, setStats] = useState(null);
  const [weeklyData, setWeeklyData] = useState([]);
  const [issues, setIssues] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const analyzeRepository = async () => {
    setLoading(true);
    try {
      const issuesData = await fetchRepositoryIssues(repo);
      // console.log("issuesData => ", issuesData);
      setIssues(issuesData);
      const { stats, weeklyData } = processData(issuesData);
      setStats(stats);
      // console.log("Processed Weekly Data:", weeklyData);
      setWeeklyData(weeklyData);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <h1>GitHub Issues Analyzer</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <input
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
          placeholder="owner/repo"
          style={{ width: "70%", borderRadius: "10px", margin: "10px", paddingLeft:"5px" }}
        />
        <button
          onClick={analyzeRepository}
          disabled={loading}
          style={{ width: "30%", borderRadius: "20px", margin: "10px" }}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

      {loading && <ClipLoader color="#6f42c1" />}

      {stats && !loading && (
        <>
          <div style={styles.card}>
            <h3 style={styles.h3}>Status of Issues</h3>
            <div style={styles.chartContainer}>
              <StatusChart stats={stats} />
            </div>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Weekly Issue Count (Last 10 Weeks)</h3>
            <div style={styles.chartContainer}>
              <WeeklyIssuesChart weeklyData={weeklyData} />
            </div>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>New vs Closed Issues</h3>
            <div style={styles.chartContainer}>
              <NewVsClosedChart weeklyData={weeklyData} />
            </div>
          </div>
          <div style={styles.card}>
            <h3 style={styles.h3}>Weekly Closure Rate</h3>
            <div style={styles.chartContainer}>
              <ClosureRateChart weeklyData={weeklyData} />
            </div>
          </div>
          <button style={{ width: "30%", borderRadius: "20px", margin: "10px"}} onClick={() => setShowModal(true)}>View Issues</button>
        </>
      )}
      {/* Popup to show all issues */}
      {showModal && (
        <Modal issues={issues} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Home;
