

import MembersbBackgroundSvg from '@/assets/members/MembersBackground.svg';

const MembersBackground = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="overflow-x-hidden">
      {children}
        <img src={MembersbBackgroundSvg} alt="Members Background" className="w-[30%] md:w-[20%] absolute -z-10 left-[70%] top-[30%]" />
        <img src={MembersbBackgroundSvg} alt="Members Background" className="w-[30%] md:w-[20%] absolute -z-10 left-[-5%] top-[50%]" />
        <img src={MembersbBackgroundSvg} alt="Members Background" className="w-[30%] md:w-[20%] absolute -z-10 left-[70%] top-[80%]" />
        <img src={MembersbBackgroundSvg} alt="Members Background" className="w-[30%] md:w-[20%] absolute -z-10 left-[-5%] top-[120%]" />
    </div>
  );
}

export default MembersBackground;