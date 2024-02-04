import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom';
import { logo } from './../assets';
import { menu, close } from './../assets';
import { navLinks } from './../constants/index';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScrollWindow = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScrollWindow)
  }, [])

  return (
    <nav className={`w-full flex items-center fixed top-0 ${styles.paddingX} py-5 z-20 ${isScrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-1"
          to="/"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
          <p className="md:text-xl sm:text-lg font-bold cursor-pointer">Sara Atiyabi &nbsp; | &nbsp;<span>Web Developer</span></p>
        </Link>

        <ul className="list-none sm:flex hidden flex-row md:gap-10 sm:gap-5 items-center">
          {
            navLinks.map((link) => (
              <li key={link.id}
                onClick={() => setActive(link.title)}
                className={`
                ${active === link.title ? "text-white"
                    : "text-secondary text-[18px] font-[500]"}
                   hover:text-[white] cursor-pointer
                `}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>

        <div className="sm:hidden flex justify-center items-center w-10 h-10 relative">
          <img src={toggle ? close : menu} alt='menu' className="cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${toggle ? "flex" : "hidden"} absolute black-gradient min-w-[140px] top-10 right-0 rounded-xl p-5 z-10`}>
            <ul className="list-none flex flex-col gap-5 items-start justify-end">
              {
                navLinks.map((link) => (
                  <li key={link.id}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                    className={`
                ${active === link.title ? "text-white"
                        : "text-secondary"}
                   hover:text-[white] cursor-pointer
                `}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar