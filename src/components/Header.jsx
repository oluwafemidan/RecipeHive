import React from "react";
import logoImg from "/RecipeHive_logo.svg";
import { Container } from "./shared/Container";

const Header = () => {
  return (
    <div className="absolute inset-x-0 top-0 z-50 py-6  fit fit2 fit3">
      <Container>
        <nav className="w-full flex justify-between gap-6 relative fit fit2 fit3 ">
          <div className="min-w-max inline-flex relative fit2 fit3">
            <a href="/" className="relative flex items-center gap-3">
              <img
                src={logoImg}
                alt="Recipe Hive logo"
                className="w-12 h-12 md:pl-0 lg:pl-0"
              />
              <div className="inline-flex text-4xl font-bold font-[cursive] wood-5">
                Recipe Hive
              </div>
            </a>
          </div>

          <div
            className="flex flex-col md:flex-row w-full md:justify-between md:items-center lg:flex-row lg:justify-between lg:items-center 
                      absolute top-full left-0 md:static md:top-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                       lg:h-auto fit fit2 fit3"
          >
            <ul
              className="fit3 fit2 fit px-6 lg:px-0 
                           pt-6 lg:pt-0 flex flex-row lg:flex-row gap-y-4 gap-x-3 
                           text-lg wood-5 w-full lg:justify-center lg:items-center 
                           duration-300 font-medium ease-linear hover:text-primary py-3"
            >
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#Find-Recipe" className="hover:underline">
                  Find Recipe
                </a>
              </li>
              <li>
                <a href="#HiveNav" className="hover:underline">
                  HiveNav
                </a>
              </li>
              {/* <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li> */}
            </ul>

            <a
              href="#Get-Started"
              className="w-4b fit3 fit2 fit pys w-4o bg-box-bg wood-5 overflow h-15 w-45  rounded-4xl py-4 px-9 sm:px-2 md:px-6 lg:px-8 font-bold transition-transform duration-300 transform hover:scale-90"
            >
              <span>Get Started</span>
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
