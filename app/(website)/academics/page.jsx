import { Star, StarIcon } from "lucide-react";
import Image from "next/image";
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

const AcademicsPage = () => {
  return (
    <div className="flex-grow text-gray-1">
      <section className="bg-gray-900 text-white bg-[url('/images/bg1.png')] bg-no-repeat bg-top bg-cover">
        <div className="bg-black/60 py-20 lg:py-40 flex items-center justify-center">
          <div className="container mx-auto space-y-5 lg:space-y-10 px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Academics at WiSchool
            </h1>
            <p className="text-lg lg:text-xl lg:w-2/3">
              At WiSchool, we're committed to providing a dynamic and enriching
              academic experience that prepares students for success in an
              ever-changing world. Our carefully crafted academic programs are
              designed to foster critical thinking, creativity, and a lifelong
              love of learning.
            </p>
            <h1 className="text-lg lg:text-xl font-bold mb-4">
              Explore our offerings below
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-3">
            Primary School Curriculum
          </h2>
          <hr className="text-red-600 bg-red-600 h-[6px] w-16 mb-5" />
          <p className="w-full lg:w-3/5 my-5">
            At WiSchool, our primary school curriculum is designed to provide a
            strong foundation for academic success while nurturing students'
            curiosity, creativity, and love for learning. Our holistic approach
            integrates core subjects with hands-on learning experiences and
            character development initiatives
          </p>
          <div className="grid items-center md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary-2">
                Core Subjects
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Language Arts</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art and Music</li>
                <li>Physical Education</li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-4 text-primary-2">
                Enrichment Programs
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  STEM Education: Engages students in hands-on learning
                  experiences that integrate science, technology, engineering,
                  and mathematics.
                </li>
                <li>
                  Environmental Education: Raises awareness of environmental
                  issues and promotes sustainable practices through outdoor
                  exploration and conservation projects.
                </li>
                <li>
                  Character Education: Fosters values such as respect,
                  responsibility, integrity, and empathy through
                  character-building activities and discussions
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-4 text-primary-2">
                Assessment and Evaluation
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Continuous assessment through quizzes, projects, and class
                  participation.
                </li>
                <li>
                  Periodic progress reports and parent-teacher conferences to
                  monitor student growth and address any areas of concern.
                </li>
                <li>
                  Standardized testing to measure student achievement and inform
                  instructional planning
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/col-image.png"
                alt="Primary School Student"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center md:grid-cols-2 gap-8">
            <div className="relative order-2 md:order-1">
              <Image
                src="/images/col-image.png"
                alt="Primary School Student"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8 text-gray-3">
                Secondary School Curriculum
              </h2>
              <hr className="text-red-600 bg-red-600 h-[6px] w-16 mb-5" />
              <p className="w-full lg:w-3/5 my-5">
                In our secondary school program, WiSchool offers a rigorous
                academic curriculum that prepares students for higher education
                and future careers. Our comprehensive approach emphasizes
                critical thinking, inquiry-based learning, and real-world
                application of knowledge
              </p>
              <h3 className="text-xl font-semibold mb-4 text-primary-2">
                Core Subjects
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>English Language and Literature</li>
                <li>Mathematics</li>
                <li>
                  Science: Explores advanced scientific principles and
                  methodologies through biology, chemistry, physics, and
                  environmental science.
                </li>
                <li>
                  Social Sciences: Analyzes historical events, political
                  systems, economic theories, and societal issues through
                  courses in history, geography, economics, and sociology.
                </li>
                <li>
                  Foreign Languages: Develops proficiency in a second language
                  through courses in language acquisition, literature, and
                  culture.
                </li>
                <li>
                  Electives: Offers a wide range of elective courses to cater to
                  students' interests and career goals, such as computer
                  science, fine arts, business, and psychology
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-4 text-primary-2">
                Advanced Placement (AP) and Honors Courses
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Provides opportunities for motivated students to pursue
                  advanced coursework and earn college credit through AP courses
                  in subjects such as calculus, biology, chemistry, and
                  literature.
                </li>
                <li>
                  Honors courses offer accelerated and enriched curriculum
                  options for high-achieving students seeking academic
                  challenges and intellectual stimulation
                </li>
              </ul>
              <h3 className="text-xl font-semibold mt-6 mb-4 text-primary-2">
                Extracurricular Opportunities
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Clubs and Organizations: Provides opportunities for students
                  to explore their interests and passions outside the classroom
                  through clubs, student organizations, and leadership
                  activities.
                </li>
                <li>
                  Internships and Work Experience: Offers hands-on learning
                  experiences and real-world exposure through internships, job
                  shadowing, and career exploration programs.
                </li>
                <li>
                  Community Service and Volunteering: Encourages students to
                  make a positive impact in their communities and develop
                  leadership skills through service-learning projects and
                  volunteer opportunities.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mb-4 text-primary-2">
                College and Career Preparation
              </h3>
              <li>
                College Counseling: Guides students through the college
                application process, including standardized testing, college
                research, essay writing, and financial aid.
              </li>
              <li>
                Career Exploration: Provides resources and support for students
                to explore potential career paths, develop career readiness
                skills, and make informed decisions about their future{" "}
              </li>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-2">
            Faculty Profiles
          </h2>
          <p>
            Meet the dedicated educators who inspire and motivate our students
            to achieve their full potential
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
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="">
              <Image
                src="/images/col-image.png"
                alt="Academic Resources"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-3">
                Academic Resources
              </h2>
              <hr className="text-red-600 bg-red-600 h-[6px] w-16 mb-5" />
              <p>
                Access a wealth of resources to support student learning and
                success
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Online libraries</li>
                <li>Educational websites</li>
                <li>Study tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-3">
                Extracurricular Activities
              </h2>
              <hr className="text-red-600 bg-red-600 h-[6px] w-16 mb-5" />
              <p>
                Get involved and explore your interests with our wide range of
                extracurricular activities
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Clubs</li>
                <li>Sports Teams</li>
                <li>Arts Programs</li>
              </ul>
            </div>
            <div className="">
              <Image
                src="/images/col-image.png"
                alt="Extracurricular Activities"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container rounded-[80px] w-full mx-auto px-10 py-20">
          <div className="w-full lg:w-[600px] text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-8 text-gray-3">
              Testimonials
            </h2>
            <p className="text-base">
              See what our students and parents have to say about their
              experiences at WiSchool
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
                <p className="mb-10 mt-5 text-center text-lg">{card.review}</p>
                <div className="flex items-center gap-3">
                  <Image src={card.image} width={50} height={50} alt="Client" />
                  <div>
                    <p className="text-primary/80 font-bold">{card.name}</p>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
