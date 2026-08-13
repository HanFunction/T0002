export type IconName =
  | "dorms-community"
  | "naver-blog"
  | "instagram"
  | "kakao-chat"
  | "kakao-group"
  | "download"
  | "manual"
  | "privacy"
  | "school"
  | "docs"
  | "contact"
  | "magazine"
  | "code"
  | "game";

export type Thumb =
  | { kind: "image"; src: string; alt: string }
  | { kind: "icon"; icon: IconName };

export type LinkItem = {
  name: string;
  description?: string;
  href: string;
  thumb?: Thumb;
};

export type LinkCard =
  | {
      kind: "group";
      id: string;
      number: string;
      name: string;
      description: string;
      thumb: Thumb;
      items: LinkItem[];
    }
  | {
      kind: "link";
      id: string;
      number: string;
      name: string;
      description: string;
      href: string;
      thumb: Thumb;
    };

export const profile = {
  teacherName: "미요Lab",
  title: "미요Lab 미요앱 실험실",
  introTitle: "미요Lab 미요앱 실험실",
  introDescription: "미요툰, 미요앱 시리즈로 미요 세계관을 위한 실험실",
  catalogTitle: "미요Lab 활동 탭",
  catalogDescription: "미요앱 시리즈와 소개를 구경해보세요.",
  photo: { src: "/assets/miyo-profile.png", alt: "더드미요 캐릭터" },
  miniroom: { src: "/assets/miyo-miniroom.png", alt: "미요 미니룸" }
};

/* 프로필 탭에 들어가는 소개 글입니다. 문구만 바꿔서 쓰세요. */
export type ProfileBlock =
  | { kind: "text"; lines: string[] }
  | { kind: "list"; heading: string; items: string[] }
  | { kind: "contact"; items: { label: string; value: string; href: string }[] };

export type ProfileSection = {
  id: string;
  title: string;
  /* 제목 옆 작은 글씨입니다. 생략하면 제목만 나옵니다. */
  subtitle?: string;
  blocks: ProfileBlock[];
};

export const profileSections: ProfileSection[] = [
  {
    id: "instructor",
    title: "소개",
    blocks: [
      {
        kind: "text",
        lines: [
          "안녕하세요, 이준혁입니다 🍀",
          "학창 시절엔 물리를 배운 적이 없었습니다. 그런데 지금은, 그 물리를 가르치는 교사가 되었고 이제는 좋아하게 되어버렸습니다. 돌고 돌아 물리에 진심이 된 교직 경력 10년차 교사입니다.",
          "수업 시간에는 물리를, 수업이 끝나면 캐릭터 '미요'를 그리고 이야기를 만듭니다. 미요툰 작가이자, 미요 세계관을 앱으로 옮기는 미요앱 개발자로도 활동하고 있습니다. 요즘은 바이브 코딩으로 학급 경영과 수업에 필요한 도구들을 직접 만드는 재미에도 푹 빠져 있습니다."
        ]
      },
      {
        kind: "list",
        heading: "하고 있는 일들",
        items: [
          "고등학교 3학년 담임 & 물리 교과 지도",
          "아주대학교 AI융합교육과 석사 졸업",
          "평택시 진학지도 리더교사 운영진 (2023~현재)",
          "화성·평택·용인·안성 찾아가는 1:1 맞춤형 진로진학 컨설팅",
          "평택·용인·안성 진학박람회 진학컨설팅 부스 운영",
          "경기도 물리교육 연구회 / AX교육전환 전국단위 연구회 (2026)",
          "하이러닝 연구학교 및 AI서논술형 연구회 (2025~현재)",
          "Dorms 교사 커뮤니티 활동 (2026)"
        ]
      },
      {
        kind: "list",
        heading: "강의 경력",
        items: [
          "2026 경기진협 의치한약수 전형 분석 자료 제작",
          "2026 물리 신규교사 대상 하이러닝 및 에듀테크 교사 연수",
          "2026 안산 양지고 하이러닝 및 에듀테크 교사 연수",
          "2026 행정혁신 생성형 Gemini 활용법 행정직원 연수"
        ]
      },
      {
        kind: "contact",
        items: [
          { label: "📩 Email", value: "ljh6479z@gmail.com", href: "mailto:ljh6479z@gmail.com" },
          { label: "📷 미요툰", value: "@me_yotoon", href: "https://www.instagram.com/me_yotoon" },
          { label: "📷 미요앱", value: "@me_yoapp", href: "https://www.instagram.com/me_yoapp/" }
        ]
      }
    ]
  },
  {
    id: "miyotoon",
    title: "미요툰 소개",
    subtitle: "그림으로 남기는 기록",
    blocks: [
      {
        kind: "text",
        lines: [
          "미요툰은 미요 캐릭터들이 등장하는 짧은 만화입니다.",
          "수업하다 만난 순간, 배우다 겪은 실수를 한 컷으로 남깁니다.",
          "새 에피소드는 인스타그램 @me_yotoon 에 먼저 올라갑니다."
        ]
      }
    ]
  },
  {
    id: "miyoapp",
    title: "미요앱 소개",
    subtitle: "직접 만드는 작은 도구",
    blocks: [
      {
        kind: "text",
        lines: [
          "미요앱은 수업에 바로 쓰려고 만든 작은 웹 도구 모음입니다.",
          "설치 없이 링크만 열면 되는 가벼운 형태를 지향합니다.",
          "완성한 앱은 미요앱 탭에 하나씩 올릴 예정입니다."
        ]
      }
    ]
  }
];

