import type { NextConfig } from 'next';

const createNextConfig = (overrides: NextConfig = {}): NextConfig => {
  return {
    reactStrictMode: true,
    poweredByHeader: false,
    ...overrides,
  };
};

export default createNextConfig;
