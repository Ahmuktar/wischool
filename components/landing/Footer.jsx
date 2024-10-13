import NewsletterForm from "./NewsletterForm";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="bg-dark text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 lg:w-60">
              <Image
                src="/images/logo-dark.png"
                width={200}
                height={200}
                alt="Logo"
              />
              <p className="text-base">
                we are not here to sell you products, we sell value through our
                expertise.
              </p>
              <div className="flex space-x-4">
                <Image
                  src="/icons/facebook.png"
                  width={25}
                  height={25}
                  alt="Facebook"
                />
                <Image
                  src="/icons/twitter.png"
                  width={25}
                  height={25}
                  alt="Twitter"
                />
                <Image
                  src="/icons/instagram.png"
                  width={25}
                  height={25}
                  alt="Instagram"
                />
                <Image
                  src="/icons/linkedin.png"
                  width={25}
                  height={25}
                  alt="LinkedIn"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Address:</h3>
                <p className="text-md font-medium">
                  38 opebi Road, Ikeja, Lagos State, Nigeria.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone:</h3>
                <p className="text-md font-medium">+2349022396389</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email:</h3>
                <p className="text-md font-medium">contact@contentionary.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-md">
                <li>
                  <a href="#" className="hover:text-green-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    News/Event
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400">
                    School Calendar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <NewsletterForm darkBg />
          </div>
          <div className="mt-8 text-md flex gap-5">
            <p>
              Powered By <span className="font-semibold">Scholastify360</span>
            </p>
            <a href="#" className="text-green-400 underline">
              Visit our website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
