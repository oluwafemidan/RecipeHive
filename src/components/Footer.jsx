import React from "react";
import { Container } from "./shared/Container";

const Footer = () => {
  return (
    <div id="Get-Started" className="bg-wood-4 py-12">
      <Container>
        <div className="max-w-2xl mx-auto text-center wood-5">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
            <span>✨</span> Never Miss a Tasty Idea!
          </h2>

          <p className="text-lg mb-6">
            Join the <span className="font-semibold">Recipe Hive</span> family
            and get the best recipes, cooking hacks, and meal-planning tips
            delivered straight to your inbox.
          </p>

          <div className="text-left mb-8 space-y-3 max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <span>🍯</span>
              <p>
                <span className="font-medium">Exclusive Dishes</span> – Unique
                recipes you won't find anywhere else
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span>🔥</span>
              <p>
                <span className="font-medium">Quick & Easy Meals</span> –
                Perfect for busy weeknights
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span>🌿</span>
              <p>
                <span className="font-medium">Seasonal Specials</span> – Fresh
                ingredients, bold flavors
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span>🎁</span>
              <p>
                <span className="font-medium">Surprise Perks</span> –
                Subscriber-only discounts and free guides
              </p>
            </div>
          </div>

          <blockquote className="italic mb-8 p-4 bg-box-shadow rounded-lg">
            "I tried three Recipe Hive meals this week—all were huge hits!"
            <span className="block mt-1 not-italic font-medium">
              – Alexa R., loyal subscriber
            </span>
          </blockquote>

          <div className="mt-10 w-full flex max-w-md mx-auto">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
                            shadow-lg shadow-box-shadow border border-box-border
                            bg-box-bg rounded-full ease-linear focus-within:bg-body
                            focus-within:border-primary"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 outline-none bg-transparent text-white"
                />
                <button
                  type="button"
                  className="min-w-max bg-primary px-4 py-2 rounded-full hover:opacity-80
                  transition-transform duration-300 transform hover:scale-90"
                >
                  <span className="relative z-[5]">Subscribe</span>
                </button>
              </form>
            </div>
          </div>

          <p className="text-sm mt-4 opacity-80">
            We respect your inbox—no spam, just deliciousness. Unsubscribe
            anytime.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
