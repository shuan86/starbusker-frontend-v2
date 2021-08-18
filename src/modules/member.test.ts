import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios' // v0.15.3
import { setReponseType, get } from './request'
import * as member from "./member";
const mockAccount = 't0'
const mockPassword = '123'
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('test member moudle ', () => {
    test('test login: it should be return  200 if use correct account and password', async () => {
        const serverReponse = setReponseType(200, 'sucessful login')
        mockedAxios.post.mockImplementation(() => Promise.resolve({ ...serverReponse }));
        const result = await member.login(mockAccount, mockPassword)
        expect(result.status).toBe(200)
    })
    test('test login: it should be return  401 if use wrong account and password', async () => {
        const serverReponse = setReponseType(401, 'fail login')
        mockedAxios.post.mockImplementation(() => Promise.resolve({ ...serverReponse }));
        const result = await member.login(mockAccount, 'error password')
        expect(result.status).toBe(401)
    })
    test('test get member info: it should be return  200 if backend was successful', async () => {
        const serverReponse = setReponseType(200, 'sucessful get member info')
        mockedAxios.get.mockImplementation(() => Promise.resolve({ ...serverReponse }));
        const result = await member.getMemberInfo();
        expect(result.status).toBe(200)
    })
    test('test update member info: it should be return  200 if backend was successful', async () => {
        const data = { name: '王小明', email: 'accountTest@email.com,', password: '123456' }
        const serverReponse = setReponseType(200, 'sucessful put member info')
        mockedAxios.put.mockImplementation(() => Promise.resolve({ ...serverReponse }));
        const result = await member.putMemberInfo(data);
        expect(result.status).toBe(200)
    })
    test('test apply busker: it should be return  200 if backend was successful', async () => {
        const data = { description: '扯鈴表演', type: 0 }
        const serverReponse = setReponseType(200, 'sucessful put member info')
        mockedAxios.post.mockImplementation(() => Promise.resolve({ ...serverReponse }));
        const result = await member.postApplyBusker(data);
        expect(result.status).toBe(200)
    })
})