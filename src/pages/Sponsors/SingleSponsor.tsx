import { Card, CardTitle } from "@/components/ui/card";

interface SingleSponsorProps {
  image: string;
  title: string;
}

const SingleSponsor: React.FC<SingleSponsorProps> = (props) => {
  return (
    <Card className="w-64 h-44 flex flex-col items-center p-4 bg-slate-200 gap-3">
      <img
        src={props.image}
        alt="image"
        className="h-3/4"
        // style={{ width: "100%", height: "80%" }}
      />
      <CardTitle className="p-2 flex flex-col gap-4 text-center mb-2">
        {props.title}
      </CardTitle>
    </Card>
  );
};

export default SingleSponsor;
