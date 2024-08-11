import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import CategoryChip from "./CategoryChip";

const PostCardLite = ({category, title, date, imageUrl, onClick}) => {
  return (
    
      <Card
      isHoverable
        isFooterBlurred
        className="col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Your day your way
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Your checklist for better sleep
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://lh5.googleusercontent.com/SmoLtbvqehwiPdnKYtDUqriNumZfApjodreXI4DIxnC7iy-oCHjTJhcLSrEM-ouNLmy5mZFPA8LgbMZADsEcE5QKpFT6c_-SZ8JW5ZI3sREsCqI0nNfQOYrCDrNzK9E_TmljwwzoPTifNdNa6E0TEeceCTLz9RkBKu6ezYiH7V1K7ah2dqAzkxL0LQ"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p>
            </div>
          </div>
          <CategoryChip title={category} />
        </CardFooter>
      </Card>
    
  );
};

export default PostCardLite;