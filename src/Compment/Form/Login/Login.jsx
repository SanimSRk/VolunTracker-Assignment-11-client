import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
  const { singUsers, handileGoogleLogin } = useContext(AuthContext);
  const [errorMassage, setErrors] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.title = 'Login';
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const { email, password } = data;

    singUsers(email, password)
      .then(res => {
        console.log(res.user);
        if (res.user) {
          Swal.fire({
            title: 'Good job!',
            text: 'SuccessFully Login!',
            icon: 'success',
          });
          axios
            .post(
              'https://bolunteer-server-site.vercel.app/jwt',
              { email: res?.user?.email },
              { withCredentials: true }
            )
            .then(res => {
              console.log(res.data);
            });
        }
        navigate(location.state || '/');
      })
      .catch(error => {
        console.log(error);
        if (error) {
          setErrors('Invalid email or password. Please try again.');
        }
      });
  };
  const handileClickGoogle = () => {
    handileGoogleLogin()
      .then(res => {
        if (res.user) {
          Swal.fire({
            title: 'Good job!',
            text: 'SuccessFully google sing!',
            icon: 'success',
          });
          axios
            .post(
              'https://bolunteer-server-site.vercel.app/jwt',
              { email: res?.user?.email },
              { withCredentials: true }
            )
            .then(res => {
              console.log(res.data);
            });
        }
        navigate(location.state || '/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content w-full md:w-1/2 lg:w-1/3 flex-col lg:flex-row-reverse">
          <div className="card shrink-0 border border-[#f26837]  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <h2 className="text-center text-2xl font-bold text-[#f26837]">
                Login Now
              </h2>
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
                <p className="text-red-500 font-semibold">{errorMassage}</p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-[#f26837] btn text-white"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="mt-3 text-center">
                Dont have an account ?
                <Link to={'/regist'}>
                  <span className="font-bold text-blue-500"> Register Now</span>
                </Link>
              </p>
              <div className="flex items-center gap-4">
                <div className="border-b w-full"></div>
                <div>or</div>
                <div className="border-b w-full"></div>
              </div>
            </form>
            <div className="grid justify-center ">
              <button
                onClick={handileClickGoogle}
                className="btn p-0 rounded-full mb-4"
              >
                <FcGoogle className="text-5xl  "></FcGoogle>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
