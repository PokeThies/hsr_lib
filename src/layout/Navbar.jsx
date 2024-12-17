import { useState } from "react";
import HSR_Logo_Animated from "/imgs/HSR_Logo_Animated.gif";
import Arrow from "../../public/imgs/Arrow.png";
import House from "../../public/imgs/House_Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", logo: "" },
    { title: "Wiki", logo: "" },
    { title: "Characters", logo: "" },
    { title: "Light Cone", logo: "" },
    { title: "Tools", logo: "" },
    { title: "Interactive Map", logo: "" },
    { title: "Guide", logo: "" },
  ];

  return (
    <div
      className={`${
        open ? "w-60" : "w-20"
      } bg-dark-purple h-screen p-2 pt-8 relative duration-500`}
    >
      {/* Animated Logo Icon */}
      <div className="flex gap-x-4 items-center">
        <img src={HSR_Logo_Animated} className="cursor-pointer" />
      </div>
      <menu className="pt-6">
        {/* Arrow icon */}
        <img
          src={Arrow}
          className={`absolute cursor-pointer -right-1 mt-4 w-5 mx-2 
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 items-center gap-x-2  
            ${Menu.gap ? "mt-9" : "mt-2"} `}
          >
            <img src={`${Menu.logo}`} />
            <span className={`${!open && "hidden"} origin-left duration-500`}>
              <p className="NavText">{Menu.title}</p>
            </span>
          </li>
        ))}
      </menu>
    </div>
  );
};

export default Navbar;
