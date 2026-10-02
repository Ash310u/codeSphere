export const event = {
  name: "CodeSphere",
  year: 2026,
  date: "Date to be announced",
  venue: "Venue to be announced",
  stats: [
    { value: 3, suffix: "", label: "immersive tracks" },
    { value: 20, suffix: "+", label: "planned challenges" },
    { value: 1, suffix: "", label: "DSA challenge" },
    { value: 0, suffix: "", label: "experience required" },
  ],
  tracks: [
    {
      id: "git",
      number: "01",
      title: "Own your history.",
      category: "GIT WORKSHOP",
      description:
        "From your first commit to your next big merge. Build a version-control workflow that actually clicks.",
      tags: ["Commits", "Branches", "Merge conflicts"],
      command: "git init your-next-chapter",
      detail:
        "Start with repositories, stage your changes, and create meaningful commits. Then branch, merge, and resolve a conflict with a guided hands-on exercise.",
    },
    {
      id: "github",
      number: "02",
      title: "Build together.",
      category: "GITHUB WORKSHOP",
      description:
        "Great code is a team sport. Turn ideas into pull requests and make your first open-source contribution.",
      tags: ["Pull requests", "Open source", "Collaboration"],
      command: "git push origin possibility",
      detail:
        "Explore issues, fork a repository, and open a pull request. Learn how code review and collaboration turn a solo project into a shared effort.",
    },
    {
      id: "dsa",
      number: "03",
      title: "Think. Solve. Win.",
      category: "DSA CHALLENGE",
      description:
        "Put your problem-solving instincts to the test. Race the clock, find the pattern, and climb the ranks.",
      tags: ["Algorithms", "Problem solving", "Competition"],
      command: "while (true) { levelUp(); }",
      detail:
        "Explore arrays, strings, trees, and graphs in the event’s DSA challenge. This site introduces the experience; participation details will be shared by the organizers.",
    },
  ],
  schedule: [
    {
      time: "09:30",
      command: "git init",
      title: "Check in & connect",
      description: "Meet your fellow developers. Set up your tools.",
    },
    {
      time: "10:00",
      command: "git checkout -b learn",
      title: "The Git workshop",
      description: "Get hands-on with commits, branches, and merges.",
    },
    {
      time: "11:30",
      command: "git push origin main",
      title: "GitHub & open source",
      description: "Fork a repo. Open a PR. Build something together.",
    },
    {
      time: "13:00",
      command: "// take a break",
      title: "Refuel & recharge",
      description: "Step away from the screen and find your team.",
    },
    {
      time: "14:00",
      command: "npm run challenge",
      title: "The DSA challenge",
      description: "The clock starts. Your problem-solving takes over.",
    },
    {
      time: "16:30",
      command: "git tag v1.0.0",
      title: "Results & wrap-up",
      description: "Celebrate the solves, the commits, and the connections.",
    },
  ],
  faqs: [
    {
      q: "Do I need to know Git or DSA already?",
      a: "No. The workshops start with the fundamentals. Basic familiarity with any programming language is helpful for the DSA challenge.",
    },
    {
      q: "What should I bring?",
      a: "Bring a laptop, its charger, and a willingness to experiment. Install Git and create a free GitHub account ahead of time so you can follow the hands-on workshops.",
    },
    {
      q: "When and where is CodeSphere happening?",
      a: "The event date, venue, and final schedule have not been announced. This site currently shows a proposed agenda. Official registration details will be added once confirmed.",
    },
    {
      q: "Can I join with my friends?",
      a: "Absolutely. Learning together is part of the experience. Team sizes and competition rules will be announced with the final event details.",
    },
    {
      q: "How do I register?",
      a: "Registration details will be shared by the organizers once confirmed. Check back here for event updates.",
    },
  ],
};
