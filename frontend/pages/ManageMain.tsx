import React, { useRef, useState, ReactElement } from "react";
import Image from "next/dist/client/image";
import ProNavbar from "../components/basic/ProNavbar";
import { useRouter } from "next/router";
import Moment from "react-moment";
import "moment/locale/ko";
import { useInterval } from "react-use";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
const menus = [
  {
    id: 1,
    name: "교육생 관리",
    href: "ManageUser",
  },
  {
    id: 2,
    name: "교육비지원 서명관리",
    href: "ManageUserSalary",
  },
  {
    id: 3,
    name: "프로젝트 팀빌딩 현황",
    href: "ManageUserTeamBuilding",
  },
  {
    id: 4,
    name: "공지사항",
    href: "Notice",
  },
];
interface Props {}

function ManageMain({}: Props): ReactElement {
  const router = useRouter();
  // 시간
  const [nowtime, setnowtime] = useState(Date.now());
  useInterval(() => {
    setnowtime(Date.now());
  }, 1000);

  return (
    <div className="">
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Manage SSAFY
            </p>
            <br />
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              <Moment>{nowtime}</Moment>
            </h2>
          </div>
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {menus.map((menu) => (
                  <div key={menu.id} className="group relative">
                    <div
                      className="w-full bg-gray-100 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden group-hover:opacity-30 h-56 lg:aspect-none cursor-pointer"
                      onClick={() => router.push(`${menu.href}`)}
                    >
                      <div className="text-center my-24 text-xl">
                        {menu.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageMain;
