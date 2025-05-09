import React from "react";
import { Container } from "./shared/Container";
import heroImg from "/cookbook.jpg";

const Hero = () => {
  return (
    <div>
      <section className="relative pt-32 md:pt-34 lg:pt-36 magt magt2">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                            lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold wood-5">
              Find Your Perfect Recipe
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#824c2d] to-[#8B5A2B] ml-2">
                —Fast!
              </span>
            </h1>
            <p className="mt-8 wood-5 semi-bold">
              Discover the joy of cooking with our Recipe Finder – your ultimate
              kitchen companion! Whether you're craving a quick weeknight
              dinner, a healthy meal, or a decadent dessert, we’ve got you
              covered. Simply search by ingredient, cuisine, or dietary need,
              and explore thousands of delicious recipes tailored just for you.
              Save time, reduce food waste, and cook with confidence. Your next
              culinary masterpiece starts here!
              {/* #824c2d ---> #8B5A2B ---> #CD853F*/}
            </p>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
            <img
              src={heroImg}
              alt="Hero image"
              width={2350}
              height={2359}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
