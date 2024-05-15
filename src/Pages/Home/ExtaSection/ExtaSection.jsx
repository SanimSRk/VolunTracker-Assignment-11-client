import { Link } from 'react-router-dom';

const ExtaSection = () => {
  return (
    <div className="mb-12  lg:px-0 px-4">
      <div className=" grid justify-center items-center rounded-lg h-full  bg-center bg-cover bg-[linear-gradient(90.00deg,rgb(21,21,21,0.9),rgba(21,21,21,0.8)100%),url(/pexels-thirdman-7656742.jpg)] ">
        <div className="lg:flex items-center gap-12  object-cover object-center">
          <div className="">
            <img
              className=" lg:h-[99%] md:h-[98%] h-[50%] object-cover object-center"
              src="/pexels-lara-jameson-9324335-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="lg:w-2/3 p-4 text-[#f26837]">
            <h2 className="lg:text-5xl text-2xl font-bold md:text-4xl md:leading-normal lg:leading-normal leading-normal">
              Welcome to VolunTracker, your compass for navigating the realm of
              volunteer opportunities.
            </h2>
            <div className="mt-6">
              <Link to={'/allNeedVolunteerSection'}>
                <button className="btn  bg-transparent text-[#f26837] border-[#f26837] ">
                  view deatils
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtaSection;
