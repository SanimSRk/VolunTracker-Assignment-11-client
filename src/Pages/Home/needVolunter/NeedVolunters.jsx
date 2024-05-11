import axios from 'axios';
import { useEffect, useState } from 'react';
import NeedCarts from './NeedCarts';

const NeedVolunters = () => {
  const [needPost, setNeedPost] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/volunteers').then(res => {
      setNeedPost(res.data.slice(0, 6));
    });
  }, []);

  return (
    <div className="my-[120px]">
      <div className="md:w-2/3 w-full lg:w-2/3 mx-auto text-center">
        <h2 className="text-4xl font-bold"> Volunteer Needs</h2>
        <p className="mt-3">
          Are you ready to make a difference in your community? Join our team of
          dedicated volunteers and be a part of positive change across various
          sectors!
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-4">
        {needPost.map(need => (
          <NeedCarts key={need._id} need={need}></NeedCarts>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunters;
