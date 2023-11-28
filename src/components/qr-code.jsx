import React from "react";
import qr from "../assets/images/image-qr-code.png";

const CodeScanner = () => {
  return (
    <div>
      <div className=" w-[24rem] h-[35rem] m-auto rounded-3xl my-[12rem] bg-[#FFFFFF] justify-center text-center">
        <div className="pt-5">
          <img
            className="w-[21rem] h-[20rem] m-auto rounded-xl"
            src={qr}
            alt=""
          />
        </div>
        <div className="w-[20rem] m-auto mt-6 ">
          <h2
            className="font-outfit font-[#1F3251] font-[700]
           text-[28px] leading-8">
            Improve your front-end skills by building projects
          </h2>
          <p className="font-out text-[#7B879D] font-[400] text-[19px] leading-6 mt-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeScanner;
