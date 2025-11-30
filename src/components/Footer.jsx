import { useState } from "react"
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF} from "react-icons/fa"
import IconPhone from "../assets/images/icon-phone.svg";
import IconeEmail from "../assets/images/icon-email.svg";
import FooterLogo from "../assets/images/logo.svg"
function Footer() {
    const [contact, setContact] = useState([
      {
        icon: IconPhone,
        text: "Phone: +20 010 020 0340",
      },
      {
        icon: IconeEmail,
        text: "example@fylo.com",
      },
    ]);

    const [links, setLinks] = useState(["About Us", "Contact Us", "Jobs", "Terms", "Press", "Privacy", "Blog"]);

    const [social, setSocial] = useState(["facebook", "twitter", "instagram"]);

    return (
      <>
        <section className="bg-[#0c1524] pt-[320px] md:[200px] pb-[100px] text-white">
          <div className="container">
            <Link to="/">
              <img
                src={FooterLogo}
                alt="logo-img"
                className="w-[175px] h-[66px] object-contain"
              />
            </Link>

            <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
              <div className="flex items-start gap-[15px] w-[340px] max-w-full">
                <img
                  src="/src/assets/images/icon-location.svg"
                  alt="location-img"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p className="font-normal text-sm tracking-[0.8]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  ipsum explicabo et nobis dolore laudantium ex quam tempore
                  maiores nulla?
                </p>
              </div>
              <div>
                {contact.map((item) => {
                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
                    >
                      <img
                        src={item.icon}
                        alt="icon"
                        className="w-[18px] h-[18px] object-contain"
                      />
                      <p>{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                {links.map((link) => {
                  return (
                    <li key={link}>
                      <Link
                        to={link.toLowerCase()}
                        className=" hover:text-[#67dbda] transition-all duration-200 text-base"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex gap-[15px] max-w-full justify-center md:w-auto">
                {social.map((item) => {
                  return (
                    <li key={item}>
                      <Link to={item} className="group">
                        <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%]">
                          {item === "facebook" ? (
                            <FaFacebookF className="  group-hover:text-[#67dbda] transition-all duration-200" />
                          ) : item === "twitter" ? (
                            <FaTwitter className="  group-hover:text-[#67dbda] transition-all duration-200" />
                          ) : (
                            <FaInstagram className="  group-hover:text-[#67dbda] transition-all duration-200" />
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
}

export default Footer
