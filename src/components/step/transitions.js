export const transitions = {
  scale: {
    entering: { transform: "translateX(-50%) scale(2)" },
    entered: { transform: "translateX(-50%) scale(1)" },
    exiting: { transform: "translateX(-50%) scale(2)" },
    exited: { transform: "translateX(-50%) scale(1)" }
  },
  rotate: {
    entering: { transform: "translateX(-50%) rotate(360deg)" },
    entered: { transform: "translateX(-50%) rotate(0deg)" },
    exiting: { transform: "translateX(-50%) rotate(0deg)" },
    exited: { transform: "translateX(-50%) rotate(360deg)" }
  }
};
