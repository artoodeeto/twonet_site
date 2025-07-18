import React from "react";
import {Container} from "./Container";
import Image from "next/image";
import contactImg from "../../public/img/contact.png";
import {Building2, Clock, Mail, Phone} from "lucide-react";

const Contact = () => {
  return (
    <Container className="flex flex-wrap">
      <div
        id="about"
        className="flex items-center justify-center w-full lg:w-1/2"
      >
        <div className="">
          <Image
            src={contactImg}
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
            Contact Us
          </h6>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 className="text-blue-500" />
                <div className="font-bold">Find us</div>
              </div>

              <div>1414 Street, Honolulu</div>
              <div>Hawaii, 96822</div>
              <div>USA</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone className="text-blue-500" />
                <div className="font-bold">Call us</div>
              </div>

              <div>US: +1 (347) 536-0369</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail className="text-blue-500" />
                <div className="font-bold">Mail us</div>
              </div>

              <div>caringhands.hi@gmail.com</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock className="text-blue-500" />
                <div className="font-bold">Visit us</div>
              </div>

              <div>
                <div>Monday - Friday</div>
                <div>8AM - 4PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
