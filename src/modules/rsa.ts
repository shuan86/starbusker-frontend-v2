import JSEncrypt from "jsencrypt/bin/jsencrypt.min.js";
import { publicKey } from "../config/rsaKey";
// const jsEencrypt = new JSEncrypt();
export const encrypt = (data: string) => {
    try {
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);
        const rsaData = encrypt.encrypt(data);
        console.log("rsaData:", rsaData); // base64
        return rsaData;
    } catch (e) {
        console.log(e);
    }
};