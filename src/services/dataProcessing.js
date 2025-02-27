export const processData = (issues) => {
  const open = issues.filter((issue) => issue.state === "open").length;
  const closed = issues.filter((issue) => issue.state === "closed").length;
  const total = issues.length;

  const weeklyData = calculateWeeklyData(issues);
  const avgRate = calculateAverageClosureRate(weeklyData);

  return {
    stats: { total, open, closed, avgClosureRate: avgRate },
    weeklyData,
  };
};

const calculateWeeklyData = (issues) => {
  const weeks = [...Array(10)].map((_, i) => {
    const end = new Date(); 
    end.setDate(end.getDate() - i * 7);

    const start = new Date(end);
    start.setDate(start.getDate() - 6); // 7-day range

    return {
      label: `Week ${10 - i}`,
      newIssues: 0,
      closedIssues: 0,
      closureRate: 0,
      startDate: start,
      endDate: end,
    };
  });

  issues.forEach((issue) => {
    const createdAt = new Date(issue.created_at);
    const closedAt = issue.closed_at ? new Date(issue.closed_at) : null;

    weeks.forEach((week) => {
      if (createdAt >= week.startDate && createdAt <= week.endDate) {
        week.newIssues++;
      }
      if (closedAt && closedAt >= week.startDate && closedAt <= week.endDate) {
        week.closedIssues++;
      }
    });
  });

  // Calculate closure rate for each week
  weeks.forEach((week) => {
    if (week.newIssues > 0) {
      week.closureRate = ((week.closedIssues / week.newIssues) * 100).toFixed(
        2
      ); 
    }
  });

  return weeks;
};

const calculateAverageClosureRate = (weeklyData) => {
  const validWeeks = weeklyData.filter((week) => week.newIssues > 0);
  if (validWeeks.length === 0) return 0;
  const sum = validWeeks.reduce((total, week) => total + week.closureRate, 0);
  return sum / validWeeks.length;
};
