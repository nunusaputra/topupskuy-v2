import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaCircleXmark, FaXmark } from "react-icons/fa6";
import logo from "../assets/images/lg-2.png";
import { IoSearchCircle } from "react-icons/io5";
import { MdOutlineLogin, MdShoppingCart } from "react-icons/md";
import { SiBitcoin } from "react-icons/si";
import { LuHistory } from "react-icons/lu";
import { AiFillCalculator } from "react-icons/ai";
import InputSearch from "./element/InputSearch";

const navigation = [
  {
    name: "Topup",
    href: "/",
    current: true,
    icon: (
      <SiBitcoin className="text-xl text-white group-hover:text-purple-200" />
    ),
  },
  {
    name: "Cek Transaction",
    href: "/transaction",
    current: false,
    icon: (
      <MdShoppingCart className="text-xl text-white group-hover:text-purple-200" />
    ),
  },
  {
    name: "History",
    href: "/history",
    current: false,
    icon: (
      <LuHistory className="text-xl text-white group-hover:text-purple-200" />
    ),
  },
  {
    name: "Payment",
    href: "/payment",
    current: false,
    icon: (
      <AiFillCalculator className="text-xl text-white group-hover:text-purple-200" />
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Disclosure
        as="nav"
        className={`sticky top-0 z-100 py-2 w-full transition-all duration-300 overflow-hidden
            ${
              scrolling
                ? "bg-slate-600/30 backdrop-blur-2xl"
                : "bg-slate-500/20 backdrop-blur-xl"
            }
        }`}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex gap-4 items-center">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <FaBars
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <FaXmark
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            {/* Logo */}
            <div className="flex lg:gap-4 flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div
                className={`flex shrink-0 items-center w-22 h-10 md:w-30 md:h-25 lg:w-40 lg:h-25 my-2 rounded-md lg:rounded-xl transition-all duration-300 overflow-hidden ${
                  scrolling ? "bg-transparent" : "bg-white"
                }`}
              >
                <img
                  src={logo}
                  alt=""
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>

              {/* Input */}
              <div className="w-full self-center mx-auto hidden md:ml-6 md:block">
                <div className="flex flex-col gap-2 w-full">
                  <div className="w-full rounded-lg">
                    <InputSearch />
                  </div>

                  {/* Menu Bar */}
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="w-full">
                      <div className="flex justify-between">
                        <div className="flex md:space-x-4 lg:space-x-8">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              aria-current={item.current ? "page" : undefined}
                              className={classNames(
                                "relative flex items-center gap-2 py-2 text-sm font-medium group hover:cursor-pointer",
                                item.current ? "text-white" : "text-white"
                              )}
                            >
                              <div>{item.icon}</div>
                              <p className="group-hover:text-purple-200">
                                {item.name}
                              </p>
                              {/* Underline */}
                              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-purple-600"></span>
                            </a>
                          ))}
                        </div>

                        {/* Login Section */}
                        <div className="flex gap-2 items-center group hover:cursor-pointer relative">
                          <MdOutlineLogin className="text-white text-xl group-hover:text-purple-200" />
                          <h1 className="text-white font-semibold group-hover:text-purple-200">
                            Login
                          </h1>
                          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:bg-purple-600"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="md:hidden" onClick={() => setShow(!show)}>
              {show ? (
                <FaCircleXmark className="text-white/70 text-3xl" />
              ) : (
                <IoSearchCircle className="text-white/70 text-4xl" />
              )}
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-base font-medium flex items-center gap-2"
                )}
              >
                <div>{item.icon}</div>
                <p className="group-hover:text-purple-200">{item.name}</p>
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {show && (
        <Disclosure
          as="nav"
          className={`sticky top-0 z-100 py-2 w-full transition-all duration-300 overflow-hidden
            ${
              scrolling
                ? "bg-slate-600/30 backdrop-blur-2xl"
                : "bg-slate-500/20 backdrop-blur-xl"
            }
        }`}
        >
          <div className="w-full rounded-lg px-4 py-1 sm:px-8 sm:py-2">
            <InputSearch />
          </div>
        </Disclosure>
      )}
    </>
  );
};

export default Navbar;
