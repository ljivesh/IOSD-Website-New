import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import IosdLogo from "../assets/iosd-logo.png";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 992px)");
  const isLargeDevice = useMediaQuery("only screen and (min-width : 993px)");

  return (
    <div className="flex justify-between items-center py-3 px-10 bg-gradient-to-r from-[#09090F] to-[#0A1227]">
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
          <DropdownMenuContent onClick={() => setDropDownIsOpen(false)}>
            <DropdownMenuLabel>Navigate</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/about">About</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/members">Members</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/team">Team</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/events">Events</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/sponsor">Sponsor</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/join">Join Us</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
      {isLargeDevice && (
        <ul className="flex gap-2 text-lg uppercase">
          <Button variant="ghost">
            <Link to="/about" className="text-lg uppercase">
              About
            </Link>
          </Button>
          <Button variant="ghost">
            <Link to="/members" className="text-lg uppercase">
              Members
            </Link>
          </Button>
          <Button variant="ghost">
            <Link to="/team" className="text-lg uppercase">
              Team
            </Link>
          </Button>
          <Button variant="ghost">
            <Link to="/events" className="text-lg uppercase">
              Events
            </Link>
          </Button>
          <Button variant="ghost">
            <Link to="/sponsor" className="text-lg uppercase">
              Sponsor
            </Link>
          </Button>
          <Button variant="ghost">
            <Link to="/gallery" className="text-lg uppercase">
              Gallery
            </Link>
          </Button>
          <Button variant="ghost">
            <Link to="/join" className="text-lg uppercase">
              Join Us
            </Link>
          </Button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
