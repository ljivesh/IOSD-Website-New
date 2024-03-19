import TeamHeroImg from "@/assets/Team/teamhero.png";

const TeamHero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-300 to-cyan-400 flex flex-col md:flex-row-reverse gap-6 py-8 px-4 justify-center items-center">
      <div className="w-3/4">
        <img
          src={TeamHeroImg}
          alt="team hero"
          className=""
        />
      </div>
      <div className="flex flex-col items-center gap-3 md:w-10/12">
        <p className="text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-[#0A1227]">People are Everything!</p>
        <p className="text-center text-sm xl:text-lg text-black md:w-3/4">
          Allow us to introduce our dedicated and passionate team at the
          International Organization of Software Developers (IOSD) MAIT. Our
          team is a diverse group of individuals who share a common passion for
          software development and technology. With a collective commitment to
          fostering innovation and excellence, we come from various backgrounds,
          bringing a wide range of skills and experiences to the table
        </p>
      </div>
    </div>
  );
};

export default TeamHero;
