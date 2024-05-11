import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllVoluntterCart from './AllVoluntterCart';

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/allVolunteers').then(res => {
      setVolunteers(res.data);
    });
  }, []);
  return (
    <div className="my-[120px]">
      <div className="lg:w-2/3 text-center mx-auto">
        <h2 className="text-3xl font-bold  ">All Volunteer Need Post</h2>
        <p className="mt-4">
          We are seeking dedicated volunteers who are enthusiastic, reliable,
          and eager to contribute their time and skills. Whether you're a
          seasoned volunteer or new to the world of giving back, there's a place
          for you in our team!
        </p>
      </div>
      <div className="mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {volunteers.map(volue => (
          <AllVoluntterCart key={volue._id} volue={volue}></AllVoluntterCart>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
