function bfsWithShortestPath(graph, start, end) {
    // Очередь для обхода
    const queue = [start]

    // Объект для отслеживания посещенных узлов, их расстояния и предшественников
    const visited = {}
    const path = []

    // Начальный узел помечается как посещенный, расстояние устанавливается в 0, предшественник - null
    visited[start] = { distance: 0, predecessor: null }

    // Пока очередь не пуста
    while (queue.length > 0) {
        const current = queue.shift() // Извлекаем текущий узел из очереди

        // Если текущий узел - целевой узел, строим путь
        if (current === end) {
            // Формирование пути, проходя назад от конечного узла через предшественников
            let node = end
            while (node !== null) {
                path.push(node)
                node = visited[node].predecessor
            }
            path.reverse() // Разворачиваем массив, чтобы путь был от начального узла до конечного
            console.log("Минимальный путь: ", path.join(" -> ")) // Выводим минимальный путь
            console.log("Длина пути: ", visited[end].distance) // Выводим длину пути
            return
        }

        // Находим соседей текущего узла
        const neighbors = graph
            .filter((pair) => pair.includes(current))
            .map((pair) => pair.find((node) => node !== current))

        // Обходим всех соседей текущего узла
        for (let neighbor of neighbors) {
            // Если сосед ещё не посещен
            if (!visited[neighbor]) {
                // Помечаем его как посещенный, устанавливаем расстояние и предшественника
                visited[neighbor] = {
                    distance: visited[current].distance + 1,
                    predecessor: current,
                }
                queue.push(neighbor) // Добавляем соседа в очередь на обход
            }
        }
    }

    // Если путь не найден
    console.log("Путь не найден")
}

const airports = ["BGI","CDG","DEL","DOH","DSM","EWR","EYW","HND","ICN","JFK","LGA","LHR","ORD","SAN","SFO","SIN","TLV","BUD"]

const routes = [
    ["DSM", "ORD"],
    ["ORD", "BGI"],
    ["BGI", "LGA"],
    ["SIN", "CDG"],
    ["CDG", "SAN"],
    ["CDG", "BUD"],
    ["DEL", "DOH"],
    ["DEL", "CDG"],
    ["TLV", "DEL"],
    ["EWR", "HND"],
    ["HND", "ICN"],
    ["HND", "JFK"],
    ["ICN", "JFK"],
    ["JFK", "LGA"],
    ["EYW", "LHR"],
    ["LHR", "SFO"],
    ["SFO", "SAN"],
    ["SFO", "DSM"],
    ["SAN", "EYW"],
]

bfsWithShortestPath(routes, "LGA", "SAN")
bfsWithShortestPath(routes, airports[3], airports[10])

