import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllVoluntterCart from './AllVoluntterCart';

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    document.title = 'Volunteer-Needs';
  }, []);
  useEffect(() => {
    axios.get('http://localhost:5000/allVolunteers').then(res => {
      setVolunteers(res.data);
    });
  }, []);
  const handileClickSubmite = e => {
    e.preventDefault();
    const titles = e.target.title.value.toLowerCase();

    axios
      .get(`http://localhost:5000/volunteers`)

      .then(res => {
        const result = res.data.filter(use => {
          const data = use.title.toLowerCase().includes(titles);
          return data;
        });

        setVolunteers(result);
      });
  };

  return (
    <div className="mb-[120px] ">
      <div className="bg-[url(/pexels-shvetsa-5029859.jpg)] lg:h-[580px] md:h-[420px] h-[320px] bg-cover bg-center rounded-lg items-center justify-center grid w-full">
        <div className="w-full">
          <form onSubmit={handileClickSubmite}>
            <div className="input-bordered w-full rounded-lg flex border-2 border-[#f26837] ">
              <input
                type="text"
                name="title"
                placeholder="Type here"
                className=" rounded-r-none lg:w-[400px] input "
              />
              <input
                className="btn  text-white bg-[#f26837] rounded-l-none text-xl"
                type="submit"
                value=" Search"
              />
            </div>
          </form>
        </div>
      </div>
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
