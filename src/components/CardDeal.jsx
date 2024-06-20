import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className="m-10 ">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <br className="sm:block hidden" /> با ما همراه شوید و به نمایشگاهی از
        خلاقیت و نوآوری خوش آمدید!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ما با تمرکز بر طراحی وب سایت، بهینه‌سازی موتور جستجو، طراحی لوگو و کارت
        ویزیت، به شما کمک می‌کنیم تا برند خود را به شکوه و اعتباری بی‌نظیر
        برسانید. هدف ما ارائه راهکارهایی منحصر به فرد است که به شما کمک می‌کند
        تا از رقابت‌ها پیشی بگیرید و در بازار دیجیتال موفقیت زیادی داشته باشید.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
