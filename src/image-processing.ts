function recursive(matrix: string[][], colorToChange: string, newColor: string, i: number, j: number): string[][] {
  const maxI = matrix.length
  const maxJ = matrix[0].length

  if (i < 0 || i >= maxI || j < 0 || j >= maxJ) {
    return matrix
  }

  const currentColor = matrix[i][j]

  if (currentColor != colorToChange || currentColor == newColor) {
    return matrix
  } else {
    matrix[i][j] = newColor
    recursive(matrix, colorToChange, newColor, i + 1, j)
    recursive(matrix, colorToChange, newColor, i - 1, j)
    recursive(matrix, colorToChange, newColor, i, j + 1)
    recursive(matrix, colorToChange, newColor, i, j - 1)
  }

  return matrix
}

export function paintBucket(matrix: string[][], newColor: string, i: number, j: number): string[][] {
  const maxI = matrix.length
  const maxJ = matrix[0].length

  if (i < 0 || i >= maxI || j < 0 || j >= maxJ) {
    return matrix
  }

  const currentColor = matrix[i][j]

  return recursive(matrix, currentColor, newColor, i, j)
}

const m: string[][] = [
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '#', '.'],
  ['.', '#', '#', '#', '.', '.'],
  ['.', '#', '.', '.', '.', '.']
]
console.log(m)

const newMatrix = paintBucket(m, 'O', 0, 1)
console.log(newMatrix)
