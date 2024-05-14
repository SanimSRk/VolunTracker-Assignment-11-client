import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../AuthContext/AuthProvider';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

const Updates = () => {
  const usloaders = useLoaderData();
  const [startDate, setStartDate] = useState(new Date(usloaders.startDate));
  useEffect(() => {
    document.title = 'Update';
  }, []);
  const {
    thumbnail,
    title,
    description,
    category,
    location,
    neededNumber,
    email,
    fullName,

    _id,
  } = usloaders;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    const { thumbnail, title, description, category, location, neededNumber } =
      data;

    const volunteers = {
      thumbnail,
      title,
      description,
      category,
      location,
      neededNumber: parseInt(neededNumber),
      email,
      fullName,
      startDate,
    };

    axios
      .put(
        `https://bolunteer-server-site.vercel.app/updatess/${_id}`,
        volunteers,
        {
          withCredentials: true,
        }
      )
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            title: 'Good job!',
            text: 'Successfully updates!',
            icon: 'success',
          });
        }
      });
  };
  return (
    <div className="md:w-2/3 w-full lg:w-2/3 mx-auto my-[100px] border-dotted border border-[#f26837] px-8 shadow-lg py-[72px] md:px-[50px] lg:px-[100px] rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-[#f26837]">Add</span> Volunteer
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Post Title</span>
            </label>
            <input
              type="text"
              placeholder=" Post Title"
              defaultValue={title}
              className="input input-bordered border-[#f26837]"
              required
              {...register('title', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <DatePicker
              className="input input-bordered border-[#f26837] w-full"
              showIcon
              selected={startDate}
              onChange={date => setStartDate(date)}
              icon="fa fa-calendar"
              // {...register('deadline', { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-4 my-3">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Description"
              className="input input-bordered border-[#f26837]"
              required
              defaultValue={description}
              {...register('description', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <input
              type="text"
              placeholder="Enter Category"
              className="input input-bordered border-[#f26837]"
              required
              defaultValue={category}
              {...register('category', { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              placeholder="Enter Location"
              className="input input-bordered border-[#f26837]"
              required
              defaultValue={location}
              {...register('location', { required: true })}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">No. of volunteers</span>
            </label>
            <input
              type="text"
              placeholder="Enter No. of volunteers needed"
              className="input input-bordered border-[#f26837]"
              required
              defaultValue={neededNumber}
              {...register('neededNumber', { required: true })}
            />
          </div>
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text">Thumbnail</span>
          </label>
          <input
            type="text"
            placeholder="Enter Thumbnail"
            className="input input-bordered border-[#f26837]"
            required
            defaultValue={thumbnail}
            {...register('thumbnail', { required: true })}
          />
        </div>
        <input
          className="text-white btn w-full mt-6 bg-[#f26837]"
          type="submit"
          value="Add Volunteer"
        />
      </form>
    </div>
  );
};

export default Updates;
