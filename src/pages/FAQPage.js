import React from "react";
import FAQ from "../components/FAQ";
import { Card } from "@nextui-org/react";

const FAQPage = () => {
  return (
    <>
    
        <section className="w-full flex flex-col justify-center items-center px-4 md:px-24 gap-4 mt-4 mb-8 ">
          <div className="flex flex-col gap-4 py-4">
            <h1 className="uppercase text-3xl font-bold text-center">
              Got Any Questions? Look here.
            </h1>
          </div>
          <Card className="flex flex-reverse px-0 md:px-8 grid grid-cols-1 md:grid-cols-2  h-full w-auto justify-center items-start gap-8 py-8 md:m-8 border border-[#2c2c2c] border-8">
            <div className="flex-col text-center h-full w-full justify-center items-center ">
              <div className="w-auto h-full grid grid-cols-1 items-center h-auto gap-4 justify-center items-center">
                <div className="w-full h-full flex items-start justify-center ">
                  <div className="flex-col flex px-4 pb-2 gap-4 flex-col justify-between">
                    <div className="text-start">
                      <h1 className="text-3xl font-bold capitalize">
                        Got Questions? We've Got Answers.
                      </h1>
                      <p>
                        {" "}
                        Here are some of the questions asked by portential
                        clients like yourself. If you need help or have any
                        questions? Ask away.
                      </p>
                    </div>
                    <img
                      className="FAQImage"
                      alt="FAQ Abstract cover"
                      src={"https://assets.lummi.ai/assets/QmU42UCUCEpeNkzHN4yMfavf96x9ixBgtxvbjc4GJkqj6R?auto=format&w=1500"}
                    />
                    <p className="text-xs text-start text-black/50 hidden md:block">
                      Got questions about our services, products, or anything
                      else? We're here to help.{" "}
                      <a href="/contacts" className="underline text-[#ff4b14]">
                        Get in touch
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <FAQ />
          </Card>
        </section>
    </>
  );
};

export default FAQPage;
