import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedBack";

const Testimonials = () => (
  <section
    id="testimonials"
    className={`${styles.paddingY} ${styles.flexCenter}  flex-col relative m-5 `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        مردم <br className="sm:block hidden" /> در مورد ما چه می‌گویند
      </h2>
 >
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
