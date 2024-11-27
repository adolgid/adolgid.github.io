import { execSync } from "child_process";

const branchName = execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .trim();

const validBranchRegex = /^(feature|fix|refactor|hotfix|chore)//;

if (!validBranchRegex.test(branchName)) {
  console.error(
    `Invalid branch name: ${branchName}. It must start with 'feature/', 'fix/', 'refactor/', 'hotfix/', or 'chore/'.`
  );
  process.exit(1); // Exit with error code
} else {
  console.log(`Branch name '${branchName}' is valid.`);
}