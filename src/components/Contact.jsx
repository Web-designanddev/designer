// import React, { useState } from "react";
// import { HiLocationMarker, HiPhone, HiOutlineMail } from "react-icons/hi";
// import { BiSend } from "react-icons/bi";

// const Contact = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const subject = "ارسال فرم تماس";
//     const body = `نام: ${form.name}%0D%0Aایمیل: ${form.email}%0D%0Aتلفن: ${form.phone}%0D%0Aپیام: ${form.message}`;
//     const mailtoLink = `mailto:webdesignanddev2@gmail.com?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(body)}`;

//     window.location.href = mailtoLink;
//   };

//   return (
//     <section className="text-white min-h-screen mt-20" id="contact">
//       <div>
//         {" "}
//         <h2 className="text-4xl font-bold mb-4 text-center  ">تماس با ما</h2>
//         <p className="text-xl mb-8 text-enter flex items-center justify-center mr-4">
//           برای هرگونه سوال یا درخواست، با ما تماس بگیرید تا بهترین خدمات را برای
//           شما ارائه دهیم.{" "}
//         </p>
//       </div>{" "}
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
//         <div className="md:w-1/2 text-center md:text-right">
//           <form onSubmit={handleSubmit} className="w-full">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="نام شما"
//                   className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="ایمیل شما"
//                   className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   placeholder="تلفن شما"
//                   className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               <div className="col-span-2">
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows="4"
//                   placeholder="پیام شما..."
//                   className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 ></textarea>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="inline-flex items-center justify-center w-full md:w-auto h-12 px-6 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               ارسال پیام <BiSend className="ml-2" />
//             </button>
//           </form>
//         </div>
//         <div className="md:w-1/2 mt-12 md:mt-10 m-2">
//           <div className="bg-white text-gray-800 rounded-lg shadow-md p-16">
//             <h3 className="text-3xl font-semibold mb-4">اطلاعات تماس</h3>
//             {/* <div className="flex items-center mb-4">
//               <HiLocationMarker className="w-6 h-6 mr-3" />
//               <p>خیابان اصلی، شهر، استان، کدپستی 12345</p>
//             </div> */}
//             <div className="flex items-center mb-4">
//               <HiPhone className="w-6 h-6 mr-3" />
//               <p>
//                 <a href="tel:+1234567890">۰۹۱۲۶۴۸۶۴۰۸ : مشاوره</a>
//               </p>
//             </div>
//             <div className="flex items-center mb-4">
//               <HiPhone className="w-6 h-6 mr-3" />
//               <p>
//                 <a href="tel:+1234567890"> ۰۹۹۲۴۰۰۸۹۷۰ : پشتیبانی </a>
//               </p>
//             </div>
//             <div className="flex items-center mb-4">
//               <HiOutlineMail className="w-6 h-6 mr-3" />
//               <p>
//                 <a href="mailto:contact@example.com">
//                   webdesignanddev2@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { HiLocationMarker, HiPhone, HiOutlineMail } from "react-icons/hi";
import { BiSend } from "react-icons/bi";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "ارسال فرم تماس";
    const body = `نام: ${form.name}%0D%0Aایمیل: ${form.email}%0D%0Aتلفن: ${form.phone}%0D%0Aپیام: ${form.message}`;
    const mailtoLink = `mailto:webdesignanddev2@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="text-white min-h-screen mt-20" id="contact">
      <div>
        <h2 className="text-4xl font-bold mb-4 text-center">تماس با ما</h2>
        <p className="text-xl mb-8 text-center flex items-center justify-center">
          برای هرگونه سوال یا درخواست، با ما تماس بگیرید تا بهترین خدمات را برای
          شما ارائه دهیم.
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 text-center md:text-right">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="نام شما"
                  className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ایمیل شما"
                  className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="تلفن شما"
                  className="w-full h-12 px-4 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="پیام شما..."
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full md:w-auto h-12 px-6 mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ارسال پیام <BiSend className="ml-2" />
            </button>
          </form>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 m-2">
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-8 md:p-16">
            <h3 className="text-3xl font-semibold mb-4">اطلاعات تماس</h3>
            {/* <div className="flex items-center mb-4">
              <HiLocationMarker className="w-6 h-6 mr-3" />
              <p>خیابان اصلی، شهر، استان، کدپستی 12345</p>
            </div> */}
            <div className="flex items-center mb-4">
              <HiPhone className="w-6 h-6 mr-3" />
              <p>
                <a href="tel:+1234567890">۰۹۱۲۶۴۸۶۴۰۸ : مشاوره</a>
              </p>
            </div>
            <div className="flex items-center mb-4">
              <HiPhone className="w-6 h-6 mr-3" />
              <p>
                <a href="tel:+1234567890"> ۰۹۹۲۴۰۰۸۹۷۰ : پشتیبانی </a>
              </p>
            </div>
            <div className="flex items-center mb-4">
              <HiOutlineMail className="w-6 h-6 mr-3" />
              <p>
                <a href="mailto:contact@example.com">
                  webdesignanddev2@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
