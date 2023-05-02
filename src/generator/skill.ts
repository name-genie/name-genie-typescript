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
    dataSkillNumfix,
    dataSkillPrefix,
    dataSkillSuffix
} from '../common'

export interface SkillOption {
    // 词干
    stem?: string
    // 词首
    prefix?: string
    // 词尾
    suffix?: string
    // 数字
    numfix?: string
    // 数字的位置
    position?: 'left' | 'right'
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
 * 生成功法
 * 生成算法1：[numfix] + 路 + [prefix] + (stem) + (suffix)
 * 生成算法2：[prefix] + (stem) + (suffix) + [numfix] + 式
 * @param count 数量，默认10
 * @param option 选项
 */
export const getSkills = (count: number = 10, option: SkillOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        let numfix = option.numfix || ''
        if (!numfix.length && Math.random() > 0.8) {
            numfix = getRandomItem(dataSkillNumfix)
        }
        let prefix = option.prefix || ''
        if (!prefix.length && Math.random() > 0.8) {
            prefix = getRandomItem(dataSkillPrefix)
        }
        const stem = option.stem || getRandomItem(stems)
        const suffix = option.suffix || getRandomItem(dataSkillSuffix)
        let position = option.position
        if (!position) {
            position = Math.random() > 0.5 ? 'left' : 'right'
        }
        let name = prefix + stem + suffix
        if (numfix.length) {
            if (position === 'left') {
                name = numfix + '路' + name
            } else {
                name = name + numfix + '式'
            }
        }
        names.push(name)
    }
    return names
}
