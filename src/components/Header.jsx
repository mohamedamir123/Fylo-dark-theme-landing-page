import { useState,useEffect,useRef } from "react"
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg"

function Header() {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                headerRef.current.style.background = "#0c1524";
                headerRef.current.style.padding = "20px 10px";
            }
            else{
                headerRef.current.style.background = "transparent";
                headerRef.current.style.padding = "60px 30px";
            }
        })
    })
    const headerRef = useRef() 
    const [links, setLinks] = useState(["Features", "Team", "Sign in"])
    return (
        <>
            <header ref={headerRef} className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200">
                <div className="container flex items-center justify-between  sm:gap-0 flex-col sm:flex-row ">
                    <Link to="/">
                        <img src= {Logo} alt="logo-img" className="w-[175px] h-[66px] object-contain"/>
                    </Link>
                    
                    <nav>
                        <ul className="flex items-center gap-[50px] text-sm sm:text-base">
                            {links.map((link) => (
                                <li key={link}>
                                    <Link
                                    to={`/${link.toLowerCase()}`}
                                    className={`${link} opacity-[0.9] hover:opacity-[1] text-white font-normal hover:underline duration-200 transition-all`}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    </div>
            </header>
        </>
    )
}

export default Header
