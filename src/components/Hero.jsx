import styles from "../style";
import { discount, robot } from "../assets";
// import GetStart from "./GetStart";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mr-10`}
    >
      <div className={`flex-1  flex-col xl:px-0 sm:px-16 px-4`}>
        <div className="flex flex-wrap items-center py-[6px] px-2 bg-discount-gradient rounded-[10px] mb-3">
          <img src={discount} alt="discount" />
          <p className={`${styles.paragraph} text-[24px]`}>
            وبسایت شما ،معرف شماست
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            با افتخار <br className="sm:block hidden" />{" "}
            <span className="text-gradient">
              به دنیایی از طراحی منحصربه‌فرد{" "}
            </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          خوش آمدید!
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          در دنیای دیجیتال امروز، وب‌سایت شما نماینده‌ی هویت و اعتبار کسب‌وکار
          شماست. در وب دیزاینینگ، ما باور داریم که هر وب‌سایت باید بازتابی از
          رویاها، اهداف و ارزش‌های منحصر به فرد هر برند باشد. با ترکیب هنر و
          تکنولوژی، ما وب‌سایت‌هایی را خلق می‌کنیم که نه تنها زیبا و چشم‌نواز
          هستند، بلکه کارآمد و کاربرپسند نیز باشند.{" "}
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative "
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* 
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStart />
      </div> */}
    </section>
  );
};

export default Hero;