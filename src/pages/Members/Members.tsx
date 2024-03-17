import Benefits from "./Benefits";
import Faqs from "./Faqs";
import MembersBackgroundSvg from "@/assets/members/MembersBackground.svg";
import MembersHowToJoin from "./MembersHowToJoin";
import MembersJoinOurTeam from "./MembersJoinOurTeam";

import MembersLineLeft from "@/assets/members/MembersLineLeft.svg";
import MembersLineRight from "@/assets/members/MembersLineRight.svg";

const Members = () => {
  return (
    <div>
      <div className="flex flex-col gap-16 w-full justify-center items-center p-6 lg:p-20">
        <div className="hidden lg:block relative h-0 -z-10 bottom-10 left-[10rem]">
          <img
            src={MembersBackgroundSvg}
            alt="Members Background"
            className=""
          />
        </div>
        <div className="lg:relative lg:left-10">
          <MembersJoinOurTeam />
        </div>
        <div className="hidden lg:block relative h-0 -z-10 bottom-48 right-[30rem]">
          <img
            src={MembersBackgroundSvg}
            alt="Members Background"
            className=""
          />
        </div>
        <div className="hidden lg:block relative h-0 -z-10 left-[30rem]">
          <img
            src={MembersBackgroundSvg}
            alt="Members Background"
            className=""
          />
        </div>
        <div className="hidden md:block relative h-0 bottom-48 -z-10">
          <img src={MembersLineLeft} alt="Members Line Left" />
        </div>
        <div className="lg:relative lg:left-56">
          <MembersHowToJoin />
        </div>

        <div className="hidden lg:block relative h-0 -z-10 right-[30rem]">
          <img
            src={MembersBackgroundSvg}
            alt="Members Background"
            className=""
          />
        </div>
        <div className="hidden md:block relative h-0 bottom-36 -z-10">
          <img src={MembersLineRight} alt="Members Line Left" />
        </div>
        <div className="lg:relative lg:left-10">
          <Benefits />
        </div>
        <div className="hidden lg:block relative h-0 -z-10 left-[30rem]">
          <img
            src={MembersBackgroundSvg}
            alt="Members Background"
            className=""
          />
        </div>
        <div className="hidden md:block relative h-0 bottom-48 left-20 -z-10">
          <img src={MembersLineLeft} alt="Members Line Left" />
        </div>
        <div className="lg:relative lg:left-56 lg:w-1/2">
          <Faqs />
        </div>
        <div className="hidden lg:block relative h-0 -z-10 right-[30rem]">
          <img
            src={MembersBackgroundSvg}
            alt="Members Background"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Members;
