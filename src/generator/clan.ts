import { getRandomItem } from '../utils'
import {
    dataClanSuffix,
    dataSharedAction,
    dataSharedAdj,
    dataSharedCreature,
    dataSharedDao,
    dataSharedElement,
    dataSharedGesture,
    dataSharedNumber,
    dataSharedThing
} from '../common'

export interface ClanOption {
    // 词干
    stem?: string
    // 词尾
    suffix?: string
}

const stems: string[] = [
    ...dataSharedDao,
    ...dataSharedElement,
    ...dataSharedCreature,
    ...dataSharedThing,
    ...dataSharedAdj,
    ...dataSharedNumber,
    ...dataSharedGesture,
    ...dataSharedAction
]

/**
 * 生成门派
 * 生成算法：(stem) + (suffix)
 * @param count 数量，默认10
 * @param option 选项
 */
export const getClans = (count: number = 10, option: ClanOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const stem = option.stem || getRandomItem(stems)
        const suffix = option.suffix || getRandomItem(dataClanSuffix)
        const name = stem + suffix
        names.push(name)
    }
    return names
}
