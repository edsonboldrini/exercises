import { describe, it } from 'vitest';
import { findContact } from '../contact-book';

const contactBook = [
  { name: "Ana", phone: "(27) 99503-4455" },
  { name: "Edson", phone: "(27) 99504-6446" },
  { name: "Enzo", phone: "(27) 99532-8558" },
  { name: "Gary", phone: "(27) 99512-3311" },
  { name: "José", phone: "(27) 99589-7447" },
];

describe('Test palindrome function', function () {
  it('Verify success', async ({ expect }) => {
    const result = findContact(contactBook, 'Edson')

    expect(result).toBe("(27) 99504-6446")
  })

  it('Verify error', async ({ expect }) => {
    const result = findContact(contactBook, 'Valéria')

    expect(result).toBe(null)
  })

  it('Verify error', async ({ expect }) => {
    const result = findContact(contactBook, 'Bruno')

    expect(result).toBe(null)
  })
})