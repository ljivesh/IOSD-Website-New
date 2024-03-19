import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import IosdLogo from "../assets/iosd-logo.png";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 992px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 993px)");

  return (
    <div className="flex justify-between items-center py-3 px-10 bg-gradient-to-r from-[#09090F] to-[#0A1227] sticky top-0 z-50">
      <div>
        <Link to="/">
          <img src={IosdLogo} alt="iosd-logo" className="w-36" />
        </Link>
      </div>
      {isSmallDevice && (
        <DropdownMenu open={dropDownIsOpen} onOpenChange={setDropDownIsOpen}>
          <DropdownMenuTrigger>
            <Button variant="default">
              <AlignJustify />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className=" font-bold
            border-none text-slate-300
            bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100
"
            onClick={() => setDropDownIsOpen(false)}
          >
            {/* <DropdownMenuLabel>Navigate</DropdownMenuLabel> */}

            <Link to="/about">
              <DropdownMenuItem className="text-lg">About</DropdownMenuItem>
            </Link>

            <Link to="/members">
              <DropdownMenuItem  className="text-lg">Members</DropdownMenuItem>
            </Link>

            <Link to="/team">
              <DropdownMenuItem  className="text-lg">Team</DropdownMenuItem>
            </Link>

            <Link to="/events">
              <DropdownMenuItem  className="text-lg">Events</DropdownMenuItem>
            </Link>

            <Link to="/gallery">
              <DropdownMenuItem  className="text-lg">Gallery</DropdownMenuItem>
            </Link>

            <Link to="/sponsor">
              <DropdownMenuItem  className="text-lg">Sponsor</DropdownMenuItem>
            </Link>

            <Link to="/join">
              <DropdownMenuItem  className="text-lg">Join Us</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {isLargeDevice && (
        <ul className="flex gap-2 text-lg uppercase">
          <Link to="/about">
            <Button variant="ghost" className="text-lg uppercase">
              About
            </Button>
          </Link>
          <Link to="/members">
            <Button variant="ghost" className="text-lg uppercase">
              Members
            </Button>
          </Link>
          <Link to="/team">
            <Button variant="ghost" className="text-lg uppercase">
              Team
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="ghost" className="text-lg uppercase">
              Events
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="ghost" className="text-lg uppercase">
              Gallery
            </Button>
          </Link>
          <Link to="/sponsor">
            <Button variant="ghost" className="text-lg uppercase">
              Sponsor
            </Button>
          </Link>
          <Link to="/join">
            <Button variant="ghost" className="text-lg uppercase">
              Join Us
            </Button>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
