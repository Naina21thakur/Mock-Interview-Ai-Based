import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 dark:bg-gray-900">
        <div className="py-16 px-6 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
          <Image
  src="/image.png" // Replace with your logo path
  alt="AI Mock Interview Logo"
  width={150}
  height={150}
  className="
    rounded-full
    border-4 border-gray-300
    shadow-xl
    hover:scale-125
    hover:shadow-2xl
    hover:ring-4 hover:ring-primary hover:ring-opacity-50
    transition-all
    duration-300
    ease-in-out
  "
/>

          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white transition-all duration-500 hover:text-blue-600">
            AI Mock Interview Taker
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg font-medium text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 transition-opacity duration-500 hover:opacity-80">
            Double your chances of landing that job offer with our AI-powered interview prep.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform duration-300 hover:scale-105"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
