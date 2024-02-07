import React from "react";

const Footer = () => {
  return (
    <div className="pt-20">
      <p className="text-center">
        ACME Industries Ltd.
        <br />
        Providing reliable tech since 1992
      </p>

      <div className="grid grid-cols-3 pt-20">
        <nav>
          <h6 className="font-bold text-black">Services</h6>
          <a className="font-semibold text-black">Branding</a>
          <br />
          <a className="font-semibold text-black">Design</a> <br />
          <a className="font-semibold text-black">Marketing</a> <br />
          <a className="font-semibold text-black">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black">Company</h6>
          <a className="font-semibold text-black">About us</a> <br />
          <a className="font-semibold text-black">Contact</a> <br />
          <a className="font-semibold text-black">Jobs</a> <br />
          <a className="font-semibold text-black">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-black">Legal</h6>
          <a className="font-semibold text-black">Terms of use</a> <br />
          <a className="font-semibold text-black">Privacy policy</a> <br />
          <a className="font-semibold text-black">Cookie policy</a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
