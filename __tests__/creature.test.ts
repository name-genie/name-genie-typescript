import { getCreatures } from '../src'

describe('生成生灵', () => {
    it('默认参数获取', () => {
        const names = getCreatures()
        expect(names.length).toBe(10)
    })
})
