import { Button } from "@/components/ui/button";
import { Star, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogPosts = [
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
const BlogPage = () => {
  return (
    <div className="flex-grow text-gray-1">
      <section className="bg-gray-900 text-white bg-[url('/images/bg2.png')] bg-no-repeat bg-top bg-cover">
        <div className="bg-black/60 py-20 lg:py-40 flex items-center justify-center">
          <div className="container mx-auto space-y-5 lg:space-y-10 px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg lg:text-xl lg:w-2/3">
              Welcome to the WiSchool blog! Explore our collection of articles,
              insights, and resources on education, student success, parenting
              tips, and more. Whether you're a student, parent, educator, or
              member of the community, you'll find valuable information and
              inspiration to support your journey in education.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 justify-self-center">
            {blogPosts.slice(0, 3).map((post, index) => (
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

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Stay connected and receive the latest updates from WiSchool.
            Subscribe to our newsletter to get notified when we publish new blog
            posts and other important announcements.
          </p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-4 py-4 text-xl rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 justify-self-center">
            {blogPosts.slice(3).map((post, index) => (
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

export default BlogPage;
