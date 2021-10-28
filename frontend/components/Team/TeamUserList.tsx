import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const people = [
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
  },
  {
    userId: 6,
    name: "Jane Cooper",
    classNo: 123123,
    address: "부산시 해운대구",
    class: "구미2반",
    email: "jane.cooper@example.com",
    phone: "01000000000",
    status: "Studying",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

interface Props {
  teamPK: number;
  showUser: (value: boolean) => void;
}

function TeamUserList({ teamPK, showUser }: Props): ReactElement {
  const router = useRouter();
  // MM보내기
  function SendMM() {
    alert("message");
  }
  const userDetail = () => {
    showUser(true);
  };
  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="text-lg text-left text-black mt-3 ml-4">팀원 정보</div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class Info
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    MM
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
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
                          <div
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                            onClick={() => showUser(true)}
                          >
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.class}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">{person.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.status === "leave" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-500">
                          팀장
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          팀원
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-400 text-black cursor-pointer"
                        onClick={() => SendMM()}
                      >
                        MatterMost
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamUserList;
