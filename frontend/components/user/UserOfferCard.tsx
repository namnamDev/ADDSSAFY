import React, { ReactElement, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import UserDetail from "./UserDetail";
import Image from "next/image";
interface Props {
  person: object;
  projectCode: number;
}

function UserOfferCard({ person, projectCode }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [showUser, setShowUser] = useState(false);
  function closeModal() {
    setIsOpen(false);
    setShowUser(false);
  }
  function openModal(person: number) {
    setIsOpen(true);
  }
  const apply = () => {
    alert(`${person}팀에 지원했습니다.`);
  };
  function SendMM() {
    alert("message");
  }
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          className="text-sm font-medium text-gray-900 hover:underline cursor-pointer my-2.5"
          onClick={() => setIsOpen(true)}
        >
          팀이름
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">반</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <span
          className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-black cursor-pointer"
          onClick={() => SendMM()}
        >
          제안 철회
        </span>
      </td>
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
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inline-block min-w-md max-w-5xl p-6 h-9/10  transition-all transform text-left bg-white rounded-2xl overflow-auto scrollbar-hide">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-left flex flex-row m-2 hover:underline cursor-pointer"
                  onClick={() => setShowUser(false)}
                ></Dialog.Title>
                <div className="mt-2 ">
                  <p className="text-sm text-gray-500  ">
                    <UserDetail userPk={1} />
                  </p>
                </div>

                <div className="mt-4 flex flex-row space-x-2 justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={apply}
                  >
                    제안 보내기
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
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </tr>
  );
}

export default UserOfferCard;
