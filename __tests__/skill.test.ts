import { getSkills } from '../src'

describe('生成功法', () => {
    it('默认参数获取', () => {
        const names = getSkills()
        expect(names.length).toBe(10)
    })
})
