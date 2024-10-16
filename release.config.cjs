const config = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/changelog", {
      "changelogFile": "CHANGELOG.md"
    }],
    '@semantic-release/npm',
    ["@semantic-release/git", {
      "assets": ["package.json", "package-lock.json", "CHANGELOG.md", "dist/*.js", "dist/*.js.map",],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    '@semantic-release/github',
  ],
};
  
module.exports = config;