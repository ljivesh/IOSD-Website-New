import SingleSponsor from "./SingleSponsor";
import sponsor1 from "@/assets/sponsors/5ire.png";
import sponsor2 from "@/assets/sponsors/unstop.svg";
import sponsor3 from "@/assets/sponsors/evepaper.png";
import sponsor4 from "@/assets/sponsors/corizo.png";
import sponsor5 from "@/assets/sponsors/wolfram.png";
import sponsor6 from "@/assets/sponsors/codingblocks.webp";
import sponsor7 from "@/assets/sponsors/mysphere3.webp";
import sponsor8 from "@/assets/sponsors/axure.svg";
import sponsor9 from "@/assets/sponsors/stockedge.png";

interface SponsorsProps {
  title: string;
  image: string;
}

const Sponsors: React.FC<SponsorsProps> = ({ title, image }) => {
  return (
    <div className="m-10">
      <p className="text-4xl font-bold text-center">Our Sponsors</p>
      <div className="p-10">
        <p className="text-4xl font-bold text-center">{title}</p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 items-center py-12">
          <SingleSponsor title="5ire" image={sponsor1} />
          <SingleSponsor title="Unstop" image={sponsor2} />
          <SingleSponsor title="Evepaper" image={sponsor3} />
          <SingleSponsor title="Corizo" image={sponsor4} />
          <SingleSponsor title="Wolfram-Alpha" image={sponsor5} />
          <SingleSponsor title="Coding-Blocks" image={sponsor6} />
          <SingleSponsor title="My-Sphere" image={sponsor7} />
          <SingleSponsor title="Axure" image={sponsor8} />
          <SingleSponsor title="Stock-Edge" image={sponsor9} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
