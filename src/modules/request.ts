import axios from "axios";
import { encrypt } from "../modules/rsa";
import { ResponseType } from '../types/responseType'
const host = 'http://localhost:8081/api'
export const setReponseType = (status: number, data: string): ResponseType => {
    const reponseType: ResponseType = { status, data }
    return reponseType
}

export const get = async (path: string, data: string): Promise<ResponseType> => {
    let reponseData: ResponseType = {
        status: 400,
        data: ''
    }
    try {
        const result = await axios.get(`${host}/${path}`, { params: { data }, withCredentials: true });
        reponseData.status = result.status
        reponseData.data = result.data
        return reponseData
    } catch (error) {
        console.error('get error :', error);
    }
    return reponseData
}

export const post = async (path: string, data: string): Promise<ResponseType> => {
    let reponseData: ResponseType = {
        status: 400,
        data: ''
    }
    try {
        const result = await axios.post(`${host}/${path}`, { data }, { withCredentials: true });
        reponseData.status = result.status
        reponseData.data = result.data
        return reponseData
    } catch (error) {
        console.error('post error :', error);
    }
    return reponseData
}
export const encryptPost = async (path: string, data: string): Promise<ResponseType> => {
    let reponseData: ResponseType = {
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
export const encryptPut = async (path: string, data: string): Promise<ResponseType> => {
    let reponseData: ResponseType = {
        status: 400,
        data: ''
    }
    try {
        const encryptData = encrypt(data);
        const result = await axios.put(`${host}/${path}`, { encryptData }, { withCredentials: true });
        reponseData.status = result.status
        reponseData.data = result.data
        return reponseData
    } catch (error) {
        console.error('encryptPut error :', error);
    }
    return reponseData
}
