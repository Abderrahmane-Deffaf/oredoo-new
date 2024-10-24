import faq_image from "@/assets/faq.png";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type accordionType = {
  question: string;
  answer: string;
};

export default function Faq() {
  const content: accordionType[] = [
    {
      question: "Qu'est-ce que « N'YOOZ » ?",
      answer:
        "N'YOOZ est une offre prépayée sans engagement avec plein d'avantages tel que le choix du numéro mobile, la personnalisation du forfait, la gratuité de Snapchat, bonus internet suite au parrainage d'un ami sur l'application My Ooredoo.Rejoignez N'YOOZ et téléchargez l'application My Ooredoo !",
    },
    {
      question: "Quels avantages propose l'offre N'YOOZ ?",
      answer:
        "N'YOOZ est une offre prépayée sans engagement avec plein d'avantages tel que le choix du numéro mobile, la personnalisation du forfait, la gratuité de Snapchat, bonus internet suite au parrainage d'un ami sur l'application My Ooredoo.Rejoignez N'YOOZ et téléchargez l'application My Ooredoo !",
    },
    {
      question:
        "Quelles sont les fonctionnalités disponibles avec l'offre N'YOOZ sur l'application My Ooredoo ?",
      answer:
        "N'YOOZ est une offre prépayée sans engagement avec plein d'avantages tel que le choix du numéro mobile, la personnalisation du forfait, la gratuité de Snapchat, bonus internet suite au parrainage d'un ami sur l'application My Ooredoo.Rejoignez N'YOOZ et téléchargez l'application My Ooredoo !",
    },
    {
      question:
        "Quels avantages propose l'ofQuels sont les avantages à l'acquisition d'une SIM N'YOOZ à travers l'application My Ooredoo ?",
      answer:
        "N'YOOZ est une offre prépayée sans engagement avec plein d'avantages tel que le choix du numéro mobile, la personnalisation du forfait, la gratuité de Snapchat, bonus internet suite au parrainage d'un ami sur l'application My Ooredoo.Rejoignez N'YOOZ et téléchargez l'application My Ooredoo !",
    },
    {
      question:
        "Quels sont les forfaits N'YOOZ ayant une validité journalière (24 H) ?",
      answer:
        "N'YOOZ est une offre prépayée sans engagement avec plein d'avantages tel que le choix du numéro mobile, la personnalisation du forfait, la gratuité de Snapchat, bonus internet suite au parrainage d'un ami sur l'application My Ooredoo.Rejoignez N'YOOZ et téléchargez l'application My Ooredoo !",
    },
  ];
  return (
    <div className=" !m-0 bg-[#F7F7F7] py-16">
      <div className="wrapper flex gap-4 ">
        <div className=" flex h-full justify-center flex-col items-center basis-1/2">
          <h2>Frequently Asked Questions</h2>
          <Image src={faq_image} alt="" />
        </div>
        <div className=" basis-1/2">
          <Accordion type="single" collapsible className="w-full">
            {content.map((Element, index) => (
              <AccordionItem key={Element.question} value={`item-${index}`}>
                <AccordionTrigger className=" text-lg font-bold text-left">
                  {Element.question}
                </AccordionTrigger>
                <AccordionContent className=" text-gray-600">
                  {Element.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
