import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import OrientationImg from "@/assets/techtalk.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventCard = () => {
  return (
    <Card className="w-64">
      <img src={OrientationImg} alt="orientation" />

      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <CardTitle>Event Title</CardTitle>
          <Badge>12/04/24</Badge>
        </div>
        <CardDescription>Event Description</CardDescription>
        <Button>View More</Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
