import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const upcomingEvents = [
  {
    date: "March 15",
    title: "Parent-Teacher Conference",
    description:
      "Meet with your child's teachers to discuss their progress, goals, and academic achievements. This is a valuable opportunity for parents to connect with teachers and support their child's learning journey.",
    time: "9:00 AM - 12:00 PM",
  },
  {
    date: "March 15",
    title: "Science Fair Exhibition",
    description:
      "Join us for an interactive exhibition showcasing the creative and innovative projects of our students. From biology experiments to engineering challenges, explore the wonders of science and celebrate our students' ingenuity.",
    time: "9:00 AM - 12:00 PM",
  },
  {
    date: "March 15",
    title: "Parent-Teacher Conference",
    description:
      "Meet with your child's teachers to discuss their progress, goals, and academic achievements. This is a valuable opportunity for parents to connect with teachers and support their child's learning journey.",
    time: "9:00 AM - 12:00 PM",
  },
  {
    date: "March 15",
    title: "Parent-Teacher Conference",
    description:
      "Meet with your child's teachers to discuss their progress, goals, and academic achievements. This is a valuable opportunity for parents to connect with teachers and support their child's learning journey.",
    time: "9:00 AM - 12:00 PM",
  },
];
const NewsEventsPage = () => {
  return (
    <div className="flex-grow text-gray-1">
      <section className="bg-gray-900 text-white bg-[url('/images/bg3.png')] bg-no-repeat bg-top bg-cover">
        <div className="bg-black/60 py-20 lg:py-40 flex items-center justify-center">
          <div className="container mx-auto space-y-5 lg:space-y-10 px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              News & Events
            </h1>
            <p className="text-lg lg:text-xl lg:w-2/3">
              Welcome to the WiSchool News & Events page! Stay up-to-date with
              the latest happenings, announcements, and exciting events from our
              school community. Whether it\'s academic achievements, cultural
              celebrations, or extracurricular activities, you\'ll find all the
              news and updates right here.
            </p>
            <h1 className="text-lg lg:text-xl font-bold mb-4">
              Explore our offerings below
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center mb-8">
            <form className="flex w-full mx-auto">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 px-4 py-2 bg-gray-100 border-gray-200 border-2 text-xl rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Check Status
              </button>
            </form>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
            <div className="flex space-x-4 mb-6">
              <Button className="bg-green-600 text-white">
                Upcoming Events
              </Button>
              <Button variant="outline">Past Events</Button>
            </div>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center border-b pb-6">
                <div className="w-24 text-center border-r border-gray-1 p-4">
                  <div className="text-3xl font-bold">
                    {event.date.split(" ")[1]}
                  </div>
                  <div className="text-gray-600">
                    {event.date.split(" ")[0]}
                  </div>
                </div>
                <div className="ml-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <p className="text-sm text-gray-1">
                    <span className="font-semibold">Time:</span> {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;
