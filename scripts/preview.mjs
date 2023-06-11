import { execSync } from 'child_process';
import { Octokit } from 'octokit';
import { deprecate } from 'util';

console.log('[DEPLOY_PREVIEW]: START');
const command = 'npm run deploy:staging';
const output = execSync(command, { encoding: 'utf8' });
const outputLines = output.split('\n');
const DEPLOY_URL = outputLines[outputLines.length - 1];
console.log('[DEPLOY_PREVIEW]: END');

console.log(`You can see the deploy preview on: ${DEPLOY_URL}`);

// ===================================
// ===================================

console.log('[GITHUB_COMMENT]: START');
const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_PR_NUMBER } = process.env;

const GH_COMMENT = `
- Deploy URL: [${DEPLOY_URL}](${DEPLOY_URL})
`;

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

console.log('GITHUB_REPOSITORY', GITHUB_REPOSITORY);
console.log('GITHUB_PR_NUMBER', GITHUB_PR_NUMBER);

try {
  await octokit.request(
    'POST /repos/{owner}/{repo}/issues/{issue_number}/comments',
    {
      owner: 'jayromberg',
      repo: 'e-commerce-web',
      issue_number: GITHUB_PR_NUMBER,
      body: GH_COMMENT,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );
} catch (error) {
  console.log('[COMMENT_ON_GITHUB: ERROR]');
  throw new Error(error);
} finally {
  console.log('[COMMENT_ON_GITHUB: END]');
}

// ===================================
// ===================================

// deprecate code

// const defaultHeaders = {};
// defaultHeaders["authorization"] = `token ${GITHUB_TOKEN}`;
// defaultHeaders["accept"] =
//   "application/vnd.github.v3+json; application/vnd.github.antiope-preview+json";
// defaultHeaders["content-type"] = "application/json";

// fetch(
//   `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues/${GITHUB_PR_NUMBER}/comments`,
//   {
//     headers: defaultHeaders,
//     method: "POST",
//     body: JSON.stringify({
//       body: GH_COMMENT,
//     }),
//   }
// )
//   .then((response) => {
//     if (response.ok) return response.json();
//     throw new Error(response.statusText);
//   })
//   .catch((err) => {
//     console.log("[COMMENT_ON_GITHUB: ERROR]");
//     throw new Error(err);
//   })
//   .finally(() => {
//     console.log("[COMMENT_ON_GITHUB: END]");
//   });
