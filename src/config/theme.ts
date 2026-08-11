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
    cream: "#F4F7F4",       
    ink: "#2F4A38",         
    dim: "#779683",         
    rose: "#D0E7D2",        
    brown: "#547A60",       
    denim: "#9CBBA6",       
    latte: "#E5EBE5",       
    border: "rgba(84,122,96,0.25)",
    scrollTrack: "rgba(229,235,229,0.5)",
    scrollThumb: "linear-gradient(180deg, rgba(84,122,96,0.68), rgba(156,187,166,0.58))",
    scrollThumbHover: "linear-gradient(180deg, rgba(47,74,56,0.78), rgba(156,187,166,0.74))",
    spiralFront: "#4CA771"  
  },
  pillColors: [
    { bg: "#D0E7D2", fg: "#2F4A38" },
    { bg: "#547A60", fg: "#F4F7F4" },
    { bg: "#9CBBA6", fg: "#F4F7F4" },
    { bg: "#E5EBE5", fg: "#2F4A38" }
  ]
};
