import React from "react";

type Props = {};

interface RecipeFeature {
  title: string;
  imageUrl: string;
}

const recipeFeatures: RecipeFeature[] = [
  {
    title: "Discover Classic Recipes",
    imageUrl:
      "https://images.unsplash.com/photo-1667236257529-3268f4ee112a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHwwfDB8fHww",
  },
  {
    title: "Explore Animated Recipes",
    imageUrl:
      "https://images.unsplash.com/photo-1721545671409-08a8d2258fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfDB8Mnx8fDA%3D",
  },
  {
    title: "Detailed Recipe Guides",
    imageUrl:
      "https://images.unsplash.com/photo-1721545671256-3732159eec74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfDB8Mnx8fDA%3D",
  },
  {
    title: "Engaging Visuals",
    imageUrl:
      "https://images.unsplash.com/photo-1651978595428-b79169f223a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    title: "Share with Community",
    imageUrl:
      "https://images.unsplash.com/photo-1629471722874-13d4208d62ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHwwfDB8fHww",
  },
];

import Image from "next/image";
const Guide = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen  gap-10 flex-wrap">
      <div>
        {recipeFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-start my-2 w-96 bg-orange-50 hover:bg-orange-300 duration-500 ease-in rounded-lg hover:shadow-lg"
          >
            <Image
              src={feature.imageUrl}
              alt={feature.title}
              width={100}
              height={100}
              className="rounded-md hover:shadow-md"
            />
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGRpc2glMjBmZWF0dXJlc3xlbnwwfDB8MHx8fDI%3D"
          alt="food image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Guide;
