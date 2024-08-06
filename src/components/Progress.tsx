import React from "react";

type Props = {
  y: number;
};

const Progress = ({ y }: Props) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 h-10 bg-red-600 origin-[0%]"
        style={{ scale: y }}
      />
    </div>
  );
};

export default Progress;
