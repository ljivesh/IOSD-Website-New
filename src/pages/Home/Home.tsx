import Hero from "./Hero"
import UpcomingEvents from "./UpcomingEvents"
import WhoAreWe from "./WhoAreWe"

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <Hero />
      <WhoAreWe />
      <UpcomingEvents />
    </div>
  )
}

export default Home