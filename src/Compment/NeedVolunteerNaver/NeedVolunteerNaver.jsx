import { FaTableList } from 'react-icons/fa6';
import { IoGridOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const NeedVolunteerNaver = () => {
  return (
    <div>
      <nav className="bg-base-200 h-16 flex items-center justify-around">
        <div>
          <form>
            <div className="input-bordered w-full rounded-lg flex border-2 border-[#f26837] ">
              <input
                type="text"
                name="title"
                placeholder="Type here"
                className=" rounded-r-none lg:w-[400px] input "
              />
              <input
                className="btn  text-white bg-[#f26837] rounded-l-none lg:text-xl"
                type="submit"
                value=" Search"
              />
            </div>
          </form>
        </div>
        <div className="flex gap-5">
          <NavLink
            to={'/layoutChange'}
            className={({ isActive }) =>
              isActive ? 'text-[#f26837] p-1' : 'p-1'
            }
          >
            <IoGridOutline className="text-3xl" />
          </NavLink>
          <NavLink
            to={'/tabileFormations'}
            className={({ isActive }) =>
              isActive ? 'text-[#f26837] p-1' : 'p-1'
            }
          >
            <FaTableList className="text-3xl" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NeedVolunteerNaver;
