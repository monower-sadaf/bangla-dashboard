"use client";

import { useState } from "react";
import { AccordionType } from "@/types/AccordionType";

const Accordion = ({ icon, title, children, active }: AccordionType) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-2 hover:text-white ${
          active ? 'text-white' : 'text-primary'
        }`}
      >
        {icon ? (
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
        ) : (
          <span>{title}</span>
        )}
        <span>
          <svg
            className="w-3 h-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          className={`${
            open ? "h-auto opacity-100" : "h-0 opacity-0"
          } transition-all duration-500`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
export default Accordion;
