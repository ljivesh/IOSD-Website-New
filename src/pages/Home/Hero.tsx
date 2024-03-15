import HomeHero from "@/assets/home-hero.svg";
import { Separator } from "@/components/ui/separator";
import { CalendarRange, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center p-10 md:p-20">
      <div className="lg:w-2/3 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-5xl">IOSD MAIT</p>
          <p className="text-sm md:text-lg">
            Tech Innovations, Rooted in Heritage Welcome to 'IOSD MAIT'—a
            thriving hub where technology and tradition harmoniously converge.
            We are a passionate community of tech enthusiasts, driven by
            innovation and deeply rooted in our rich heritage.
          </p>
        </div>
        <div className="flex py-10 justify-between xl:w-2/3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Users size={30} />
              <Separator className="w-1/2 h-[0.15rem]" />
            </div>
            <div>
              <p className="text-4xl font-bold">100+</p>
              <p className="w-5/6">
                Active members, all working together to build a strong and
                thriving tech community.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <CalendarRange size={30} />
              <Separator className="w-1/2 h-[0.15rem]" />
            </div>
            <div>
              <p className="text-4xl font-bold">10+</p>
              <p className="w-5/6">
                Active events, each that provides great exposure and helps in
                building a stronger network.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={HomeHero} className="w-[40rem]"></img>
      </div>
    </div>
  );
};

export default Hero;
