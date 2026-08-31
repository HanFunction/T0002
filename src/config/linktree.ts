export interface Profile {
  name: string;
  bio: string;
  displayUrl: string;
  avatarUrl?: string;
  miniroomUrl?: string;
  boardLabel?: string;
  photoLabel?: string;
  storyLabel?: string;
}

export interface ProfileSection {
  title: string;
  content?: string;
  items?: string[];
}

export interface BoardPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  url: string;
  tag?: string;
}

export interface Photo {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  description?: string;
}

export interface WaveLink {
  title: string;
  url: string;
  description?: string;
}

export interface BgmTrack {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  startSeconds?: number;
}

export interface GuestbookEntry {
  id: string;
  author: string;
  date: string;
  message: string;
}

// 1. 프로필 설정
export const profile: Profile = {
  name: "준규",
  bio: "준규 미니홈피",
  displayUrl: "cyworld.com/jungyu",
  avatarUrl: "/assets/avatar.png",
  miniroomUrl: "/assets/miniroom.png",
  boardLabel: "게시판",
  photoLabel: "사진첩",
};

// 2. 색상 테마 (밝은 교실톤)
export const themeColor = "classroom";

// 3. 파도타기 링크 (도름스 커뮤니티 링크 유지)
export const waveLinks: WaveLink[] = [
  {
    title: "도름스 커뮤니티 나의 활동",
    url: "https://dorms.school/u/cb67428c-1b2c-4796-80d0-048adaa840b2",
    description: "내 DoRms 프로필",
  },
];

// 나머지 항목 (미사용)
export const profileSections: ProfileSection[] = [];
export const boardPosts: BoardPost[] = [];
export const photos: Photo[] = [];
export const bgmTracks: BgmTrack[] = [];
export const guestbook: GuestbookEntry[] = [];
