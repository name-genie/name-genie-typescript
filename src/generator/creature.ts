import {
    dataCreatureInterfix,
    dataCreatureSuffix,
    dataSharedAction,
    dataSharedAdj,
    dataSharedColor,
    dataSharedCreature,
    dataSharedDao,
    dataSharedElement,
    dataSharedGesture,
    dataSharedNumber,
    dataSharedThing
} from '../common'
import { getRandomItem } from '../utils'

export interface CreatureOption {
    // 词干
    stem?: string
    // 连接
    interfix?: string
    // 词尾
    suffix?: string
}

const stems: string[] = [
    ...dataSharedDao,
    ...dataSharedElement,
    ...dataSharedColor,
    ...dataSharedThing,
    ...dataSharedAdj,
    ...dataSharedNumber,
    ...dataSharedGesture,
    ...dataSharedAction
]

/**
 * 生成生灵
 * 生成算法：(stem) + [(interfix)] + (suffix)
 * @param count 数量，默认10
 * @param option 选项
 */
export const getCreatures = (count: number = 10, option: CreatureOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const stem = option.stem || getRandomItem(stems)
        let interfix = option.interfix || ''
        if (!interfix.length && Math.random() > 0.8) {
            interfix = getRandomItem(dataCreatureInterfix)
        }
        const suffix = option.suffix || getRandomItem(dataCreatureSuffix)
        const name = stem + interfix + suffix
        names.push(name)
    }
    return names
}
