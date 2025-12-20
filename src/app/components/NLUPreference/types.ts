
export interface NLU {
  id: string;
  name: string;
  location: string;
  medianCTC: string; // Range string, e.g., "19-22"
  avgCTC: number;    // Calculated for sorting
  recruiters: string[];
  placementRate: string;
  notes: string;
  specializations: string[];
  closingRank: number;
}

export interface UserPreferences {
  fullName: string;
  phoneNumber: string;
  category: string;
  rank: number;
  locationPref?: string;
  specializationPref?: string;
}
