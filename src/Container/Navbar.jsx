import React from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import images from '../assets/Image';

const NavLinks = [
  {
    id: 1,
    name: "Home",
    links: "/#",
  },
  {
    id: 2,
    name: "About",
    links: "/#",
  },
  {
    id: 3,
    name: "Contact",
    links: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    links: "/#",
  },
  {
    id: 2,
    name: "Fruits",
    links: "/#",
  },
  {
    id: 3,
    name: "Grains",
    links: "/#",
  },
];

const Navbar = ({HandlePopup }) => {
  return (
    <>
      <div data className='bg-white shadow-sm'>
        <div className='container flex justify-between py-4 sm:py-3'>
          <div className='font-bold text-3xl'>Logo</div>
          <div>
            <ul className='flex items-center gap-10'>
              {NavLinks.map(({ id, name, links }) => (
                <li key={id}>
                  <a
                    href={links}
                    className='inline-block hover:text-primary text-xl font-semibold'
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* Dropdown and links */}
              <li className='cursor-pointer group relative'>
                <a
                  href="/#"
                  className='inline-block hover:text-primary text-xl font-semibold'
                >
                  <div className='flex items-center gap-[2px] py-2'>
                    Dropdown
                    <span>
                      <FaCaretDown className='group-hover:rotate-180 duration-300' />
                    </span>
                  </div>
                </a>
                <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white px-4 py-4 text-black shadow-md'>
                  <ul>
                    {DropdownLinks.map(({ id, name, links }) => (
                      <li key={id}>
                        <a
                          href={links}
                          className='text-xl inline-block w-full rounded-md hover:bg-primary/20 px-2 py-2'
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* Login button section */}
              <li>
                <button
                onClick={HandlePopup}
                className='flex justify-center 
                citems-center gap-2 bg-secondary 
                text-xl h-[40px] text-white px-5 
                py-2 hover:scale-105 duration-300'
                >
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
