import React from 'react';
import { CgInstagram } from 'react-icons/cg';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Shah Dhairya H.</h4>
      <h4>Copyright &copy; 2025 SDH</h4>
      <div className='footerLinks'>
        <a href="https://github.com/shahdhairya12" target='_blank'><FaGithub/></a>
        {/* <a href="https://www.linkedin.com/in/" target='_blank'><FaLinkedin/></a> */}
        <a href='mailTo:con.sdh@Outlook.in' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/Shahdhairyah" target='_blank'><CgInstagram/></a>
        <a href="https://leetcode.com/U/SDH12/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}
export default Footer
