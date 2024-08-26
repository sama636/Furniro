import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <footer className="bg-white p-10 px-10 w-full text-sm font-base lg:text-base ">
      <div className="xl:px-10">
        <div className="grid grid-cols-1 grid-rows-2-row-footer py-10 md:grid-cols-2-column-footer md:grid-rows-1 lg:gap-8 lg:grid-cols-2-columnlg-footer  lg:grid-cols-2">
          <div className="flex flex-col w-72 gap-50">
            <h4 className="font-bold text-base md:text-lg lg:text-2xl">Funiro.</h4>
            <p className="text-address-txt font-normal">400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-14 md:grid-cols-3 ">
            <div className="flex flex-col gap-5 md:gap-50">
              <h5 className="text-address-txt">Links</h5>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="flex flex-col gap-5 md:gap-50 lg:min-w-32">
              <h5 className="text-address-txt">Help</h5>
              <Link>Payment Options</Link>
              <Link>Returns</Link>
              <Link>Privacy Policies</Link>
            </div>
            <div className="flex flex-col gap-5 md:gap-50 xl:ml-2">
              <h5 className="text-address-txt">Newsletter</h5>
              <form className="text-sm flex flex-col gap-3 justify-start content-center lg:flex-row lg:min-w-64">
                <input type="text" placeholder="Enter Your Email Address" className="bg-transparent underline underline-offset-2 w-44 font-normal"/>
                <button className="underline underline-offset-8 w-20">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
        <hr/>
        <h6 className="pt-5 font-normal">{year} furino. All rights reverved</h6>
      </div>
    </footer>
  );
}
