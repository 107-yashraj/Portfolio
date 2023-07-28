import React from 'react';
import {Link} from 'react-scroll';
import {logo} from "../../assets/index";
import { navLinksdata } from '../../constants';
const Navbar = () => {
  return (
    <div className=' w-full h-24 flex  items-center justify-between font-titleFont border-b-[1px] border-b-gray-600'>
         <div className=' flex items-center justify-center gap-2 '>
        <img src={logo} alt="logo" className=' w-[70px] h-[65px] rounded-[50%] border-[2px] ' />
        <h1  >Void</h1>
      </div>

      <div className=' ' >
    <ul className='md:flex items-center gap-8 lg:gap-10 hidden '>
    {
    navLinksdata.map(({ _id, title, link }) => (
        <li  className="text-base w-max font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor  duration-300 after: "key={_id}>
           <Link activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} > {title}</Link>

                
        </li>
    )
    ) // return hori hai value isiliye {} use nhi hue yaha par


}
    </ul>

      </div>
    </div>
  )
}

export default Navbar
