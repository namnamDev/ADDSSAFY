import React, { ReactElement } from "react";
import ProNavbar from "../components/basic/ProNavbar";
import axios from "axios";
interface Props {}

function NoticeEdit({}: Props): ReactElement {
  return (
    <div>
      <ProNavbar />
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="">
              <div className="h-10">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md border-opacity-0"
                />
              </div>

              <div className="h-96 mt-10">
                <label className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <input
                  type="textarea"
                  className="mt-1 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeEdit;
