import { BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className=" p-10 bg-base-200">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">VolunTracker</h2>
        <div className="border-y py-4 flex gap-5 justify-center">
          <FaFacebook className="text-3xl"></FaFacebook>
          <BsGithub className="text-3xl"></BsGithub>
          <BsTwitterX className="text-3xl"></BsTwitterX>
          <BsInstagram className="text-3xl"></BsInstagram>
        </div>
      </div>
      <footer className="footer text-base-content mt-6">
        <aside>
          <img className="w-16" src="/logo-removebg-preview.png" alt="" />
          <p>
            VolunTracker
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Volunteer Recruitment</a>
          <a className="link link-hover">Volunteer Recognition Programs</a>
          <a className="link link-hover">
            Volunteer Advocacy and Policy Support
          </a>
          <a className="link link-hover">Volunteer Research and Innovation</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <footer className="footer footer-center p-4 mt-12 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by AVolunTracker</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
