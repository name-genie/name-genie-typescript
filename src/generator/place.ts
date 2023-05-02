import { getRandomItem } from '../utils'
import { dataPlaceSuffix, dataSharedPlace } from '../common'

export interface PlaceOption {
    // 长度
    length?: number
    // 词干
    stem?: string
    // 后缀
    suffix?: string
}

/**
 * 生成地点
 * 生成算法：(stem) + (suffix)
 * @param count 数量，默认10
 * @param option 选项
 */
export const getPlaces = (count: number = 10, option: PlaceOption = {}): string[] => {
    const names: string[] = []
    for (let i = 0; i < count; i++) {
        let stem = option.stem || ''
        if (!stem.length) {
            const length = option.length || (Math.random() > 0.3 ? 2 : 1)
            for (let j = 0; j < length; j++) {
                stem += getRandomItem(dataSharedPlace)
            }
        }
        const suffix = option.suffix || getRandomItem(dataPlaceSuffix)
        const name = stem + suffix
        names.push(name)
    }
    return names
}
