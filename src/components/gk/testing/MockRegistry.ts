import { MockQuestion } from "./constants";
import { NLAT_MOCK_1 } from "./data/nlat-mock-1";

// This registry maps exam types and mock numbers to their data
// In the future, we can change this to use dynamic imports to keep the main bundle small
export const MOCK_REGISTRY: Record<string, Record<number, MockQuestion[]>> = {
  NLAT: {
    1: NLAT_MOCK_1,
  },
  // CLAT: { ... }
  // AILET: { ... }
};

export const getMockData = (examType: string, mockNumber: number): MockQuestion[] | null => {
  return MOCK_REGISTRY[examType]?.[mockNumber] || null;
};
