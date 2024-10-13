import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CounterSection from "./CounterSection";
import Image from "next/image";
import { ChevronRight, Star, StarIcon } from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import Footer from "./Footer";
import Link from "next/link";
import { Button } from "../ui/button";

export default function LandingPage() {
  const clientReviews = [
    {
      name: "Regina Miles",
      image: "/images/avatar1.png",
      role: "Design",
      review:
        "WiSchool has been a game-changer for our child's education. The personalized attention and supportive environment have made all the difference.",
    },
    {
      name: "Jane Smith",
      image: "/images/avatar2.png",
      role: "Design",
      review:
        "Choosing WiSchool was the best decision we made for our family. Our child is thriving academically and socially, thanks to the dedicated staff and engaging curriculum.",
    },
    {
      name: "Mary Johnson",
      image: "/images/avatar3.png",
      role: "Design",
      review:
        "At WiSchool, every student truly matters. The caring community and focus on individual needs have exceeded our expectations.",
    },
  ];

  const tutors = [
    {
      name: "Regina Miles",
      image: "/images/tutor1.png",
      role: "Design",
    },
    {
      name: "Jane Smith",
      image: "/images/tutor2.png",
      role: "Design",
    },
    {
      name: "Mary Johnson",
      image: "/images/tutor3.png",
      role: "Design",
    },
    {
      name: "Mary Johnson",
      image: "/images/tutor3.png",
      role: "Design",
    },
  ];

  return (
    <>
      <HeroSection />
      <CounterSection />
      <section className="pt-10">
        <div className="container bg-gradient-to-tl from-green-100/80 via-white to-green-100/80 rounded-[80px] w-full mx-auto px-10 py-20">
          <div className="flex w-full flex-col lg:flex-row items-center justify-between">
            <div className="w-full flex justify-center relative">
              <div>
                <Image
                  src="/images/Image.png"
                  alt="Card"
                  width={500}
                  height={500}
                  className="bottom-0 right-4 w-auto h-auto max-w-[300px] lg:max-w-[500px]"
                />
                <Image
                  src="/images/herocard-3.png"
                  alt="Card"
                  width={300}
                  height={300}
                  className="absolute bottom-12 right-10 lg:-right-12 w-auto h-auto max-w-[200px] lg:max-w-[500px]"
                />
              </div>
            </div>
            <div className="w-full mb-8 pl-10 lg:mb-0">
              <div className="mt-5 relative">
                <h2 className="text-[45px] lg:text-[55px]  items-center font-bold text-black mb-4">
                  We are <span className="text-primary">Experts</span>
                  <br />
                  Learning Institution
                </h2>
                <Image
                  src="/images/line.png"
                  width={200}
                  height={200}
                  className=" absolute lg:top-20 lg:left-48 top-16 left-36"
                />
              </div>
              <p className="text-xl text-gray1">
                Where Education Excellence and Student
                <br /> Empowerment Meet
              </p>
              <Link href="/login">
                <Button className="bg-primary h-12 w-fit mt-10 font-medium">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container rounded-[80px] w-full mx-auto px-10 py-20">
          <div className="flex w-full flex-col lg:flex-row items-center justify-between">
            <div className="w-full mb-8 pl-10 lg:mb-0 space-y-10">
              <h4 className="text-2xl font-semibold mb-2">Blog</h4>
              <hr className="text-red-600 bg-red-600 h-[6px] w-14 mb-5" />
              <h4 className="text-5xl font-semibold mb-2">
                Every Student Matters
              </h4>
              <p className="text-gray text-lg w-2/3">
                Empowering Administrators to Champion Individual Growth,
                Inclusivity, and Student Success Across the School Community
              </p>
              <Link
                href="/login"
                className="flex items-center font-bold text-primary"
              >
                Learn more <ChevronRight />
              </Link>
            </div>
            <div className="w-full flex justify-center">
              <Image
                src="/images/col-image.png"
                alt="Card"
                width={600}
                height={600}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container rounded-[80px] w-full mx-auto px-10 py-20">
          <div className="w-full lg:w-[600px] text-center lg:text-left">
            <h2 className="text-lg font-bold text-secondary mb-4">
              What the parents are saying{" "}
            </h2>
            <h1 className="text-4xl font-bold text-black mb-4">
              Every Client Matters
            </h1>
            <p className="text-gray text-base">
              Empowering Our Team to Prioritize Individual Needs, Foster
              Inclusivity, and Deliver Exceptional Service Across the Board
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-10 justify-between">
            {clientReviews.map((card, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center rounded-lg py-10 px-8"
              >
                <div className="flex gap-2 text-yellow-400">
                  <StarIcon />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <p className="text-gray mb-10 mt-5 text-center text-lg">
                  {card.review}
                </p>
                <div className="flex items-center gap-3">
                  <Image src={card.image} width={50} height={50} alt="Client" />
                  <div>
                    <p className="text-primary/80 font-bold">{card.name}</p>
                    <p className="text-gray">Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container rounded-[80px] w-full mx-auto px-10 py-20">
          <div className="w-full lg:w-[600px] text-center lg:text-left">
            <h2 className="text-lg font-bold text-primary mb-4">Team</h2>
            <h1 className="text-4xl font-bold text-black mb-4">
              Our Top Tutors
            </h1>
            <p className="text-gray text-base">
              Recognizing and Celebrating Excellence in Teaching to Inspire
              Student Achievement and Success
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-10 gap-10 justify-between">
            {tutors.map((card, index) => (
              <div
                key={index}
                className="bg-white flex w-96 lg:w-full flex-col  items-center shadow-md rounded-2xl"
              >
                <div className="flex w-full flex-col items-center">
                  <Image
                    src={card.image}
                    width={250}
                    height={400}
                    className="w-full h-full rounded-t-2xl"
                    alt="Client"
                  />
                  <div className="bg-white p-10 text-center">
                    <p className="text-primary/80 text-base font-bold">
                      {card.name}
                    </p>
                    <p className="text-gray">Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray/10">
        <div className="container rounded-[80px] w-full mx-auto px-10 py-40">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
