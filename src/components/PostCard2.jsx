import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Chip,
} from "@nextui-org/react";
import CategoryChip from "./CategoryChip";

const PostCard2 = ({ imageUrl, title, subtitle, date,}) => {
  const handleReadMore = () => {
    console.log("read more");
  };

  return (
    <Card className="flex-row items-start w-auto max-h-[150px] max-w-[420px]" isHoverable isPressable onClick={handleReadMore}>
      <CardBody className="py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageUrl || "url('/default.jpeg')"}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-between flex-col text-start">
        <h4 className="font-bold text-large">{title}</h4>
        <p className="text-tiny uppercase truncate-text2  opacity-80">{subtitle}</p>
        <div className="flex justify-between w-full">
          <p className="text-tiny">{date}</p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default PostCard2;
