import React, { ReactElement, useEffect } from 'react'
import StudentNavbar from '../components/basic/StudentNavbar'
import Image from 'next/image'

interface Props {

}

function StudentTeamDetail({ }: Props): ReactElement {
    const products = [
        {
            userPK: 1,
            userName: "김짱구",
            image: '/images/ExampleImage.jpg',
            studentNumber: "0522279",
        },
        {
            userPK: 1,
            userName: "김짱구",
            image: '/images/ExampleImage.jpg',
            studentNumber: "0522279",
        },
        {
            userPK: 1,
            userName: "김짱구",
            image: '/images/ExampleImage.jpg',
            studentNumber: "0522279",
        },
        {
            userPK: 1,
            userName: "김짱구",
            image: '/images/ExampleImage.jpg',
            studentNumber: "0522279",
        },
        {
            userPK: 1,
            userName: "김짱구",
            image: '/images/ExampleImage.jpg',
            studentNumber: "0522279",
        },

    ]
    // 팀멤버 정보 받아오기
    useEffect(() => {

        return () => {

        }
    }, [])
    // 팀 정보 가져오기
    return (
        <div>
            <StudentNavbar />
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
                                        width="80%" height="100%" layout="responsive" objectFit="cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="mt-4 text-medium text-gray-700">{product.userName}</h3>
                                    <p className="mt-1 text-sm text-gray-900">{product.studentNumber}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentTeamDetail
