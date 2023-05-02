import { getAlchemies } from '../src'

describe('生成丹药', () => {
    it('默认参数获取', () => {
        const names = getAlchemies()
        expect(names.length).toBe(10)
    })
})
