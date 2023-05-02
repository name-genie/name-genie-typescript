import { getDaos } from '../src'

describe('生成法号', () => {
    it('默认参数获取', () => {
        const names = getDaos()
        expect(names.length).toBe(10)
    })
})
