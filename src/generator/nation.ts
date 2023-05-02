import { dataNationInterfix, dataNationSuffix, dataSharedPlace } from '../common'
import { getRandomItem } from '../utils'

export interface NationOption {
    // 词干长度
    length?: number
    // 词干
    stem?: string
    // 连接
    interfix?: string
    // 词尾
    suffix?: string
}

/**
 * 生成国家
 * 生成算法：(stem) + [interfix] + (suffix)
 * @param count 数量，默认10
 * @param option 选项
 */
export const getNations = (count: number = 10, option: NationOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        let suffix = option.suffix || getRandomItem(dataNationSuffix)

        let interfix = option.interfix || ''

        if (!interfix.length && Math.random() > 0.8) {
            interfix = getRandomItem(dataNationInterfix)
        }

        suffix = interfix + suffix

        let stem = option.stem || ''
        if (!stem.length) {
            let length = option.length || 0
            if (!length) {
                length = Math.random() > 0.5 ? 2 : 1
                if (suffix.length === 2) {
                    length = 2
                }
            }
            for (let j = 0; j < length; j++) {
                stem += getRandomItem(dataSharedPlace)
            }
        }
        const name = stem + suffix
        names.push(name)
    }
    return names
}
