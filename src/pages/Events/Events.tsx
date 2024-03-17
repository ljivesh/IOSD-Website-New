import EventsCarousel from "./EventsCarousel"

const Events = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center gap-8">
      <p className="text-4xl font-bold text-center">Our Events</p>
      <EventsCarousel />
    </div>
  )
}

export default Events