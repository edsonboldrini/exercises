export function reverseString(str: string): string {
  return str.split('').reverse().join('')
}

export function isPalindrome(str: string): boolean {
  return str.toLowerCase() === reverseString(str).toLowerCase()
}