import React from "react";
import {Container} from "./Container";
import Image from "next/image";
import serviceImg from "../../public/img/service.png";
import {benefitOne} from "./data";

const Services = () => {
  return (
    <Container className="flex flex-wrap">
      <div id="services" className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-2xl font-bold leading-snug tracking-tight text-blue-500 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            Services Offered
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            At Heart & Home Care we re more than caregivers — we're companions,
            advocates, and trusted support systems for the people you love most.
            Here's what sets us apart:
          </p>
          <div className="w-full mt-5 flex flex-wrap">
            {benefitOne.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <Image
            src={serviceImg}
            width="616"
            height="617"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </Container>
  );
};

export default Services;

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-blue-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}
