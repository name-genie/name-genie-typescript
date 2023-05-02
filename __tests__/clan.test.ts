import { getClans } from '../src'

describe('生成门派', () => {
    it('默认参数获取', () => {
        const names = getClans()
        expect(names.length).toBe(10)
    })
})
