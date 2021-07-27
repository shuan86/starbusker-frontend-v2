import { login } from '../../modules/member'

describe('test member moudle', () => {
    test('test login', () => {
        expect(login('test', '123')).toBe(true)
    })
})