import { execSync } from "child_process";
import { Octokit } from "octokit";

console.log("[DEPLOY_PREVIEW]: START");
const command = "npm run deploy:staging";
const output = execSync(command, { encoding: "utf8" });
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines[outputLines.length - 1];
console.log("[DEPLOY_PREVIEW]: END");

console.log(`You can see the deploy preview on: ${DEPLOY_URL}`);

// ===================================
// ===================================

console.log("[GITHUB_COMMENT]: START");
const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_PR_NUMBER } = process.env;

const GH_COMMENT = `
- Deploy URL: [${DEPLOY_URL}](${DEPLOY_URL})
`;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

console.log("GITHUB_REPOSITORY", GITHUB_REPOSITORY);
console.log("GITHUB_PR_NUMBER", GITHUB_PR_NUMBER);

const [owner, repo] = GITHUB_REPOSITORY.split("/");

try {
  await octokit.request(
    "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
    {
      owner,
      repo,
      issue_number: GITHUB_PR_NUMBER,
      body: GH_COMMENT,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
} catch (error) {
  console.log("[COMMENT_ON_GITHUB: ERROR]");
  throw new Error(error);
} finally {
  console.log("[COMMENT_ON_GITHUB: END]");
}
