
const TeamMember = ({ member }: any) => {
    return (
        <div className="w-80 h-70 flex flex-col justify-between items-center p-4 rounded-lg shadow-lg text-white text-center"
            style={{ backgroundColor: member.color }}>
            <div className="font-poppins font-medium text-2xl my-2 uppercase">{member.name}</div>
            <div className="">
                <img src={member.img} className="w-min-full h-72" />
            </div>
            <div className="font-poppins font-light text-2xl my-5">
                <span>{member.role}</span>
            </div>
            <div className="text-white">
                <div className="flex gap-5 text-white text-4xl">
                    {member.linkedin && <div className="">
                        <a href={member.linkedin} className="text-white">                            
                            <i className="bx bxl-linkedin-square bx-fade-left"></i>
                        </a>
                    </div>}
                    {member.insta && <div className="">
                        <a href={member.insta}>
                            <i className="bx bxl-instagram bx-fade-right"></i>
                        </a>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default TeamMember