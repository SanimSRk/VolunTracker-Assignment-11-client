import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NeedCarts = ({ need }) => {
  const { thumbnail, title, startDate, category, _id } = need;
  return (
    <div className="shadow-lg p-6 grid items-end h-full rounded-lg">
      <img src={thumbnail} alt="" />
      <h2 className=" font-semibold mt-4">{title}</h2>
      <p className="my-3">{category}</p>
      <p>Deadline : {startDate}</p>
      <Link to={`/allVolunterDeatils/${_id}`}>
        <button className="btn bg-[#f26837] w-full text-white mt-6">
          View Details <FaArrowRightLong className="text-xl" />
        </button>
      </Link>
    </div>
  );
};

export default NeedCarts;
