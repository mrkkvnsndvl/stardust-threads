export type FaqCardProps = {
  id: number;
  question: string;
  answer: string;
  showQuestion: number | null | undefined;
  handleQuestionClick: (id: number) => void;
  faqShowVariants: any;
  faqHideVariants: any;
};
