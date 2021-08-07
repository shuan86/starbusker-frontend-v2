import { EnrollMemberType } from "../type/Member";
import * as request from "./request";
export const login = (account: string, password: string) => {
    return true
}
export const enroll = async (data: EnrollMemberType) => {
    //class->json string->encrypt
    const jsonData = JSON.stringify(data)
    return await request.encryptPost('member', jsonData)
}