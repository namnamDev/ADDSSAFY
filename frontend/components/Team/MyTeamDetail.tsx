import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {
    teamPK: number
}

function MyTeamDetail({ teamPK }: Props): ReactElement {
    const router = useRouter();
    const [teammember, setteammember] = useState<any>([])
    // 팀멤버 정보 받아오기
    useEffect(() => {
        axios.get(`/api/team/teamuser/${teamPK}`)
            .then((res: any) => {
                console.log(res.data.data);
                setteammember([...res.data.data])
            })
            .catch(() => alert('실패'))
    }, []);
    // 팀나가기
    function teamexit() {
        const token: string | null = localStorage.getItem('token')
        if (typeof token === 'string') {
            axios.delete('/api/team/exit', {
                data: {
                    teamPK: teamPK
                },
                headers: { Authorization: token }
            })
                .then((res) => alert('해당팀의 탈퇴가 완료되었습니다'))
            setTimeout(() => {
                location.reload()
            }, 500);

        }
    }
    return (
        <div>
            <div className="bg-white text-center">
                <div className="mx-auto py-10 px-4">
                    <h2 className="text-2xl font-extrabold traRcking-tight text-gray-900 mb-10">팀멤버</h2>
                    {/* 팀멤버들 사진 */}
                    <div className="grid grid-cols-6 w-3/4 mx-auto">
                        {teammember.map((member: any, i: number) => (
                            <div key={i} className="group">
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                                    <Image
                                        src={"/images/" + member.userPk + ".jpg"}
                                        alt={member.userPk}
                                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                                        width="80%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="mt-4 text-medium text-gray-700">{member.userName}</h3>
                                    <p className="mt-1 text-sm text-gray-900">{member.Number}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 text-center">
                        <span className="hidden sm:block">
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border bg-blue-100 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-blue-50 mx-2"
                                onClick={() => router.push(`/TeamModify/?teamPk=${teamPK}`)}
                            >
                                팀 정보 수정
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 mx-2"
                                onClick={teamexit}
                            >
                                팀 나가기
                            </button>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MyTeamDetail
