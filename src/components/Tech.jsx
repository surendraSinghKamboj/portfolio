import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWraper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 bg-black py-4" style={{ boxShadow:"0px 10px 20px rgba(240,250,230,0.5)"  }}>
      {technologies.map((technology, index) => (
        <div key={index} className="w-28 h-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWraper(Tech, "");
