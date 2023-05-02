import { getPlaces } from '../src'

describe('生成地点', () => {
    it('默认参数获取', () => {
        const names = getPlaces()
        expect(names.length).toBe(10)
    })
})