/* 미요툰 회차는 src/config/miyotoon.ts 에 있습니다. */
export { episodes, type Episode } from "./miyotoon";

/* 미요앱 탭입니다. 앱과 게시글 링크를 여기에 추가하세요.
   preview 는 화면 미리보기 이미지입니다. public/assets/apps 에 넣고 경로를 적으세요.
   생략하면 썸네일 없이 제목만 나옵니다. */
export type BoardPost = {
  id: string;
  category: "앱" | "글";
  title: string;
  summary?: string;
  date: string;
  href: string;
  preview?: { src: string; alt: string };
};

export const boardPosts: BoardPost[] = [
  {
    id: "liftlog",
    category: "앱",
    title: "더드미요의 운동추천",
    summary: "더드미요 트레이너와 대화하며 운동을 기록하고 타이머로 세트를 관리합니다.",
    date: "2026.08.11",
    href: "https://liftlog-qayq.onrender.com/",
    preview: { src: "/assets/miyo/miyo-00.jpg", alt: "더드미요 캐릭터" }
  },
  {
    id: "aseating",
    category: "앱",
    title: "갓미요의 스마트AI 자리배치",
    summary: "교실 자리를 조건에 맞게 자동으로 배치해 주는 교사용 도구입니다.",
    date: "2026.08.11",
    href: "https://sn-aseating.vercel.app/login.html",
    preview: { src: "/assets/miyo/miyo-03.jpg", alt: "갓미요 캐릭터" }
  },
  {
    id: "miyo-trip",
    category: "앱",
    title: "야르미요의 여행플래너",
    summary: "여행 일정을 D-day와 함께 모아 보는 플래너입니다.",
    date: "2026.08.11",
    href: "https://miyo-trip.vercel.app/",
    preview: { src: "/assets/miyo/miyo-14.jpg", alt: "야르미요 캐릭터" }
  },
  {
    id: "miyo-planner",
    category: "앱",
    title: "미요의 플래너",
    summary: "할 일과 일정을 미요와 함께 계획하고 관리하는 플래너입니다.",
    date: "2026.08.14",
    href: "https://miyo-planner.vercel.app/",
    preview: { src: "/assets/miyo/miyo-01.jpg", alt: "미요 캐릭터" }
  }
];

/* 사진첩 탭입니다. */
export type PhotoItem = {
  id: string;
  name: string;
  src: string;
};

