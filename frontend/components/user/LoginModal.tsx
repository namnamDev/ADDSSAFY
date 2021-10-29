import React, { ReactElement, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

interface Props {}

function LoginModal({}: Props): ReactElement {
  const router = useRouter();
  // 로그인
  const [loginid, setloginid] = useState<string>("");
  const [loginpw, setloginpw] = useState<string>("");
  function login() {
    axios
      .post("/api/v4/users/login", {
        login_id: loginid,
        password: loginpw,
      })
      .then((res) => {
        console.log(res);
        // 로그인이 되면 정보에 따라서 return창을 다르게 해줘야할텐데 backend에 저장되는걸로 자동으로
        router.push("/ManageMain");
      });
  }
  return (
    <div className="min-h-full flex items-center justify-center pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              id="MM-ID"
              name="id"
              type="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="MatterMost ID"
              onChange={(e) => setloginid(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onChange={(e) => setloginpw(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={login}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                aria-hidden="true"
              />
            </span>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
