import React from "react";

const Quote = () => {
  return (
    <div className="bg-gray-100 h-screen lg:w-[50%] font-poppins">
      <div className="h-full flex items-center justify-center ">
        <div className="w-96">
          <h3 className="text-xl font-bold">
            "The customer service I received was exceptional. The support Team
            went above and beyond to address my concerns"
          </h3>
          <p className="text-lg font-medium">Jules Winnfield</p>
          <h6 className="text-sm  text-zinc-400 font-semibold">CEO, Acme Inc</h6>
        </div>
      </div>
    </div>
  );
};

export default Quote;
