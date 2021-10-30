import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import { PencilIcon } from "@heroicons/react/solid";
import StudentNavbar from "../components/basic/StudentNavbar";
const notices = [
  {
    No: 1,
    title: "Regional Paradigm ",
    Date: "2021-10-25",
    Writer: "담당자",
    email: "jane.cooper@example.com",
  },
  {
    No: 2,
    title: "Regional Paradigm ",
    Date: "2021-10-25",
    Writer: "담당자",
    email: "jane.cooper@example.com",
  },
  {
    No: 3,
    title: "Regional Paradigm ",
    Date: "2021-10-25",
    Writer: "담당자",
    email: "jane.cooper@example.com",
  },
  {
    No: 4,
    title:
      "Regional Paradigm TechnicianTechnicianTechnicianTechnicianTechnicianTechnicianTechnicianTechnicianTechnicianTechnician",
    Date: "2021-10-25",
    Writer: "담당자",
    email: "jane.cooper@example.com",
  },
];

interface Props {}

function BoardCompliment({}: Props): ReactElement {
  const router = useRouter();
  return (
    <div>
      <StudentNavbar />
      <div className="flex flex-col mx-8">
        <br />
        <div className="text-center mx-8 mt-5">
          <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            칭찬합니다
          </div>
          <p className="mt-4 text-xs text-gray-500 lg:mx-auto">
            칭찬은 고래도 춤추게합니다.
            <br />
            당신의 칭찬 또한 다른 교육생을 춤추게할 수 있습니다.
            <br />
            칭찬은 아끼지말고 할수있는 만큼 해주세요.
          </p>
        </div>
        <br />
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 text-center">
          <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Writer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {notices.map((person) => (
                    <tr key={person.No}>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{person.No}</div>
                      </td>
                      <td className="py-4 w-10">
                        <div
                          className="text-sm text-gray-900 cursor-pointer truncate"
                          onClick={() =>
                            router.push(
                              `/NoticeDetail/?NoticeNo=${person.No}`,
                              "/NoticeDetail"
                            )
                          }
                        >
                          {person.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {person.Writer}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.Date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <div className="hidden sm:block ">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => router.push("/BoardComplimentCreate")}
            >
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardCompliment;
