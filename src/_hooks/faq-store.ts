import { create } from 'zustand';

type FaqStore = {
  showQuestion: number | null;
  handleQuestionClick: (id: number) => void;
};

export const useFaqStore = create<FaqStore>((set) => ({
  showQuestion: null,

  handleQuestionClick: (id) => {
    set({ showQuestion: id });
  },
}));
