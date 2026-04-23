import { MockQuestion } from "./constants";
import { NLAT_MOCK_1 } from "./data/nlat-mock-1";
import { NLAT_MOCK_2 } from "./data/nlat-mock-2";
import { NLAT_MOCK_3 } from "./data/nlat-mock-3";
import { NLAT_MOCK_4 } from "./data/nlat-mock-4";
import { NLAT_MOCK_5 } from "./data/nlat-mock-5";
import { MHCET_MOCK_1 } from "./data/mhcet-mock-1";
import { MHCET_MOCK_2 } from "./data/mhcet-mock-2";
import { MHCET_MOCK_3 } from "./data/mhcet-mock-3";
import { MHCET_MOCK_4 } from "./data/mhcet-mock-4";
import { MHCET_MOCK_5 } from "./data/mhcet-mock-5";

// This registry maps exam types and mock numbers to their data
export const MOCK_REGISTRY: Record<string, Record<number, MockQuestion[]>> = {
  NLAT: {
    1: NLAT_MOCK_1,
    2: NLAT_MOCK_2,
    3: NLAT_MOCK_3,
    4: NLAT_MOCK_4,
    5: NLAT_MOCK_5,
  },
  MHCET: {
    1: MHCET_MOCK_1,
    2: MHCET_MOCK_2,
    3: MHCET_MOCK_3,
    4: MHCET_MOCK_4,
    5: MHCET_MOCK_5,
  },
};

export const getMockData = (examType: string, mockNumber: number): MockQuestion[] | null => {
  return MOCK_REGISTRY[examType]?.[mockNumber] || null;
};
