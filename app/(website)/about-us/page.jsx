import { Star, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const AboutPage = () => {
  return (
    <div className="flex-grow text-gray-1">
      <section className="bg-gray-900 text-white bg-[url('/images/bg1.png')] bg-no-repeat bg-top bg-cover">
        <div className="bg-black/60 py-20 lg:py-40 flex items-center justify-center">
          <div className="container mx-auto space-y-5 lg:space-y-10 px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg lg:text-xl lg:w-2/3">
              At WiSchool, we are dedicated to providing a nurturing and
              inclusive learning environment where every student can thrive
              academically, socially, and emotionally. Our commitment to
              excellence is reflected in our mission, vision, and the dedication
              of our leadership team and faculty
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-3">
                Mission/Vision
              </h2>
              <hr className="text-red-600 bg-red-600 h-[6px] w-16 mb-5" />
              <h3 className="text-xl font-semibold mb-4 text-primary-2">
                Mission
              </h3>
              <p className="w-full my-5">
                Empowering students to reach their full potential through
                innovative education, personalized support, and a commitment to
                excellence
              </p>
              <h3 className="text-xl font-semibold mb-4 text-primary-2">
                Vision
              </h3>
              <p className="w-full my-5">
                To be a leading educational institution that inspires lifelong
                learning, fosters creativity and critical thinking, and prepares
                students to succeed in a global society
              </p>
            </div>
            <div className="justify-end flex">
              <Image
                src="/images/col-image.png"
                alt="Primary School Student"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <Image
                src="/images/col-image.png"
                alt="Primary School Student"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-3">
                Director's Message
              </h2>
              <hr className="text-red-600 bg-red-600 h-[6px] w-16 mb-5" />
              <p className="w-full my-5">
                Welcome to WiSchool! As the Director of WiSchool, it gives me
                great pleasure to welcome you to our vibrant learning community.
                At WiSchool, we are committed to providing a holistic education
                that fosters academic excellence, creativity, and character
                development. Our dedicated team of educators works tirelessly to
                ensure that every student receives personalized support and
                opportunities to thrive. Together, we strive to inspire a love
                for learning and equip students with the skills and knowledge
                they need to succeed in an ever-changing world. We look forward
                to partnering with you on this exciting journey of discovery and
                growth.
                <br />
                <br />
                Warm regards,
                <br />
                Danjuma Gboyako
                <br />
                Director
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center md:grid-cols-2 gap-8">
            <div className="">
              <h2 className="text-3xl font-bold mb-6 text-gray-3">
                Principal's Message
              </h2>
              <hr className="text-red-600 bg-red-600 h-[6px] w-16 mb-5" />
              <p className="w-full my-5">
                Dear Students, Parents, and Visitors,
                <br />
                <br />
                Welcome to WiSchool, where learning comes alive! As the
                Principal, I am thrilled to welcome you to our school community.
                At WiSchool, we believe in nurturing the whole child -
                academically, socially, and emotionally. Our dedicated faculty
                and staff are committed to providing a supportive and inclusive
                learning environment where every student feels valued,
                challenged, and inspired to reach their full potential. Whether
                it's in the classroom, on the playing field, or in the
                community, we encourage our students to embrace new
                opportunities, explore their interests, and strive for
                excellence in all that they do. I am excited to embark on this
                journey with you and look forward to celebrating your successes
                along the way.
                <br />
                <br />
                Sincerely,
                <br />
                Adamu Yabagi <br />
                Principal
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/col-image.png"
                alt="Primary School Student"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-1">
            Faculty and Staff
          </h2>
          <p>
            Meet the dedicated educators who make WiSchool a vibrant and
            supportive learning community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-8">
            {tutors.map((i) => (
              <div
                key={i}
                className="text-center shadow-md rounded-2xl bg-white"
              >
                <Image
                  src={i.image}
                  alt={`Faculty ${i}`}
                  width={150}
                  height={150}
                  className="w-full rounded-t-2xl"
                />
                <div className="bg-white p-6 rounded-b-2xl text-center">
                  <p className="text-primary/80 text-base font-bold">
                    {i.name}
                  </p>
                  <p className="text-gray">Designer</p>
                </div>
              </div>
            ))}
          </div>
          <br />
          <Link href="/staff" className="text-primary my-10 text-base">
            See all
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
