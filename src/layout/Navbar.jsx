import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Chart_fill" },
    { title: "Wiki", src: "Chat" },
    { title: "Tools", src: "User" },
    { title: "Interactive Map ", src: "Calendar" },
    { title: "Guide", src: "Search" },
   
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        {/* Arrow icon */}
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className= "cursor-pointer"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Placeholder
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
