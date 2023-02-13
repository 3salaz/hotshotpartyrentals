import React from "react";
import { Parallax } from "react-parallax";
import waterGunHeader from "../assets/img/watergun2.png";

const Faq = () => {
  return (
    <>
      <Parallax
        blur={0}
        bgImage={waterGunHeader}
        bgImageAlt="water gun"
        strength={100}
      >
        <div className="container mx-auto flex items-center justify-center pt-24 mt-24 py-12">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[520px] text-center">
                <h2 className="mb-4 text-3xl font-bold text-mainTeal sm:text-4xl md:text-[80px] p-6">
                  FAQ
                </h2>
                <p className="text-base text-white bg-mainTeal opacity-90 p-2 rounded-md px-8">
                  Below are a list of fact and questions. If any other concern
                  is needed you can contact us with the contact section down at
                  the bottom of the page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Questions Starts */}
      <section className="relative z-0 overflow-hidden bg-white pt-20 pb-12 lg:pt-[40px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                  className="faq-btn flex w-full text-left"
                  // @click="openFaq1 = !openFaq1"
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3BAAA1"
                        stroke="#3BAAA1"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-mainTeal">
                      What if I want more time?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq1" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color">
                    Each package includes one hour of play. If you feel your
                    part guest would prefer more time, it can be purchased in
                    one hr increments ($150.00 per additional hr).
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                  className="faq-btn flex w-full text-left"
                  // @click="openFaq2 = !openFaq2"
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3BAAA1"
                        stroke="#3BAAA1"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-mainTeal">
                      How safe are foam air pressure guns?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq2" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color">
                    The foam balls are soft. However, we do provide safety face
                    shields to protect faces and eyes from being injured and to
                    discourage the little ones from eating the foam balls.
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                  className="faq-btn flex w-full text-left"
                  // @click="openFaq3 = !openFaq3"
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3BAAA1"
                        stroke="#3BAAA1"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-mainTeal">
                      How safe are gel blaster pistols/riffles?
                    </h4>
                  </div>
                </button>
                <div xshow="openFaq3" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color">
                    The non-toxic, biodegradable bullets break down and are
                    safely absorbed into the ground. We do provide safety
                    equipment (face shield and goggles) for each participant to
                    prevent injury. This is a great alternative to harsh paint
                    ball gun bullets, which can leave welts on the skin, but we
                    do advise long sleeves and pants to be worn if participants
                    have sensitive skin/ bruise easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                  className="faq-btn flex w-full text-left"
                  // @click="openFaq4 = !openFaq4"
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3BAAA1"
                        stroke="#3BAAA1"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-mainTeal">
                      Where is a good location to book my event?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq4" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color">
                    To ensure a safe, open environment, we will be booking
                    events at local parks throughout the Bay Area (locations are
                    subject to an additional distance fee). Each reservation
                    area will be checked for safety and availability prior to
                    the event date. If you plan on reserving a park rental,
                    please keep in mind that the reservation area for the party
                    must be a safe distance away from play structures, sitting
                    areas, or other events.
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button className="faq-btn flex w-full text-left">
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3BAAA1"
                        stroke="#3BAAA1"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-mainTeal">
                      How many people can participate?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq5" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color">
                    Each package includes 10 participants. Additionally
                    participants can be added (at $30.00 per additional
                    participant). We would advise no more than 20 at a time to
                    ensure safety for all participants.
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                  className="faq-btn flex w-full text-left"
                  // @click="openFaq6 = !openFaq6"
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3BAAA1"
                        stroke="#3BAAA1"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-mainTeal">
                      Is the rental equipment clean?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq6" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color">
                    Yes. We take every safety precaution, especially with covid
                    and other illnesses. All equipment is cleaned and
                    disinfected after each rental and stored in a secure
                    location.
                  </p>
                </div>
              </div>
              <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                <button
                  className="faq-btn flex w-full text-left"
                  // @click="openFaq6 = !openFaq6"
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                      width="17"
                      height="10"
                      viewBox="0 0 17 10"
                      className="icon fill-current"
                    >
                      <path
                        d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                        fill="#3BAAA1"
                        stroke="#3BAAA1"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-semibold text-mainTeal">
                      What will happen if it rains on the day of my event?
                    </h4>
                  </div>
                </button>
                <div x-show="openFaq6" className="faq-content pl-[62px]">
                  <p className="py-3 text-base leading-relaxed text-body-color">
                    We are able to keep the event even if it rains. If you do
                    not prefer to have your event if it does rain, please keep
                    in mind that the rental deposit is nonrefundable and perhaps
                    booking an event at another time would be best
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3BAAA1" stopOpacity="1" />
                <stop offset="1" stopColor="#3BAAA1" stopOpacity="0" />
                <stop offset="1" stopColor="#3BAAA1" stopOpacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      {/* Question Ends */}
    </>
  );
};

export default Faq;
