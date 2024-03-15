

import AboutUsImage from "@/assets/AboutUs.png";
import { Button } from "@/components/ui/button";

const AboutCarousel = () => {
  return (
    <div
      style={{ backgroundImage: `url(${AboutUsImage})` }}
      className="bg-center flex flex-col items-center justify-center object-center h-96"
    >
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 bg-black opacity-80">
        <p className="text-5xl font-bold brightness-100">About Us</p>
        <p className="text-center w-2/3 text-sm md:w-1/3">
          The International Organization of Software Developers (IOSD) at the
          Maharaja Agrasen Institute of Technology (MAIT) is a dynamic tech
          community dedicated to advancing the field of software development and
          technology.
        </p>
        <Button className="">Join Us</Button>
      </div>
    </div>
  );
};

export default AboutCarousel;
