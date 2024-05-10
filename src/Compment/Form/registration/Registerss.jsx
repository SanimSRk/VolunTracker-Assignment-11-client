import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registerss = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const { fullName, email, password, photo } = data;
    console.log(fullName, email, password, photo);
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content lg:w-[40%] flex-col lg:flex-row-reverse">
          <div className="card shrink-0 border border-[#f26837]  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <h2 className="text-center text-2xl font-bold text-[#f26837]">
                Registeration Now
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name "
                  className="input input-bordered border-[#f26837]"
                  required
                  {...register('fullName', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered border-[#f26837]"
                  required
                  {...register('email', { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo url"
                  className="input input-bordered border-[#f26837]"
                  required
                  {...register('photo', { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered border-[#f26837]"
                  required
                  {...register('password', { required: true })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-[#f26837] btn text-white"
                  type="submit"
                  value="Register Now"
                />
              </div>
              <p className="mt-3 text-center">
                Dont have an account ?
                <span className="font-bold text-blue-500">
                  <Link to={'/login'}>Login Now</Link>{' '}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerss;
