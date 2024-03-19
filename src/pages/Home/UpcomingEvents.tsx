import { Card } from "@/components/ui/card";
import EventCard from "./EventCard";
import { Grip } from "lucide-react";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <div className="p-10">
      <p className="text-4xl font-bold text-center">Upcoming Events</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center py-12">
        <EventCard />
        <EventCard />
        <EventCard />
        <Card
          className="w-64 h-[27rem] flex flex-col justify-center items-center bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100 border-none
            transform hover:scale-105 transition-transform duration-300 ease-in-out
          "
        >
          <Link to="/events" className="flex flex-col justify-center items-center gap-8 text-slate-300 hover:text-slate-100">
            <Grip size={70} />
            <p className="text-3xl font-bold">See more</p>
          </Link>
        </Card>
      </div>
    </div>
  );
};
export default UpcomingEvents;
