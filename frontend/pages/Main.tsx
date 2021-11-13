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
          <div className="max-w-5xl mx-auto py-5 px-4 grid items-center grid-cols-2 gap-y-16 gap-x-8">
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
          <div className="text-center w-3/4 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full mt-10">
                <h3 className="text-4xl mb-2 font-semibold leading-normal">
                  How to enjoy the SSAFY Prject
                </h3>
                <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  <div className="px-4 py-2 my-1 inline-flex text-base leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    사람들이 나를 찾을 수 있도록 남들보다 빠르게 나의 기술스택을 설정해둔다
                  </div>
                  <br />
                  <div className="px-4 py-2 my-1 inline-flex text-base leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    나와 마음이 맞는 팀을 검색해서 미리 컨택을 한다, 팀정보를 미리 확인해 구성원들을 미리 파악해놓는다
                  </div>
                  <br />
                  <div className="px-4 py-2 my-1 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    팀장으로 프로젝트를 이끌어보고 싶다면, 팀을 생성후 필요한 기술스택에 맞는 교육생들을 검색해서 컨택을 한다
                  </div>
                  <br />
                  <div className="px-4 py-2 my-1 inline-flex text-base leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    팀이 결성되었다면 Webex, Mattermost를 활용해 프로젝트에 대한 회의를 시작한다
                  </div>
                  <br />
                  <div className="px-4 py-2 my-1 inline-flex text-base leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    끝까지 달린다
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
          <hr className="w-2/3 mx-auto my-5" />

        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Main;
