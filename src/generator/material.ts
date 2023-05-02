import {
    dataMaterialState,
    dataMaterialSuffix,
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

export interface MaterialOption {
    // 词干
    stem?: string
    // 词尾
    suffix?: string
    // 状态
    state?: string
}

const stems: string[] = [
    ...dataSharedDao,
    ...dataSharedElement,
    ...dataSharedColor,
    ...dataSharedCreature,
    ...dataSharedThing,
    ...dataSharedAdj,
    ...dataSharedNumber,
    ...dataSharedGesture,
    ...dataSharedAction
]

/**
 * 生成材料
 * 生成算法：(stem) + (suffix) + [(state)]
 * @param count 数量，默认10
 * @param option 选项
 */
export const getMaterials = (count: number = 10, option: MaterialOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        const stem = option.stem || getRandomItem(stems)
        const suffix = option.suffix || getRandomItem(dataMaterialSuffix)
        let state = option.state || ''
        if (!state.length && Math.random() > 0.8) {
            state = getRandomItem(dataMaterialState)
        }
        let name = stem + suffix
        if (state.length) {
            name += `（${state}）`
        }
        names.push(name)
    }
    return names
}
