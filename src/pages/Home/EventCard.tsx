import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

const EventCard = ({title, date, description, imageUrl}: EventCardProps) => {
  return (
    <Card
      className="w-72 h-[32rem] border-none bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100
      transform hover:scale-105 transition-transform ease-in-out flex flex-col justify-between
      "
    >
      <div className="h-1/2 flex justify-center">

      <img src={imageUrl} className="object-fill opacity-80" alt="event" />
      </div>

      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-2xl text-slate-300 font-bold">{title}</p>
          <Badge>{date}</Badge>
        </div>
        <CardDescription className="line-clamp-5">{description}</CardDescription>
        <Button>View More</Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
