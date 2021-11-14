import React, { ReactElement, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaFacebook, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';

interface Props { }

function Footer({ }: Props): ReactElement {
  const [mode, setMode] = useState("auto");
  const router = useRouter();
  return (
    <div className="pt-12 bg-gray-50 mt-28">
      <div className="flex flex-wrap text-center lg:text-left w-4/5 mx-auto">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-3xl font-semibold">Final Project</h4>
          <h5 className="text-sm mt-2 mb-2">
            2021 우리의 마지막 프로젝트, 싸피에 더하다
          </h5>
          <div className="mt-6 flex">
            <FaFacebook size="24" className="cursor-pointer mr-3" onClick={() => router.push('https://ko-kr.facebook.com/')} />
            <FaTwitter size="24" className="cursor-pointer mr-3" onClick={() => router.push('https://twitter.com/?lang=ko')} />
            <FaYoutube size="24" className="cursor-pointer mr-3" onClick={() => router.push('https://www.youtube.com/')} />
            <FaGithub size="24" className="cursor-pointer" onClick={() => router.push('https://github.com/')} />
          </div>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <div className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                About SSAFY LINK
              </div>
              <ul className="list-unstyled">
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm cursor-pointer"
                    onClick={() => router.push('https://edu.ssafy.com/comm/login/SecurityLoginForm.do')}
                  >
                    Edu SSAFY
                  </div>
                </li>
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm cursor-pointer"
                    onClick={() => router.push('https://job.ssafy.com/job/support/userPwdCheckForm.do')}
                  >
                    Job SSAFY
                  </div>
                </li>
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm cursor-pointer"
                    onClick={() => router.push('https://meeting.ssafy.com/login')}
                  >
                    Meeting SSAFY
                  </div>
                </li>
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm cursor-pointer"
                    onClick={() => router.push('https://www.youtube.com/channel/UC_XI3ByFO1uZIIH-g-zJZiw')}
                  >
                    Youtube SSAFY
                  </div>
                </li>
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm cursor-pointer"
                    onClick={() => router.push('https://www.ssafy.com/ksp/jsp/swp/swpMain.jsp')}
                  >
                    SSAFY
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
              <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                Other Resources
              </span>
              <ul className="list-unstyled">
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                  >
                    MIT License
                  </div>
                </li>
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                  >
                    Terms & Conditions
                  </div>
                </li>
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                  >
                    Privacy Policy
                  </div>
                </li>
                <li>
                  <div
                    className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm"
                  >
                    Contact Us
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 flex flex-col justify-center items-center">
        <Image
          src="/images/footerssafy.png"
          height="100"
          width="150"
          alt=""
        ></Image>
        Copyright © {new Date().getFullYear()}, D204
      </div>
    </div>
  );
}

export default Footer;
