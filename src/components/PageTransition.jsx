import {motion} from "framer-motion";

const PageTransition = ({children}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 10}} // מתחיל שקוף וקצת למטה
      animate={{opacity: 1, y: 0}} // מופיע ועולה למעלה
      exit={{opacity: 0, y: -10}} // נעלם ועולה למעלה ביציאה
      transition={{duration: 0.3, ease: "easeOut"}} // אנימציה קצרה וחלקה
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
