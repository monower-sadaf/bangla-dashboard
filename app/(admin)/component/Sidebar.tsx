"use client";

import { useState } from "react";
import Image from "next/image";
import { relative_image_path } from "@/helper";
import Link from "next/link";
import Accordion from "@/app/_components/Accordion/Accordion";
import { usePathname } from "next/navigation";
import { NewAccordion } from "@/app/_components/NewAccordion/NewAccordion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const [isToggleOpen, setIsToggleOpen] = useState({
    setting: false,
    alc: false,
    accountsSettings: false,
  });

  const toggleAccordionSub = (valueName1: string) => {
    setIsToggleOpen((prevIsToggleOpen) => {
      if (valueName1 === "setting") {
        return {
          setting: !prevIsToggleOpen.setting,
          alc: false,
          accountsSettings: false,
          // Close the other accordion
        };
      }
      if (valueName1 === "alc") {
        return {
          setting: false, // Close the other accordion
          accountsSettings: false,
          alc: !prevIsToggleOpen.alc,
        };
      }
      if (valueName1 === "accounts-settings") {
        return {
          setting: false, // Close the other accordion
          alc: false, // Close the other accordion
          accountsSettings: !prevIsToggleOpen.accountsSettings,
        };
      }
      return prevIsToggleOpen; // Default case if neither match
    });
  };
  // console.log("toggle:", isToggleOpen);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div
          className={`p-4 bg-white transition-all duration-500  ${
            isOpen ? "w-60" : "w-12"
          }`}
        >
          <div className="flex flex-col items-center">
            <div
              className={`w-full flex items-center pb-5 ${
                isOpen ? "justify-between" : "justify-end"
              }`}
            >
              <Image
                className={`w-24 transition-all duration-500 ${
                  isOpen ? "opacity-100 block" : "opacity-0 hidden"
                }`}
                src={relative_image_path("logo.png")}
                width={1000}
                height={1000}
                alt="Bangla"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-green-950"
              >
                {isOpen ? (
                  <svg
                    className="fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                ) : (
                  <svg
                    className="fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                  </svg>
                )}
              </button>
            </div>
            <ul
              className={`[&>li]:text-slate-900  [&>li]:py-2 w-11/12 [&>li]:rounded-md [&>li]:transition-all [&>li]:duration-500 [&>li]:text-14 [&>li>a]:text-14 flex flex-col gap-2 ${
                isOpen ? "[&>li]:px-3" : ""
              }`}
            >
              {/* <li
                className={`hover:bg-primary group ${
                  pathname == "/admin" ? "bg-primary" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin",
                  }}
                  shallow
                  title="Dashboard"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin" ? "text-white" : "text-primary"
                  }`}
                  // className="flex items-center gap-2"
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM21.3333 21.3333H2.66667V5.33333H21.3333V21.3333ZM18.6667 12H5.33333V9.33333H18.6667V12ZM13.3333 17.3333H5.33333V14.6667H13.3333V17.3333Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>Dashboard</span>
                </Link>
              </li> */}
              <li
                className={`hover:bg-primary group ${
                  pathname === "/admin/services" ||
                  pathname === "/admin/services/create" ||
                  /^\/admin\/services\/\d+$/.test(pathname)
                    ? "bg-primary"
                    : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/services",
                  }}
                  shallow
                  title="Show All Services"
                  // className="flex items-center gap-2"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/services" ||
                    pathname == "/admin/services/create" ||
                    /^\/admin\/services\/\d+$/.test(pathname)
                      ? "text-white"
                      : "text-primary"
                  }`}
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>
                    Manage Services
                  </span>
                </Link>
              </li>
              {/* <li
                className={`hover:bg-primary group ${
                  pathname == "/admin/bill" ? "bg-primary" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/bill",
                  }}
                  shallow
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/bill" ? "text-white" : "text-primary"
                  }`}
                  title="Bill"
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      width="24"
                      height="26"
                      viewBox="0 0 24 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.5 25.5C3.45833 25.5 2.57292 25.1354 1.84375 24.4062C1.11458 23.6771 0.75 22.7917 0.75 21.75V18H4.5V0.5L6.375 2.375L8.25 0.5L10.125 2.375L12 0.5L13.875 2.375L15.75 0.5L17.625 2.375L19.5 0.5L21.375 2.375L23.25 0.5V21.75C23.25 22.7917 22.8854 23.6771 22.1562 24.4062C21.4271 25.1354 20.5417 25.5 19.5 25.5H4.5ZM19.5 23C19.8542 23 20.151 22.8802 20.3906 22.6406C20.6302 22.401 20.75 22.1042 20.75 21.75V4.25H7V18H18.25V21.75C18.25 22.1042 18.3698 22.401 18.6094 22.6406C18.849 22.8802 19.1458 23 19.5 23ZM8.25 9.25V6.75H15.75V9.25H8.25ZM8.25 13V10.5H15.75V13H8.25ZM18.25 9.25C17.8958 9.25 17.599 9.13021 17.3594 8.89062C17.1198 8.65104 17 8.35417 17 8C17 7.64583 17.1198 7.34896 17.3594 7.10938C17.599 6.86979 17.8958 6.75 18.25 6.75C18.6042 6.75 18.901 6.86979 19.1406 7.10938C19.3802 7.34896 19.5 7.64583 19.5 8C19.5 8.35417 19.3802 8.65104 19.1406 8.89062C18.901 9.13021 18.6042 9.25 18.25 9.25ZM18.25 13C17.8958 13 17.599 12.8802 17.3594 12.6406C17.1198 12.401 17 12.1042 17 11.75C17 11.3958 17.1198 11.099 17.3594 10.8594C17.599 10.6198 17.8958 10.5 18.25 10.5C18.6042 10.5 18.901 10.6198 19.1406 10.8594C19.3802 11.099 19.5 11.3958 19.5 11.75C19.5 12.1042 19.3802 12.401 19.1406 12.6406C18.901 12.8802 18.6042 13 18.25 13ZM4.5 23H15.75V20.5H3.25V21.75C3.25 22.1042 3.36979 22.401 3.60938 22.6406C3.84896 22.8802 4.14583 23 4.5 23Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>Bill</span>
                </Link>
              </li>
              <li
                className={`hover:bg-primary group ${
                  pathname == "/admin/user" ? "bg-primary" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/user",
                  }}
                  shallow
                  title="User"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/user" ? "text-white" : "text-primary"
                  }`}
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current "
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.1 11.0001C11.9722 11.0001 14.3 8.67229 14.3 5.8001C14.3 2.92791 11.9722 0.600098 9.1 0.600098C6.22781 0.600098 3.9 2.92791 3.9 5.8001C3.9 8.67229 6.22781 11.0001 9.1 11.0001ZM12.74 12.3001H12.0616C11.1597 12.7145 10.1562 12.9501 9.1 12.9501C8.04375 12.9501 7.04437 12.7145 6.13844 12.3001H5.46C2.44562 12.3001 0 14.7457 0 17.7601V19.4501C0 20.5267 0.873437 21.4001 1.95 21.4001H13.1178C13.0203 21.1238 12.9797 20.8313 13.0122 20.5348L13.2884 18.0607L13.3372 17.6098L13.6581 17.2888L16.7984 14.1485C15.8031 13.0232 14.3609 12.3001 12.74 12.3001ZM14.5803 18.2029L14.3041 20.681C14.2594 21.0954 14.6088 21.4448 15.0191 21.396L17.4931 21.1198L23.0953 15.5176L20.1825 12.6048L14.5803 18.2029ZM25.7156 11.5242L24.1759 9.98447C23.7981 9.60666 23.1806 9.60666 22.8028 9.98447L21.2672 11.5201L21.1006 11.6867L24.0175 14.5995L25.7156 12.9013C26.0934 12.5195 26.0934 11.906 25.7156 11.5242Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>
                    Manage Users
                  </span>
                </Link>
              </li>
              <li
                className={`hover:bg-primary group ${
                  pathname == "/admin/manage-citizen" ? "bg-primary" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/manage-citizen",
                  }}
                  shallow
                  title="Manage Citizen"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/manage-citizen"
                      ? "text-white"
                      : "text-primary"
                  }`}
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.1 11.0001C11.9722 11.0001 14.3 8.67229 14.3 5.8001C14.3 2.92791 11.9722 0.600098 9.1 0.600098C6.22781 0.600098 3.9 2.92791 3.9 5.8001C3.9 8.67229 6.22781 11.0001 9.1 11.0001ZM12.74 12.3001H12.0616C11.1597 12.7145 10.1562 12.9501 9.1 12.9501C8.04375 12.9501 7.04437 12.7145 6.13844 12.3001H5.46C2.44562 12.3001 0 14.7457 0 17.7601V19.4501C0 20.5267 0.873437 21.4001 1.95 21.4001H13.1178C13.0203 21.1238 12.9797 20.8313 13.0122 20.5348L13.2884 18.0607L13.3372 17.6098L13.6581 17.2888L16.7984 14.1485C15.8031 13.0232 14.3609 12.3001 12.74 12.3001ZM14.5803 18.2029L14.3041 20.681C14.2594 21.0954 14.6088 21.4448 15.0191 21.396L17.4931 21.1198L23.0953 15.5176L20.1825 12.6048L14.5803 18.2029ZM25.7156 11.5242L24.1759 9.98447C23.7981 9.60666 23.1806 9.60666 22.8028 9.98447L21.2672 11.5201L21.1006 11.6867L24.0175 14.5995L25.7156 12.9013C26.0934 12.5195 26.0934 11.906 25.7156 11.5242Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>
                    Manage Citizen
                  </span>
                </Link>
              </li> */}
              {/* <li
                className={`hover:bg-[#E9FFD9] flex  gap-2 ${
                  pathname.includes("/admin/setting") && "bg-[#E9FFD9]"
                }`}
              >
                <span>
                  <svg
                    className="w-5 h-5"
                    fill="#348739"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </span>
                {isOpen && (
                  <Accordion title="Settings">
                    <div className="bg-white flex flex-col gap-2 p-1">
                      <Link
                        href={{
                          pathname: "/admin/setting/frontend-setting",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        Front-end Settings
                      </Link>
                      <Link
                        href={{
                          pathname: "/admin/setting/user-setting",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        User Settings
                      </Link>
                    </div>
                  </Accordion>
                )}
              </li> */}

              <li
                onClick={() => toggleAccordionSub("setting")}
                className={`hover:bg-primary  group flex items-center justify-between   ${
                  pathname.includes("/admin/setting") && "bg-primary"
                } cursor-pointer ${
                  isToggleOpen.setting ? "border-b-2 border-primary" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      className={`w-5 h-5 fill-current text-primary group-hover:text-white transition-colors duration-300
                      ${pathname.includes("/admin/setting") && "text-white"}`}
                      // fill="#348739"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </span>

                  <span
                    className={`text-15 text-primary group-hover:text-white  ${
                      isOpen ? "block" : "hidden"
                    } ${pathname.includes("/admin/setting") && "text-white"}`}
                  >
                    Settings
                  </span>
                </div>

                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "block" : "hidden"
                  } ${isToggleOpen.setting ? "rotate-180" : ""}`}
                >
                  <svg
                    className={`w-3 h-3 fill-current text-primary group-hover:text-white transition-colors duration-300 ${
                      pathname.includes("/admin/setting") && "text-white"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </span>
              </li>
              {isOpen && (
                <NewAccordion isOpen={isToggleOpen.setting}>
                  <div className="ms-3 flex flex-col">
                    <Link
                      href={{
                        pathname: "/admin/setting/frontend-setting",
                      }}
                      shallow
                      className={`text-14 hover:bg-green-500 px-2 py-1 rounded hover:text-white ${
                        pathname.includes("/admin/setting/frontend-setting")
                          ? "bg-green-500 text-white font-semibold"
                          : "text-black"
                      }`}
                    >
                      Front-end Settings
                    </Link>
                    {/* <Link
                      href={{
                        pathname: "/admin/setting/user-setting",
                      }}
                      shallow
                      className={`text-14 hover:bg-green-500 px-2 py-1 rounded hover:text-white ${
                        pathname.includes("/admin/setting/user-setting")
                          ? "bg-green-500 text-white font-semibold"
                          : "text-black"
                      }`}
                    >
                      User Settings
                    </Link> */}
                  </div>
                </NewAccordion>
              )}

              {/* <li
                onClick={() => toggleAccordionSub("alc")}
                className={`hover:bg-primary  group flex items-center  justify-between ${
                  (pathname.includes("user-list") ||
                    pathname.includes("manage-role") ||
                    pathname.includes("permission-management")) &&
                  "bg-primary"
                } cursor-pointer ${
                  isToggleOpen.alc ? "border-b-2 border-primary" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      className={`w-5 h-5 fill-current text-primary group-hover:text-white transition-colors duration-300
                      ${
                        (pathname.includes("user-list") ||
                          pathname.includes("manage-role") ||
                          pathname.includes("permission-management")) &&
                        "text-white"
                      }`}
                      // fill="#348739"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </span>

                  <span
                    className={`text-15 text-primary group-hover:text-white ${
                      isOpen ? "block" : "hidden"
                    } ${
                      (pathname.includes("user-list") ||
                        pathname.includes("manage-role") ||
                        pathname.includes("permission-management")) &&
                      "text-white"
                    }`}
                  >
                    ACL
                  </span>
                </div>

                <span
                  className={`transition-transform duration-300 ${
                    isToggleOpen.alc ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className={`w-3 h-3 fill-current text-primary group-hover:text-white transition-colors duration-300 ${
                      isOpen ? "block" : "hidden"
                    } ${
                      (pathname.includes("user-list") ||
                        pathname.includes("manage-role") ||
                        pathname.includes("permission-management")) &&
                      "text-white"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </span>
              </li>
              {isOpen && (
                <NewAccordion isOpen={isToggleOpen.alc}>
                  <div className="ms-3 flex flex-col gap-2 p-1">
                    <Link
                      href={{
                        pathname: "/admin/user-list",
                      }}
                      shallow
                      className={`text-14 hover:bg-green-500 px-2 py-1 rounded hover:text-white ${
                        pathname.includes("/admin/user-list")
                          ? "bg-green-500 text-white font-semibold"
                          : "text-black"
                      }`}
                    >
                      User List
                    </Link>
                    <Link
                      href={{
                        pathname: "/admin/manage-role",
                      }}
                      shallow
                      className={`text-14 hover:bg-green-500 px-2 py-1 rounded hover:text-white ${
                        pathname.includes("/admin/manage-role")
                          ? "bg-green-500 text-white font-semibold"
                          : "text-black"
                      }`}
                    >
                      Manage Role
                    </Link>
                    <Link
                      href={{
                        pathname: "/admin/permission-management",
                      }}
                      shallow
                      className={`text-14 hover:bg-green-500 px-2 py-1 rounded hover:text-white ${
                        pathname.includes("/admin/permission-management")
                          ? "bg-green-500 text-white font-semibold"
                          : "text-black"
                      }`}
                    >
                      Permission Management
                    </Link>
                  </div>
                </NewAccordion>
              )}

              <li
                onClick={() => toggleAccordionSub("accounts-settings")}
                className={`hover:bg-primary  group flex items-center  justify-between ${
                  pathname.includes("/admin/accounts-settings") && "bg-primary"
                } cursor-pointer ${
                  isToggleOpen.accountsSettings
                    ? "border-b-2 border-primary"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="">
                    <svg
                      className={`w-5 h-5 fill-current text-primary group-hover:text-white transition-colors duration-300
                      ${
                        pathname.includes("/admin/accounts-settings") &&
                        "text-white"
                      }`}
                      // fill="#348739"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </span>

                  <span
                    className={`text-15 text-primary group-hover:text-white  ${
                      isOpen ? "block" : "hidden"
                    } ${
                      pathname.includes("/admin/accounts-settings") &&
                      "text-white"
                    }`}
                  >
                    Account Settings
                  </span>
                </div>

                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "block" : "hidden"
                  } ${isToggleOpen.accountsSettings ? "rotate-180" : ""}`}
                >
                  <svg
                    className={`w-3 h-3 fill-current text-primary group-hover:text-white transition-colors duration-300 ${
                      pathname.includes("/admin/accounts-settings") &&
                      "text-white"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                  </svg>
                </span>
              </li> */}
              {isOpen && (
                <NewAccordion isOpen={isToggleOpen.accountsSettings}>
                  <div className="ms-3 flex flex-col">
                    <Link
                      href={{
                        pathname: "/admin/accounts-settings/purchase-services",
                      }}
                      shallow
                      className={`text-14 hover:text-primary ${
                        pathname.includes(
                          "/admin/accounts-settings/purchase-services"
                        )
                          ? "text-primary font-semibold"
                          : "text-black"
                      }`}
                    >
                      Purchase Services
                    </Link>
                    <Link
                      href={{
                        pathname: "/admin/accounts-settings/payment-history",
                      }}
                      shallow
                      className={`text-14 hover:text-primary ${
                        pathname.includes(
                          "/admin/accounts-settings/payment-history"
                        )
                          ? "text-primary font-semibold"
                          : "text-black"
                      }`}
                    >
                      Payment History
                    </Link>
                  </div>
                </NewAccordion>
              )}

              {/* <li
                className={`hover:bg-[#E9FFD9] flex  gap-2 ${
                  (pathname.includes("user-list") ||
                    pathname.includes("manage-role") ||
                    pathname.includes("permission-management")) &&
                  "bg-[#E9FFD9]"
                }`}
              >
                <span className="mt-[10px] ">
                  <svg
                    className="w-5 h-5 transition-colors duration-300 text-[#348739]"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </span>
                {isOpen && (
                  <NewAccordion title="ACL">
                    <div className="bg-white flex flex-col gap-2 p-1">
                      <Link
                        href={{
                          pathname: "/admin/user-list",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        User List
                      </Link>
                      <Link
                        href={{
                          pathname: "/admin/manage-role",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        Manage Role
                      </Link>
                      <Link
                        href={{
                          pathname: "/admin/permission-management",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        Permission Management
                      </Link>
                    </div>
                  </NewAccordion>
                )}
              </li> */}

              {/* <li
                className={`hover:bg-[#E9FFD9] flex  gap-2 ${
                  (pathname.includes("user-list") ||
                    pathname.includes("manage-role") ||
                    pathname.includes("permission-management")) &&
                  "bg-[#E9FFD9]"
                }`}
              >
                <span>
                  <svg
                    className="w-5 h-5"
                    fill="#348739"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </span>
                {isOpen && (
                  <Accordion title="ACL">
                    <div className="bg-white flex flex-col gap-2 p-1">
                      <Link
                        href={{
                          pathname: "/admin/user-list",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        User List
                      </Link>
                      <Link
                        href={{
                          pathname: "/admin/manage-role",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        Manage Role
                      </Link>
                      <Link
                        href={{
                          pathname: "/admin/permission-management",
                        }}
                        shallow
                        className="text-14 hover:text-primary"
                      >
                        Permission Management
                      </Link>
                    </div>
                  </Accordion>
                )}
              </li> */}
              {/* <li
                className={`hover:bg-primary group ${
                  pathname == "/admin/documentation" ? "bg-primary" : ""
                }`}
                // className={`hover:bg-[#E9FFD9] ${
                //   pathname.includes("documentation") && "bg-[#E9FFD9]"
                // }`}
              >
                <Link
                  href={{
                    pathname: "/admin/documentation",
                  }}
                  shallow
                  title="Documentation"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/documentation"
                      ? "text-white"
                      : "text-primary"
                  }`}
                  // className="flex items-center gap-2"
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.1 11.0001C11.9722 11.0001 14.3 8.67229 14.3 5.8001C14.3 2.92791 11.9722 0.600098 9.1 0.600098C6.22781 0.600098 3.9 2.92791 3.9 5.8001C3.9 8.67229 6.22781 11.0001 9.1 11.0001ZM12.74 12.3001H12.0616C11.1597 12.7145 10.1562 12.9501 9.1 12.9501C8.04375 12.9501 7.04437 12.7145 6.13844 12.3001H5.46C2.44562 12.3001 0 14.7457 0 17.7601V19.4501C0 20.5267 0.873437 21.4001 1.95 21.4001H13.1178C13.0203 21.1238 12.9797 20.8313 13.0122 20.5348L13.2884 18.0607L13.3372 17.6098L13.6581 17.2888L16.7984 14.1485C15.8031 13.0232 14.3609 12.3001 12.74 12.3001ZM14.5803 18.2029L14.3041 20.681C14.2594 21.0954 14.6088 21.4448 15.0191 21.396L17.4931 21.1198L23.0953 15.5176L20.1825 12.6048L14.5803 18.2029ZM25.7156 11.5242L24.1759 9.98447C23.7981 9.60666 23.1806 9.60666 22.8028 9.98447L21.2672 11.5201L21.1006 11.6867L24.0175 14.5995L25.7156 12.9013C26.0934 12.5195 26.0934 11.906 25.7156 11.5242Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>
                    Documentation
                  </span>
                </Link>
              </li>
              <li
                className={`hover:bg-primary group ${
                  pathname == "/admin/activity-logs" ? "bg-primary" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/activity-logs",
                  }}
                  shallow
                  title="Activity Logs"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/activity-logs"
                      ? "text-white"
                      : "text-primary"
                  }`}
                  // className="flex items-center gap-2"
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.1 11.0001C11.9722 11.0001 14.3 8.67229 14.3 5.8001C14.3 2.92791 11.9722 0.600098 9.1 0.600098C6.22781 0.600098 3.9 2.92791 3.9 5.8001C3.9 8.67229 6.22781 11.0001 9.1 11.0001ZM12.74 12.3001H12.0616C11.1597 12.7145 10.1562 12.9501 9.1 12.9501C8.04375 12.9501 7.04437 12.7145 6.13844 12.3001H5.46C2.44562 12.3001 0 14.7457 0 17.7601V19.4501C0 20.5267 0.873437 21.4001 1.95 21.4001H13.1178C13.0203 21.1238 12.9797 20.8313 13.0122 20.5348L13.2884 18.0607L13.3372 17.6098L13.6581 17.2888L16.7984 14.1485C15.8031 13.0232 14.3609 12.3001 12.74 12.3001ZM14.5803 18.2029L14.3041 20.681C14.2594 21.0954 14.6088 21.4448 15.0191 21.396L17.4931 21.1198L23.0953 15.5176L20.1825 12.6048L14.5803 18.2029ZM25.7156 11.5242L24.1759 9.98447C23.7981 9.60666 23.1806 9.60666 22.8028 9.98447L21.2672 11.5201L21.1006 11.6867L24.0175 14.5995L25.7156 12.9013C26.0934 12.5195 26.0934 11.906 25.7156 11.5242Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>
                    Activity Logs
                  </span>
                </Link>
              </li>
              <li
                className={`hover:bg-primary group ${
                  pathname == "/admin/user-feedbacks" ? "bg-primary" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/user-feedbacks",
                  }}
                  shallow
                  title="User Feedbacks"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/user-feedbacks"
                      ? "text-white"
                      : "text-primary"
                  }`}
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.1 11.0001C11.9722 11.0001 14.3 8.67229 14.3 5.8001C14.3 2.92791 11.9722 0.600098 9.1 0.600098C6.22781 0.600098 3.9 2.92791 3.9 5.8001C3.9 8.67229 6.22781 11.0001 9.1 11.0001ZM12.74 12.3001H12.0616C11.1597 12.7145 10.1562 12.9501 9.1 12.9501C8.04375 12.9501 7.04437 12.7145 6.13844 12.3001H5.46C2.44562 12.3001 0 14.7457 0 17.7601V19.4501C0 20.5267 0.873437 21.4001 1.95 21.4001H13.1178C13.0203 21.1238 12.9797 20.8313 13.0122 20.5348L13.2884 18.0607L13.3372 17.6098L13.6581 17.2888L16.7984 14.1485C15.8031 13.0232 14.3609 12.3001 12.74 12.3001ZM14.5803 18.2029L14.3041 20.681C14.2594 21.0954 14.6088 21.4448 15.0191 21.396L17.4931 21.1198L23.0953 15.5176L20.1825 12.6048L14.5803 18.2029ZM25.7156 11.5242L24.1759 9.98447C23.7981 9.60666 23.1806 9.60666 22.8028 9.98447L21.2672 11.5201L21.1006 11.6867L24.0175 14.5995L25.7156 12.9013C26.0934 12.5195 26.0934 11.906 25.7156 11.5242Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>
                    User Feedbacks
                  </span>
                </Link>
              </li>
              <li
                className={`hover:bg-primary group ${
                  pathname == "/admin/service-setting" ? "bg-primary" : ""
                }`}
              >
                <Link
                  href={{
                    pathname: "/admin/service-setting",
                  }}
                  shallow
                  title="Service Setting"
                  className={`flex items-center gap-2 group-hover:text-white ${
                    pathname == "/admin/service-setting"
                      ? "text-white"
                      : "text-primary"
                  }`}
                >
                  <span>
                    <svg
                      className="w-5 h-5 fill-current"
                      width="26"
                      height="22"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.1 11.0001C11.9722 11.0001 14.3 8.67229 14.3 5.8001C14.3 2.92791 11.9722 0.600098 9.1 0.600098C6.22781 0.600098 3.9 2.92791 3.9 5.8001C3.9 8.67229 6.22781 11.0001 9.1 11.0001ZM12.74 12.3001H12.0616C11.1597 12.7145 10.1562 12.9501 9.1 12.9501C8.04375 12.9501 7.04437 12.7145 6.13844 12.3001H5.46C2.44562 12.3001 0 14.7457 0 17.7601V19.4501C0 20.5267 0.873437 21.4001 1.95 21.4001H13.1178C13.0203 21.1238 12.9797 20.8313 13.0122 20.5348L13.2884 18.0607L13.3372 17.6098L13.6581 17.2888L16.7984 14.1485C15.8031 13.0232 14.3609 12.3001 12.74 12.3001ZM14.5803 18.2029L14.3041 20.681C14.2594 21.0954 14.6088 21.4448 15.0191 21.396L17.4931 21.1198L23.0953 15.5176L20.1825 12.6048L14.5803 18.2029ZM25.7156 11.5242L24.1759 9.98447C23.7981 9.60666 23.1806 9.60666 22.8028 9.98447L21.2672 11.5201L21.1006 11.6867L24.0175 14.5995L25.7156 12.9013C26.0934 12.5195 26.0934 11.906 25.7156 11.5242Z" />
                    </svg>
                  </span>
                  <span className={isOpen ? "block" : "hidden"}>
                    Service Settings
                  </span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="bg-emerald-700 text-white p-4 flex items-center justify-between gap-4">
          {isOpen && (
            <div className="flex items-center gap-2">
              <Image
                className="w-10 h-10 rounded-md"
                src={relative_image_path("dummy_image1.jpg")}
                width={1000}
                height={1000}
                alt="Bangla"
              />
              <div>
                <h3>Admin</h3>
                <p className="text-12">user</p>
              </div>
            </div>
          )}
          <button title="Logout">
            <svg
              className="w-5 h-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
