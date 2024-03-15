import { Phone, Mail, Linkedin, Instagram, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col justify-center items-center bg-gradient-to-r gap-3 from-[#09090F] to-[#0A1227] h-2/5 md:h-1/3">
      <div className="w-full md:flex md:justify-evenly">
        <div className="p-6 flex flex-col items-center gap-2">
          <p className="font-bold text-lg">Contact Us</p>
          <div className="flex gap-2">
            <Phone />
            <p className="text-white">+91 1234567890</p>
          </div>
          <div className="flex gap-2">
            <Mail />
            <p className="text-white">iosd@iosd.com</p>
          </div>
        </div>
        <div className="hidden p-6 md:flex flex-col items-center gap-2">
          <p className="font-bold text-lg">Quick Links</p>
          <div className="grid grid-cols-2 gap-2 text-sm underline">
          <Link to="/about" className=""> About </Link>
          <Link to="/team" className=""> Team </Link>
          <Link to="/events" className=""> Events </Link>
          <Link to="/members" className=""> Members </Link>
            
            </div>
        </div>

      </div>
      <Separator className="h-[0.5px] w-3/5 bg-slate-500" />
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly">
      <div className="flex justify-center gap-5 p-5">
        <Linkedin />
        <Instagram />
        <Twitter />
      </div>
      <p className="text-white text-sm text-center">© 2021 IOSD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
