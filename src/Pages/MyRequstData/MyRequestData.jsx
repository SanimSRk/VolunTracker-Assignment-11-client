import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyRequestData = () => {
  const [requestDt, setRequestDt] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myrequstData?email=${user.email}`)
      .then(res => {
        setRequestDt(res.data);
      });
  }, []);

  const handileClickDeletes = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancellation it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/myrequstData/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: 'Cancellation!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
          const deletePost = requestDt.filter(prod => prod._id !== id);
          setRequestDt(deletePost);
        });
      }
    });
  };

  return (
    <div className="mb-[120px] mt-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">My Volunteer Request</h2>
      </div>

      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-xl font-bold">
                <th></th>
                <th>Category</th>
                <th>Needed Number</th>
                <th>Status</th>
                <th>Deadline</th>
              </tr>
            </thead>
            {requestDt.map((pro, index) => (
              <tbody key={index}>
                {/* row 1 */}
                <tr className="bg-base-200 ">
                  <th className="py-6">{index + 1}</th>
                  <td>{pro?.category}</td>
                  <td>{pro?.neededNumber} person</td>
                  <td className="btn rounded-3xl bg-[#f26837] text-white">
                    {pro?.status}
                  </td>
                  <td>{pro?.startDate}</td>

                  <div className="flex gap-6">
                    <button
                      onClick={() => handileClickDeletes(pro._id)}
                      className="btn bg-[#f26837] text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyRequestData;
