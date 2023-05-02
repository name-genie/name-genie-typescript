import { getMaterials } from '../src'

describe('生成材料', () => {
    it('默认参数获取', () => {
        const names = getMaterials()
        expect(names.length).toBe(10)
    })
})
