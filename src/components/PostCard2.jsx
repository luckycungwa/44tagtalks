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

const PostCard = ({ imageUrl, title, subtitle, date, category }) => {
  const handleReadMore = () => {
    console.log("read more");
  };

  return (
    <Card className="pb-4 max-w-[270px] w-auto h-auto max-h-[270px]" isHoverable isPressable onClick={handleReadMore}>
      <CardBody className="py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imageUrl}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-between flex-col">
        <h4 className="font-bold text-large">{title}</h4>
        <p className="text-tiny uppercase font-bold">{subtitle}</p>
        <div className="flex justify-between w-full">
          <p className="text-tiny">{date}</p>
          <CategoryChip title={category || "Uncategorized"} />
        </div>
      </CardHeader>
    </Card>
  );
};

export default PostCard;
