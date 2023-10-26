import React, { useEffect, useState } from "react";
import { MdMovie, MdSpaceDashboard } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { BsFillBookmarkFill } from "react-icons/bs";
import "./Sidebar.css"

import logo from "../../assets/react.svg";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

const Sidebar = () => {

  const [selected, setSelected]= useState("/")
const location = useLocation()
const [toggleDropdown, setToggleDropdown]= useState(true)


  useEffect(()=>{
    if (location.pathname === "/"){
      setSelected("/")
    }else if (location.pathname === "/movies"){
      setSelected("/movies")
    }else if (location.pathname === "/tvseries"){
      setSelected("/tvseries")
    }else if (location.pathname === "/bookmark"){
      setSelected("/bookmark")
    }
  },[location])
  
  return (
    <div className=" sidebar d-flex flex-xl-column justify-content-between justify-content-xl-start gap-xl-5  px-4 py-4 custom-bg-light-grey mx-md-4">
     <Link to="/"> <MdMovie className="fs-1 custom-text-red" /></Link>
      <div className="d-flex  flex-xl-column gap-3 gap-md-4">
      
        <Link to="/"><MdSpaceDashboard className={`fs-1 ${selected === "/" ? "text-white" : "text-secondary"}`} /></Link>
     <Link to="/movies"> <RiFilmFill  className={`fs-1 ${selected === "/movies" ? "text-white" : "text-secondary"}`}/></Link>
     <Link to="/tvseries"> <PiTelevisionFill className={`fs-1 ${selected === "/tvseries" ? "text-white" : "text-secondary"}`}/></Link>
     <Link to="/bookmark"> <BsFillBookmarkFill className={`fs-1 ${selected === "/bookmark" ? "text-white" : "text-secondary"}`}/></Link>
      </div>
      <div className="mt-xl-auto position-relative">
      <img  onClick={()=>{
        setToggleDropdown(!toggleDropdown)
      }} src={logo} alt="" />
      {toggleDropdown ? <Dropdown/>: null}
      </div>
    </div>
  );
};

export default Sidebar;
