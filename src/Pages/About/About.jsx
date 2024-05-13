import { AiOutlineLike } from 'react-icons/ai';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { LiaUsersSolid } from 'react-icons/lia';
import { MdCampaign } from 'react-icons/md';
import { SiGooglecampaignmanager360 } from 'react-icons/si';
import { TbBrandCampaignmonitor } from 'react-icons/tb';

const About = () => {
  return (
    <div className=" lg:flex gap-12 mt-12 items-center lg:px-0 px-4">
      <div className=" lg:w-1/2 ] ">
        <img
          className=" lg:h-[115vh] w-full object-cover object-center"
          src="/public/pexels-rdne-6646896.jpg"
          alt=""
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-[#f26837]">About us</h2>

        <h2 className="text-3xl lg:text-5xl font-semibold leading-normal my-8">
          We Can Make Our <br></br> New Histry Together!
        </h2>
        <p>
          We believe in the power of collaboration, innovation, and inclusivity.
          We recognize that creating meaningful change requires the active
          participation and engagement of diverse stakeholders, including
          volunteers, community members, organizations, and policymakers. By
          fostering a culture of openness, creativity, and accountability, we
          strive to co-create solutions that address root causes and create
          lasting impact.
        </p>

        <div className="lg:flex gap-6 mt-8">
          <div>
            <div className=" border-dotted border grid justify-center items-center rounded-full w-24 h-24">
              <div className="">
                <div className="flex">
                  <MdCampaign className="text-2xl" />
                  <SiGooglecampaignmanager360 className="text-2xl" />
                </div>
                <div className="flex">
                  <TbBrandCampaignmonitor className="text-2xl" />
                  <AiOutlineLike className="text-2xl" />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold ">OUR CAMPAIGN</h2>
            <p className="mt-3">
              At "Green Future," our mission is twofold: to raise awareness
              about environmental issues and to empower individuals to take
              action through volunteerism
            </p>
          </div>
          <div>
            <div className="">
              <div className="border-dotted border grid justify-center items-center rounded-full w-24 h-24">
                <LiaUsersSolid className="text-6xl " />
              </div>
            </div>

            <h2 className="text-xl font-bold">BECOME A VOLUNTEER</h2>
            <p className="mt-3">
              Are you passionate about sustainability and eager to make a
              difference in your community? Join our team of dedicated
              volunteers and be a part of the "Green Future" movement!
            </p>
          </div>
        </div>
        <div className="flex gap-4 text-3xl mt-8">
          <FaFacebook></FaFacebook>
          <BsTwitterX></BsTwitterX>
          <BsInstagram></BsInstagram>
        </div>
      </div>
    </div>
  );
};

export default About;
