import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Question = {
  question: string;
  answer: string;
};

type FaqAccordianProps = {
  questions: Question[];
};

const FaqAccordian = ({ questions }: FaqAccordianProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((question, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">{question.question}</AccordionTrigger>
          <AccordionContent>{question.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordian;
