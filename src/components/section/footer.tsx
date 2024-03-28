import React from 'react';
import MediaSvg from '../ui/media_svg';
import ContactSvg from '../ui/contact_svg';
import BerryLabsSvg from '../ui/berryLabs_svg';

function Footer() {
  return (
    <footer className="flex  justify-between text-zinc-800 flex-wrap gap-6 lg:flex-row text-base lg:text-sm lg:px-10 lg:py-10 px-5 bg-[#F9FAFB] ">
      <div className="lg:max-w-[50%] w-full">
        <BerryLabsSvg />
        <p className="pt-4 leading-6 ">
          Unlocking the power of AI precision, we revolutionize the way
          businesses operate. Our innovative solution automates repetitive
          tasks, saving valuable time and boosting productivity.
        </p>
        <MediaSvg />
      </div>
      <nav className="flex flex-col gap-4">
        <h6 className="font-semibold lg:pb-4 text-base">Pages</h6>
        <p className="link link-hover">Home</p>
        <p className="link link-hover">Pricing</p>
        <p className="link link-hover">Solution</p>
        <p className="link link-hover">Demo</p>
      </nav>
      <nav className="flex flex-col gap-4">
        <h6 className="font-semibold lg:pb-4 text-lg lg:text-base">Service</h6>
        <p className="link link-hover">CV Screening</p>
        <p className="link link-hover">Bank statement</p>
        <p className="link link-hover">Invoice Analyzer</p>
        <p className="link link-hover">Ragulatory Auditor</p>
      </nav>
      <nav className="flex flex-col gap-3">
        <h6 className="font-semibold lg:pb-4 text-base">Contact</h6>
        <ContactSvg />
      </nav>
    </footer>
  );
}

export default Footer;
