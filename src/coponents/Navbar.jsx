import React from "react";
import logo from "../images/logos_firebase.svg";
const Navbar = ({Open,onChange}) => {

  return (
    <div className="lg:w-full lg:pl-60 lg:pr-60">
      <div className="bg-white flex flex-row justify-center rounded-xl h-[60px] items-center  mt-2 lg:w-full w-[320px]">
        <img className="h-[21px] w-[30px]" src={logo} alt="hello" />
        <div className="text-xl font-semibold">Firebase Contact App</div>
      </div>
      <div className="search-add  flex space-x-3 justify-center items-center mt-3 w-full">
        <div className="input relative w-full ">
          <i className="fi fi-br-search text-white absolute left-2  top-2 text-xl"></i>
          <input
            className="bg-gray text-white outline-none border-2 border-white rounded-xl w-full h-[40px] pl-10"
            type="text"
            onChange={onChange}
            placeholder="Search Contact"
          />
        </div>
        <div onClick={()=> Open()} className="add  cursor-pointer bg-white w-[55px] h-[45px] rounded-full flex justify-center items-center ">
          <i className="fi fi-br-plus text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
