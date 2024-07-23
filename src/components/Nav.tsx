import React from "react";

type Props = {};
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
const Nav = (props: Props) => {
  return (
    <nav className="flex items-center justify-between border-2 border-dashed px-2 h-16">
      <div>
        <h2 className="text-xl md:text-lg xl:text-2xl lg:font-semibold">
          RecipeHaven
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <form className="">
          <Input type="text" placeholder="Search for recipes..." />
        </form>
        <Button type="submit">Submit Recipe</Button>
      </div>
    </nav>
  );
};

export default Nav;
