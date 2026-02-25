"use client";

import "../app/globals.css";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HomeIcon, PersonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { CgProfile } from "react-icons/cg";
import { useSession, signIn, signOut } from "next-auth/react";

import { FaRegHeart } from "react-icons/fa";
import { TfiTicket } from "react-icons/tfi";
// import { useRouter } from "next/navigation";

const Header = () => {
  const [session, setSession] = useState(false);
  const [menu, setMenu] = useState(false);
  const sessionStatus = useSession();
  // console.log(sessionStatus)
  // const router = useRouter();
  useEffect(()=>{
    if(sessionStatus.status === "authenticated"){
      setSession(true);
    }else{
      setSession(false);
    }
  },[sessionStatus]);


  return (
    <>
    <nav className="drop-shadow-2xl flex items-center justify-between p-3 border-b border-slate-200 border-spacing-0 bg-slate-100 h-24">
      <div className="hover-inverse flex items-center justify-center gap-2">
        <Link
          href={"/"}
          className="text-3xl font-bold max-sm:text-2xl bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent"
        >
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={90} // Aspect ratio control
            width={90} // Aspect ratio control
            // layout="responsive"
            className="hover-inverse w-full h-auto max-w-[120px] max-h-[120px] py-4"
          />
        </Link>
      </div>

      <div>
        <div className="flex items-center justify-center gap-5 font-semibold max-md:hidden">
          <Link
            href={"/"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <HomeIcon />
            </div>
            <p>Home</p>
          </Link>

          <Link
            href={"/events"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <CgProfile />
            </div>
            <p>Events</p>
          </Link>

          <Link
            href={"/artists"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <PersonIcon />
            </div>
            <p>Artists</p>
          </Link>

          <Link
            href={"/tags"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
          >
            <div className="scale-110">
              <TfiTicket />
            </div>
            <p>Tags</p>
          </Link>

          {session ? (<Link
            href={"/create-event"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 transition-all border-2 p-2 rounded-md hover:bg-red-500"
          >
            <div className="scale-110">
              <FaRegHeart />
            </div>
            <p>Create Event</p>
          </Link>) : null}

          {session ? (
            <button
              onClick={()=>signOut()}
              className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
            >
              Logout
            </button>
          ) : null}
          {!session ? (
            <button
              onClick={() => {signIn("google")}}
              className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
            >
              Log in
            </button>
          ) : null}
        </div>
        <div className="max-md:block hidden w-20"><HamburgerMenuIcon onClick={()=>setMenu(!menu)} className="text-teal-600 m-auto"/></div>
      </div>
    </nav>
     <div className={menu ? ("w-screen h-screen bg-white absolute z-10 left-0 transition-all duration-500 ease-in-out"): ("w-screen  h-screen bg-white absolute z-10 -left-full transition-all duration-500 ease-in-out")}>
        <div className="flex flex-col items-center justify-center gap-10 font-semibold p-10">
          <Link
            href={"/"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
           onClick={()=>setMenu(!menu)}>
            <div className="scale-110">
              <HomeIcon />
            </div>
            <p>Home</p>
          </Link>

          <Link
            href={"/events"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
           onClick={()=>setMenu(!menu)}>
            <div className="scale-110">
              <CgProfile />
            </div>
            <p>Events</p>
          </Link>

          <Link
            href={"/artists"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
           onClick={()=>setMenu(!menu)}>
            <div className="scale-110">
              <PersonIcon />
            </div>
            <p>Artists</p>
          </Link>

          <Link
            href={"/tags"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 hover:underline-offset-8 hover:underline transition-all"
           onClick={()=>setMenu(!menu)}>
            <div className="scale-110">
              <TfiTicket />
            </div>
            <p>Tags</p>
          </Link>

          {session ? (<Link
            href={"/create-event"}
            className="flex items-center justify-center gap-2 hover:text-primary hover:scale-105 transition-all border-2 p-2 rounded-md hover:bg-red-500"
           onClick={()=>setMenu(!menu)}>
            <div className="scale-110">
              <FaRegHeart />
            </div>
            <p>Create Event</p>
          </Link>) : null}

          {session ? (
            <button
              onClick={()=>signOut()}
              className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
            >
              Logout
            </button>
          ) : null}
          {!session ? (
            <button
              onClick={() => {signIn("google")}}
              className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
            >
              Log in
            </button>
          ) : null}
          </div>
      </div>
    </>
  );
};

export default Header;
