import React from "react";
import SubmissionForm from "./SubmissionForm";
type Props = {};
import { Input } from "@/components/ui/input";
const Nav = (props: Props) => {
  return (
    <nav className="flex items-center justify-between border-2 border-dashed px-2 h-16 sticky">
      <div>
        <h2 className="text-xl md:text-lg xl:text-2xl lg:font-semibold">
          RecipeHaven
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <form className="">
          <Input type="text" placeholder="Search for recipes..." />
        </form>
        <div>
          <SubmissionForm />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
