import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableLayout = () => {
  const [volunteerstable, setVolunteers] = useState([]);
  useEffect(() => {
    document.title = 'Volunteer-Needs';
  }, []);
  useEffect(() => {
    axios
      .get('https://bolunteer-server-site.vercel.app/allVolunteers')
      .then(res => {
        setVolunteers(res.data);
      });
  }, []);
  // const handileClickSubmite = e => {
  //   e.preventDefault();
  //   const titles = e.target.title.value.toLowerCase();

  //   axios
  //     .get(`https://bolunteer-server-site.vercel.app/volunteers`)

  //     .then(res => {
  //       const result = res.data.filter(use => {
  //         const data = use.title.toLowerCase().includes(titles);
  //         return data;
  //       });

  //       setVolunteers(result);
  //     });
  // };
  return (
    <div>
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

          {volunteerstable.map((tables, index) => (
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
    </div>
  );
};

export default TableLayout;
