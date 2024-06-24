import {
  FaPaintBrush,
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaLifeRing,
} from "react-icons/fa"; // Importing icons from react-icons

const services = [
  {
    title: "طراحی دیزاین",
    description:
      "با طراحی‌های خلاقانه و منحصر به فرد، برند شما را به یک اثر هنری تبدیل می‌کنیم. ما با ترکیب هنر و تخصص، تصاویری زیبا و ماندگار خلق می‌کنیم که همه نگاه‌ها را به خود جلب کند.",
    icon: <FaPaintBrush size={50} />,
  },
  {
    title: "توسعه وب",
    description:
      "وب‌سایت شما نمای دیجیتالی کسب‌وکارتان است. ما با توسعه حرفه‌ای و مدرن، وب‌سایتی برای شما می‌سازیم که هم زیباست و هم کارآمد. با ما، حضوری قوی و جذاب در دنیای آنلاین خواهید داشت.",
    icon: <FaCode size={50} />,
  },
  {
    title: "Responsive Design",
    description:
      "تعامل کاربران با وب‌سایت شما باید لذت‌بخش و به‌یادماندنی باشد. ما با طراحی‌های تعاملی جذاب، تجربه‌ای خاص و دلنشین برای کاربران شما خلق می‌کنیم که باعث می‌شود همیشه به وب‌سایت شما برگردند.",
    icon: <FaMobileAlt size={50} />,
  },
  {
    title: "بهینه‌سازی سئو",
    description:
      "در دنیای دیجیتال، دیده شدن همه چیز است. با خدمات سئو ما، وب‌سایت شما همیشه در صدر نتایج جستجو خواهد بود. ما با استراتژی‌های دقیق و به‌روز، ترافیک وب‌سایت شما را به طور طبیعی افزایش می‌دهیم.",
    icon: <FaSearch size={50} />,
  },
  {
    title: "پشتیبانی",
    description:
      "ما همیشه در کنار شما هستیم تا وب‌سایتتان بدون هیچ مشکلی کار کند. ",
    icon: <FaLifeRing size={50} />,
  },
];

const Services = () => {
  return (
    <section className="text-white py-20 px-6 min-h-screen" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">خدمات</h2>
          <p className="text-xl max-w-2xl mx-auto">
            ما یک تیم متخصص و خلاق هستیم که در دنیای دیجیتال فعالیت می‌کنیم. هدف
            ما ارائه خدماتی استثنایی است که به شما کمک می‌کند تا سایت خود را به
            اوج موفقیت برسانید. با دانش عمیق و نگرش خلاق، همراه شما در راه رسیدن
            به اهداف بزرگتر هستیم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white text-black rounded-lg shadow-md overflow-hidden group"
            >
              <div className="p-6 flex flex-col items-center">
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                <p className="text-center">{service.description}</p>
              </div>
              <div className="absolute inset-0 bg-blue-500 text-white flex flex-col items-center justify-center p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                <p className="text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
