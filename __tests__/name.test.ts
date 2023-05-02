import { getNames } from '../src'

describe('生成名字', () => {
    it('默认参数获取', () => {
        const names = getNames()
        expect(names.length).toBe(10)
    })
})
