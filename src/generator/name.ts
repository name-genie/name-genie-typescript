import { getRandomItem } from '../utils'
import { dataNameFemaleSuffix, dataNameInterfix, dataNameMaleSuffix, dataNamePrefix } from '../common'

export interface NameOption {
    // 性别: 1 - 男; 2 - 女
    gender?: number
    // 名字长度
    length?: number
    // 前缀，姓氏
    prefix?: string
    // 词尾
    suffix?: string
}

const interfixes: string[] = [...dataNameMaleSuffix, ...dataNameFemaleSuffix, ...dataNameInterfix]

const suffixes: string[] = [...dataNameMaleSuffix, ...dataNameFemaleSuffix]

/**
 * 生成名字
 * 生成算法：(prefix) + (suffix)
 * @param count 数量，默认10
 * @param option 选项
 */
export const getNames = (count: number = 10, option: NameOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const prefix = option.prefix || getRandomItem(dataNamePrefix)
        let suffix = option.suffix || ''
        if (!suffix.length) {
            let length = option.length || (Math.random() > 0.5 ? 2 : 1)
            if (length === 2) {
                if (option.gender === 1) {
                    suffix += getRandomItem(dataNameMaleSuffix)
                } else if (option.gender === 2) {
                    suffix += getRandomItem(dataNameFemaleSuffix)
                } else {
                    suffix += getRandomItem(interfixes)
                }
                length -= 1
            }
            for (let j = 0; j < length; j++) {
                if (option.gender === 1) {
                    suffix += getRandomItem(dataNameMaleSuffix)
                } else if (option.gender === 2) {
                    suffix += getRandomItem(dataNameFemaleSuffix)
                } else {
                    suffix += getRandomItem(suffixes)
                }
            }
        }
        const name = prefix + suffix
        names.push(name)
    }
    return names
}
