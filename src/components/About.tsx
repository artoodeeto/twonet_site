import React from "react";
import {Container} from "./Container";
import Image from "next/image";
import aboutImg from "../../public/img/about.png";

const About = () => {
  return (
    <Container className="flex flex-wrap">
      <div
        id="about"
        className="flex items-center justify-center w-full lg:w-1/2"
      >
        <div className="">
          <Image
            src={aboutImg}
            width="616"
            height="617"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h6 className="text-2xl font-bold leading-snug tracking-tight text-blue-500 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            About Heart & Home Care
          </h6>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            {`Founded on the principles of dignity, empathy, and reliability, our
            mission is to help our clients maintain independence and peace of
            mind while receiving the care they need. Whether it's help with
            daily tasks, companionship, or respite for family caregivers, we're
            here to make life easier and brighter.`}
          </p>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            {`Our caregivers are more than just professionals—they're trusted
            companions, trained to deliver care with heart. Each team member is
            carefully selected, background-checked, and dedicated to treating
            clients like family.`}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
