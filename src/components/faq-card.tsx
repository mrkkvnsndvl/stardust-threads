import { motion } from 'framer-motion';

import { FaqCardProps } from '@/_types/faq-card-type';
import { IconMinus, IconPlus } from '@tabler/icons-react';

export default function FaqCard({
  id,
  question,
  answer,
  showQuestion,
  handleQuestionClick,
  faqShowVariants,
  faqHideVariants,
}: FaqCardProps) {
  return (
    <div
      key={id}
      className='flex flex-col items-center justify-center px-5 py-6 border border-black cursor-pointer'
      onClick={() => handleQuestionClick(id)}>
      <div className='flex items-center w-full'>
        <p className='w-full text-medium-bold'>{question}</p>
        {showQuestion === id ? (
          <motion.div
            variants={faqShowVariants}
            initial='initial'
            animate='animate'
            exit='exit'>
            <IconMinus width={32} height={32} stroke={1} />
          </motion.div>
        ) : (
          <motion.div
            variants={faqHideVariants}
            initial='initial'
            animate='animate'
            exit='exit'>
            <IconPlus width={32} height={32} stroke={1} />
          </motion.div>
        )}
      </div>
      {showQuestion === id && (
        <p className='mt-4 text-medium-normal'>{answer}</p>
      )}
    </div>
  );
}
