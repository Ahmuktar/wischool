import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MoveRight, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const latestStories = [
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
  {
    title:
      "Unlocking the Power of STEM Education: Fostering Creativity and Innovation in the Classroom",
    excerpt:
      "In today's rapidly evolving world, STEM education plays a crucial role in preparing students for success in the 21st century.",
    author: "WiSchool",
    date: "February 28, 2024",
    image: "/images/blog-image.jpg",
  },
];
const ViewBlogPage = ({ params }) => {
  return (
    <div className="flex-grow text-gray-1">
      <section className="container mx-auto px-4 py-8">
        <div className="text-sm flex items-center border-b border-gray-300 py-4">
          <Link href="#" className="text-green-600 text-base hover:underline">
            Blog
          </Link>
          <MoveRight className="mx-2" />
          <span className="text-gray-600 text-base">Read</span>
        </div>

        <article className="mt-10">
          <h1 className="text-4xl max-w-6xl font-bold mb-4">
            Unlocking the Power of STEM Education: Fostering Creativity and
            Innovation in the Classroom
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            In today's rapidly evolving world, STEM education plays a crucial
            role in preparing students for success in the 21st century.
          </p>

          <div className="flex items-center max-w-2xl mb-6">
            <Image
              src="/images/blog-image.jpg"
              alt="Natasha Steve"
              width={48}
              height={48}
              className="rounded-full border-2 border-purple-600 mr-4"
            />
            <div>
              <p className="font-semibold">Natasha Steve</p>
              <p className="font-semibold text-sm">New Editor</p>
              <p className="text-xs text-gray-600">February 20, 2024</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-slate-100 ml-auto"
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>

          <Image
            src="/images/blog-image.jpg"
            alt="A lady working on a robotic device"
            width={800}
            height={400}
            className="w-full lg:max-w-2xl rounded-lg mb-4"
          />
          <p className="text-sm text-gray-600 mb-6">
            Image of a lady working on a robotic device
          </p>

          <div className="prose max-w-none">
            <p>
              In today's rapidly evolving world, STEM education plays a crucial
              role in preparing students for success in the 21st century. By
              integrating science, technology, engineering, and mathematics into
              the curriculum, educators can inspire curiosity, foster critical
              thinking, and ignite a passion for discovery among their students.
            </p>

            <p>
              At WiSchool, we recognize the importance of STEM education in
              equipping students with the skills and knowledge they need to
              thrive in an increasingly complex and interconnected world. Our
              commitment to STEM is reflected in our innovative curriculum,
              hands-on learning experiences, and dedicated faculty who inspire
              students to explore, experiment, and excel in STEM subjects.
            </p>

            <p>
              Through project-based learning, collaborative problem-solving, and
              real-world applications, students at WiSchool engage in meaningful
              STEM experiences that go beyond the textbook and classroom.
              Whether it's designing and building robots, conducting experiments
              in our state-of-the-art science labs, or coding and programming in
              our technology classes, students are encouraged to think
              critically, communicate effectively, and persevere in the face of
              challenges.
            </p>

            <p>
              But STEM education is about more than just preparing students for
              future careers in science and technology. It's about nurturing
              creativity, fostering innovation, and empowering students to
              become lifelong learners and responsible global citizens. By
              embracing STEM education, we can inspire the next generation of
              innovators, inventors, and problem-solvers who will shape the
              future of our world.
            </p>

            <p>
              Join us on this exciting journey as we unlock the power of STEM
              education and empower students to reach new heights of discovery
              and achievement.
            </p>
          </div>
        </article>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <hr className="bg-primary h-[10px] w-full mb-5" />
          <h2 className="text-2xl font-bold mb-6">Latest Stories</h2>
          <div className="grid grid-cols-1 gap-8 justify-self-center">
            {latestStories.slice(3).map((post, index) => (
              <div key={index} className="w-[400px] lg:w-full">
                <Link
                  href={post.title}
                  className={`flex flex-col lg:flex-row shadow-lg items-center hover:border-primary transition-all delay-100 border rounded-lg`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="object-cover w-full lg:w-fit rounded-lg"
                  />
                  <div className="px-4 py-2 lg:space-y-6">
                    <h2 className="text-lg lg:text-2xl font-bold mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <p className="text-sm text-gray-500">
                      By {post.author} | {post.date}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewBlogPage;
