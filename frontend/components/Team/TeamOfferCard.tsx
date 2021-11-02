import React, { ReactElement, Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import TeamUserList from "./TeamUserList";
import TeamDetail from "./TeamDetail";
import UserDetail from "../user/UserDetail";
import { ArrowLeftIcon } from "@heroicons/react/solid";
interface Props {
  teamPK: number;
}

function TeamOfferCard({ teamPK }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);
  function closeModal() {
    setIsOpen(false);
    setShowUser(false);
  }
  function openModal(teamPK: number) {
    setIsOpen(true);
  }
  const apply = () => {
    alert(`${teamPK}팀에 지원했습니다.`);
  };

  return (
    <tr>
      <td className=" py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <Image
              className="h-10 w-10 rounded-full"
              src="https://previews.123rf.com/images/eltoro69/eltoro691509/eltoro69150900056/46006637-%ED%8C%80-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%A0%88-%EC%A0%A0-%ED%85%8C%EC%9D%B4%EC%85%98%EC%9D%84%EC%9C%84%ED%95%9C-%EC%B6%94%EC%83%81%EC%A0%81-%EC%9D%B8-%EB%94%94%EC%9E%90%EC%9D%B8.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="ml-4">
            <div
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              팀이름
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          팀원 구인 중
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
          // onClick={() => SendMM()}
        >
          제안 철회
        </span>
      </td>

      {/* 팀 정보
      <div>
        <h3 className="text-gray-500">프로젝트 트랙(블록체인, 미정, 빅데이터 추천)</h3>
        <h2 className="text-gray-500 text-[11px]">교육생1,교육생2,교육생3</h2>
        <h3 className="text-gray-500">팀 소개</h3>
        <h3 className="text-gray-500">현재인원 : 4명</h3>
      </div> */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0  " onClose={closeModal}>
          <div className="flex justify-center my-8  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block align-middle " aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {showUser ? (
                <div className="fixed inline-block min-w-lg max-w-5xl p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl  overflow-auto scrollbar-hide">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-left flex flex-row m-2 hover:underline cursor-pointer"
                    onClick={() => setShowUser(false)}
                  >
                    <ArrowLeftIcon className="text-sm" width="20px" />
                    뒤로 가기
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <p className="text-sm text-gray-500  ">
                      <UserDetail
                        userPK={123}
                        // userdata={{
                        //   userId: 0,
                        //   name: "",
                        //   classNo: 0,
                        //   address: "",
                        //   class: "",
                        //   email: "",
                        //   phone: "",
                        //   status: "",
                        //   image: "",
                        //   sigfiles: [],
                        // }}
                      />
                    </p>
                  </div>

                  <div className="mt-4 flex flex-row space-x-2 justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={apply}
                    >
                      MM 보내기
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      창 닫기
                    </button>
                  </div>
                </div>
              ) : (
                <div className="fixed inline-block min-w-lg max-w-5xl p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl overflow-auto scrollbar-hide">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    {teamPK}팀 정보
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <p className="text-sm text-gray-500  ">
                      <TeamDetail teamPK={teamPK} />
                      <TeamUserList teamPK={teamPK} showUser={setShowUser} />
                    </p>
                  </div>

                  <div className="mt-4 flex flex-row space-x-2 justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={apply}
                    >
                      지원하기
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      창 닫기
                    </button>
                  </div>
                </div>
              )}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </tr>
  );
}

export default TeamOfferCard;
