import React, { ReactElement, Fragment } from "react";
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
    href: "#",
  },
  {
    No: 2,
    name: "특화프로젝트",
    description: "빅데이터(추천, 분산), 블록체인, IOT, AI(음성, 영상)",
    href: "#",
  },
  {
    No: 3,
    name: "자율프로젝트",
    description: "자율",
    href: "#",
  },
];
interface Props {}

function ProNavbar({}: Props): ReactElement {
  const router = useRouter();
  async function gotoproject(projectNo: number) {
    await router.push(
      `/ManageUserTeamBuilding/?projectNo=${projectNo}`,
      "/ManageUserTeamBuilding"
    );
    window.location.reload();
  }
  return (
    <div>
      <div className="relative bg-white">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div
                className="cursor-pointer"
                onClick={() => router.push("/ManageMain")}
              >
                <Image
                  className="h-8 w-8 rounded-full"
                  src="/images/S.jpg"
                  alt=""
                  width="30"
                  height="30"
                />
              </div>
            </div>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push(`/ManageUser`)}
            >
              교육생관리
            </div>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push(`/ManageUserSalary`)}
            >
              서명지원금관리
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      )}
                    >
                      <div className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer">
                        팀빌딩현황
                      </div>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden text-left">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {projects.map((project) => (
                              <div
                                key={project.No}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                                onClick={() => gotoproject(project.No)}
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {project.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {project.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push(`/Notice`)}
            >
              공지사항
            </div>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-xs font-medium text-gray-500 hover:text-gray-900"
              >
                교육프로ID
              </a>

              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                      width="30"
                      height="30"
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
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
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
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          #
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
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

export default ProNavbar;
