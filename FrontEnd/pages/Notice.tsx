import React, { ReactElement } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import { useRouter } from "next/router";
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

function Notice({}: Props): ReactElement {
  const router = useRouter();
  return (
    <div>
      <ProNavbar />

      <div className="flex flex-col mx-8">
        <div className="text-center my-3">공지사항</div>
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
      </div>
    </div>
  );
}

export default Notice;
