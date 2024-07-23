import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1662982693758-f69fcb81e7d2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover'></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex items-center justify-center h-full flex-wrap p-5">
        <div className="w-[50%]">
          <h2 className="text-2xl lg:text-4xl font-medium text-orange-400 py-2">Explore,Share,Enjoy Classic & Animated Recipe</h2>
          <p className="text-lg py-3 text-white">
            Recipe Haven offers a wide aray of classic and animated recipes,
            providing detailed instructions and engagin visuals for users to
            expore share & enjoy
          </p>
          <Button className="bg-orange-400 w-40 hover:bg-orange-500">View Recipes</Button>
        </div>
        <div className="w-auto">
          <Image
            src="https://images.unsplash.com/photo-1628294896516-344152572ee8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZGlzaHxlbnwwfDB8MHx8fDA%3D"
            alt="dish"
            width={350}
            height={350}
            className="object-cover aspect-square shadow-xl rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
