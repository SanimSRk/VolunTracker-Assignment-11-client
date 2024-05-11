import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';

const NeedVolunteerDeatuks = () => {
  const loderData = useLoaderData();
  const {
    thumbnail,
    title,
    description,
    category,
    location,
    neededNumber,
    startDate,
  } = loderData;

  return (
    <div className="my-[120px]">
      <div className="lg:flex gap-7 ">
        <div>
          <img className="w-full" src={thumbnail} alt="" />
        </div>
        <div className="bg-[#f26837] p-6 text-white">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex justify-between mt-4">
            <p className="">{category}</p>
            <p className="">Need Volunteer : {neededNumber} person</p>
          </div>
          <p className="mt-4">Deadline : {startDate}</p>
          <p className="mt-3"> location : {location}</p>
          <button className="btn text-xl text-[#f26837] font-semibold bg-[#e6e6f2] shadow-lg   w-full mt-12 ">
            Be a Volunteer
          </button>
          <div className="flex gap-4 text-3xl mt-8 justify-center">
            <FaFacebook></FaFacebook>
            <BsTwitterX></BsTwitterX>
            <BsInstagram></BsInstagram>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 mt-6 md:w-2/3">
        <p>{description}</p>
        <div className="flex gap-4 text-3xl mt-8 ">
          <FaFacebook></FaFacebook>
          <BsTwitterX></BsTwitterX>
          <BsInstagram></BsInstagram>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteerDeatuks;
