import React, { ReactElement, useEffect, useState } from "react";
import { PaperClipIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {
  teamPK: number;
}

function TeamDetail({ teamPK }: Props): ReactElement {
  const router = useRouter();
  const [teamdata, setteamdata] = useState<any>({})
  const [teamhashtags, setteamhashtags] = useState<any>({})
  useEffect(() => {
    axios.get(`/api/team/detail/${teamPK}`)
      .then((res: any) => setteamdata(res.data.data))
      .catch((err) => alert(err))
  }, [])
  useEffect(() => {
    axios.get(`/api/team/info/${teamPK}`)
      .then((res: any) => { setteamhashtags(res.data.data); console.log(res.data); console.log('내팀디테일받아오는') })
      .catch((err) => alert(err))
  },[])
  return (
    <div className="">
      <div className="leading-6 text-gray-900 font-extrabold text-4xl text-center">{teamdata.name}</div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg mx-8">
        <div className="px-4 py-5 sm:px-6">
          <div className="mt-1 max-w-2xl text-sm text-gray-500">팀 정보</div>
        </div>
        <div className="text-center">
          <dl>
            <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">기술스택</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{Object.keys(teamhashtags).map((section: any, i: number) => (
                <div key={i}>
                  {teamhashtags[section].map((tag: any, j: any) =>
                    <div key={j}>
                      {
                        section === 'DEVOPS'
                          ?
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {tag.hashTagName}
                          </span>
                          : null
                      }
                      {
                        section === 'FE'
                          ?
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            {tag.hashTagName}
                          </span>
                          : null
                      }
                      {
                        section === 'BE'
                          ?
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {tag.hashTagName}
                          </span>
                          : null
                      }
                      {
                        section === 'ETC'
                          ?
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                            {tag.hashTagName}
                          </span>
                          : null
                      }
                      {
                        section === 'FOUR'
                          ?
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {tag.hashTagName}
                          </span>
                          : null
                      }
                    </div>
                  )}
                </div>
              ))}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">팀 소개</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {teamdata.introduce}
              </dd>
            </div>
            {/* <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">팀 프로젝트 ppt</dt>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul
                  role="list"
                  className="border border-gray-200 rounded-md divide-y divide-gray-200"
                >
                  {person.sigfiles.map((month, i) => (
                    <li
                      className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      key="i"
                    >
                      <div className="w-0 flex-1 flex items-center">
                        <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" />
                        <span className="ml-2 flex-1 w-0 truncate">{month}.jpg</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
