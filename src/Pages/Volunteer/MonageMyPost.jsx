import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MonageMyPost = () => {
  const [myPost, setMyPost] = useState([]);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/mangesPost?email=${user.email}`, {
        withCredentials: true,
      })
      .then(res => {
        setMyPost(res.data);
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
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/mangesPost/${id}`, {
            withCredentials: true,
          })
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            }
            const deletePost = myPost.filter(prod => prod._id !== id);
            setMyPost(deletePost);
          });
      }
    });
  };

  return (
    <div className="mb-[120px] mt-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">My Need Volunteer Post</h2>
      </div>
      {myPost.length == 0 ? (
        <>
          <div className="md:w-2/3 text-center mx-auto h-[70vh] lg:w-2/3 grid justify-center items-center">
            <p className="text-2xl font-bold">
              Your interest in volunteering is appreciated! Currently, we don't
              have any matching opportunities, but don't lose heart. Keep an eye
              out for future openings
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="mt-12">
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr className="text-xl font-bold">
                    <th></th>
                    <th>Category</th>
                    <th>Needed Number</th>
                    <th>Location</th>
                    <th>Deadline</th>
                  </tr>
                </thead>
                {myPost.map((pro, index) => (
                  <tbody key={index}>
                    {/* row 1 */}
                    <tr className="bg-base-200 ">
                      <th>{index + 1}</th>
                      <td>{pro?.category}</td>
                      <td>{pro?.neededNumber} person</td>
                      <td>{pro?.location}</td>
                      <td>{pro?.startDate}</td>

                      <div className="flex gap-6">
                        <Link to={`/updates/${pro._id}`}>
                          {' '}
                          <button className="btn bg-[#f26837] text-white">
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handileClickDeletes(pro._id)}
                          className="btn bg-[#f26837] text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MonageMyPost;
