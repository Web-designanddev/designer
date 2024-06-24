import styles from "../style"; // Ensure correct import path for your CSS module
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants/index.js";

const Footer = () => (
  <section className="bg-#44403c flex flex-col max-w-full m-10 mt-[-40px]">
    <div className="md:flex-row flex-col mb-8 w-full">
      <div className="flex-[1] flex flex-col justify-start ">
        <img src={logo} alt="logo" className="w-[80px] h-[80px] rounded-full" />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          Web-Design&Develop جایی امن و مورد اعتماد برای باهم بودن
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mr-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        &copy; {new Date().getFullYear()} تمامی حقوق محفوظ است | طراحی وب
      </p>

      <div className="flex flex-row md:mt-0 mt-6 gap-2">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.href)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
