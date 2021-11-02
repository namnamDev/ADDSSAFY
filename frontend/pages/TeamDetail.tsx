import React, { ReactElement, useEffect } from "react";
import Navbar from "../components/basic/Navbar";
import Image from "next/image";
import Footer from "../components/basic/Footer";
import { useRouter } from "next/router";

interface Props {}

function TeamDetail({}: Props): ReactElement {
  const router = useRouter();
  const products = [
    {
      userPK: 1,
      userName: "김짱구",
      image: "/images/ExampleImage.jpg",
      Number: "0522279",
    },
    {
      userPK: 1,
      userName: "김짱구",
      image: "/images/ExampleImage.jpg",
      Number: "0522279",
    },
    {
      userPK: 1,
      userName: "김짱구",
      image: "/images/ExampleImage.jpg",
      Number: "0522279",
    },
    {
      userPK: 1,
      userName: "김짱구",
      image: "/images/ExampleImage.jpg",
      Number: "0522279",
    },
    {
      userPK: 1,
      userName: "김짱구",
      image: "/images/ExampleImage.jpg",
      Number: "0522279",
    },
  ];
  // 팀멤버 정보 받아오기
  useEffect(() => {
    return () => {};
  }, []);
  // 팀 정보 가져오기
  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    // More people...
  ];
  const url = [
    "https://github.com",
    "https://ssafyclass.webex.com/join/jonghan1983",
    "https://gitlab.com",
    "kakaoTalk",
  ];
  return (
    <div>
      <Navbar />
      <div className="bg-white">
        <div className="max-w-5xl mx-auto py-10 px-4 ">
          <h2 className="text-2xl font-extrabold traRcking-tight text-gray-900 mb-10">팀멤버</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.userPK} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                  <Image
                    src={product.image}
                    alt={product.image}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                    width="80%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="mt-4 text-medium text-gray-700">{product.userName}</h3>
                  <p className="mt-1 text-sm text-gray-900">{product.Number}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="min-w-5x1 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-10 mx-5">
            <div className="container">
              <ul className="divide-y divide-gray-300">
                {url.map((site) => (
                  <li
                    className="p-4 hover:bg-gray-50 cursor-pointer"
                    key="site"
                    onClick={() => router.push(site)}
                  >
                    {site}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <h2 className="text-2xl font-extrabold traRcking-tight text-gray-900 mb-5">
                가입희망 교육생
              </h2>
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-5">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {people.map((person) => (
                          <tr key={person.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Image
                                    className="h-10 w-10 rounded-full"
                                    src={person.image}
                                    alt=""
                                    width="100%"
                                    height="100%"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {person.name}
                                  </div>
                                  <div className="text-sm text-gray-500">{person.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{person.title}</div>
                              <div className="text-sm text-gray-500">{person.department}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {person.role}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-extrabold traRcking-tight text-gray-900 mb-5">
                영입제안한 교육생
              </h2>
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {people.map((person) => (
                          <tr key={person.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Image
                                    className="h-10 w-10 rounded-full"
                                    src={person.image}
                                    alt=""
                                    width="100%"
                                    height="100%"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {person.name}
                                  </div>
                                  <div className="text-sm text-gray-500">{person.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{person.title}</div>
                              <div className="text-sm text-gray-500">{person.department}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {person.role}
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamDetail;
