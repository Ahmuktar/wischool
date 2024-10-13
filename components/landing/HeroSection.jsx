import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  const heroCard = [
    {
      icon: "gradcap.svg",
      title: "Expert instructors",
      subtitle:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: "schoolbag.svg",
      title: "Training Courses",
      subtitle:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
    {
      icon: "book.svg",
      title: "Expert instruction",
      subtitle:
        "The gradual accumulation of information about atomic and small-scale behaviour...",
    },
  ];

  return (
    <section className="lg:pt-10">
      <div className="container bg-gradient-to-tr from-green-100/50 to-white rounded-[80px] w-full mx-auto px-10 py-20">
        <div className="flex w-full flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:text-left text-center mb-8 pl-10 lg:mb-0">
            <div className="flex justify-center lg:justify-normal items-center">
              <h2 className="text-4xl lg:text-[55px] font-bold text-black lg:mb-4">
                Welcome to{" "}
              </h2>
              <Image
                src="/images/logo-text.png"
                alt="Student"
                width={250}
                height={250}
                className="ml-4 w-auto h-auto max-w-[150px] lg:max-w-[250px]" // Added responsive sizing
              />
            </div>
            <h3 className="text-3xl lg:text-[55px] font-bold leading-normal text-black lg:mb-6">
              Where Learning Comes Alive!
            </h3>
            <Link href="/login">
              <Button className="bg-primary h-12 w-fit mt-10 font-medium">
                Apply Now
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center lg:justify-end relative">
            <div>
              <Image
                src="/images/herocard.png"
                alt="Student"
                width={500}
                height={500}
                className="bottom-0 right-4 w-auto h-auto max-w-[300px] lg:max-w-[500px]" // Responsive sizing
              />
              <Image
                src="/images/herocard-1.png"
                alt="Student"
                width={500}
                height={500}
                className="absolute bottom-12 -left-14 w-auto h-auto max-w-[300px] lg:max-w-[500px]" // Responsive sizing
              />

              <Image
                src="/images/herocard-2.png"
                alt="Student"
                width={200}
                height={200}
                className="absolute bottom-0 right-10 lg:-right-10 w-auto h-auto max-w-[150px] lg:max-w-[200px]" // Responsive sizing
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container w-full max-w-[1200px] sm:px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 -mt-10">
        {heroCard.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg py-10 px-8 shadow-md">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary mb-4">
              <Image
                src={`/images/${feature.icon}`}
                width={30}
                height={30}
                alt={feature.title}
                className="w-auto h-auto max-w-[30px]" // Responsive sizing
              />
            </div>
            <h4 className="text-2xl font-semibold mb-2">{feature.title}</h4>
            <hr className="text-primary bg-primary h-[2px] w-14 mb-5" />
            <p className="text-gray text-lg">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
