const arr = [1, 3, 5, 7, 9]

const sortedArr = arr.sort()

const [first, ...maxArr] = sortedArr

const maxSum = maxArr.reduce((acc, current) => {
  return acc += current
}, 0)

const minSum = maxSum + first - sortedArr[sortedArr.length - 1]

console.log(`${minSum} ${maxSum}`)