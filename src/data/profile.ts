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
  bio: "영한 출판 번역가, 역서\u00A0<\u2060도둑맞은\u00A0자부심> 등 10여 권",
  initial: "J",
};

export const links: LinkItem[] = [
  { id: "instagram", title: "인스타그램", url: "https://instagram.com/jongmin_yi" },
  { id: "translators", title: "바른번역", url: "https://translators.co.kr/translators/109" },
];
