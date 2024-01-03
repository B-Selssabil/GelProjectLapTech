import React from "react";

export default function About() {
  return (
    <div className="mb-[150px] lg:mx-20">
      <div class="w-full rounded-[2.5rem] borderStyle p-1">
        <div class=" w-full rounded-[2.5rem] bg-white">
          <div class=" w-full rounded-[2.5rem] bg-color1 flex justify-center items-center relative">
            {/* <img
              className="absolute -bottom-[150px] -left-[100px] w-[280px]"
              src="./assets/Group22.png"
              alt=""
            /> */}
            <div className="mx-8 flex flex-col items-center py-10">
              <h1 className="text-4xl font-black my-3">
                About page
              </h1>
              <h3 className="text-lg leading-10 my-3 mx-20">
                Discover our range of products by browsing through our
                selection, or for a faster and personalized experience, leverage
                our AI assistant. Simply tap 'AI Guide' for immediate support
                from our AI model, guiding you to the right laptop price based
                on its features.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
