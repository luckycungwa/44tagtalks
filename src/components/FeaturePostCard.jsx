import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Text,
} from "@nextui-org/react";
import CategoryChip from "./CategoryChip";

const FeaturePostCard = ({ imageUrl, title, subtitle, date, category }) => {
  const handleReadMore = () => {
    console.log("read more");
  };

  return (
    <Card 
      isHoverable 
      isPressable 
      onClick={handleReadMore}
      className="flex-row items-center w-auto h-auto max-h-[270px]"

    >
      <CardBody className="flex-none w-1/3 p-0">
        <Image
          alt="Card background"
          className="object-cover w-full h-full rounded-l-xl"
          src={imageUrl}
        />
      </CardBody>
      <CardHeader className="flex-grow w-2/3 flex-col items-start p-4">
        <h4 className="font-bold text-large mb-1">{title}</h4>
        <p className="text-small text-default-500 mb-2">{subtitle}</p>
        <div className="flex justify-between items-center w-full mt-2">
          <p className="text-tiny text-default-400">{date}</p>
          <CategoryChip title={category} />
        </div>
      </CardHeader>
    </Card>
  );
};

export default FeaturePostCard;