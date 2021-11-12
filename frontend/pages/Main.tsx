import React, { ReactElement } from "react";
import Navbar from "../components/basic/Navbar";
import Image from "next/image";
import Footer from "../components/basic/Footer";

const features = [{ name: "WHO", description: "박종한, 남근형, 조영우" }];

interface Props {}

function Main({}: Props): ReactElement {
  return (
    <div className="">
      <Navbar />
      <section data-aos="fade-up" className="">
        <div className="bg-white w-full mx-auto">
          <div className="max-w-5xl mx-auto py-5 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Project SSAFY
              </div>
              <div className="mt-4 text-gray-500">교육생 메인페이지입니다</div>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
              <Image
                src="/images/mainbg.png"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="bg-gray-100 rounded-lg"
                width="100"
                height="100"
                layout="responsive"
                objectFit="cover"
              />
              {/* <Image
              src="/images/ssg.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/apple.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/google.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/kb.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            /> */}
            </div>
          </div>
          <hr className="w-1/2 mx-auto my-5" />
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
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
