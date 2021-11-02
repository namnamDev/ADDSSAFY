import React, { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import TeamOfferCard from "./TeamOfferCard";
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
  list: number[];
}

function TeamOfferList({ list }: Props): ReactElement {
  const router = useRouter();
  // MM보내기
  function SendMM() {
    alert("message");
  }
  return (
    <div className="flex flex-col mx-1 mt-2 text-center">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-1">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Cancel
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {list.map((teamPk) => (
                  <TeamOfferCard key={teamPk} teamPK={teamPk} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamOfferList;
