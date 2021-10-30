import React, { ReactElement } from 'react'
import StudentNavbar from '../components/basic/StudentNavbar';

interface Props {
    
}

function BoardComplimentCreate({}: Props): ReactElement {
    return (
      <div>
        <StudentNavbar />
        <div className="mt-5 mx-48">
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
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BoardComplimentCreate
