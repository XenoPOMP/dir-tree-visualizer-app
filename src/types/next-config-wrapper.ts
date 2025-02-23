import type { NextConfig } from 'next';

export type NextConfigWrapper = (config: NextConfig) => NextConfig;
