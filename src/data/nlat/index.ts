import mock01 from './mock01';
import { NLATMock } from './types';

// Only mock01 is available so far — add mock02, mock03, etc. as they are created
export const nlatMocks: NLATMock[] = [
  mock01,
] as NLATMock[];

export type { NLATMock, NLATQuestion, NLATTestResult, NLATSectionResult, NLATSection } from './types';
export { NLAT_SECTIONS } from './types';
