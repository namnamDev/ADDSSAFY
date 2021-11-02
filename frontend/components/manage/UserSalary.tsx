import React, { ReactElement, useState, Fragment } from "react";
import Image from "next/image";
import UserDetail from "./UserDetail";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
interface Props { }

function UserSalary({ }: Props): ReactElement {
  const router = useRouter()
  const [month, setmonth] = useState<number>(1);
  const students = [
    {
      userId: 1,
      name: "Jane Cooper",
      classNo: 123123,
      address: "부산시 해운대구",
      class: "구미2반",
      email: "jane.cooper@example.com",
      phone: "01000000000",
      status: "leave",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      sigfiles: ["1월", "2월", "3월"],
    },
    {
      userId: 2,
      name: "Jane Cooper",
      classNo: 123123,
      address: "부산시 해운대구",
      class: "구미2반",
      email: "jane.cooper@example.com",
      phone: "01000000000",
      status: "Studying",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      sigfiles: ["1월", "2월", "3월"],
    },

    {
      userId: 3,
      name: "Jane Cooper",
      classNo: 123123,
      address: "부산시 해운대구",
      class: "구미2반",
      email: "jane.cooper@example.com",
      phone: "01000000000",
      status: "Studying",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      sigfiles: ["1월", "2월", "3월"],
    },
    {
      userId: 4,
      name: "Jane Cooper",
      classNo: 123123,
      address: "부산시 해운대구",
      class: "구미2반",
      email: "jane.cooper@example.com",
      phone: "01000000000",
      status: "leave",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      sigfiles: ["1월", "2월", "3월"],
    },
    {
      userId: 5,
      name: "Jane Cooper",
      classNo: 123123,
      address: "부산시 해운대구",
      class: "구미2반",
      email: "jane.cooper@example.com",
      phone: "01000000000",
      status: "leave",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      sigfiles: ["1월", "2월", "3월"],
    },
    {
      userId: 6,
      name: "Jane Cooper",
      classNo: 123123,
      address: "부산시 해운대구",
      class: "2반",
      email: "jane.cooper@example.com",
      phone: "01000000000",
      status: "Studying",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      sigfiles: ["1월", "2월", "3월"],
    },
  ];
  // 월별로 데이터 받아오기
  function getdata(monthdata: number) {
    setmonth(monthdata);
  }
  // 데이터 모달로
  interface userdata {
    userId: number;
    name: string;
    classNo: number;
    address: string;
    class: string;
    email: string;
    phone: string;
    status: string;
    image: string;
    sigfiles: string[];
  }
  const [modal, setmodal] = useState(false);
  function openmodal(data: number) {
    setmodal(true);
    setuserdata(data);
  }
  const [userdata, setuserdata] = useState<number>(0);
  return (
    <div className="mt-10">
      <div className="text-center">
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(1)}
        >
          1
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(2)}
        >
          2
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(3)}
        >
          3
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(4)}
        >
          4
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(5)}
        >
          5
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(6)}
        >
          6
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(7)}
        >
          7
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(8)}
        >
          8
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(9)}
        >
          9
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(10)}
        >
          10
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(11)}
        >
          11
        </div>
        <div
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium mx-2 cursor-pointer"
          onClick={() => getdata(12)}
        >
          12
        </div>
      </div>
      <br />
      <div className="">
        <div className="text-center my-5 font-black text-2xl">
          {month}월 교육비서명
        </div>
        <div className="w-2/3 mx-auto">
          <div className="">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 text-center">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      email
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Image
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                              width="100%"
                              height="100%"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900" onClick={() => openmodal(person.userId)}>
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.status === "UnSubmission" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black">
                            UnSubmission
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-black">
                            Submission
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          MM
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setmodal}
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full min-w-lg">
                <div className="bg-white">
                  <div className="">
                    <div className="mt-3 text-center mx-auto">
                      <UserDetail userPK={userdata} />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setmodal(false)}
                  >
                    나가기
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default UserSalary;
