import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllVoluntterCart from './AllVoluntterCart';
import { IoGridOutline } from 'react-icons/io5';
import { FaTableList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [search, setSearch] = useState('');
  const [cheangeLayout, setChengeLayout] = useState(true);
  const [volunteerstabile, setVolunteersTabile] = useState([]);
  const handileClickChenges = e => {
    if (e === 'grid') {
      setChengeLayout(true);
    } else if (e === 'tabile') {
      setChengeLayout(false);
    }
  };

  useEffect(() => {
    document.title = 'Volunteer-Needs';
  }, []);
  useEffect(() => {
    axios
      .get('https://bolunteer-server-site.vercel.app/allVolunteers')
      .then(res => {
        setVolunteersTabile(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://bolunteer-server-site.vercel.app/allVolunteers')
      .then(res => {
        setVolunteers(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://bolunteer-server-site.vercel.app/volunteerSerch?search=${search}`
      )
      .then(res => {
        console.log(res.data);
        setVolunteers(res.data);
        setVolunteersTabile(res.data);
      });
  }, [search]);

  const handileClickSubmite = e => {
    e.preventDefault();
    const searchText = e.target.title.value;
    setSearch(searchText);
  };

  return (
    <div className="my-[120px] ">
      <div className="lg:w-2/3 text-center mx-auto">
        <h2 className="text-3xl font-bold  ">All Volunteer Need Post</h2>
        <p className="mt-4">
          We are seeking dedicated volunteers who are enthusiastic, reliable,
          and eager to contribute their time and skills. Whether you're a
          seasoned volunteer or new to the world of giving back, there's a place
          for you in our team!
        </p>
      </div>
      <div className="mt-12">
        <nav className="bg-base-200 h-16 flex items-center justify-around">
          <div>
            <form onSubmit={handileClickSubmite}>
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
            <button onClick={() => handileClickChenges('grid')}>
              <IoGridOutline className="text-3xl" />
            </button>

            <button onClick={() => handileClickChenges('tabile')}>
              <FaTableList className="text-3xl" />
            </button>
          </div>
        </nav>
      </div>

      <div>
        {cheangeLayout ? (
          <>
            <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {volunteers.map(volue => (
                <AllVoluntterCart
                  key={volue._id}
                  volue={volue}
                ></AllVoluntterCart>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-xl font-bold">Category</th>
                    <th className="text-xl font-bold">Title</th>
                    <th className="text-xl font-bold">Deadline</th>
                    <th></th>
                  </tr>
                </thead>

                {volunteerstabile.map((tables, index) => (
                  <tbody key={tables._id}>
                    {/* row 1 */}
                    <tr>
                      <th>
                        <label>
                          <p>{index + 1}</p>
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={tables?.thumbnail} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{tables?.category}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h2>{tables?.title}</h2>
                      </td>
                      <td>{tables?.startDate}</td>
                      <th>
                        <Link to={`/allVolunterDeatils/${tables?._id}`}>
                          <button className="btn bg-[#f26837] text-white mt-6">
                            View Details
                          </button>
                        </Link>
                      </th>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Volunteer;
