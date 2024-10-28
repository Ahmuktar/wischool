import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white bg-[url('/images/bg1.png')] bg-no-repeat bg-top bg-cover">
        <div className="bg-black/60 py-20 lg:py-40 flex items-center justify-center">
          <div className="container mx-auto space-y-5 lg:space-y-10 px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-lg lg:text-xl lg:w-2/3">
              Welcome to the WiSchool Gallery! Explore our collection of photos
              and videos showcasing the vibrant life and learning experiences at
              WiSchool. From classroom activities and student projects to
              special events and community celebrations, our gallery offers a
              glimpse into the diverse and dynamic experiences of our school
              community.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] w-full mx-auto px-4 sm:px-8 md:px-10 py-10 sm:py-16 lg:py-20">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white w-full sm:w-64 md:w-72 lg:w-80 xl:w-[23%] flex flex-col items-center shadow-md rounded-2xl"
              >
                <div className="flex w-full flex-col items-center">
                  <Image
                    src="/images/gallery.png"
                    width={250}
                    height={500}
                    className="w-full rounded-t-2xl"
                    alt="Event"
                  />
                  <div className="bg-white p-4 sm:p-5 text-center">
                    <p className="text-gray-700 text-sm sm:text-base font-bold">
                      School Children
                    </p>
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

export default GalleryPage;
