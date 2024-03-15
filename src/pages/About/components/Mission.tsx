import AboutMission from "@/assets/AboutMission.png";
import { useMediaQuery } from "@uidotdev/usehooks";

const missionData = [
  {
    title: "Encouraging our members",
    content:
      "to leverage technology for positive social impact by engaging in meaningful projects and initiatives.",
    position: 32,
  },
  {
    title: "Providing high-quality",
    content:
      "educational resources, workshops, and events to ensure that our members stay at the forefront of technological advancements.",
    position: 24,
  },
  {
    title: "Facilitating collaboration",
    content:
      "and networking opportunities among tech enthusiasts, fostering a culture of learning and creativity.",
    position: 16,
  },
  {
    title: "Empowering Students",
    content:
      "with cutting-edge technology skills and knowledge, enabling them to excel in the ever-evolving tech industry.",
    position: 8,
  },
  {
    title: "Promoting diversity",
    content:
      "and inclusion in the tech community, ensuring that everyone has equal access to opportunities and resources.",
    position: 0,
  },
];

const MissionContent = ({
  title,
  content,
  position,
}: {
  title: string;
  content: string;
  position: number;
}) => {

    const isSmallDevice = useMediaQuery("only screen and (min-width: 376px) and (max-width : 768px)");
    // const isMediumDevice = useMediaQuery(
    //   "only screen and (min-width : 769px) and (max-width : 992px)"
    // );
    const isLargeDevice = useMediaQuery(
      "only screen and (min-width : 993px) and (max-width : 1200px)"
    );
    const isExtraLargeDevice = useMediaQuery(
      "only screen and (min-width : 1201px)"
    );

    let relPosition = 0;

    if(isExtraLargeDevice) {
        relPosition = position + 2;
    } else if(isLargeDevice) {
        relPosition = position*0.8 + 3;
    } else if(isSmallDevice) {
        relPosition = position*0.7;
    }


  return (
    <div className="md:relative" style={{ right: `${relPosition}rem` }}>
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-xs md:text-xs lg:text-sm xl:text-lg w-[20rem] lg:w-[30rem]">{content}</p>
    </div>
  );
};

const Mission = () => {
  return (
    <div className="p-8 flex flex-col gap-12">
      <p className="text-center font-bold text-xl">
        At IOSD MAIT, our mission is to foster a vibrant and innovative tech
        community within our institution. We are committed to:
      </p>
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center w-[10%] gap-8 text-4xl md:text-6xl xl:text-7xl font-bold">
          <p>M</p>
          <p>I</p>
          <p>S</p>
          <p>S</p>
          <p>I</p>
          <p>O</p>
          <p>N</p>
        </div>
        <img
          className="w-2/5 md:w-2/3 hidden md:block"
          src={AboutMission}
          alt="AboutMission"
        />

        <div className="flex flex-col gap-8 md:gap-6 lg:gap-6 xl:gap-8 justify-center md:justify-start">
            {missionData.map((mission, index) => (
                <MissionContent
                key={index}
                title={mission.title}
                content={mission.content}
                position={mission.position}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
