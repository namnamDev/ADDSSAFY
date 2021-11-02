import React, { ReactElement } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import MoveRound from "./MoveRound";
import Image from "next/image";
import Footer from "../components/basic/Footer";

const features = [
  { name: 'WHO', description: '박종한, 남근형, 조영우' },
  { name: 'WHAT', description: '팀빌딩 및 교육비지원금관리' },
  { name: 'WHEN', description: '20.10.11 - 20.11.15' },
  { name: 'WHERE', description: 'SSAFY' },
  { name: 'WHY', description: '구글드라이브로 진행되는 다소 답답함 프로세스와 교육생들의 7주를 책임질 프로젝트에 있어 원활한 팀빌딩을 위해' },
  { name: 'HOW', description: '자율프로젝트를 통해서' },
]

interface Props { }

function StudentMain({ }: Props): ReactElement {
  return (
    <div className="">
      <StudentNavbar />
      {/* <div className="">
        <MoveRound />
        <div className="stmainssafy mx-auto">
          <Image
            width="200%"
            height="100%"
            src="/images/ssafy.png"
            alt="ssafy"
            className=""
          />
        </div>
      </div> */}
      <div className="bg-white w-4/5 mx-auto">
        <div className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Project SSAFY</h2>
            <p className="mt-4 text-gray-500">
              교육생 메인페이지입니다
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-6 lg:gap-8">
            <Image
              src="/images/samsung.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/apple.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/google.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/kb.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
            <Image
              src="/images/ssg.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
              width="80%" height="100%" layout="responsive" objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentMain;
