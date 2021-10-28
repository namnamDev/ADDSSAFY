import React, { ReactElement, Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Transition, Menu } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {}

function StudentNavbar({}: Props): ReactElement {
  const router = useRouter();
  // 로그아웃
  function logout() {
    localStorage.clear();
    router.push("/");
  }
  return (
    <div>
      <div className="relative bg-white">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="cursor-pointer" onClick={() => router.push("/")}>
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
              Menu
            </div>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push(`/ManageUserSalary`)}
            >
              Menu
            </div>
            <div
              className="text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push(`/ManageUserTeamBuilding`)}
            >
              Menu
            </div>
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
                교육생정보(ID, 학번)
              </a>

              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
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
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          )}
                          onClick={() => router.push("/StudentMypage")}
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

export default StudentNavbar;
