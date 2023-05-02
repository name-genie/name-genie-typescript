import {
    dataBookInterfix,
    dataBookState,
    dataBookSuffix,
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

export interface BookOption {
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
 * 生成秘籍
 * 生成算法：(stem) + [(interfix)] + (suffix) + [(state)]
 * @param count 数量，默认10
 * @param option 选项
 */
export const getBooks = (count: number = 10, option: BookOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const stem = option.stem || getRandomItem(stems)
        let interfix = option.interfix || ''
        if (!interfix.length && Math.random() > 0.8) {
            interfix = getRandomItem(dataBookInterfix)
        }
        const suffix = option.suffix || getRandomItem(dataBookSuffix)
        let state = option.state
        if (!state && Math.random() > 0.8) {
            state = getRandomItem(dataBookState)
        }
        let name = stem + interfix + suffix
        if (state) {
            name += `（${state}）`
        }
        names.push(`《${name}》`)
    }
    return names
}