export const photos: PhotoItem[] = [
  { id: "miyo-00", name: "더드미요", src: "/assets/miyo/miyo-00.jpg" },
  { id: "miyo-01", name: "미요", src: "/assets/miyo/miyo-01.jpg" },
  { id: "miyo-02", name: "미요X (사춘기)", src: "/assets/miyo/miyo-02.jpg" },
  { id: "miyo-03", name: "갓미요", src: "/assets/miyo/miyo-03.jpg" },
  { id: "miyo-04", name: "삐질미요", src: "/assets/miyo/miyo-04.jpg" },
  { id: "miyo-05", name: "맑눈광미요", src: "/assets/miyo/miyo-05.jpg" },
  { id: "miyo-06", name: "무뚝미요", src: "/assets/miyo/miyo-06.jpg" },
  { id: "miyo-07", name: "빡미요", src: "/assets/miyo/miyo-07.jpg" },
  { id: "miyo-08", name: "넵미요", src: "/assets/miyo/miyo-08.jpg" },
  { id: "miyo-09", name: "훈수미요", src: "/assets/miyo/miyo-09.jpg" },
  { id: "miyo-10", name: "핑프미요", src: "/assets/miyo/miyo-10.jpg" },
  { id: "miyo-11", name: "무지개반사미요", src: "/assets/miyo/miyo-11.jpg" },
  { id: "miyo-12", name: "앵무미요", src: "/assets/miyo/miyo-12.jpg" },
  { id: "miyo-13", name: "왜요미요", src: "/assets/miyo/miyo-13.jpg" },
  { id: "miyo-14", name: "야르미요", src: "/assets/miyo/miyo-14.jpg" },
  { id: "miyo-15", name: "갸루미요", src: "/assets/miyo/miyo-15.jpg" }
];

/* 왼쪽 아래 파도타기 목록입니다. */
export type WaveLink = {
  id: string;
  label: string;
  href: string;
};

export const waveLinks: WaveLink[] = [
  { id: "miyotoon", label: "미요툰 인스타그램", href: "https://www.instagram.com/me_yotoon" },
  { id: "miyoapp", label: "미요앱 인스타그램", href: "https://www.instagram.com/me_yoapp/" },
  { id: "dorms", label: "도름스쿨 내 교실", href: "https://dorms.school/channels/3fad9324-3dee-49ae-8b5c-0a6686d85add" }
];

/* 홈 탭 아래쪽 한마디입니다. */
export type GuestbookEntry = {
  id: number;
  author: string;
  text: string;
  date: string;
};

export const guestbook: GuestbookEntry[] = [
  { id: 1, author: "김선생", text: "미요Lab 너무 기대됩니다! 화이팅!", date: "2026.08.09" },
  { id: 2, author: "미요팬", text: "미요앱 시리즈 언제 나오나요? 현기증 나요", date: "2026.08.08" },
  { id: 3, author: "박교사", text: "더드미요 표정 볼 때마다 웃겨요 ㅋㅋㅋ", date: "2026.08.07" },
  { id: 4, author: "코딩하는쌤", text: "미니룸에 있는 캐릭터들 다 이름이 있나요? 궁금해요", date: "2026.08.05" },
  { id: 5, author: "최학생", text: "선생님 홈피 너무 예뻐요 퍼가요~♡", date: "2026.08.01" }
];

export const cards: LinkCard[] = [
  {
    kind: "group",
    id: "dorms-activity",
    number: "01",
    name: "도름스 커뮤니티 나의 활동",
    description: "DoRms school 내 교실",
    thumb: { kind: "image", src: "/assets/dorms-community.png", alt: "DoRms community" },
    items: [
      { name: "DoRms 내 교실", description: "DoRms school 내 교실 채널입니다.", href: "https://dorms.school/channels/3fad9324-3dee-49ae-8b5c-0a6686d85add", thumb: { kind: "image", src: "/assets/dorms-community.png", alt: "DoRms community" } }
    ]
  },
  {
    kind: "link",
    id: "insta-miyotoon",
    number: "02",
    name: "미요툰 인스타그램 me_yotoon",
    description: "@me_yotoon",
    href: "https://www.instagram.com/me_yotoon",
    thumb: { kind: "icon", icon: "instagram" }
  },
  {
    kind: "link",
    id: "insta-miyoapp",
    number: "03",
    name: "미요앱 인스타그램 me_yoapp",
    description: "@me_yoapp",
    href: "https://www.instagram.com/me_yoapp/",
    thumb: { kind: "icon", icon: "instagram" }
  }
];
