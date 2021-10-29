import React, { ReactElement, useState, Fragment, useRef } from "react";
import { useRouter } from "next/router";
import LoginModal from "../components/user/LoginModal";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

interface Props {}

function Main({}: Props): ReactElement {
  const router = useRouter();

  const cancelButtonRef = useRef(null);
  const [click, setclick] = useState<boolean>(false);
  // 로그인 모달
  const [showLoginModal, setLoginModal] = useState(false);
  // 로그인 상태 체크
  setTimeout(() => {
    setclick(true);
  }, 3900);
  // +ssafy 클릭했을때 실행
  function enter() {
    // 로그인돼있는지 확인 토큰으로
    // 로그인 되어 있으면
    // 토큰에 담긴 유저 타입에 따라 메인페이지로 이동
    // router.push('/StudentMain')
    // router.push(`/ManageMain`)
    // 안돼있으면 로그인 모달 띄우기
    setLoginModal(true);
  }
  //
  return (
    <div>
      <div className="animation01 overflow-hidden">
        <div className="rhombus_small">
          <div className="rhombus">
            <div className="border_box">
              <span className="line line01" />
              <span className="line line02" />
              <span className="line line03" />
              <span className="line line04" />
              <span className="circle circle01" />
              <span className="circle circle02" />
              <span className="circle circle03" />
              <span className="circle circle04" />
              <span className="animation_line animation_line01" />
              <span className="animation_line_wrapper animation_line02_wrapper">
                <span className="animation_line animation_line02" />
              </span>
              <span className="animation_line animation_line03" />
              <span className="animation_line_wrapper animation_line04_wrapper">
                <span className="animation_line animation_line04" />
              </span>
              <span className="animation_line animation_line05" />
              <span className="animation_line_wrapper animation_line06_wrapper">
                <span className="animation_line animation_line06" />
              </span>
              <span className="animation_line animation_line07" />
              <span className="animation_line_wrapper animation_line08_wrapper">
                <span className="animation_line animation_line08" />
              </span>
            </div>
            <div className="wave">
              <div className="wave_wrapper">
                <div className="wave_box" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={showLoginModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setLoginModal}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setLoginModal(false)}
                    ref={cancelButtonRef}
                  >
                    X
                  </button>
                </div>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <LoginModal />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="animation02">
        <div className="name">
          {click ? <p onClick={enter}>+ SSAFY</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Main;
