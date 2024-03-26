"use client";

import Hero from "@/components/home/hero";
import SectionTitle from "@/components/home/sectionTitle";
import Caroussel from "@/components/wall/caroussel";
import Image from "next/image";
import React from "react";
import {
  ChartBarIcon,
  Square3Stack3DIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  CircleStackIcon,
  RectangleGroupIcon,
  ScaleIcon,
  ArrowsPointingOutIcon,
  TableCellsIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "@/public/image/benefit-one.png";
import benefitTwoImg from "@/public/image/benefit-two.png";
import { Menu } from "react-feather";
import SliderHome from "@/components/slider-home";
import { useState } from "react";
import Navbar from "@/components/home/navbar";
import Testimonials from "@/components/home/testimonials";
import Faq from "@/components/home/faq";
import Footer from "@/components/footer";

export default function CV() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white_background_bobby px-6">
      <Navbar />
      <div className="relative">
        <div className="fixed right-0 top-0 h-20 w-20 rounded-bl-full bg-brown_bobby" />
        <div className="fixed right-0 top-0 pr-4 pt-4">
          <div className="flex items-start justify-end">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open panel</span>
              <Menu className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <Hero />
      <SectionTitle
        id = "wall"
        pretitle="Why IDeA?"
        title="Why should you contact us">
        We are a team of students who learned how to code, and we want to help you create your project.
      </SectionTitle>

      <Caroussel/>

      <div className="container mx-auto p-8 xl:px-0 mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2`}>
          <div>
            <Image
              src={benefitOneImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2`}>
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 id="skills" className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
                Lots of skills
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
                Thanks to our different experiences, we have acquired a lot of skills in different fields.
              </p>
            </div>
            <div className="mt-5 w-full">
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <TableCellsIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Data engineering
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Processing, managing, and optimizing data.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <ChartBarIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Data visualization
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Operate Data to create a dashboard and visualize your data.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <Square3Stack3DIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Machine learning
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Representing data for machine learning model to predict your data.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <RectangleGroupIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Deep learning
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Advanced machine learning using neural networks.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <ArrowsPointingOutIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Information system
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Data-driven information system design and modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 xl:px-0 mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 ">
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 lg:order-1`}>
          <div>
            <Image
              src={benefitTwoImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>
        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 lg:justify-end`}>
          <div>
            <div className="mt-4 flex w-full flex-col">
              <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
                And more...
              </h3>
            </div>
            <div className="mt-5 w-full">
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <CircleStackIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Big data
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Designing business intelligence and big data analytics architecture.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <MagnifyingGlassIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Project management
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Drive a digital project from scratch.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <GlobeAltIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Web development
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Create a responsive website for your project.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-start space-x-3">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                  <ScaleIcon className="w-7 h-7 text-indigo-50" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                    Legal ethics of AI and Green IT
                  </h4>
                  <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Helping to adopt an ethical approach to data and learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle
        id="projects"
        pretitle="Projects"
        title="Here's some of our projects">
        We have already worked on some projects, here are some of them.
      </SectionTitle>
      <Testimonials />
      <SectionTitle
        id="faq"
        pretitle="FAQ"
        title="Frequently Asked Questions">
        If you still have questions, look here.
      </SectionTitle>
      <Faq />
      <Footer />
      <SliderHome open={open} setOpen={setOpen} />
    </div>
  );
}
