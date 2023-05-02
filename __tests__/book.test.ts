import { getBooks } from '../src'

describe('生成秘籍', () => {
    it('默认参数获取', () => {
        const names = getBooks()
        expect(names.length).toBe(10)
    })
})
