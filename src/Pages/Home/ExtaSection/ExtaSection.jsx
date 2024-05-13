const ExtaSection = () => {
  return (
    <div className="mb-12">
      <div className=" grid justify-center items-center rounded-lg md:h-[420px] h-[320px] lg:h-[600px] bg-center bg-cover bg-[linear-gradient(90.00deg,rgb(21,21,21,0.4),rgba(21,21,21,0.4)100%),url(/pexels-thirdman-7656742.jpg)] ">
        <div className=" text-center lg:w-2/3 mx-auto md:w-2/3 md:mx-auto lg:mx-auto">
          <h2 className="text-white md:text-3xl text-2xl leading-normal md:leading-normal lg:leading-normal lg:text-4xl font-bold ">
            {' '}
            Responsible for organizing and managing volunteer activities,
            ensuring smooth operations and effective utilization of resources
          </h2>
          <button className="btn mt-7 bg-[#f26837] text-white border-none">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtaSection;
