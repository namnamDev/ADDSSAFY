import React, { ReactElement } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Image from "next/image";

interface Props {}

function LoginModal({}: Props): ReactElement {
  return (
    <div className="min-h-full flex items-center justify-center pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="MM-ID" className="sr-only">
                MM ID
              </label>
              <input
                id="MM-ID"
                name="id"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mattermost ID"
              ></input>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              ></input>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                  aria-hidden="true"
                />
              </span>
              <div className="text-gray-200">Mattermost 로그인</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
