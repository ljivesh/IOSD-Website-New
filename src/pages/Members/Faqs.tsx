import { Card } from "@/components/ui/card";
import FaqAccordian, { Question } from "./FaqAccordian";

const questions: Question[] = [
  {
    question: "What is the membership fee?",
    answer:
      "The membership fee is 1180₹. It is a one-time fee and is non-refundable.",
  },
  {
    question: "What are the benefits of becoming a member?",
    answer:
      "Becoming a member of IOSD MAIT, the college society, comes with several benefits. Firstly, it provides an opportunity to connect and collaborate with like-minded individuals who share your interests and passions. Membership also allows you to participate in a wide range of engaging activities, workshops, and events organized by the society, which can enhance your skills and knowledge in various domains. Additionally, being a member often means access to valuable resources, mentorship opportunities, and a platform to showcase your talents and leadership abilities. It can also be a fulfilling experience that contributes to personal and professional growth while fostering a sense of community and camaraderie within your college.",
  },
  {
    question: "How do I become a member?",
    answer:
      "To join IOSD MAIT, the college society, start by attending their membership drive or orientation session. Fill out the application form with accurate details and pay any required membership fees. Engage actively in society meetings, events, and responsibilities. Make the most of networking opportunities with fellow members. Contribute your skills and ideas, and enjoy the enriching experience of being a part of IOSD MAIT.",
  },
  {
    question: "What are the responsibilities of a member?",
    answer:
      "The responsibilities of a member include attending society meetings, participating in society events, and contributing to the society in any way possible.",
  },
  {
    question: "Is membership limited to a specific duration?",
    answer:
      "Membership with IOSD MAIT is not limited to a specific duration. Once you become a member, you can continue to be a part of the society until you graduate from the college or choose to discontinue your membership.",
  },
  {
    question: "What kind of events and activities does the society organize?",
    answer:
      "IOSD MAIT organizes a wide range of events and activities, including technical workshops, coding competitions, hackathons, guest lectures, panel discussions, and community outreach programs. The society aims to provide a platform for students to enhance their technical skills, explore new technologies, and connect with industry professionals.",
  },
];

const Faqs = () => {
  return (
    <Card className="bg-[#081431] flex flex-col gap-4 text-foreground border-none p-6">
      <p className="text-2xl font-bold text-center">Frequently Asked Questions</p>
      <div className="flex flex-col md:flex-row md:gap-8">
        <FaqAccordian questions={questions.slice(0, 3)} />
        <FaqAccordian questions={questions.slice(3, 6)} />
      </div>
    </Card>
  );
};

export default Faqs;
