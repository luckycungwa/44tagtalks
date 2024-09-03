import React from "react";
import {
  Accordion,
  AccordionItem,
  Card,
  CardHeader,
  Divider,
} from "@nextui-org/react";

export default function FAQSection() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="my-8 w-full flex-col flex justify-center items-center">
        <div>
          <h1 className="uppercase text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
        </div>
        <Card className="px-4 py-2 md:w-1/2 w-full flex justify-center items-end ">
          <CardHeader className="w-full">
            <h3 className="text-xl font-bold my-0">
            Here are some of the questions you might have in mind.  If you need help or have any questions? Ask away.
            </h3>
          </CardHeader>
          <Divider />
          <Accordion  shadow className="text-start items-start">
            <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </>
  );
}
