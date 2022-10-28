import React from "react";
import { FaBirthdayCake, FaSchool, FaCalendarCheck } from "react-icons/fa";

function Greeting() {
  return (
    <section>
      <div className="flex flex-col md:flex-row pb-8 md:p-12 gap-2 items-center justify-center bg-gray-200">
        <div className=" basis-3/4 flex flex-col justify-center items-center gap-6 sm:py-8 px-4 rounded-lg drop-shadow-sm">
          <div className="text-sm text-center md:text-lg px-4">
            Thank you for visiting Hot Shot party rentals. We value your
            interest in our company and hope that we will be able to assist in
            planning your next event.
          </div>
          <div className="w-full flex items-center justify-center">
            <img
              className="text-center shadow-2xl"
              src="https://via.placeholder.com/600x300"
            />
          </div>
        </div>

        <div className="basis-1/4 py-12 rounded-lg bg-white drop-shadow-lg md:h-full">
          <ul className="text-center flex flex-col items-center justify-center gap-2 text-md rounded-lg">
            <li className="rounded-lg bg-blue-400 text-white p-2">
              Do you have a birthday?{" "}
            </li>
            <li className="flex items-center justify-center bg-red-500 rounded-full w-12 h-12">
              <FaBirthdayCake className="text-white" />
            </li>
            <li className="rounded-lg bg-blue-400 text-white p-2">
              School event?
            </li>
            <li className="flex items-center justify-center bg-red-500 rounded-full w-12 h-12">
              <FaSchool className="text-white" />
            </li>
            <li className="rounded-lg bg-blue-400 text-white p-2">
              Planning something fun to do?
            </li>
            <li className="flex items-center justify-center bg-red-500 rounded-full w-12 h-12">
              <FaCalendarCheck className="text-white" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="container text-sm text-center px-4">
          We offer top of the line equipment, customer service and an amazing
          experience. Because the service we offer is unique, we do require an
          open park or field in order to reserve an event. We can assist in
          determining location, as well as obtaining permits if necessary.
        </div>
      </div>
    </section>
  );
}

export default Greeting;
