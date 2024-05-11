import { useContext } from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const AllVolunterDeatils = () => {
  const { user } = useContext(AuthContext);
  const usloader = useLoaderData();
  const {
    thumbnail,
    title,
    description,
    category,
    location,
    neededNumber,
    email,
    fullName,
    startDate,
  } = usloader;
  return (
    <div className="my-[120px]">
      <div className="lg:flex gap-7 ">
        <div>
          <img className="w-full" src={thumbnail} alt="" />
        </div>
        <div className="bg-[#f26837] p-6 text-white ">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex justify-between mt-4">
            <p className="">{category}</p>
            <p className="">Need Volunteer : {neededNumber} person</p>
          </div>
          <p className="mt-4">Deadline : {startDate}</p>
          <p className="mt-3"> location : {location}</p>
          <label
            htmlFor="my_modal_7"
            className="btn text-xl text-[#f26837] font-semibold bg-[#e6e6f2] shadow-lg   w-full mt-12 "
          >
            Be a Volunteer
          </label>
          <div className="text-black w-full">
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal " role="dialog">
              <div className="modal-box w-[100vh]">
                <div className="">
                  <div className="w-full">
                    <img className="w-full" src={thumbnail} alt="" />
                  </div>
                  <div>
                    <h2>{title}</h2>
                    <h2 className="my-3">{category}</h2>

                    <p className="">{description}</p>
                    <p className="mt-4">location: {location}</p>

                    <p className="my-3">
                      Need Volunteer : {neededNumber} person
                    </p>
                    <p className="">Deadline : {startDate}</p>
                    <div>
                      <h2 className="my-3">Organizer name : {fullName}</h2>
                      <h2>Organizer email : {email}</h2>
                    </div>
                  </div>
                  <h2>Your Name : {user?.displayName}</h2>
                  <h2>Your email : {user?.email}</h2>
                </div>
                <button className="btn w-full mt-4">Request</button>
              </div>

              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>

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

export default AllVolunterDeatils;
