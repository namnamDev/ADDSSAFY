import React, { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProNavbar from "../components/basic/ProNavbar";
import { CalendarIcon, PencilIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
interface Props {}

function NoticeDetail({}: Props): ReactElement {
  const router = useRouter();
  const No = router.query.NoticeNo;
  //   No를 가지고 통신하기
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <ProNavbar />
      <div className="lg:flex lg:items-center lg:justify-between mx-40 mt-5">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {No}번 공지사항
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              2021-10-31
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() =>
                router.push(`/NoticeEdit/?NoticeNo=${No}`, "/NoticeEdit")
              }
            >
              <PencilIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              Edit
            </button>
          </span>
        </div>
      </div>
      {/* 내용 */}
      <div className="mx-40 mt-5 whitespace-pre-line">
        다음달 시행하는 `단계적 일상회복`의 밑그림이 오늘(25일) 공개됩니다.
        정부는 오늘 오후 2시 `코로나19 단계적 일상회복 이행계획 공청회`를 열고
        방역의료 분야의 일상회복 이행계획 초안을 공개할 예정입니다. 초안 공개 후
        전문가와 국민의 의견을 청취한 뒤 오는 29일 최종안을 발표합니다. 앞서
        일상회복지원위원회는 지난 22일 열린 2차 회의에서 다음달부터 식당·카페
        등의 운영시간 제한을 해제하고, 유흥시설 등 고위험시설에는 일명
        `백신패스`를 한시적으로 적용하는 방안을 제시했습니다. 최종안에는
        일상회복 전환 시기, 거리두기와 방역 완화의 단계별 적용 시점 등 구체적
        내용이 담길 것으로 보입니다.
      </div>
    </div>
  );
}

export default NoticeDetail;
