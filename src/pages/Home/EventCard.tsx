import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import OrientationImg from "@/assets/techtalk.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventCard = () => {
  return (
    <Card
      className="w-64 border-none bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100
      transform hover:scale-105 transition-transform duration-300 ease-in-out
      "
    >
      <img src={OrientationImg} className="opacity-80" alt="orientation" />

      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-2xl text-slate-300 font-bold">Event Title</p>
          <Badge>12/04/24</Badge>
        </div>
        <CardDescription>Event Description</CardDescription>
        <Button>View More</Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
