export interface JudgeProfile {
  platform: string;
  username: string;
  profileUrl: string;
  solved: number;
  rating?: number;
  contestRating?: number;
  hard?: number;
  easy?: number;
  medium?: number;
  color: string;
  icon: string;
}

export const judgeProfiles: JudgeProfile[] = [
  {
    platform: "LeetCode",
    username: "masudrana",
    profileUrl: "https://leetcode.com/masudrana",
    solved: 250,
    contestRating: 1650,
    hard: 35,
    easy: 120,
    medium: 95,
    color: "hsl(36, 100%, 50%)",
    icon: "⚡",
  },
  {
    platform: "Codeforces",
    username: "masudrana",
    profileUrl: "https://codeforces.com/profile/masudrana",
    solved: 180,
    rating: 1200,
    hard: 22,
    color: "hsl(210, 100%, 56%)",
    icon: "🏆",
  },
  {
    platform: "HackerRank",
    username: "masudrana",
    profileUrl: "https://hackerrank.com/masudrana",
    solved: 120,
    hard: 15,
    color: "hsl(145, 63%, 42%)",
    icon: "💻",
  },
  {
    platform: "Beecrowd",
    username: "masudrana",
    profileUrl: "https://judge.beecrowd.com/en/profile/masudrana",
    solved: 300,
    hard: 40,
    color: "hsl(270, 60%, 55%)",
    icon: "🐝",
  },
];
