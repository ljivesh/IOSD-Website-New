import { CarouselItem } from "@/components/ui/carousel";

export type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

const EventsCarouselItem = ({ event }: { event: Event }) => {
  return (
    <CarouselItem className="px-14 lg:px-20">
      <div className="flex flex-col gap-2">
        <img
          src={event.image}
          className="md:ml-10 lg:ml-16"
          alt="Event1"
        />
        <div className="h-0 text-3xl md:text-6xl lg:text-7xl xl:text-8xl relative bottom-20 md:bottom-28 lg:bottom-36 xl:bottom-48 text-right font-rubik">
          <p className="uppercase">{event.date}</p>
          <p className="">{event.location}</p>
        </div>
        <div className="h-0 transform -rotate-90 text-3xl md:text-6xl lg:text-7xl xl:text-9xl font-bold italic relative w-0 right-8 md:right-4 lg:right-4 xl:right-16 bottom-2">
          <p className="">{event.title}</p>
        </div>
        <p className="text-sm lg:text-lg xl:text-2xl">{event.description}</p>
      </div>
    </CarouselItem>
  );
};

export default EventsCarouselItem;
