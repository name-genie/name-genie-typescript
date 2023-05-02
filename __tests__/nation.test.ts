import { getNations } from '../src'

describe('生成国家', () => {
    it('默认参数获取', () => {
        const names = getNations()
        expect(names.length).toBe(10)
    })
})
