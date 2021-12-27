import React from "react";
import ODDImage from "../images/odd.png";

function ProjectLarge({type, children, title, topic, tags }) {
  return (
    <div className="relative flex w-full h-full justify-center md:grid md:grid-cols-10 font-bold font-roboto tracking-wide">
      <div
        className={`md:row-span-full self-center relative w-full opacity-30 md:opacity-100 blur-xs
        ${
          type === "right" ? `col-start-1 col-span-4` : `col-span-4 col-end-11`
        }`}
      >
        <div className="after:bg-gradient-to-tr after:from-pink-500 after:via-red-500 after:to-yellow-500 after:aspect-square after:h-full after:block after:absolute after:inset-0 after:opacity-70">
          <img className="w-full object-fit " src={ODDImage} alt="" />
        </div>
      </div>

      <div
        className={`absolute w-full h-full md:relative md:row-span-full md:self-center p-10 md:p-0 md:py-4 flex flex-col md:gap-4 z-10 
        ${
          type === "left"
            ? `md:col-start-1 md:col-span-7`
            : `md:col-span-7 md:col-end-11 md:text-right`
        }  
        `}
      >
        <h2 className="text-md md:text-sm text-light-gray md:text-blue-gray">
          {topic}
        </h2>
        <h1 className="text-lg md:text-md">{title}</h1>
        <div
          className={`mt-6 w-full h-1/2 md:bg-dark-gray md:shadow-container ${
            type === "left" ? `md:text-right` : `md:text-left`
          }  md:items-center md:p-6 `}
        >
          <p className="w-full h-full mb-2 font-normal text-md md:text-sm text-light-gray md:text-p-gray ">
            <div dangerouslySetInnerHTML={{ __html: children }}></div>
          </p>
        </div>
        <ul className="flex flex-wrap justify-start gap-4 md:self-end font-roboto-mono text-light-gray md:text-blue-gray text-sm font-medium mt-auto">
          {tags != null && tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default ProjectLarge;
