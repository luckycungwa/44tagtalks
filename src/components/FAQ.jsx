import React from "react";
import { Accordion, AccordionItem,} from "@nextui-org/react";

const FAQ = () => {
  // FAQ data
  const data = [
    {
      title: "What services do you offer?",
      content:
        "We offer a comprehensive range of graphic design services, including logo design, flyer and brochure design, art cover design, brand identity development, and more.",
    },
    {
      title: "How do you approach a design project?",
      content:
        "We believe in a collaborative approach. We'll start by understanding your brand, target audience, and goals. Then, we'll create initial concepts and work closely with you to refine them until they perfectly capture your vision.",
    },
    {
      title: "Do you offer printing services?",
      content:
        "While we don't offer in-house printing, we can recommend reliable printers who can handle your printing needs.",
    },
    {
      title: "How do you determine your pricing?",
      content:
        " Our pricing is based on the complexity of the project, the scope of work involved, and your specific requirements. We'll provide you with a detailed quote before we begin.",
    },
    {
      title: "What is your payment policy?",
      content:
        " We typically require a 75% upfront payment to initiate a project. The remaining balance is due upon completion.",
    },
    {
      title: "How long does a typical project take?",
      content:
        "The timeline for a project can vary depending on its size and complexity. We'll provide you with an estimated timeline at the beginning of our engagement.",
    },
    {
      title: " How long have you been in business?",
      content:
        " While we are a relatively new agency, our team has years of combined experience in graphic design.",
    },
    {
      title: " How do you support local businesses and artists?",
      content:
        "We are committed to empowering local businesses and artists. We offer affordable rates and personalized services to help them establish or elevate their brands.",
    },
    {
      title: "Do you collaborate with other creative professionals?",
      content:
        "Yes, we often collaborate with other creative professionals, such as photographers, copywriters, and web developers, to provide comprehensive solutions for our clients.",
    },
    {
      title: "How do you ensure client satisfaction?",
      content:
        "We prioritize open communication, transparency, and timely delivery. We strive to exceed your expectations and build long-lasting relationships.",
    },
  ];

  return (
    <>
   
      <div className="w-full h-full flex flex-col items-start justify-center px-4 md:px-4">
      <h1 className="text-xl w-full text-center font-bold capitalize mb-4">Frequently Asked Questions</h1>
       
        <div className="w-full pb-4">
          <Accordion
            variant="bordered"
            isCompact
            aria-label="Frequently Asked Questions"
          >
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={item.title}
                title={item.title}
              >
                <p className="text-sm text-start text-neutral-500 mb-2">{item.content}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQ;
