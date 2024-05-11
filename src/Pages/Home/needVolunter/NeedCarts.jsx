import { FaArrowRightLong } from 'react-icons/fa6';

const NeedCarts = ({ need }) => {
  const { thumbnail, title, startDate, category } = need;
  return (
    <div className="shadow-lg p-6 grid items-end h-full rounded-lg">
      <img src={thumbnail} alt="" />
      <h2 className=" font-semibold mt-4">{title}</h2>
      <p className="my-3">{category}</p>
      <p>Deadline : {startDate}</p>
      <button className="btn bg-[#f26837] w-full text-white mt-6">
        View Details <FaArrowRightLong className="text-xl" />
      </button>
    </div>
  );
};

export default NeedCarts;
