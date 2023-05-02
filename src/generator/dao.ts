import {
    dataDaoFemaleSuffix,
    dataDaoMaleSuffix,
    dataDaoStem,
    dataSharedAction,
    dataSharedAdj,
    dataSharedCreature,
    dataSharedDao,
    dataSharedElement,
    dataSharedGesture,
    dataSharedNumber,
    dataSharedThing
} from '../common'
import { getRandomItem } from '../utils'

export interface DaoOption {
    // 性别: 1 - 男; 2 - 女
    gender?: number
    // 词干
    stem?: string
    // 词尾
    suffix?: string
}

const stems: string[] = [...dataDaoStem, ...dataSharedDao, ...dataSharedThing, ...dataSharedAdj, ...dataSharedNumber]

const suffixes: string[] = [...dataDaoMaleSuffix, ...dataDaoFemaleSuffix]

/**
 * 生成道号
 * 生成算法：(stem) + (suffix)
 * @param count 数量，默认10
 * @param option 选项
 */
export const getDaos = (count: number = 10, option: DaoOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const stem = option.stem || getRandomItem(stems)
        let suffix = option.suffix
        if (!suffix) {
            if (option.gender === 1) {
                suffix = getRandomItem(dataDaoMaleSuffix)
            } else if (option.gender === 2) {
                suffix = getRandomItem(dataDaoFemaleSuffix)
            } else {
                suffix = getRandomItem(suffixes)
            }
        }
        const name = stem + suffix
        names.push(name)
    }
    return names
}
