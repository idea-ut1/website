"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <div className="container mx-auto p-8 xl:px-0">
      <div className="mx-auto w-full max-w-2xl rounded-2xl p-2">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="dark:bg-trueGray-800 flex w-full items-center justify-between rounded-lg bg-gray-50 p-4 text-left text-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100/75 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180" : ""
                      } h-5 w-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqdata = [
  {
    question: "Nos services sont-ils gratuits ?",
    answer: "Oui, nos services sont complètement gratuits!",
  },
  {
    question: "Comment puis-je vous contacter ?",
    answer: "Envoyez nous un email à l'adresse ideamiage@gmail.com ",
  },
];

export default Faq;