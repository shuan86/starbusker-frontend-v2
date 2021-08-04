import axios from "axios";
import { EnrollMemberType } from "../type/Member";

const host = 'http://localhost:8081/api'
type ReponseType = {
    status: number;
    data: string
}

export const enroll = async (data: EnrollMemberType): Promise<ReponseType> => {
    let reponseData: ReponseType = {
        status: 400,
        data: ''
    }
    try {
        const result = await axios.post(`${host}/member`, data);
        reponseData.status = result.status
        reponseData.data = result.data
        return reponseData
    } catch (error) {
        console.error('error :');

    }
    return reponseData
}
