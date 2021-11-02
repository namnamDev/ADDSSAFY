import React, { ReactElement, useState } from "react";
import StudentNavbar from "../components/basic/StudentNavbar";
import { CheckIcon, LinkIcon, PencilIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {}

function StudentEduSigMain({}: Props): ReactElement {
  const router = useRouter();
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // 파일업로드
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileUpload = () => {
    const formData = new FormData();

    formData.append("userfile", selectedFile, selectedFile.name);

    axios
      .post("api/uploadfile", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <StudentNavbar />
      <div className="text-center mx-8 mt-5">
        <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          교육지원금 서명
        </div>
        <p className="mt-4 text-xs text-gray-500 lg:mx-auto">
          5기의 교육지원금 지급을 위해 교육생별 출석일수 확인 및 서명을
          진행합니다.
          <br />
          &apos;교육지원금 서명은 비대면, 모바일 전자서명&apos;으로 진행하오니
          기간을 엄수해 서명해주시기 바랍니다.
        </p>
      </div>
      {/* 월별 목록 */}
      {months.map((month) => (
        <div className="mx-8 my-10 w-3/4 p-1 text-center" key="month">
          <div className="lg:flex lg:items-center lg:justify-between ">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {month}月 교육지원금
              </h2>
              <div className="mt-2 text-sm text-gray-500">
                2021年 {month}月 30日 ~ 2021年 {month + 1}月 01日
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <div>
                <input
                  type="file"
                  className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-10 h-10"
                  onChange={handleFileChange}
                />
                <button
                  onClick={handleFileUpload}
                  type="button"
                  className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-10"
                >
                  업로드
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentEduSigMain;
