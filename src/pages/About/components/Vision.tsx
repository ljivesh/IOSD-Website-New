import AboutVision from "@/assets/AboutVision.svg";

const missionData = [
  {
    title: "A Thriving Tech Ecosystem:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
    position: 24,
  },
  {
    title: "Global Impact:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
    position: 18,
  },
  {
    title: "Industry Partnership:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
    position: 12,
  },
  {
    title: "Skill Development:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
    position: 6,
  },
  {
    title: "Community Building:",
    content:
      "A thriving and interconnected tech ecosystem within our institution, where students, faculty, and industry professionals collaborate and innovate.",
    position: 0,
  },
];

const MissionContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <div>
        <img
          src={AboutVision}
          className="hidden md:block md:w-[50rem] xl:w-[30rem] "
        />
        <p className="text-2xl md:text-xl font-bold md:relative md:bottom-10 left-8">
          {title}
        </p>
      </div>
      <p className="text-xs md:text-sm lg:text-xl">{content}</p>
    </div>
  );
};

const Vision = () => {
  return (
    <div className="p-8 flex flex-col gap-12">
      <p className="text-center font-bold text-xl">
        Our vision for IOSD MAIT is to become a leading tech society recognized
        not only within our institution but also on a broader scale. We
        envision:
      </p>
      <div className="flex gap-4">
        <div className="flex flex-col justify-center items-center w-[10%] gap-8 text-4xl md:text-6xl lg:text-7xl font-bold">
          <p>V</p>
          <p>I</p>
          <p>S</p>
          <p>I</p>
          <p>O</p>
          <p>N</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 justify-center md:justify-start">
          {missionData.map((mission, index) => (
            <MissionContent
              key={index}
              title={mission.title}
              content={mission.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
