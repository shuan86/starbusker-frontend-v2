import axios from "axios";
import { encrypt } from "../modules/rsa";
const host = 'http://localhost:8081/api'
type ReponseType = {
    status: number;
    data: string
}
export const encryptPost = async (path: string, data: string): Promise<ReponseType> => {
    let reponseData: ReponseType = {
        status: 400,
        data: ''
    }
    try {
        const encryptData = encrypt(data)
        const result = await axios.post(`${host}/${path}`, { 'encryptData': encryptData });
        reponseData.status = result.status
        reponseData.data = result.data
        return reponseData
    } catch (error) {
        console.error('encryptPost error :', error);
    }
    return reponseData
}


