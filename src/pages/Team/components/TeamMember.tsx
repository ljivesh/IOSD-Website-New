import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const TeamMember = ({ member }: any) => {
  return (
    <div className="group hover:scale-110 transition ease-in-out">
      <div
        className="w-60 h-80 flex flex-col justify-between items-center p-4 rounded-lg shadow-lg text-white text-center transform "
        style={{ backgroundColor: member.color }}
      >
        <div className="flex flex-col gap-2">
          <div className="font-poppins font-medium text-2xl uppercase">
            {member.name}
          </div>
          <div className="flex justify-center w-full relative h-0 z-10 transform group-hover:scale-90 transition ease-in-out">
            <img src={member.img} className="h-52" />
          </div>
        </div>
        <div className="font-rochester font-bold text-3xl group-hover:-translate-y-5 transition ease-linear z-20">
          <span>{member.role}</span>
        </div>

        {/* <div className="text-white">
        <div className="flex gap-5 text-white text-4xl">
          {member.linkedin && (
            <div className="">
              <a href={member.linkedin} className="text-white">
                <i className="bx bxl-linkedin-square bx-fade-left"></i>
              </a>
            </div>
          )}
          {member.insta && (
            <div className="">
              <a href={member.insta}>
                <i className="bx bxl-instagram bx-fade-right"></i>
              </a>
            </div>
          )}
        </div>
      </div> */}
      </div>
      <div className="flex justify-center h-0 gap-4 opacity-0 relative bottom-8 group-hover:opacity-100 transition-opacity ease-in-out">
        <Twitter size={20} />
        <Link to={member.insta} className="hover:scale-110 transition ease-in-out">
          <Instagram size={20} />
        </Link>
        <Link to={member.linkedin} className="hover:scale-110 transition ease-in-out">
          <Linkedin size={20} />
        </Link>
      </div>
    </div>
  );
};

export default TeamMember;
