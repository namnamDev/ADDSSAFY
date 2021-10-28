import React, { ReactElement, Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import TeamUserList from "./TeamUserList";
import TeamDetail from "./TeamDetail";
interface Props {
  teamPK: number;
}

function TeamCard({ teamPK }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const scroll = useRef(null);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal(teamPK: number) {
    setIsOpen(true);
  }

  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl
    cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform duration-200 ease-out h-40 bg-gray-100 text-center"
      onClick={() => openModal(teamPK)}
    >
      {/* 왼쪽 사진부분
      <div className="relative h-32 w-16">
        <Image
          src="https://previews.123rf.com/images/eltoro69/eltoro691509/eltoro69150900056/46006637-%ED%8C%80-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%ED%94%84%EB%A0%88-%EC%A0%A0-%ED%85%8C%EC%9D%B4%EC%85%98%EC%9D%84%EC%9C%84%ED%95%9C-%EC%B6%94%EC%83%81%EC%A0%81-%EC%9D%B8-%EB%94%94%EC%9E%90%EC%9D%B8.jpg"
          layout="fill"
          className="rounded-lg"
          alt={String(teamPK)}
        />
      </div> */}

      {/* 팀 정보 */}
      <div>
        {/* <h2>{teamPK}팀</h2> */}
        <h3 className="text-gray-500">프로젝트 트랙(블록체인, 미정, 빅데이터 추천)</h3>
        <h2 className="text-gray-500 text-[11px]">교육생1,교육생2,교육생3</h2>
        <h3 className="text-gray-500">팀 소개</h3>
      </div>
      {/* 팀 정보 모달 다이얼로그 */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="transform fixed inset-y-0 left-1/2 -translate-x-1/2 z-10 "
          onClose={closeModal}
          initialFocus={scroll}
        >
          <div className=" text-center m-8 mx-10 max-w-5xl h-9/10 bg-white shadow-xl rounded-2xl border-solid border-4 border-gray-500 overflow-auto scrollbar-hide">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block align-middle" aria-hidden="true">
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
              <div className="inline-block max-w-5xl p-6 overflow-auto transition-all transform text-left">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  {teamPK}팀 정보
                </Dialog.Title>
                <div className="mt-2 ">
                  <p className="text-sm text-gray-500  ">
                    <TeamDetail teamPK={teamPK} />
                    <TeamUserList teamPK={teamPK} />
                  </p>
                </div>

                <div className="mt-4 items-center flex flex-col">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                    ref={scroll}
                  >
                    창 닫기
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default TeamCard;
