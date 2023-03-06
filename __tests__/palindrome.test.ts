import { describe, it } from 'vitest';
import { isPalindrome } from '../palindrome';

describe('Test palindrome function', function () {
  it('Verify success', async ({ expect }) => {
    const result = isPalindrome('HANNAH')

    expect(result).toBe(true)
  })

  it('Verify error', async ({ expect }) => {
    const result = isPalindrome('GAGA')

    expect(result).toBe(false)
  })

  it('Verify error', async ({ expect }) => {
    const result = isPalindrome('Edson')

    expect(result).toBe(false)
  })
})