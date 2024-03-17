import { Card, CardContent } from "@/components/ui/card";
import MembersJoin from "@/assets/members/MembersImg1.png";
import { Button } from "@/components/ui/button";

const MembersJoinOurTeam = () => {
  return (
    <Card className="flex lg:w-[80%] bg-[#081431] text-foreground border-none flex-col-reverse md:flex-row justify-center items-center p-5 xl:p-10">
      <CardContent className=" flex flex-col items-center gap-6 text-center">
        <p className="text-2xl lg:text-4xl xl:text-5xl font-bold">Join Our Growing Team!!</p>
        <p className="lg:text-xl xl:text-2xl md:w-3/4">
          We love what we do and we do it with passion. We value the
          experimentation of the message and smart incentives.
        </p>
        <Button className="bg-[#76C8FF] text-black">Become a member now!</Button>
      </CardContent>
      <CardContent className="">
        <img src={MembersJoin} alt="Members Join" className="" />
      </CardContent>
    </Card>
  );
};

export default MembersJoinOurTeam;