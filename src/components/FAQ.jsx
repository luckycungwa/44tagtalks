import React from "react";
import { Accordion, AccordionItem,} from "@nextui-org/react";

const FAQ = () => {
  // FAQ data
  const faqContent = [
    {
      question: "What is 44Tag Talks about?",
      answer: "44Tag Talks is a blog dedicated to graphic design, freelancing, and creative entrepreneurship. We provide insights, tips, tutorials, and industry news to help graphic designers and creative professionals grow their skills and businesses."
    },
    {
      question: "How often do you publish new content?",
      answer: "We aim to publish new articles at least twice a week. You can subscribe to my newsletter to get notified about new posts."
    },
    {
      question: "Can I contribute to 44Tag Talks?",
      answer: "Yes! We welcome guest posts from experienced designers and creative professionals. Please check my \"Write for Us\" page for guidelines and submission process."
    },
    {
      question: "What design software do you recommend for beginners?",
      answer: "For beginners, I often recommend starting with Adobe Photoshop, Illustrator, and InDesign. However, there are also great free alternatives like GIMP, Inkscape, and Canva that can help you get started."
    },
    {
      question: "How can I develop my own design style?",
      answer: "Developing your own style takes time and practice. We recommend exploring different design styles, experimenting with various techniques, and consistently creating personal projects. My article \"Finding Your Design Voice\" goes into more detail on this topic."
    },
    {
      question: "How do I price my graphic design services?",
      answer: "Pricing can be tricky. Consider factors like your experience, the project complexity, time required, and market rates. We have a detailed guide on pricing strategies in my \"Freelance Fundamentals\" series."
    },
    {
      question: "How can I find my first clients as a freelance designer?",
      answer: "Start by leveraging your network, creating a strong portfolio, and using freelance platforms. You can also consider offering pro bono work for non-profits to build your portfolio. Check out my \"Landing Your First Client\" article for more strategies."
    },
    {
      question: "Do I need a formal education in graphic design to be successful?",
      answer: "While a formal education can be beneficial, it's not absolutely necessary. Many successful designers are self-taught. What's most important is developing a strong portfolio and continuously improving your skills. We have several articles on self-learning strategies in my \"Education\" category."
    }
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
           {faqContent.map((item, index) => (
              <AccordionItem key={index + 1} aria-label={`Question ${index + 1}`} title={item.question}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQ;
