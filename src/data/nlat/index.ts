import mock01 from './mock01';
import mock02 from './mock02';
import mock03 from './mock03';
import mock04 from './mock04';
import mock05 from './mock05';
import mock06 from './mock06';
import mock07 from './mock07';
import mock08 from './mock08';
import mock09 from './mock09';
import mock10 from './mock10';
import mock11 from './mock11';
import mock12 from './mock12';
import mock13 from './mock13';
import mock14 from './mock14';
import mock15 from './mock15';

import { NLATMock } from './types';

export const nlatMocks: NLATMock[] = [
  mock01, mock02, mock03, mock04, mock05,
  mock06, mock07, mock08, mock09, mock10,
  mock11, mock12, mock13, mock14, mock15,
] as NLATMock[];

export type { NLATMock, NLATQuestion, NLATTestResult, NLATSectionResult, NLATSection } from './types';
export { NLAT_SECTIONS } from './types';
