import React, { ReactElement, useEffect } from "react";
import Navbar from "../components/basic/Navbar";
import Image from "next/image";
import Footer from "../components/basic/Footer";
import "aos/dist/aos.css";
import Aos from "aos";

interface Props { }

function Main({ }: Props): ReactElement {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <Navbar />
      <section data-aos="fade-up" className="">
        <div className="bg-white w-full mx-auto">
          <div className="max-w-5xl mx-auto py-5 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div className="text-center">
              <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Project SSAFY
              </div>
              <div className="mt-4 text-gray-500">살펴보고, 소통하고, 결정하고</div>
            </div>
            <div className="">
              <Image
                src="/images/mainbg.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="bg-gray-100 rounded-full"
                width="100"
                height="100"
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
          <hr className="w-2/3 mx-auto my-5" />
          <div className="w-2/3 mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-4/12 px-4">
                    <div className="text-xl font-semibold text-center">
                      Mattermost
                    </div>
                    <div className="">
                      <Image
                        alt="..."
                        className=""
                        src="/images/mattermost.gif"
                        width="100"
                        height="100"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="w-4/12 px-4">
                    <div className="text-xl font-semibold text-center">
                      Search
                    </div>
                    <div className="">
                      <Image
                        alt="..."
                        className=""
                        src="/images/searchuser.gif"
                        width="100"
                        height="100"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="w-4/12 px-4">
                    <div className="text-xl font-semibold text-center">
                      Create
                    </div>
                    <div className="">
                      <Image
                        alt="..."
                        className="rounded-lg"
                        src="/images/teamwork.gif"
                        width="100"
                        height="100"
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-2/3 mx-auto my-5" />
          <div className="text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
              SSAFY Project Gallery
            </p>
          </div>
          <div className="wrapper">
            <div className="item">
              <div className="polaroid">
                <Image src="/image/peopool.gif" width="390" height="220" alt="" />
                <div className="caption">PeoPool</div>
              </div>
            </div>
            <div className="item">
              <div className="polaroid">
                <Image src="/image/iseau.gif" width="390" height="220" alt="" />
                <div className="caption">ISEAU</div>
              </div>
            </div>
            <div className="item">
              <div className="polaroid">
                <Image src="/image/thefan.gif" width="390" height="220" alt="" />
                <div className="caption">theFAN</div>
              </div>
            </div>
            <div className="item">
              <div className="polaroid">
                <Image src="/image/alzalal.gif" width="390" height="220" alt="" />
                <div className="caption">alzalal</div>
              </div>
            </div>
            <div className="item">
              <div className="polaroid">
                <Image src="/image/bts.gif" width="390" height="220" alt="" />
                <div className="caption">BTS</div>
              </div>
            </div>
            <div className="item">
              <div className="polaroid">
                <Image src="/image/mokomoko.gif" width="390" height="220" alt="" />
                <div className="caption">MokoMoko</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Main;
