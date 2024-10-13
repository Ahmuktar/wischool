"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation only triggers once when in view
    threshold: 0.3, // Percentage of the section that should be visible before triggering
  });

  return (
    <section
      ref={ref}
      className="pt-10 lg:pt-[115px] lg:pb-[113px] bg-[url('/images/map.webp')] bg-no-repeat bg-center bg-cover"
    >
      <div className="mx-auto flex flex-col text-center lg:items-center lg:justify-center w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-48 items-center">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[83px] font-extrabold text-secondary w-[70%]">
              {inView && <CountUp end={100} suffix="+" duration={2} />}
            </h1>
            <p className="font-bold text-base">Parents and gurdians</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[83px] font-extrabold text-secondary w-[70%]">
              {inView && <CountUp end={100} suffix="+" duration={2} />}
            </h1>
            <p className="font-bold text-base">Online Content</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl lg:text-[83px] font-extrabold text-secondary w-[70%]">
              {inView && <CountUp end={25} suffix="k" duration={2} />}
            </h1>
            <p className="font-bold text-base">Graduated Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
