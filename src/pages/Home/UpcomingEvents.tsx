import { Card } from "@/components/ui/card";
import EventCard from "./EventCard";
import { Grip } from "lucide-react";
import { Link } from "react-router-dom";
import OrientationImg from "@/assets/HomeEvents/techtalk.png";
import DevWeekImg from '@/assets/HomeEvents/hackwithmait.jpg';
import Impulse from '@/assets/HomeEvents/impulse.jpg';

const events = [
  {
    id: 1,
    title: "Orientation",
    date: "03/10/23",
    description:
      "Welcome to the *IOSD MAIT*, where innovation knows no bounds! 🌟👩‍💻 Join us on this incredible journey of coding, creativity, and community.",
    imageUrl: OrientationImg,
  },

  {
    id: 2,
    title: "Dev Week",
    date: "29/11/23",
    description:
      "Dive into a week of intensive tech learning during 'DevWeek.' We offer workshops, coding challenges, and hands-on experiences to enhance your skills. 🚀👨‍💻",
    imageUrl: DevWeekImg,
  },

  {
    id: 3,
    title: "Impulse",
    date: "TBA",
    description:
      "Join us for 'Impulse,' our flagship event that brings together tech enthusiasts, industry experts, and students. It's a platform for learning, networking, and innovation. 🌐🎉",
    imageUrl: Impulse,
  },

];

const UpcomingEvents = () => {
  return (
    <div className="p-10">
      <p className="text-4xl font-bold text-center">Upcoming Events</p>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center py-12">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            imageUrl={event.imageUrl}
          />
        ))}
        <Card
          className="w-72 h-[32rem] flex flex-col justify-center items-center bg-indigo-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100 border-none
            transform hover:scale-105 transition-transform duration-300 ease-in-out
          "
        >
          <Link
            to="/events"
            className="flex flex-col justify-center items-center gap-8 text-slate-300 hover:text-slate-100"
          >
            <Grip size={70} />
            <p className="text-3xl font-bold">See more</p>
          </Link>
        </Card>
      </div>
    </div>
  );
};
export default UpcomingEvents;
