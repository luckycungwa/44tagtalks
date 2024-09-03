import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  CardBody,
  // Button,
} from "@nextui-org/react";
import CategoryChip from "./CategoryChip";

const PostCardLite = ({
  category,
  subtitle,
  title,
  date,
  imageUrl,
  onClick,
}) => {
  return (
    <Card
      className="flex w-full md:w-80 md:h-48 h-auto flex-col text-left pb-2 flext-start"
      isHoverable
      isPressable
      onClick={onClick}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start h-auto">
        <p className="text-tiny text-white/60 uppercase font-bold">{date}</p>
        <h4 className="text-white/90 font-medium text-xl truncate-text3 w-full flex-wrap text-start">
          {title}
        </h4>
      </CardHeader>
      <CardBody className="bg-[#d4d4d4] h-40 min-h-48 max-h-50 flex w-full object-cover rounded-xl ">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 flex w-full h-full object-cover"
          src={
            imageUrl ||
            "https://assets.lummi.ai/assets/QmYCNnEiMk2Y4HzJaQ2n6gyNt27HCYuwBUCtBAKMcx7ZvW?auto=format&w=1500"
          }
        />
      </CardBody>
      <CardFooter className="absolute bg-[#202020] bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      {/* <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{subtitle}</p>
          </div>
        </div> */}
        <CategoryChip title={category} />
      </CardFooter>
    </Card>
  );
};

export default PostCardLite;
