module.exports = {
  branches: [
    'main', // Stable releases
    {
      name: 'dev',
       channel: "beta",// Development branch for beta releases
      prerelease: "dev"

    },
    {
      name: 'release',
      channel: "alpha",//// Release branch for release candidates
      prerelease: true
    },
    {
      name: 'feature/*',
      channel: 'feature/*', prerelease: "rc"
    }
  ],
  plugins: [
    '@semantic-release/commit-analyzer', // Analyzes commit messages to determine version bump
    '@semantic-release/release-notes-generator', // Generates release notes
    '@semantic-release/changelog', // Updates the CHANGELOG.md file
     [
                "@semantic-release/exec",
                {
                    verifyReleaseCmd:
                        "mkdir -p ./artifacts && echo NEXT_VERSION=${nextRelease.version} >> ./artifacts/.VERSION",
                },
            ],
     [
               "@semantic-release/github",
               {
                   assets: "release/*.tgz",
               },
           ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'], // Files to commit back to the repository
        message: 'chore(release): [skip ci] Bump version to ${nextRelease.version}\n\n${nextRelease.notes}' // Commit message format
      }
    ]
  ],
  preset: 'angular' // Commit message convention (Angular in this case)
};
