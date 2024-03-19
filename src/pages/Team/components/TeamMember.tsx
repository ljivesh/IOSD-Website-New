const TeamMember = ({ member }: any) => {
  return (
    <div
      className="w-60 h-80 flex flex-col justify-between items-center p-4 rounded-lg shadow-lg text-white text-center"
      style={{ backgroundColor: member.color }}
    >
      <div className="flex flex-col gap-2">
        <div className="font-poppins font-medium text-2xl uppercase">
          {member.name}
        </div>
        <div className="flex justify-center w-full relative h-0 z-10">
          <img src={member.img} className="h-52" />
        </div>
      </div>
      <div className="font-rochester font-bold text-3xl">
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
  );
};

export default TeamMember;
