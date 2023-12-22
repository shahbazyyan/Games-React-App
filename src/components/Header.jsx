import { useContext, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMoon, HiSun } from "react-icons/hi";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
   setTheme(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"); 
  }, [theme]);

  return (
    <>
      <header className="flex items-center p-2">
        <img src={logo} alt="logo" width={62} height={62} />
        <div className="flex bg-slate-200 p-2 w-full items-center mx-6 rounded-full">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none px-2"
          />
        </div>
        <div>
          {theme === "light" ? (
            <HiMoon
              className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
          ) : (
            <HiSun
              className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
