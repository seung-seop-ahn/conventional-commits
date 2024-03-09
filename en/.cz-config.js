module.exports = {
  subjectLimit: 100,
  subjectSeparator: ": ",
  typePrefix: "[",
  typeSuffix: "]",
  scopes: {},
  scopeOverrides: {},
  skipEmptyScopes: {},
  skipQuestions: [],
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix", "hotfix", "modify", "delete"],
  appendBranchNameToCommitMessage: false,
  // ticketNumberPrefix: 'ISSUE-NUMBER-',
  // ticketNumberRegExp: '\\d{1,5}',
  // allowTicketNumber: true,
  // isTicketNumberRequired: true,
  breakingPrefix: "BREAKING_CHANGE:",
  footerPrefix: "JIRA_ISSUE_KEY:",
  breaklineChar: "|",
  upperCaseSubject: false,
  askForBreakingChangeFirst: false,
  usePreparedCommit: false,

  types: [
    { value: "wip", name: "wip:\t\twork in process" },
    { value: "todo", name: "todo:\t\twork required" },

    // base
    { value: "feat", name: "feat:\t\tnew feature" },
    { value: "fix", name: "fix:\t\tbug fix" },
    { value: "hotfix", name: "hotfix:\turgent bug fix" },
    { value: "modify", name: "modify:\tmodify code" },
    { value: "delete", name: "delete:\tdelete code" },

    { value: "perf", name: "perf:\t\timprove performance" },
    { value: "refactor", name: "refactor:\trefactor code" },
    { value: "test", name: "test:\t\ttest code" },

    { value: "comment", name: "comment:\tcomment code" },
    { value: "config", name: "config:\tmanage configuration" },
    { value: "chore", name: "chore:\tmanage package" },

    { value: "style", name: "style:\timprove style" },
    { value: "infra", name: "infra:\tmanage infra" },
    { value: "db", name: "db:\t\tmanage database" },
    { value: "docs", name: "docs:\t\tdocumentation" },

    // git
    { value: "merge", name: "merge:\tmerge code" },
    { value: "revert", name: "revert:\trevert code" },
  ],

  messages: {
    type: "type:--------------------\n",
    subject: "subject:-----------------\n",
    body: "body:--------------------\n",
    breaking: "breaking changes:--------\n",
    footer: "jira issue key:----------\n",
    confirmCommit: "Are you sure you want to proceed with the commit above?\n",
  },
};
