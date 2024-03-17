import HowToJoinUpwards from "@/assets/members/HowToJoinUpwards.svg";

const HowToJoinElementUpwards = ({ content }: { content: string }) => {
  return (
    <div className="w-48">
      <p className="text-sm w-3/4 h-0 relative top-28 left-[12%] text-center">
        {content}
      </p>
      <img src={HowToJoinUpwards} alt="How to join downwards" className="" />
    </div>
  );
};

export default HowToJoinElementUpwards;
