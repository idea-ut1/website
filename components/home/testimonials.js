import Image from "next/image";
import React from "react";

import cgr from "@/public/image/projects/cgr.png";
import tfc from "@/public/image/projects/tfc.png";
import fou from "@/public/image/projects/puy_du_fou.svg";

const Testimonials  = () => {
  return (
    <div className="container mx-auto p-8 xl:px-0">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="hover:-translate-y-1 lg:col-span-2 xl:col-auto">
          <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
            <p className="text-2xl leading-normal ">
              Create a visualization tool of the data of the cinema but also of its competitors on a regular and automated basis.
            </p>
            <Avatar
              image={cgr}
              name="CGR"
              title="2023"
            />
          </div>
        </div>
        <div className="hover:-translate-y-1">
          <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
            <p className="text-2xl leading-normal ">
              Predict the number of visitor of the park by day or night.
            </p>
            <Avatar
              image={fou}
              name="Puy du Fou"
              title="2023"
            />
          </div>
        </div>
        <div className="hover:-translate-y-1">
          <div className="dark:bg-trueGray-800 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 p-14">
            <p className="text-2xl leading-normal ">
              Processing and analysis of data concerning matches and subscriptions through dashboards,
              and implementation of a customer typology.
            </p>
            <Avatar
              image={tfc}
              name="Toulouse Football Club"
              title="2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="mt-8 flex items-center space-x-3">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl">
        <Image
          src={props.image}
          alt="Avatar"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="rounded-md bg-indigo-100 text-indigo-800 ring-4 ring-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 dark:ring-indigo-900">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;