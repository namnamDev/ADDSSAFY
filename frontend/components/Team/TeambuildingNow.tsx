import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";
import UserDetailCard from '../user/UserDetailCard';

interface Props {

}

function TeambuildingNow({ }: Props): ReactElement {
    const router = useRouter();
    const projectCode = Number(router.query.projectNo)
    // 팀 현황
    const [teamlist, setteamlist] = useState<any>([]);
    useEffect(() => {
        if (router.query.projectNo) {
            const token: string | null = localStorage.getItem("token");
            if (typeof token === "string") {
                axios
                    .get(`/api/team/${router.query.projectNo}`, {
                        headers: { Authorization: token },
                    })
                    .then((res: any) => {
                        console.log(1);
                        console.log(res.data.data);
                        setteamlist([...res.data.data]);
                    })
                    .catch((err) => alert(err));
            }
        }
    }, [router.query.projectNo]);
    // 팀상세

    // 유저상세
    const [flag, setflag] = useState<boolean>(false)
    const [pk, setpk] = useState<number>(0)
    const [mmid, setmmid] = useState<string>("")
    function userdetail(pk: number, mmid: string) {
        setflag(true);
        setpk(pk)
        setmmid(mmid)
    }
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Team Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Team Member1
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Team Member2
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Team Member3
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Team Member4
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Team Member5
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {teamlist.map((team: any, i: number) => (
                        <tr key={i}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div
                                    className="text-sm font-medium text-gray-900 cursor-pointer"
                                    onClick={() => {
                                        // teamdata(team.teamDto.teamPK, team.teamDto.name);
                                    }}
                                >
                                    {team.teamDto.name}
                                </div>
                            </td>
                            {team.teamDto.teamuser.map((member: any, i: number) => (
                                <td className="px-6 py-4 whitespace-nowrap" key={i}>
                                    <div
                                        className="text-sm font-medium text-gray-900 cursor-pointer"
                                        onClick={() => userdetail(member.userPk, member.mmid)}
                                    >
                                        {member.userName}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* 유저상세보기 */}
            <UserDetailCard projectCode={projectCode} userPK={pk} mmid={mmid} flag={flag} setflag={setflag} leaderCheck={true} />
        </div>
    )
}

export default TeambuildingNow
