import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Event1 from "@/assets/events/Event1.png";
import Event2 from "@/assets/events/Event2.png";
import Event3 from "@/assets/events/Event3.png";
import EventsCarouselItem, { Event } from "./EventsCarouselItem";

const events: Event[] = [
  {
    title: "Impulse",
    date: "Apr 2024",
    location: "MAIT, Delhi",
    description:
      "Join us for 'Impulse,' our flagship event that brings together tech enthusiasts, industry experts, and students. It's a platform for learning, networking, and innovation.",
    image: Event1,
  },
  {
    title: "Orientation",
    date: "Oct 2024",
    location: "MAIT, Delhi",
    description:
      "'Orientation' is your gateway to 'IOSD MAIT.' Learn about our society's mission, vision, and how you can get involved. Meet fellow members and discover exciting opportunities.",
    image: Event2,
  },
  {
    title: "DevWeek",
    date: "Dec 2024",
    location: "MAIT, Delhi",
    description:
      "Dive into a week of intensive tech learning during 'DevWeek.' We offer workshops, coding challenges, and hands-on experiences to enhance your skills.",
    image: Event3,
  },
];

const EventsCarousel = () => {
  return (
    <Carousel className="w-[95%]">
      <CarouselContent className="">
        {events.map((event) => (
          <EventsCarouselItem key={event.title} event={event} />
        ))}
      </CarouselContent>

      <CarouselPrevious className=""/>
      <CarouselNext />
    </Carousel>
  );
};

export default EventsCarousel;
