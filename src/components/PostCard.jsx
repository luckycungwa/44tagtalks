import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@nextui-org/react";
import CategoryChip from "./CategoryChip";

const PostCard = ({ imageUrl, title, subtitle, date, category, onClick }) => {


  return (
    <Card className="pb-4 text-left min-h-[300px] max-w-[350px] w-auto h-auto max-h-[270px]" isHoverable isPressable onClick={onClick}>
      <CardBody className="py-2">
        <Image
          alt={title +" background image"}
          className="object-cover rounded-xl"
          src={imageUrl || "https://via.placeholder.com/270"}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start justify-between flex-col">
        <h4 className="font-bold truncate-text2">{title}</h4>
        <p className="text-tiny uppercase font-bold truncate-text">{subtitle}</p>
        <div className="flex justify-between w-full">
          <p className="text-tiny">{date}</p>
          <CategoryChip title={category} />
        </div>
      </CardHeader>
    </Card>
  );
};

export default PostCard;