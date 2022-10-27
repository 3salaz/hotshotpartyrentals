import React from "react";
import { FaBirthdayCake, FaSchool, FaCalendarCheck } from "react-icons/fa";

function Greeting() {
  return (
      <section className="flex flex-col md:flex-row p-2 gap-2 bg-orange-400 items-center justify-center">
        <div className="flex-1 w-320 md:w-656 flex flex-col justify-center items-center gap-4 py-8 px-4 bg-white rounded-lg drop-shadow-sm">
          <div className="text-sm text-center">
            Thank you for visiting Hot Shot party rentals. We value your
            interest in our company and hope that we will be able to assist in
            planning your next event. 
          </div>
          <div className="text-sm text-center">
            We offer top of the line equipment, customer service and an amazing
            experience. Because the service we offer is unique, we do require an
            open park or field in order to reserve an event. We can assist in
            determining location, as well as obtaining permits if necessary.
          </div>

          <div className="text-center text-sm">Well look no further!</div>
        </div>

        <div className="flex-1 w-225 px-8">
          <ul className="text-center flex flex-col items-center justify-center gap-2 text-md bg-orange-400 rounded-lg">
            <li className="rounded-lg bg-blue-400 text-white p-2">
              Do you have a birthday?{" "}
            </li>
            <li className="flex items-center justify-center bg-white rounded-full w-12 h-12">
              <FaBirthdayCake className="text-red-400" />
            </li>
            <li className="rounded-lg bg-blue-400 text-white p-2">
              School event?
            </li>
            <li className="flex items-center justify-center bg-white rounded-full w-12 h-12">
              <FaSchool className="text-red-400" />
            </li>
            <li className="rounded-lg bg-blue-400 text-white p-2">
              Looking to plan something fun to do?
            </li>
            <li className="flex items-center justify-center bg-white rounded-full w-12 h-12">
              <FaCalendarCheck className="text-red-400" />
            </li>
          </ul>
        </div>

      </section>
  );
}

export default Greeting;
