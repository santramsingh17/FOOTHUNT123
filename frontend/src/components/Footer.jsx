import React from "react";
import { FaInstagram,FaTelegram,FaWhatsapp,FaGithub } from "react-icons/fa";
import "../styles/footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">FOODHUNT<br/><br/> <p className="text-sm font-thin">For Further Questions, Please Call(:-9468503427)</p></div>
          <div className="right">
            <p> Jaipur, Rajasthan</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
            <br/><p className="text-sm font-thin">Tuesday-Sunday</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Santram singh</p>
          </div>
          <div>
          <div className="modallinks">
            <a href="https://www.instagram.com/santram_gurjar17/" id="instagram-icon" className="icon" >
            <i><FaInstagram/></i>
            </a>
            <a href="https://t.me/santramsingh" id="telegram-icon" className="icon" >
                <FaTelegram/>
            </a>
            <a href="https://wa.me/919468503427?text=Hi%santram" id="whatsapp-icon" className="icon" >
                <FaWhatsapp/>
            </a>
            <a href="https://github.com/santramsingh17" id="github-icon" className="icon" >
                <FaGithub/>
            </a>

        </div>
          </div>
          <div className="right">
            <p>All Rights Reserved by FoodHunt  </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;