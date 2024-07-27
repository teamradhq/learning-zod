import { describe, expect, it } from '@jest/globals';

import * as z from 'zod';

const TestSchema = z.object({
  name: z.string().min(3),
  age: z.number().min(0),
});

describe('zod.errors', () => {
  it('should fail to parse invalid schema', () => {
    expect.hasAssertions();

    const shouldThrow = () => {
      TestSchema.parse({ name: 'Jo', age: -1 });
    };

    expect(shouldThrow).toThrow(z.ZodError);
  });

  /* eslint-disable jest/no-conditional-expect */
  it('should contain validation errors', () => {
    expect.hasAssertions();

    try {
      TestSchema.parse({ name: 'Jo', age: -1 });
    } catch (error) {
      expect(error).toBeInstanceOf(z.ZodError);
      expect((error as z.ZodError).issues).toStrictEqual([
        {
          code: 'too_small',
          minimum: 3,
          type: 'string',
          inclusive: true,
          exact: false,
          message: 'String must contain at least 3 character(s)',
          path: ['name'],
        },
        {
          code: 'too_small',
          minimum: 0,
          type: 'number',
          inclusive: true,
          exact: false,
          message: 'Number must be greater than or equal to 0',
          path: ['age'],
        },
      ]);
    }
  });
  /* eslint-enable jest/no-conditional-expect */
});
