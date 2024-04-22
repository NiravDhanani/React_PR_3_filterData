import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row flex-wrap">
            <div className="col-xl-3 col-lg-3  col-md-3 mb-30">
              <h5 className="text-white mb-5">Leo Nullam Vitae</h5>
              <div className="single-cta">
                <div className="cta-text d-flex">
                  <FaLocationDot className="icon mt-1 text-white" />
                  <span className="px-3">
                    1010 Avenue, sw 54321, chandigarh
                  </span>
                </div>
              </div>

              <div className="d-flex ">
                <div className="single-ctab">
                  <div className="cta-text d-flex ">
                    <IoMdCall className="icon mt-1  text-white" />
                    <span className="px-3">+00 (123) 456 7890</span>
                  </div>
                </div>
              </div>

              <div className="single-cta">
                <div className="cta-text d-flex ">
                  <MdOutlineEmail className="icon mt-1 text-white" />
                  <span className="px-3">info@domain.com</span>
                </div>
              </div>

              <div className="footer-social-icon d-flex">
                <a href="#" className="iconA">
                  {" "}
                  <FaFacebookF className="iconB" />{" "}
                </a>
                <a href="#" className="iconA">
                  {" "}
                  <FaLinkedinIn className="iconB" />{" "}
                </a>
                <a href="#" className="iconA">
                  {" "}
                  <FaTwitter className="iconB" />{" "}
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-3 mb-30">
              <h5 className="text-white mb-5">Leo Nullam Vitae</h5>
              <ul>
                  <li className="leo">
                    <a href="#" className="link">Ullamcorper erat id suscipit</a>
                  </li>
                  <li className="leo">
                    <a href="#" className="link">Felis quam id dui donec</a>
                  </li>
                  <li className="leo">
                    <a href="#" className="link">Posuere nulla id congue</a>
                  </li>
                  <li className="leo">
                    <a href="#" className="link">Bibendum nulla vestibulum</a>
                  </li>
                  <li>
                    <a href="#" className="link">Urna ac ipsum iaculis</a>
                  </li>
                </ul>
              
            </div>

            <div className="col-xl-3  col-lg-3  col-md-3 mb-30">
              <h5 className="text-white mb-5">Leo Nullam Vitae</h5>
              <ul>
                  <li className="leo">
                    <a href="#" className="link">Ullamcorper erat id suscipit</a>
                  </li>
                  <li className="leo">
                    <a href="#" className="link">Felis quam id dui donec</a>
                  </li>
                  <li className="leo">
                    <a href="#" className="link">Posuere nulla id congue</a>
                  </li>
                  <li className="leo">
                    <a href="#" className="link">Bibendum nulla vestibulum</a>
                  </li>
                  <li>
                    <a href="#" className="link">Urna ac ipsum iaculis</a>
                  </li>
                </ul>
              
            </div>

            <div className="col-xl-3 col-lg-3  col-md-3 mb-30">
              <h5 className="text-white mb-5">Fusce Euismod Urna</h5>
              
              <p className="text-white">
              Non fringilla laoreet phasellus volutpat arcu eget posuere euismod arcu purus.
              </p>
              <div className="form">
                <input type="text" placeholder="Name"  className="mb-2"/>
                <input type="text" placeholder="Email" className="mb-2" />
              </div>
                <button className="submitbtn">Submit</button>
            </div>
          </div>
        </div>
      </div>


      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright © 2018, All Right Reserved{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
