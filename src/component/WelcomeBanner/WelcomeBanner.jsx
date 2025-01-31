const WelcomeBanner = () => {
  const currentDate = new Date();

  // Format date values
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const weekday = currentDate.toLocaleString("default", { weekday: "long" });

  return (
    <div className=" mt-2 flex flex-col justify-center items-center bg-white rounded-md shadow-lg text-center w-auto flex-wrap">
      <p className="text-md font-semibold text-gray-800 p-2 ">
        Welcome back 
        <span className="text-xl font-bold text-blue-500 "> Michael </span>
      </p>

      <p className="text-md text-gray-500  text-left">{`${day} ${month} ${year} - ${weekday}`}</p>
    </div>
  );
};

export default WelcomeBanner;
