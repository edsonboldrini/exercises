import { describe, it } from 'vitest';
import { paintBucket } from '../src/image-processing';

describe('Test palindrome function', function () {
  it('Verify success', async ({ expect }) => {
    const matrix: string[][] = [
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '.', '.']
    ]

    const result = paintBucket(matrix, 'O', 0, 1)

    expect(result).toStrictEqual([
      ['.', 'O', 'O', 'O', '.', '.'],
      ['.', 'O', '.', '.', '#', '.'],
      ['.', 'O', 'O', 'O', '.', '.'],
      ['.', 'O', '.', '.', '.', '.']
    ])
  })

  it('Verify success', async ({ expect }) => {
    const matrix: string[][] = [
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '.', '.']
    ]

    const result = paintBucket(matrix, 'o', 1, 3)

    expect(result).toStrictEqual([
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', 'o', 'o', '#', '.'],
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '.', '.']
    ])
  })

  it('Verify success', async ({ expect }) => {
    const matrix: string[][] = [
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '#', '.'],
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '.', '.']
    ]

    const result = paintBucket(matrix, '#', 1, 3)

    expect(result).toStrictEqual([
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '#', '#', '#', '.'],
      ['.', '#', '#', '#', '.', '.'],
      ['.', '#', '.', '.', '.', '.']
    ])
  })
});
