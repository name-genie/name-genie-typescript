import { getTalismans } from '../src'

describe('生成法宝', () => {
    it('默认参数获取', () => {
        const names = getTalismans()
        expect(names.length).toBe(10)
    })
})
