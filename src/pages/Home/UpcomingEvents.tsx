import { Card, CardTitle } from "@/components/ui/card";
import EventCard from "./EventCard";
import { Grip } from "lucide-react";



const UpcomingEvents = () => {
  return (
    <div className="p-10">
      <p className="text-4xl font-bold text-center">Upcoming Events</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center py-12">
        <EventCard />
        <EventCard />
        <EventCard />
        <Card className="w-64 h-[26rem] flex flex-col gap-8 justify-center items-center">
        <Grip size={70}/>
        <CardTitle>See more</CardTitle>
        </Card>
      </div>
    </div>
  );
};
export default UpcomingEvents;