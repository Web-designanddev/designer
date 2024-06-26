const styles = {
  boxWidth: "w-full",

  heading2:
    "font-nota-sans-arabic font-semibold text-white xs:text-[28px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center",
  paragraph:
    "font-poppins font-normal text-gray-600 text-[24px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start", // corrected to justify-start

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
