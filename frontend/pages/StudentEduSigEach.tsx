import { useRouter } from "next/router";
import React, { useState, useEffect, useRef, ReactElement } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import SignaturePad from "signature_pad";
import Footer from "../components/basic/Footer";
interface Props { }

let sigPad: any = null;

function StudentEduSigEach({ }: Props): ReactElement {
  const router = useRouter();
  const month = router.query.month;
  //
  const [sigPadData, setSigPadData] = useState(null);
  useEffect(() => {
    sigPad = new SignaturePad(document.querySelector("canvas")!, {
      onBegin: () => {
        setSigPadData(sigPad.toDataURL()); // data:image/png;base64,iVBORw0K...
        /**
         * signaturePad.toDataURL(); // save image as PNG
         * signaturePad.toDataURL("image/jpeg"); // save image as JPEG
         * signaturePad.toDataURL("image/svg+xml"); // save image as SVG
         * */
      },
    });
  }, []);
  const handleRestSignature = () => {
    sigPad.clear();
  };
  return (
    <div>
      <StudentNavbar />
      <div className="flex items-stretch">
        <div className="mt-10 w-3/4 mx-auto">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    이름
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    지역
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10"
                  />
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    반
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    수업일수
                  </label>
                  <div className="mt-3">21</div>
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    지급일수
                  </label>
                  <div className="mt-3">21</div>
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    지급일수 확인
                  </label>
                  <input
                    type="number"
                    autoComplete="email"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 h-10 rounded-lg"
                    min="0"
                  />
                </div>
              </div>
            </div>
            {/* 서명하는 공간 */}
            <div className="Signature text-center">
              <canvas className="m-auto border-gray-300" />
              <button onClick={handleRestSignature}>Reset</button>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium h-10 text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentEduSigEach;
