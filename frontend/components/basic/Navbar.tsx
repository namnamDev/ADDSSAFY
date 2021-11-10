import React, { ReactElement, Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Transition, Menu, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import axios from "axios";
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props { }

function Navbar({}: Props): ReactElement {
  // nickname 가져오기
  const [mynickname, setmynickname] = useState<string | null>("")
  useEffect(() => {
    const nickname: string | null = localStorage.getItem("nickname")
    setmynickname(nickname)
  }, [])
  // 사진가져오기
  const [base64data, setBase64data] = useState<string | undefined>();
  useEffect(() => {
    const mmid: string | null = localStorage.getItem("mmid");
    const mmtoken: string | null = localStorage.getItem("mmtoken");
    if (typeof mmtoken == "string" && typeof mmid === "string") {
      axios
        .get(`/api/v4/users/${mmid}/image`, {
          headers: {
            Authorization: mmtoken,
            "Content-Type": "multipart/form-data",
          },
          responseType: "blob",
        })
        .then((res: any) => {
          const fileReaderInstance: any = new FileReader();
          fileReaderInstance.readAsDataURL(res.data);
          fileReaderInstance.onload = () => {
            setBase64data(fileReaderInstance.result);
          };
        });
    }
  }, []);
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
      {/*  */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 pt-6 ">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <img
                        className="h-14 w-auto"
                        src="/images/mainlogo.jpg"
                      />
                    </a>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <div className="font-medium text-gray-500 hover:text-gray-900 float-left cursor-pointer" onClick={() => gototeammenu(0)}>
                    공통프로젝트
                  </div>
                  <div className="font-medium text-gray-500 hover:text-gray-900 float-left cursor-pointer" onClick={() => gototeammenu(1)}>
                    특화프로젝트
                  </div>
                  <div className="font-medium text-gray-500 hover:text-gray-900 float-left cursor-pointer" onClick={() => gototeammenu(2)}>
                    자율프로젝트
                  </div>
                  <div className="font-medium text-gray-500 hover:text-gray-900 float-left cursor-pointer" onClick={() => router.push("/Mypage")}>
                    내프로필
                  </div>
                  <div className="font-medium text-red-200 hover:text-red-500 float-left cursor-pointer" onClick={logout}>
                    로그아웃
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <div className="whitespace-nowrap text-xs font-bold text-gray-900 pr-2">
                    {mynickname}
                  </div>
                  {base64data && (
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={base64data}
                      alt=""
                      width="50"
                      height="50"
                    />
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative bg-white">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="cursor-pointer" onClick={() => router.push("/Main")}>
                <Image
                  src="/images/mainlogo.jpg"
                  height="70"
                  width="70"
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
              자율프로젝트
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <div className="whitespace-nowrap text-xs font-bold text-gray-900 ">{mynickname}</div>
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    {base64data && (
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={base64data}
                        alt=""
                        width="50"
                        height="50"
                      />
                    )}
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
      </div> */}
    </div>
  );
}

export default Navbar;
