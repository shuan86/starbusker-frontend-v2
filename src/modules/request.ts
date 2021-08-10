import axios from "axios";
import { encrypt } from "../modules/rsa";
import { ReponseType } from '../types/reponseType'
const host = 'http://localhost:8081/api'
export const setReponseType = (status: number, data: string): ReponseType => {
    const reponseType: ReponseType = { status, data }
    return reponseType
}
export const encryptPost = async (path: string, data: string): Promise<ReponseType> => {
    let reponseData: ReponseType = {
        status: 400,
        data: ''
    }
    try {
        const encryptData = encrypt(data)
        const result = await axios.post(`${host}/${path}`, { encryptData }, { withCredentials: true });
        reponseData.status = result.status
        reponseData.data = result.data
        return reponseData
    } catch (error) {
        console.error('encryptPost error :', error);
    }
    return reponseData
}


