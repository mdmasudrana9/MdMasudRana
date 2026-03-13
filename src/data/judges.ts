export interface JudgeProfile {
  platform: string;
  username: string;
  profileUrl: string;
  solved: number;
  rating?: number;
  color: string;
}

export const judgeProfiles: JudgeProfile[] = [
  {
    platform: "LeetCode",
    username: "masudrana",
    profileUrl: "https://leetcode.com/masudrana",
    solved: 250,
    rating: 1650,
    color: "hsl(36, 100%, 50%)",
  },
  {
    platform: "Codeforces",
    username: "masudrana",
    profileUrl: "https://codeforces.com/profile/rana.cse6.bu",
    solved: 180,
    rating: 1375,
    color: "hsl(210, 100%, 56%)",
  },
  {
    platform: "HackerRank",
    username: "masudrana",
    profileUrl: "https://hackerrank.com/masudrana",
    solved: 120,
    color: "hsl(145, 63%, 42%)",
  },
  {
    platform: "CodeChef",
    username: "masudrana",
    profileUrl: "https://codeforces.com/profile/rana.cse6.bu",
    solved: 180,
    rating: 943,
    color: "hsl(210, 100%, 56%)",
  },
  {
    platform: "Beecrowd",
    username: "masudrana",
    profileUrl: "https://judge.beecrowd.com/en/profile/masudrana",
    solved: 300,
    color: "hsl(270, 60%, 55%)",
  },
];
