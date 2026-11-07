import { describe, expect, it } from 'vitest';
import * as FormatHelper from '@app/shared/utils/FormatHelper';

describe('FormatHelper.normalizePhone', () => {
  it.each([
    ['', ''],
    ['+ 7 999 999 99 99', '+79999999999'],
    ['8 (999) 123-45-67', '89991234567'],
    ['123abc', '123'],
  ])('преобразует %j в %j', (input, expected) => {
    expect(FormatHelper.normalizePhone(input)).toBe(expected);
  });
});
