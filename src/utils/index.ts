// 随机获取数组中的一个元素
function getRandomItem<T = string>(items: T[]): T {
    const index = Math.floor(Math.random() * items.length)
    return items[index]
}

export { getRandomItem }
