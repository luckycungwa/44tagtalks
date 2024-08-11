import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const FeaturePostCard = ({ imageUrl, title, subtitle, date, category }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    console.log("read more");
    navigate("/post/:slug");
  };

  return (
    <Card
      isHoverable
      isPressable
      onClick={handleReadMore}
      className="flex-row items-start w-auto max-h-[150px]"
    >
      <CardBody className="flex-none flex-row">
        <div className=" flex items-center justify-center">
          <Image
            alt="Card background"
            className="object-cover min-w-auto max-w-[120px] min-h-auto max-h-[120px] rounded-l-xl"
            src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width={320}
          />
        </div>
        <div className="flex flex-col flex-wrap w-auto justify-between h-full w-auto pl-3 gap-8 md:gap-12">
          <p className="font-bold truncate-text3">{title}</p>
          <p className="text-tiny text-default-400 bottom-0">{date}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeaturePostCard;
