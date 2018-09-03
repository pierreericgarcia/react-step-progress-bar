export const transitions = {
  scale: {
    entering: { transform: "translateX(-50%) scale(1.5)" },
    entered: { transform: "translateX(-50%) scale(1)" },
    exiting: { transform: "translateX(-50%) scale(1.5)" },
    exited: { transform: "translateX(-50%) scale(1)" }
  },
  rotate: {
    entering: { transform: "translateX(-50%) rotate(360deg)" },
    entered: { transform: "translateX(-50%) rotate(0deg)" },
    exiting: { transform: "translateX(-50%) rotate(0deg)" },
    exited: { transform: "translateX(-50%) rotate(360deg)" }
  },
  skew: {
    entering: { transform: "translateX(-50%) skewX(20deg)" },
    entered: { transform: "translateX(-50%) skewX(0deg)" },
    exiting: { transform: "translateX(-50%) skewX(20deg)" },
    exited: { transform: "translateX(-50%) skewX(0deg)" }
  }
};
