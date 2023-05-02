import { getRandomItem } from '../utils'
import { dataAlchemySuffix, dataSharedAction, dataSharedColor, dataSharedDao, dataSharedElement, dataSharedNumber } from '../common'

export interface AlchemyOption {
    // 词干
    stem?: string
    // 词尾
    suffix?: string
}

const stems: string[] = [...dataSharedDao, ...dataSharedElement, ...dataSharedColor, ...dataSharedNumber, ...dataSharedAction]

/**
 * 生成丹药
 * 生成算法：(stem) + (suffix)
 * @param count 数量，默认10
 * @param option 选项
 */
export const getAlchemies = (count: number = 10, option: AlchemyOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const stem = option.stem || getRandomItem(stems)
        const suffix = option.suffix || getRandomItem(dataAlchemySuffix)
        const name = stem + suffix
        names.push(name)
    }
    return names
}
