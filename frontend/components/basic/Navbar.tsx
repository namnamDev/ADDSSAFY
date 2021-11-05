import React, { ReactElement, Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Transition, Menu, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const projects = [
  {
    No: 1,
    name: "공통프로젝트",
    description: "WebRTC, SNS, IOT",
  },
  {
    No: 2,
    name: "특화프로젝트",
    description: "빅데이터(추천, 분산), 블록체인, IOT, AI(음성, 영상)",
  },
  {
    No: 3,
    name: "자율프로젝트",
    description: "자율",
  },
];
interface Props { }

function Navbar({ }: Props): ReactElement {
  // nickname 가져오기
  const [mynickname, setmynickname] = useState<string|null>("")
  useEffect(() => {
    const nickname: string | null = localStorage.getItem("nickname")
    setmynickname(nickname)
  }, [])

  const router = useRouter();
  // 로그아웃
  function logout() {
    localStorage.clear();
    router.push("/");
  }
  function gototeammenu(teammenu: number) {
    router.push({
      pathname: `/TeamBuildingCurrent`,
      query: { projectNo: teammenu },
    });
  }

  return (
    <div>
      <div className="relative bg-white">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="cursor-pointer" onClick={() => router.push("/")}>
                <Image
                  src="/images/ssafygif-unscreen.gif"
                  height="70"
                  width="100"
                  alt=""
                ></Image>
              </div>
            </div>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => gototeammenu(0)}
            >
              공통프로젝트
            </div>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => gototeammenu(1)}
            >
              특화프로젝트
            </div>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => gototeammenu(2)}
            >
              특화프로젝트
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <div className="whitespace-nowrap text-xs font-bold text-gray-900 ">
                {mynickname}
              </div>
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          )}
                          onClick={() => router.push("/Mypage")}
                        >
                          Mypage
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          )}
                          onClick={logout}
                        >
                          Logout
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
