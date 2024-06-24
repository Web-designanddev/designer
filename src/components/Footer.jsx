// import { footerLinks, socialMedia } from "../constants/index.js";
// import { logo } from "../assets";

// const Footer = () => (
//   <footer className="bg-gray-900 text-white py-8">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-wrap justify-between items-center">
//         {/* Logo and Description */}
//         <div className="w-full md:w-1/4 mb-4">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-24 h-24 rounded-full mb-4 mx-auto"
//           />
//           <p className="text-center text-sm">
//             Web-Design&Develop جایی امن و مورد اعتماد برای باهم بودن
//           </p>
//         </div>

//         {/* Footer Links */}
//         <div className="flex flex-wrap w-full md:w-3/4">
//           {footerLinks.map((footerLink) => (
//             <div
//               key={footerLink.name}
//               className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8 px-2"
//             >
//               <ul className="list-none">
//                 <li className="mb-2">
//                   <a href={footerLink.link} className="hover:text-gray-300">
//                     {footerLink.name}
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex justify-center mt-6">
//         {socialMedia.map((social) => (
//           <img
//             key={social.id}
//             src={social.icon}
//             alt={social.id}
//             className="w-6 h-6 object-contain cursor-pointer mx-2"
//             onClick={() => window.open(social.href)}
//           />
//         ))}
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-sm mt-8">
//         &copy; {new Date().getFullYear()} تمامی حقوق محفوظ است | طراحی وب
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
import { logo } from "../assets";
import {  socialMedia } from "../constants";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between items-center">
        
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 mb-4">
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 rounded-full mb-4 mx-auto"
          />
          <p className="text-center text-sm">
            Web-Design&Develop جایی امن و مورد اعتماد برای باهم بودن
          </p>
        </div>
  <div >
        <ul className="flex items-center mr-20  flex-wrap justify-center gap-5 ">
          <a href="#home">
            <li>خانه</li>
          </a>
          <a href="#about">
            <li>درباره ما</li>
          </a>
          <a href="#projects">
            <li>پروژه ها</li>
          </a>
          <a href="#services">
            <li>خدمات</li>
          </a>
        </ul>
        </div>
        {/* Footer Links */}
    
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex justify-center mt-6">
      {socialMedia.map((social) => (
        <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className="w-6 h-6 object-contain cursor-pointer mx-2"
          onClick={() => window.open(social.href)}
        />
      ))}
    </div>

    {/* Copyright */}
    <div className="text-center text-sm mt-6">
      &copy; {new Date().getFullYear()} تمامی حقوق محفوظ است | طراحی وب
    </div>
  </footer>
);

export default Footer;
