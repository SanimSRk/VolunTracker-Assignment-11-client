import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import Swal from 'sweetalert2';

const Registerss = () => {
  const { createUser, logOutUsers, updateUserProfile } =
    useContext(AuthContext);
  const [error, setErrors] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const { fullName, email, password, photo } = data;

    console.log(fullName, email, password, photo);
    if (password.length < 6) {
      setErrors('Password should be at least 6 characters');
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrors('Password does not have at least one uppercase letter');
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrors('Password does not have at least one lowercase letter');
      return;
    } else {
      setErrors(null);
    }

    createUser(email, password)
      .then(res => {
        console.log(res.user);
        if (res.user) {
          Swal.fire({
            title: 'Good job!',
            text: 'SuccessFully registration!',
            icon: 'success',
          });

          logOutUsers();
        }
        updateUserProfile(fullName, photo).then(() => {
          navigate(location.state || '/login');
        });
      })
      .catch(error => {
        console.log(error);
      });
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
                <p className="text-center font-semibold text-red-500">
                  {error}
                </p>
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
