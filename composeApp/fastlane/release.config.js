module.exports = {
  branches: [
    'main', // Stable releases
    {
      name: 'dev', // Development branch for beta releases
      prerelease: 'beta'
    },
    {
      name: 'release', // Release branch for release candidates
      prerelease: 'rc'
    },
    {
      name: 'feature/*', // Feature branches for custom prereleases
      prerelease: '${name.replace(/^feature\\//g, "")}' // Uses the branch name as the prerelease tag
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes commit messages to determine version bump
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/changelog', // Updates the CHANGELOG.md file
    '@semantic-release/npm', // Publishes the release to npm (optional)
    '@semantic-release/github', // Publishes the release to GitHub
    [
      '@semantic-release/git',
      {
        assets: ['../../CHANGELOG.md', '../../package.json'], // Files to commit back to the repository
        message: 'chore(release): [skip ci] Bump version to ${nextRelease.version}\n\n${nextRelease.notes}' // Commit message format
      }
    ]
  ],
  preset: 'angular' // Commit message convention (Angular in this case)
};
