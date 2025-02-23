import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function Navbar({ sidebar, setSidebar }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveMenu("home");
    } else if (path === "/treatment") {
      setActiveMenu("treatment");
    } else if (path === "/schedule") {
      setActiveMenu("schedule");
    } else if (path === "/contact") {
      setActiveMenu("contact");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className={`flex justify-between items-center border-b border-[#70707081] md:border-0 lg:items-end px-5 py-3 md:py-7 fixed top-0 left-0 w-full z-10 ${
        isScrolled ? "bg-white" : "lg:bg-transparent bg-white"
      }`}
    >
      <div>
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="logo"
          height={220}
          width={220}
          className="cursor-pointer"
        />
      </div>
      <div>
        <div className="gap-20 pr-20 hidden lg:flex">
          <Link
            onClick={() => {
              setActiveMenu("home");
            }}
            className={`${activeMenu === "home" && "underline"}`}
            to={"/"}
          >
            ホーム
          </Link>
          <Link
            onClick={() => {
              setActiveMenu("treatment");
            }}
            className={`${activeMenu === "treatment" && "underline"}`}
            to={"/treatment"}
          >
            施術メニュー
          </Link>
          <Link
            onClick={() => {
              setActiveMenu("schedule");
            }}
            className={`${activeMenu === "schedule" && "underline"}`}
            to={"/schedule"}
          >
            出勤予定表
          </Link>
          <Link
            onClick={() => {
              setActiveMenu("contact");
            }}
            className={`${activeMenu === "contact" && "underline"}`}
            to={"/contact"}
          >
            お問合せ
          </Link>
        </div>
        <div className="lg:hidden">
          {sidebar ? (
            <RxCross1
              onClick={() => {
                setSidebar(!sidebar);
              }}
              className="text-[25px]"
            />
          ) : (
            <CiMenuBurger
              onClick={() => {
                setSidebar(!sidebar);
              }}
              className="text-[25px]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
