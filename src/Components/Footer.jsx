import React from "react";
import "../Styles/footer.scss";

function Footer() {
    return (
        <div className="Footer">
            <div className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="d-flex justify-content-around">
                        <div className="d-flex flex-column align-items-center">
                            <h3 className="">Get in Touch</h3>
                            <p>
                                Don’t miss any updates from us Join us on our Email!
                  </p>
                            <form className="">
                                <input
                                    type="text"
                                    name="EMAIL"
                                    className=""
                                    placeholder="Email"
                                />
                                <button className="btn ml-3 btn_get btn_get_two" type="submit">
                                    Subscribe
                    </button>
                            </form>
                        </div>
                        <div className="">
                            <h3 className="f-title f_600 f_size_20">
                                Useful Links
                  </h3>
                            <ul className="list-unstyled d-flex flex-column text-dark">
                                <li class="d-flex align-items-center">
                                 <i class="fas fa-link"></i><a href="/#" ><span className ="link_li">Home</span></a>
                                </li>
                                <li class="d-flex align-items-center">
                                <i class="fas fa-link"></i><a href="/#"><span className ="link_li">Your Blogs </span></a>
                                </li>
                                <li class="d-flex align-items-center">
                                <i class="fas fa-link"></i><a href="/#"><span className ="link_li">About Us</span></a>
                                </li>
                                <li class="d-flex align-items-center">
                                <i class="fas fa-link"></i><a href="/#"><span className ="link_li">Contact Us</span></a>
                                </li>
                                <li class="d-flex align-items-center">
                                <i class="fas fa-link"></i><a href="/#"><span className ="link_li">Term &amp; conditions</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h3 className="f-title f_600 f_size_20">Social</h3>
                            <div className="f_social_icon">
                                {/* eslint-disable-next-line */}
                                <a href="/#" className="fab fa-github"></a>
                                {/* eslint-disable-next-line */}
                                <a href="/#" className="fab fa-twitter"></a>
                                {/* eslint-disable-next-line */}
                                <a href="/#" className="fab fa-linkedin"></a>
                                {/* eslint-disable-next-line */}
                                <a href="/#" className="fab fa-instagram"></a>
                            </div>
                        </div>
                    </div>
                
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="d-flex flex-column align-items-center justify-content-center ">
                    <p className=" mb-0 f_400">
                        ©{new Date().getFullYear()} All rights reserved.
                    </p>
                    <p>
                        Made with <i className="fas fa-heart"></i> By
                        <a
                            style={{ color: '#5e2ced' }}
                            href="https://pranav2012.github.io"
                            target="_blank"
                            rel="noreferrer noopener">
                           {"  "}@Pranav2012{"  "}
                        </a>
                            &{"  "}
                            <a
                            style={{ color: '#5e2ced' }}
                            href="https://bhavyakalra-13.github.io/IntroWebDesign/"
                            target="_blank"
                            rel="noreferrer noopener">
                            @BhavyaKalra
                        </a>
                    </p>
                </div>
            </div>
        </div>
      </div >
  );
}

export default Footer;
