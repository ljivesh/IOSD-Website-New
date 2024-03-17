import { Card, CardContent} from "@/components/ui/card";
import MembersBenefits from "@/assets/members/MembersImg2.png";

const Benefits = () => {
  return (
    <Card className="flex lg:w-3/4 bg-[#081431] text-foreground border-none flex-col justify-center p-4 md:p-8">
      <div className="flex flex-col-reverse md:flex-row">
        <CardContent className=" flex flex-col items-center md:w-5/6 md:items-start gap-6 text-center md:text-left">
          <p className="text-xl lg:text-3xl xl:text-4xl font-bold">Benefits of becoming a member</p>
          <p className="text-xs lg:text-sm xl:text-lg">
            Becoming a member of IOSD MAIT, the college society, comes with
            several benefits. Firstly, it provides an opportunity to connect and
            collaborate with like-minded individuals who share your interests
            and passions. Membership also allows you to participate in a wide
            range of engaging activities, workshops, and events organized by the
            society, which can enhance your skills and knowledge in various
            domains. Additionally, being a member often means access to valuable
            resources, mentorship opportunities, and a platform to showcase your
            talents and leadership abilities.
          </p>
        </CardContent>
        <CardContent className="md:w-3/5">
          <img src={MembersBenefits} alt="Members Join" className="" />
        </CardContent>
      </div>
    </Card>
  );
};

export default Benefits;
