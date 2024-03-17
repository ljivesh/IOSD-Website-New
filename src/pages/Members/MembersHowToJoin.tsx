import { Card, CardContent } from "@/components/ui/card";
import HowToJoinElementDownwards from "./HowToJoinElementDownwards";
import HowToJoinElementUpwards from "./HowToJoinElementUpwards";

const steps = [
  {
    step: 1,
    content:
      "To join IOSD MAIT, the college society, start by attending their membership drive or orientation session.",
  },
  {
    step: 2,
    content:
      "Fill out the application form with accurate details and pay any required membership fees.",
  },
  {
    step: 3,
    content:
      "Engage actively in society meetings, events, and responsibilities",
  },
  {
    step: 4,
    content: "Make the most of networking opportunities with fellow members.",
  },
  {
    step: 5,
    content:
      "Contribute your skills and ideas, and enjoy the enriching experience of being a part of IOSD MAIT.",
  },
];

const MembersHowToJoin = () => {
  return (
    <Card className="bg-[#081431] w-[90%] md:w-full text-foreground border-none p-10 lg:px-20">
      <CardContent>
        <p className="text-xl md:text-4xl text-center font-bold">How to Join?</p>
      </CardContent>
      <div className="flex flex-col items-center justify-center gap-4 md:gap-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          {steps.slice(0, 3).map((step, index) => (
            <HowToJoinElementDownwards key={index} content={step.content} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          {steps.slice(3, 5).map((step, index) => (
            <HowToJoinElementUpwards key={index} content={step.content} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default MembersHowToJoin;
