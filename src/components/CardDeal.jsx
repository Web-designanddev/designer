// import { card } from "../assets";
// import styles, { layout } from "../style";
// import Button from "./Button";

// const CardDeal = () => (
//   <section className="flex flex-col md:flex-row items-center md:items-start mr-20 p-6  shadow-lg rounded-lg overflow-hidden">
//     <div className={layout.sectionInfo}>
//       <h2
//         className={`${styles.heading2} text-3xl md:text-4xl font-bold leading-tight`}
//       >
//         <br className="sm:block hidden" /> با ما در نمایشگاه خلاقیت و نو آوری
//         همراه شوید!
//       </h2>
//       <p
//         className={`${styles.paragraph} max-w-[470px] mt-5 text-lg leading-relaxed`}
//       >
//         ما با تمرکز بر طراحی وب سایت، بهینه‌سازی موتور جستجو، طراحی لوگو و کارت
//         ویزیت، به شما کمک می‌کنیم تا برند خود را به شکوه و اعتباری بی‌نظیر
//         برسانید. هدف ما ارائه راهکارهایی منحصر به فرد است که به شما کمک می‌کند
//         تا از رقابت‌ها پیشی بگیرید و در بازار دیجیتال موفقیت زیادی داشته باشید.
//       </p>

//       <Button styles={`mt-10`} />
//     </div>

//     <div className={`${layout.sectionImg} mt-10 md:mt-0`}>
//       <img
//         src={card}
//         alt="billing"
//         className="w-full md:w-[70%] h-auto object-cover transition-transform duration-300 transform hover:scale-105"
//       />
//     </div>
//   </section>
// );

// export default CardDeal;
// CardDeal.js or any other component where the button is used

import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className="flex flex-col md:flex-row items-center md:items-start mr-20 p-6 shadow-lg rounded-lg overflow-hidden">
    <div className={layout.sectionInfo}>
      <h2
        className={`${styles.heading2} text-3xl md:text-4xl font-bold leading-tight`}
      >
        <br className="sm:block hidden" /> با ما در نمایشگاه خلاقیت و نو آوری
        همراه شوید!
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5 text-lg leading-relaxed`}
      >
        ما با تمرکز بر طراحی وب سایت، بهینه‌سازی موتور جستجو، طراحی لوگو و کارت
        ویزیت، به شما کمک می‌کنیم تا برند خود را به شکوه و اعتباری بی‌نظیر
        برسانید. هدف ما ارائه راهکارهایی منحصر به فرد است که به شما کمک می‌کند
        تا از رقابت‌ها پیشی بگیرید و در بازار دیجیتال موفقیت زیادی داشته باشید.
      </p>
      <div>
        <a href="#contact">
          <button
            type="button"
            className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
          >
            شروع کنید
          </button>
        </a>
      </div>
    </div>
    <div className={`${layout.sectionImg} mt-10 md:mt-0`}>
      <img
        src={card}
        alt="billing"
        className="w-full md:w-[70%] h-auto object-cover transition-transform duration-300 transform hover:scale-105"
      />
    </div>
  </section>
);

export default CardDeal;
