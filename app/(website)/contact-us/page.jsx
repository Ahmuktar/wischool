import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
const ContactUsPage = () => {
  return (
    <div className="flex-grow text-gray-1">
      <section className="bg-gray-900 text-white bg-[url('/images/bg.png')] bg-no-repeat bg-top bg-cover">
        <div className="bg-black/60 py-20 lg:py-40 flex items-center justify-center">
          <div className="container mx-auto space-y-5 lg:space-y-10 px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg lg:text-xl lg:w-2/3">
              Welcome to the WiSchool Contact Us page! Whether you have
              questions, feedback, or just want to say hello, we'd love to hear
              from you. Use the information below to get in touch with our team.
              We're here to help!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary/40 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="items-start space-y-2">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                <h2 className="text-2xl text-primary font-semibold mb-2">
                  Email
                </h2>
              </div>

              <div>
                <p className="text-gray-1 my-2">
                  For general inquiries, please email us at
                </p>
                <a
                  href="mailto:info@wischool.edu"
                  className="text-primary underline"
                >
                  info@wischool.edu
                </a>
              </div>
            </div>
            <div className="items-start space-y-2">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                <h2 className="text-2xl text-primary font-semibold mb-2">
                  Phone
                </h2>
              </div>
              <div>
                <p className="text-gray-1 my-2">
                  To speak with a customer service representative, please call
                  us at
                </p>
                <a
                  href="tel:(555)123-4567"
                  className="text-primary hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
            <div className="items-start space-y-2">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                <h2 className="text-2xl text-primary font-semibold mb-2">
                  Office
                </h2>
              </div>
              <div>
                <p className="text-gray-1 my-2">
                  To visit our office, please come to
                </p>
                <p className="text-green-600">
                  WiSchool 123 Main Street Cityville, State 12345 Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Map and Directions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277813500407!2d3.4275690147715993!3d6.426979095343403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4c9f2d6e4b32f90!2sAdeola%20Odeku%20St%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1645794799024!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <div className="grid md:grid-cols-[1fr,600px] items-center gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <hr className="text-red-600 bg-red-600 h-[6px] w-14 mb-5" />
                <p className="text-gray-600 mb-6">
                  Have a question or comment? Use the form below to send us a
                  message. We'll get back to you as soon as possible!
                </p>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First name
                      </label>
                      <Input type="text" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last name
                      </label>
                      <Input type="text" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone number
                      </label>
                      <Input type="tel" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input type="email" required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Select service
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admission">
                            Admission Inquiry
                          </SelectItem>
                          <SelectItem value="academic">
                            Academic Support
                          </SelectItem>
                          <SelectItem value="technical">
                            Technical Support
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Appointment date
                      </label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Type your message..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I accept the Terms
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    Submit
                  </Button>
                </form>
              </div>
              <div className="w-full">
                <Image
                  src="/images/col-image.png"
                  alt="Student"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
