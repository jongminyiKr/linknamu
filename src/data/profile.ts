// 보여주기용 더미 데이터입니다. 실제 내용으로 이 파일만 바꾸면 됩니다.

export type Profile = {
  name: string;
  bio: string;
  initial: string;
  // 실제 사진을 public/ 에 넣고 경로를 적으면 이니셜 대신 사진이 표시됩니다.
  imageUrl?: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "이종민",
  bio: "번역하는 사람",
  initial: "J",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
