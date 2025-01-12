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
      className="flex w-full md:h-52 md:w-80 md:h-48 h-auto flex-col text-left pb-2 flext-start"
      isHoverable
      isPressable
      onClick={onClick}
    >
      <CardHeader className="bg-[#00000078] absolute z-10 top-1 flex-col items-start h-full">
        <p className=" text-tiny text-white/60 uppercase font-bold">{date}</p>
        <h4 className="text-white/90 font-medium text-xl truncate-text3 w-full flex-wrap text-start">
          {title}
        </h4>
      </CardHeader>
      <CardBody className="p-0 bg-[#d4d4d4] object-cover rounded-xl ">
        <Image
          removeWrapper
          alt={title +" background cover"}
          className="z-0 flex w-auto max:h-full  object-cover"
          src={
            imageUrl || "url('/default.jpeg')"
          }
        />
      </CardBody>
      <CardFooter className="absolute bg-[#000000a9] bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-tiny">
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
