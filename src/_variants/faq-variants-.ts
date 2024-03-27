export const faqShowVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const faqHideVariants = {
  initial: {
    rotate: 180,
  },
  animate: {
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
};
