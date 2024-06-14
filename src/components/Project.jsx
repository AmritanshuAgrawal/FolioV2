function Project({ title, description1, description2 }) {
  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#101e38] transition-all duration-300 p-6 md:rounded-xl">
      <h2 className="font-bold text-lg text-gray-700 dark:text-gray-300 mt-4">{title}</h2>
      <p className="leading-7 text-gray-500 dark:text-gray-300 font-light text-base mt-4">
        {description1}<br /> <br />
        {description2}
      </p>
    </div>
  );
}


export default Project