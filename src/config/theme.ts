export type PillColor = {
  bg: string;
  fg: string;
};

export type LinkTreeTheme = {
  colors: {
    cream: string;
    ink: string;
    dim: string;
    rose: string;
    brown: string;
    denim: string;
    latte: string;
    border: string;
    scrollTrack: string;
    scrollThumb: string;
    scrollThumbHover: string;
    spiralFront: string;
  };
  pillColors: PillColor[];
};

export const theme: LinkTreeTheme = {
  colors: {
    cream: "#FBF6EE",
    ink: "#4A3B2A",
    dim: "#A68A6D",
    rose: "#F0DFC3",
    brown: "#8B6B4A",
    denim: "#C9AE8C",
    latte: "#F3EAD8",
    border: "rgba(139,107,74,0.25)",
    scrollTrack: "rgba(243,234,216,0.5)",
    scrollThumb: "linear-gradient(180deg, rgba(139,107,74,0.68), rgba(201,174,140,0.58))",
    scrollThumbHover: "linear-gradient(180deg, rgba(74,59,42,0.78), rgba(201,174,140,0.74))",
    spiralFront: "#C9963E"
  },
  pillColors: [
    { bg: "#F0DFC3", fg: "#4A3B2A" },
    { bg: "#8B6B4A", fg: "#FBF6EE" },
    { bg: "#C9AE8C", fg: "#FBF6EE" },
    { bg: "#F3EAD8", fg: "#4A3B2A" }
  ]
};
