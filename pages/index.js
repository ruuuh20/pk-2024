import Layout from "@/components/layout";

import { IBM_Plex_Mono } from "next/font/google";

import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";

const ibm = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className={`px-10 mb-12 md:mb-16 ${ibm.className}`}
        >
          <div className="fixed inset-0 z-0 grid grid-stack">
            <div className="top-bg size-full"></div>
            <div className="relative z-10 bottom-bg size-full">
              <div className="size-full">
                <div className="size-full bg-scale">
                  <img
                    className="object-cover size-full"
                    // src="https://res.cloudinary.com/drc9j7ogf/image/upload/v1719509600/download_2_dy02ap.png"
                    src="https://res.cloudinary.com/drc9j7ogf/image/upload/v1721011394/max-fuchs-f7DRB6DKdDg-unsplash_wrfiju.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative">
            <div className="header">
              <h1>HELLO</h1>
            </div>
            <div className="project">Project name 1</div>
            <div className="project">Project name 1</div>
            <div className="project">Project 1</div>
            <div className="project">Project 1</div>
          </div> */}
          <m.div className="relative grid-stack bg-inner" variants={fade}>
            {/* <div className="bg-darker"></div> */}

            <div className="relative z-10 ">
              <div className="overflow-hidden content">
                <div className="p-9 wrapper">
                  <div className="relative overflow-hidden table-container widget-border-radius">
                    {/* <div className="bg-darker"></div> */}
                    <div className="grid gap-10 b-table widget-border-radius">
                      {/* <div className="bg-darker"></div> */}
                      <div class="table-row-grid grid j gap-5 border-t-1 border-row px-6 widget-border-radius top-widget relative  text-white widget-border-radius">
                        {/* <header class="pt-10 text-14 leading-125">
                          <h2 class="font-semibold leading-[inherit]  text-white ">
                            Projects
                          </h2>{" "}
                        </header>{" "} */}
                        <div className="projects-wrapper">
                          <div className="flex items-center justify-between py-5">
                            <div>Project 1</div>{" "}
                            <a href="/">
                              <div class="flex items-center gap-8 font-semibold">
                                <div class="hidden bp:block">Learn more</div>{" "}
                                <div class="w-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-move-up-right"
                                  >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                  </svg>
                                </div>
                              </div>
                            </a>{" "}
                          </div>
                          <div class="flex items-center justify-between border-light py-5 border-t">
                            <div>Project 2</div>{" "}
                            <a href="/">
                              <div class="flex items-center gap-8 font-semibold">
                                <div class="hidden bp:block">Learn more</div>{" "}
                                <div class="w-5">
                                  {/* <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M5.52794 12.4715C5.26759 12.2111 5.26759 11.789 5.52794 11.5287L9.05654 8.00008L5.52794 4.47149C5.26759 4.21114 5.26759 3.78903 5.52794 3.52868C5.78829 3.26833 6.2104 3.26833 6.47075 3.52868L10.4708 7.52868C10.7311 7.78903 10.7311 8.21114 10.4708 8.47149L6.47075 12.4715C6.2104 12.7318 5.78829 12.7318 5.52794 12.4715Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg> */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-move-up-right"
                                  >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                  </svg>
                                </div>
                              </div>
                            </a>{" "}
                          </div>
                          <div class="flex items-center justify-between border-light py-5 border-t">
                            <div>Project 3</div>{" "}
                            <a href="/">
                              <div class="flex items-center gap-8 font-semibold">
                                <div class="hidden bp:block">Learn more</div>{" "}
                                <div class="w-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-move-up-right"
                                  >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                  </svg>
                                </div>
                              </div>
                            </a>{" "}
                          </div>
                          <div class="flex items-center justify-between border-light py-5 border-t">
                            <div>Project 4</div>{" "}
                            <a href="/">
                              <div class="flex items-center gap-8 font-semibold">
                                <div class="hidden bp:block">Learn more</div>{" "}
                                <div class="w-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-move-up-right"
                                  >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                  </svg>
                                </div>
                              </div>
                            </a>{" "}
                          </div>
                          <div class="flex items-center justify-between border-light py-5 border-t">
                            <div>Project 5</div>{" "}
                            <a href="/">
                              <div class="flex items-center gap-8 font-semibold">
                                <div class="hidden bp:block">Learn more</div>{" "}
                                <div class="w-5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-move-up-right"
                                  >
                                    <path d="M13 5H19V11" />
                                    <path d="M19 5L5 19" />
                                  </svg>
                                </div>
                              </div>
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="bottom-widget border-row">
                        {" "}
                        <div className="grid p-8 text-white widget-grid">
                          <div className="p-5 left-box border-row widget-border-radius">
                            <span>hello </span>

                            <ul className="flex social-list">
                              <li>
                                <a
                                  target="_blank"
                                  href="mailto:pkim2320@gmail.com"
                                  rel="noreferrer"
                                >
                                  Email
                                </a>
                                <div className="w-[2em] mx-auto mt-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlSpace="preserve"
                                    width="2em"
                                    height="2em"
                                    fill="#fff"
                                    stroke="#fff"
                                    viewBox="0 0 495.003 495.003"
                                  >
                                    <path d="M164.711 456.687a8.007 8.007 0 0 0 4.266 7.072 7.992 7.992 0 0 0 8.245-.468l55.09-37.616-67.6-32.22v63.232zM492.431 32.443a8.024 8.024 0 0 0-5.44-2.125 7.89 7.89 0 0 0-3.5.816L7.905 264.422a14.154 14.154 0 0 0 .153 25.472L133.4 349.618l250.62-205.99-219.565 220.786 156.145 74.4a14.115 14.115 0 0 0 6.084 1.376c1.768 0 3.519-.322 5.186-.977a14.188 14.188 0 0 0 7.97-7.956l154.596-390a7.968 7.968 0 0 0-2.005-8.814z" />
                                  </svg>
                                </div>
                              </li>

                              <li>
                                <a
                                  target="_blank"
                                  href="https://www.github.com/ruuuh20"
                                  rel="noreferrer"
                                >
                                  GitHub
                                </a>
                                <div className="w-[2em] mx-auto mt-2">
                                  <svg
                                    class="social-icon"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_2547_14089)">
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M20.5577 -6.10352e-05C9.20553 -6.10352e-05 -0.000915527 9.43808 -0.000915527 21.0814C-0.000915527 30.3953 5.88974 38.296 14.0599 41.0836C15.0886 41.2777 15.4635 40.6268 15.4635 40.0677C15.4635 39.5669 15.4458 38.2417 15.4357 36.4829C9.71672 37.7564 8.51006 33.6565 8.51006 33.6565C7.57477 31.221 6.22675 30.5726 6.22675 30.5726C4.35997 29.2655 6.36811 29.2914 6.36811 29.2914C8.4318 29.4403 9.51729 31.4643 9.51729 31.4643C11.3513 34.6854 14.33 33.7549 15.5014 33.2152C15.6882 31.8538 16.2195 30.9246 16.8065 30.3979C12.2411 29.866 7.44098 28.0568 7.44098 19.9788C7.44098 17.6778 8.24247 15.7949 9.55768 14.3221C9.34563 13.789 8.64006 11.6446 9.75963 8.74313C9.75963 8.74313 11.485 8.17629 15.413 10.9043C17.0526 10.4359 18.8121 10.2029 20.5602 10.1939C22.3071 10.2029 24.0653 10.4359 25.7075 10.9043C29.6329 8.17629 31.3558 8.74313 31.3558 8.74313C32.4779 11.6446 31.7723 13.789 31.5615 14.3221C32.8792 15.7949 33.6744 17.6778 33.6744 19.9788C33.6744 28.0775 28.8667 29.8596 24.2875 30.3811C25.0246 31.032 25.6822 32.3184 25.6822 34.2842C25.6822 37.1028 25.657 39.3766 25.657 40.0677C25.657 40.6319 26.028 41.2881 27.0706 41.0823C35.2345 38.2883 41.1201 30.3927 41.1201 21.0814C41.1201 9.43808 31.9137 -6.10352e-05 20.5577 -6.10352e-05Z"
                                        fill="currentColor"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_2547_14089">
                                        <rect
                                          width="41.121"
                                          height="41.121"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  href="https://www.linkedin.com/in/pia-kim"
                                  rel="noreferrer"
                                >
                                  LinkedIn
                                </a>
                                <div className="w-[2em] mx-auto mt-2">
                                  <svg
                                    class="w-full"
                                    width="41"
                                    height="40"
                                    viewBox="0 0 41 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M10.5 0C4.97715 0 0.5 4.47715 0.5 10V30C0.5 35.5228 4.97715 40 10.5 40H30.5C36.0228 40 40.5 35.5228 40.5 30V10C40.5 4.47715 36.0228 0 30.5 0H10.5ZM10.184 31.1493H14.868V16.0416H10.184V31.1493ZM9.85415 11.2916C9.85415 12.809 11.0416 13.9965 12.559 13.9965C14.0764 13.9965 15.2639 12.743 15.2639 11.2916C15.2639 9.77428 14.0764 8.58678 12.559 8.58678C11.0416 8.58678 9.85415 9.77428 9.85415 11.2916ZM27.7986 31.1493H32.4166V22.8368C32.4166 18.7465 31.559 15.6458 26.809 15.6458C24.566 15.6458 22.9826 16.8993 22.3889 18.0868H22.3229V16.0416H17.8368V31.1493H22.5208V23.6944C22.5208 21.7153 22.9166 19.8021 25.3576 19.8021C27.7986 19.8021 27.7986 22.0451 27.7986 23.8264V31.1493Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </li>
                              <li>
                                <a
                                  target="_blank"
                                  href="https://twitter.com/aaaiip20"
                                  rel="noreferrer"
                                >
                                  Twitter
                                </a>
                                <div className="w-[2em] mx-auto mt-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlSpace="preserve"
                                    width={24}
                                    height={24}
                                    style={{
                                      enableBackground: "new 0 0 24 24",
                                      fill: "currentColor",
                                    }}
                                  >
                                    <path d="M14.095 10.316 22.286 1h-1.94L13.23 9.088 7.551 1H1l8.59 12.231L1 23h1.94l7.51-8.543L16.45 23H23l-8.905-12.684zm-2.658 3.022-.872-1.218L3.64 2.432h2.98l5.59 7.821.869 1.219 7.265 10.166h-2.982l-5.926-8.3z" />
                                  </svg>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* <div>
                            I&apos;m a front-end developer interested in
                            creating dynamic, engaging, and user-centric
                            websites.
                          </div> */}
                          <div className="right-box widget-border-radius border-row p-5 text-[15px]">
                            <p>
                              This is the introduction. Lorem ipsum dolor sit
                              amet consectetur adipisicing elit. Exercitationem
                              voluptatum, rerum molestiae maiores sed, nulla
                              laudantium dolorum velit praesentium vero provid
                              ent minus
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </m.div>

          {/* <div className="relative overflow-hidden page-gradient"></div> */}
        </m.main>
      </LazyMotion>
    </Layout>
  );
}
