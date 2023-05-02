import { getRandomItem } from '../utils'
import {
    dataSharedAction,
    dataSharedAdj,
    dataSharedClan,
    dataSharedCreature,
    dataSharedDao,
    dataSharedElement,
    dataSharedGesture,
    dataSharedNumber,
    dataSharedThing,
    dataTalismanInterfix,
    dataTalismanState,
    dataTalismanSuffix
} from '../common'

export interface TalismanOption {
    // 词干
    stem?: string
    // 连接
    interfix?: string
    // 词尾
    suffix?: string
    // 状态
    state?: string
}

const stems: string[] = [
    ...dataSharedClan,
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
 * 生成灵宝
 * 生成算法：(stem) + [(interfix)] + (suffix) + [(state)]
 * @param count 数量，默认10
 * @param option 选项
 */
export const getTalismans = (count: number = 10, option: TalismanOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const stem = option.stem || getRandomItem(stems)
        let interfix = option.interfix || ''
        if (!interfix.length && Math.random() > 0.5) {
            interfix = getRandomItem(dataTalismanInterfix)
        }
        const suffix = option.suffix || getRandomItem(dataTalismanSuffix)
        let state = option.state || ''
        if (!state.length && Math.random() > 0.8) {
            state = getRandomItem(dataTalismanState)
        }
        let name = stem + interfix + suffix
        if (state.length) {
            name += `（${state}）`
        }
        names.push(name)
    }
    return names
}
