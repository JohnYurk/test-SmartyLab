function flatten(arr, n) {
    // Внутренняя рекурсивная функция, принимает массив и текущую глубину вложенности
    function flattenInternal(input, depth) {
        // Если текущая глубина равна или больше заданной глубины n, возвращаем входной массив
        if (depth >= n) {
            return input
        }

        let flattenedArray = [] // Создаем массив, в который будем помещать уплощенные элементы

        // Итерируем по элементам массива input
        for (let i = 0; i < input.length; i++) {
            if (Array.isArray(input[i])) {
                // Если элемент является массивом
                // Вызываем рекурсивно функцию flattenInternal для вложенного массива и увеличиваем глубину на 1
                flattenedArray = flattenedArray.concat(
                    flattenInternal(input[i], depth + 1)
                )
            } else {
                // Если элемент не является массивом, добавляем его в уплощенный массив
                flattenedArray.push(input[i])
            }
        }

        return flattenedArray // Возвращаем уплощенный массив
    }

    return flattenInternal(arr, 0) // Вызов внутренней функции с начальной глубиной 0
}

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, 11], 12],
    [13, 14, 15],
]

console.log(flatten(array, 0))

console.log(flatten(array, 1))

console.log(flatten(array, 2))
