/* 미요툰 회차 목록입니다. 이미지는 public/assets/miyotoon 에 있습니다. */
/* title 은 비워 두면 화 번호만 보입니다. 원하는 제목을 채워 넣으세요. */

export type Episode = {
  id: string;
  label: string;
  title: string;
  thumb: string;
  cuts: string[];
};

export const episodes: Episode[] = [
  {
    id: "ep01",
    label: "1화",
    title: "",
    thumb: "/assets/miyotoon/ep01/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep01/cut-01.jpg",
      "/assets/miyotoon/ep01/cut-02.jpg",
      "/assets/miyotoon/ep01/cut-03.jpg",
      "/assets/miyotoon/ep01/cut-04.jpg",
    ]
  },
  {
    id: "ep02",
    label: "2화",
    title: "",
    thumb: "/assets/miyotoon/ep02/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep02/cut-01.jpg",
      "/assets/miyotoon/ep02/cut-02.jpg",
      "/assets/miyotoon/ep02/cut-03.jpg",
      "/assets/miyotoon/ep02/cut-04.jpg",
      "/assets/miyotoon/ep02/cut-05.jpg",
    ]
  },
  {
    id: "ep03",
    label: "3화",
    title: "",
    thumb: "/assets/miyotoon/ep03/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep03/cut-01.jpg",
      "/assets/miyotoon/ep03/cut-02.jpg",
      "/assets/miyotoon/ep03/cut-03.jpg",
      "/assets/miyotoon/ep03/cut-04.jpg",
      "/assets/miyotoon/ep03/cut-05.jpg",
      "/assets/miyotoon/ep03/cut-06.jpg",
    ]
  },
  {
    id: "ep04",
    label: "4화",
    title: "",
    thumb: "/assets/miyotoon/ep04/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep04/cut-01.jpg",
      "/assets/miyotoon/ep04/cut-02.jpg",
      "/assets/miyotoon/ep04/cut-03.jpg",
      "/assets/miyotoon/ep04/cut-04.jpg",
      "/assets/miyotoon/ep04/cut-05.jpg",
      "/assets/miyotoon/ep04/cut-06.jpg",
    ]
  },
  {
    id: "ep05",
    label: "5화",
    title: "",
    thumb: "/assets/miyotoon/ep05/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep05/cut-01.jpg",
      "/assets/miyotoon/ep05/cut-02.jpg",
      "/assets/miyotoon/ep05/cut-03.jpg",
      "/assets/miyotoon/ep05/cut-04.jpg",
      "/assets/miyotoon/ep05/cut-05.jpg",
      "/assets/miyotoon/ep05/cut-06.jpg",
    ]
  },
  {
    id: "ep06",
    label: "6화",
    title: "",
    thumb: "/assets/miyotoon/ep06/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep06/cut-01.jpg",
      "/assets/miyotoon/ep06/cut-02.jpg",
      "/assets/miyotoon/ep06/cut-03.jpg",
      "/assets/miyotoon/ep06/cut-04.jpg",
      "/assets/miyotoon/ep06/cut-05.jpg",
      "/assets/miyotoon/ep06/cut-06.jpg",
    ]
  },
  {
    id: "ep07",
    label: "7화",
    title: "",
    thumb: "/assets/miyotoon/ep07/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep07/cut-01.jpg",
      "/assets/miyotoon/ep07/cut-02.jpg",
      "/assets/miyotoon/ep07/cut-03.jpg",
      "/assets/miyotoon/ep07/cut-04.jpg",
      "/assets/miyotoon/ep07/cut-05.jpg",
      "/assets/miyotoon/ep07/cut-06.jpg",
    ]
  },
  {
    id: "ep08",
    label: "8화",
    title: "",
    thumb: "/assets/miyotoon/ep08/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep08/cut-01.jpg",
      "/assets/miyotoon/ep08/cut-02.jpg",
      "/assets/miyotoon/ep08/cut-03.jpg",
      "/assets/miyotoon/ep08/cut-04.jpg",
      "/assets/miyotoon/ep08/cut-05.jpg",
      "/assets/miyotoon/ep08/cut-06.jpg",
      "/assets/miyotoon/ep08/cut-07.jpg",
    ]
  },
  {
    id: "ep09",
    label: "9화",
    title: "",
    thumb: "/assets/miyotoon/ep09/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep09/cut-01.jpg",
      "/assets/miyotoon/ep09/cut-02.jpg",
      "/assets/miyotoon/ep09/cut-03.jpg",
      "/assets/miyotoon/ep09/cut-04.jpg",
      "/assets/miyotoon/ep09/cut-05.jpg",
      "/assets/miyotoon/ep09/cut-06.jpg",
    ]
  },
  {
    id: "ep10",
    label: "10화",
    title: "",
    thumb: "/assets/miyotoon/ep10/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep10/cut-01.jpg",
      "/assets/miyotoon/ep10/cut-02.jpg",
      "/assets/miyotoon/ep10/cut-03.jpg",
      "/assets/miyotoon/ep10/cut-04.jpg",
      "/assets/miyotoon/ep10/cut-05.jpg",
      "/assets/miyotoon/ep10/cut-06.jpg",
    ]
  },
  {
    id: "ep11",
    label: "11화",
    title: "",
    thumb: "/assets/miyotoon/ep11/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep11/cut-01.jpg",
      "/assets/miyotoon/ep11/cut-02.jpg",
      "/assets/miyotoon/ep11/cut-03.jpg",
      "/assets/miyotoon/ep11/cut-04.jpg",
      "/assets/miyotoon/ep11/cut-05.jpg",
      "/assets/miyotoon/ep11/cut-06.jpg",
    ]
  },
  {
    id: "ep12",
    label: "12화",
    title: "",
    thumb: "/assets/miyotoon/ep12/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep12/cut-01.jpg",
      "/assets/miyotoon/ep12/cut-02.jpg",
      "/assets/miyotoon/ep12/cut-03.jpg",
      "/assets/miyotoon/ep12/cut-04.jpg",
      "/assets/miyotoon/ep12/cut-05.jpg",
      "/assets/miyotoon/ep12/cut-06.jpg",
    ]
  },
  {
    id: "ep13",
    label: "13화",
    title: "",
    thumb: "/assets/miyotoon/ep13/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep13/cut-01.jpg",
      "/assets/miyotoon/ep13/cut-02.jpg",
      "/assets/miyotoon/ep13/cut-03.jpg",
      "/assets/miyotoon/ep13/cut-04.jpg",
      "/assets/miyotoon/ep13/cut-05.jpg",
      "/assets/miyotoon/ep13/cut-06.jpg",
    ]
  },
  {
    id: "ep14",
    label: "14화",
    title: "",
    thumb: "/assets/miyotoon/ep14/thumb.jpg",
    cuts: [
      "/assets/miyotoon/ep14/cut-01.jpg",
      "/assets/miyotoon/ep14/cut-02.jpg",
      "/assets/miyotoon/ep14/cut-03.jpg",
      "/assets/miyotoon/ep14/cut-04.jpg",
      "/assets/miyotoon/ep14/cut-05.jpg",
      "/assets/miyotoon/ep14/cut-06.jpg",
      "/assets/miyotoon/ep14/cut-07.jpg",
      "/assets/miyotoon/ep14/cut-08.jpg",
    ]
  },
  {
    id: "extra",
    label: "번외편",
    title: "",
    thumb: "/assets/miyotoon/extra/thumb.jpg",
    cuts: [
      "/assets/miyotoon/extra/cut-01.jpg",
      "/assets/miyotoon/extra/cut-02.jpg",
      "/assets/miyotoon/extra/cut-03.jpg",
      "/assets/miyotoon/extra/cut-04.jpg",
      "/assets/miyotoon/extra/cut-05.jpg",
      "/assets/miyotoon/extra/cut-06.jpg",
      "/assets/miyotoon/extra/cut-07.jpg",
      "/assets/miyotoon/extra/cut-08.jpg",
      "/assets/miyotoon/extra/cut-09.jpg",
      "/assets/miyotoon/extra/cut-10.jpg",
      "/assets/miyotoon/extra/cut-11.jpg",
      "/assets/miyotoon/extra/cut-12.jpg",
      "/assets/miyotoon/extra/cut-13.jpg",
      "/assets/miyotoon/extra/cut-14.jpg",
      "/assets/miyotoon/extra/cut-15.jpg",
    ]
  },
];
