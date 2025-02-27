const GITHUB_KEY = import.meta.env.VITE_GITHUB_PASSKEY;
export const fetchRepositoryIssues = async (repoName) => {
    const [owner, name] = repoName.split("/");
    const allIssues = [];
    const maxPages = 10;
  
    for (let page = 1; page <= maxPages; page++) {
      const url = `https://api.github.com/repos/${owner}/${name}/issues?state=all&per_page=100&page=${page}`;
  
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${GITHUB_KEY}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }
  
      const issues = await response.json();
      allIssues.push(...issues);
      if (issues.length < 100) break;
    }
  
    return allIssues.slice(0, 1000);
  };  