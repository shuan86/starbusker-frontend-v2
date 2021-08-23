import { io } from "socket.io-client";

const URL = "http://127.0.0.1:8081";
export const socket = io(URL, { autoConnect: false });

