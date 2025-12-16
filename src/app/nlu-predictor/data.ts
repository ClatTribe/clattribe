// =========================
// Types & Enums
// =========================

export enum AdmissionChance {
  HIGH = 'High Probability',
  MODERATE = 'Competitive',
  LOW = 'Ambitious',
  NONE = 'Unlikely'
}

export interface CollegeData {
  id: string;
  name: string;
  minScore: number;
  maxScore: number;
  category: string;
}

export interface PredictionResult extends CollegeData {
  chance: AdmissionChance;
  matchScore: number;
}

// =========================
// Image Helper Function
// =========================

// This function automatically maps college names to image filenames
export const getCollegeImage = (collegeName: string): string => {
  const nameToSlug: { [key: string]: string } = {
    'NLSIU Bangalore': 'nlsiu',
    'NALSAR Hyderabad': 'nalsar',
    'WBNUJS Kolkata': 'wbnujs',
    'WBNUJS Kolkata (BSc LLB)': 'wbnujs',
    'NLIU Bhopal (BA LLB)': 'nliu',
    'NLIU Bhopal (BSc LLB)': 'nliu',
    'NLU Jodhpur': 'nlu-jodhpur',
    'HNLU Raipur': 'hnlu',
    'GNLU Gandhinagar': 'gnlu',
    'RMLNLU Lucknow': 'rmlnlu',
    'RGNUL Punjab': 'rgnul',
    'CNLU Patna (BA LLB)': 'cnlu',
    'CNLU Patna (BBA LLB)': 'cnlu',
    'NUALS Kochi': 'nuals',
    'NLU Odisha': 'nlu-odisha',
    'NUSRL Ranchi': 'nusrl',
    'TNNLU Trichy (BA LLB)': 'tnnlu',
    'TNNLU Trichy (BCom LLB)': 'tnnlu',
    'DSNLU Vishakhapatnam': 'dsnlu',
    'MNLU Mumbai': 'mnlu-mumbai',
    'MNLU Nagpur (BA LLB)': 'mnlu-nagpur',
    'MNLU Nagpur (BBA LLB)': 'mnlu-nagpur',
    'MNLU Aurangabad (BA LLB)': 'mnlu-aurangabad',
    'MNLU Aurangabad (BBA LLB)': 'mnlu-aurangabad',
    'NLUJA Assam': 'nluja',
    'HPNLU Shimla (BA LLB)': 'hpnlu',
    'HPNLU Shimla (BBA LLB)': 'hpnlu',
    'DNLU Jabalpur': 'dnlu',
    'DBRANLU Sonepat': 'dbranlu',
    'GNLU Silvassa': 'gnlu-silvassa',
    'NLUT Agartala': 'nlut',
  };
  
  // Get the slug for this college name, or use 'default' if not found
  const slug = nameToSlug[collegeName] || 'default';
  
  // Return the path to the image in the public folder
  return `/nlu-images/${slug}.jpg`;
};

// =========================
// College Data
// =========================

export const COLLEGES: CollegeData[] = [
  // NLSIU Bangalore
  { id: 'nlsiu-general', name: 'NLSIU Bangalore', minScore: 1, maxScore: 72, category: 'General' },
  { id: 'nlsiu-obc', name: 'NLSIU Bangalore', minScore: 1, maxScore: 350, category: 'OBC-NCL' },
  { id: 'nlsiu-sc', name: 'NLSIU Bangalore', minScore: 1, maxScore: 800, category: 'SC' },
  { id: 'nlsiu-st', name: 'NLSIU Bangalore', minScore: 1, maxScore: 1500, category: 'ST' },
  { id: 'nlsiu-ews', name: 'NLSIU Bangalore', minScore: 1, maxScore: 200, category: 'EWS' },
  
  // NALSAR Hyderabad
  { id: 'nalsar-general', name: 'NALSAR Hyderabad', minScore: 1, maxScore: 150, category: 'General' },
  { id: 'nalsar-obc', name: 'NALSAR Hyderabad', minScore: 1, maxScore: 600, category: 'OBC-NCL' },
  { id: 'nalsar-sc', name: 'NALSAR Hyderabad', minScore: 1, maxScore: 1200, category: 'SC' },
  { id: 'nalsar-st', name: 'NALSAR Hyderabad', minScore: 1, maxScore: 2000, category: 'ST' },
  { id: 'nalsar-ews', name: 'NALSAR Hyderabad', minScore: 1, maxScore: 400, category: 'EWS' },
  
  // WBNUJS Kolkata
  { id: 'wbnujs-ba-general', name: 'WBNUJS Kolkata', minScore: 1, maxScore: 220, category: 'General' },
  { id: 'wbnujs-ba-obc', name: 'WBNUJS Kolkata', minScore: 1, maxScore: 800, category: 'OBC-NCL' },
  { id: 'wbnujs-ba-sc', name: 'WBNUJS Kolkata', minScore: 1, maxScore: 1500, category: 'SC' },
  { id: 'wbnujs-ba-st', name: 'WBNUJS Kolkata', minScore: 1, maxScore: 2500, category: 'ST' },
  { id: 'wbnujs-ba-ews', name: 'WBNUJS Kolkata', minScore: 1, maxScore: 600, category: 'EWS' },
  
  // WBNUJS Kolkata (BSc LLB)
  // { id: 'wbnujs-bsc-general', name: 'WBNUJS Kolkata (BSc LLB)', minScore: 88, maxScore: 93, category: 'General' },
  // { id: 'wbnujs-bsc-obc', name: 'WBNUJS Kolkata (BSc LLB)', minScore: 79, maxScore: 84, category: 'OBC-NCL' },
  // { id: 'wbnujs-bsc-sc', name: 'WBNUJS Kolkata (BSc LLB)', minScore: 65, maxScore: 72, category: 'SC' },
  // { id: 'wbnujs-bsc-st', name: 'WBNUJS Kolkata (BSc LLB)', minScore: 63, maxScore: 70, category: 'ST' },
  // { id: 'wbnujs-bsc-ews', name: 'WBNUJS Kolkata (BSc LLB)', minScore: 79, maxScore: 85, category: 'EWS' },
  
  // NLIU Bhopal (BA LLB)
  { id: 'nliu-ba-general', name: 'NLIU Bhopal (BA LLB)', minScore: 1, maxScore: 280, category: 'General' },
  { id: 'nliu-ba-obc', name: 'NLIU Bhopal (BA LLB)', minScore: 1, maxScore: 1000, category: 'OBC-NCL' },
  { id: 'nliu-ba-sc', name: 'NLIU Bhopal (BA LLB)', minScore: 1, maxScore: 1800, category: 'SC' },
  { id: 'nliu-ba-st', name: 'NLIU Bhopal (BA LLB)', minScore: 1, maxScore: 2800, category: 'ST' },
  { id: 'nliu-ba-ews', name: 'NLIU Bhopal (BA LLB)', minScore: 1, maxScore: 800, category: 'EWS' },
  
  // NLIU Bhopal (BSc LLB)
  // { id: 'nliu-bsc-general', name: 'NLIU Bhopal (BSc LLB)', minScore: 88, maxScore: 95, category: 'General' },
  // { id: 'nliu-bsc-obc', name: 'NLIU Bhopal (BSc LLB)', minScore: 79, maxScore: 86, category: 'OBC-NCL' },
  // { id: 'nliu-bsc-sc', name: 'NLIU Bhopal (BSc LLB)', minScore: 65, maxScore: 73, category: 'SC' },
  // { id: 'nliu-bsc-st', name: 'NLIU Bhopal (BSc LLB)', minScore: 63, maxScore: 71, category: 'ST' },
  // { id: 'nliu-bsc-ews', name: 'NLIU Bhopal (BSc LLB)', minScore: 79, maxScore: 87, category: 'EWS' },
  
  // NLU Jodhpur
  { id: 'nlu-jodhpur-general', name: 'NLU Jodhpur', minScore: 1, maxScore: 350, category: 'General' },
  { id: 'nlu-jodhpur-obc', name: 'NLU Jodhpur', minScore: 1, maxScore: 1200, category: 'OBC-NCL' },
  { id: 'nlu-jodhpur-sc', name: 'NLU Jodhpur', minScore: 1, maxScore:2000, category: 'SC' },
  { id: 'nlu-jodhpur-st', name: 'NLU Jodhpur', minScore: 1, maxScore: 3000, category: 'ST' },
  { id: 'nlu-jodhpur-ews', name: 'NLU Jodhpur', minScore: 1, maxScore: 1000, category: 'EWS' },
  
  // HNLU Raipur
  { id: 'hnlu-general', name: 'HNLU Raipur', minScore: 1, maxScore: 500, category: 'General' },
  { id: 'hnlu-obc', name: 'HNLU Raipur', minScore: 1, maxScore: 1800, category: 'OBC-NCL' },
  { id: 'hnlu-sc', name: 'HNLU Raipur', minScore: 1, maxScore: 2800, category: 'SC' },
  { id: 'hnlu-st', name: 'HNLU Raipur', minScore: 65, maxScore: 3800, category: 'ST' },
  { id: 'hnlu-ews', name: 'HNLU Raipur', minScore: 1, maxScore: 1500, category: 'EWS' },
  
  // GNLU Gandhinagar
  { id: 'gnlu-general', name: 'GNLU Gandhinagar', minScore: 1, maxScore: 600, category: 'General' },
  { id: 'gnlu-obc', name: 'GNLU Gandhinagar', minScore: 1, maxScore: 2000, category: 'OBC-NCL' },
  { id: 'gnlu-sc', name: 'GNLU Gandhinagar', minScore: 1, maxScore: 3000, category: 'SC' },
  { id: 'gnlu-st', name: 'GNLU Gandhinagar', minScore: 1, maxScore: 4000, category: 'ST' },
  { id: 'gnlu-ews', name: 'GNLU Gandhinagar', minScore: 1, maxScore: 1800, category: 'EWS' },
  
  // RMLNLU Lucknow
  { id: 'rmlnlu-general', name: 'RMLNLU Lucknow', minScore: 1, maxScore: 700, category: 'General' },
  { id: 'rmlnlu-obc', name: 'RMLNLU Lucknow', minScore: 1, maxScore: 2200, category: 'OBC-NCL' },
  { id: 'rmlnlu-sc', name: 'RMLNLU Lucknow', minScore: 1, maxScore: 3200, category: 'SC' },
  { id: 'rmlnlu-st', name: 'RMLNLU Lucknow', minScore: 1, maxScore: 4200, category: 'ST' },
  { id: 'rmlnlu-ews', name: 'RMLNLU Lucknow', minScore: 1, maxScore: 2000, category: 'EWS' },
  
  // RGNUL Punjab
  { id: 'rgnul-general', name: 'RGNUL Punjab', minScore: 1, maxScore: 800, category: 'General' },
  { id: 'rgnul-obc', name: 'RGNUL Punjab', minScore: 1, maxScore: 2400, category: 'OBC-NCL' },
  { id: 'rgnul-sc', name: 'RGNUL Punjab', minScore: 1, maxScore: 3400, category: 'SC' },
  { id: 'rgnul-st', name: 'RGNUL Punjab', minScore: 1, maxScore: 4400, category: 'ST' },
  { id: 'rgnul-ews', name: 'RGNUL Punjab', minScore: 1, maxScore: 2200, category: 'EWS' },
  
  // CNLU Patna (BA LLB)
  { id: 'cnlu-ba-general', name: 'CNLU Patna (BA LLB)', minScore: 1, maxScore: 900, category: 'General' },
  { id: 'cnlu-ba-obc', name: 'CNLU Patna (BA LLB)', minScore: 1, maxScore: 2600, category: 'OBC-NCL' },
  { id: 'cnlu-ba-sc', name: 'CNLU Patna (BA LLB)', minScore: 1, maxScore: 3600, category: 'SC' },
  { id: 'cnlu-ba-st', name: 'CNLU Patna (BA LLB)', minScore: 1, maxScore: 4600, category: 'ST' },
  { id: 'cnlu-ba-ews', name: 'CNLU Patna (BA LLB)', minScore: 1, maxScore: 2400, category: 'EWS' },
  
  // CNLU Patna (BBA LLB)
  // { id: 'cnlu-bba-general', name: 'CNLU Patna (BBA LLB)', minScore: 85, maxScore: 90, category: 'General' },
  // { id: 'cnlu-bba-obc', name: 'CNLU Patna (BBA LLB)', minScore: 76, maxScore: 81, category: 'OBC-NCL' },
  // { id: 'cnlu-bba-sc', name: 'CNLU Patna (BBA LLB)', minScore: 62, maxScore: 69, category: 'SC' },
  // { id: 'cnlu-bba-st', name: 'CNLU Patna (BBA LLB)', minScore: 60, maxScore: 67, category: 'ST' },
  // { id: 'cnlu-bba-ews', name: 'CNLU Patna (BBA LLB)', minScore: 77, maxScore: 82, category: 'EWS' },
  
  // NUALS Kochi
  { id: 'nuals-general', name: 'NUALS Kochi', minScore: 1, maxScore: 1200, category: 'General' },
  { id: 'nuals-obc', name: 'NUALS Kochi', minScore: 1, maxScore: 3200, category: 'OBC-NCL' },
  // { id: 'nuals-sc', name: 'NUALS Kochi', minScore: 65, maxScore: 72, category: 'SC' },
  // { id: 'nuals-st', name: 'NUALS Kochi', minScore: 63, maxScore: 70, category: 'ST' },
  // { id: 'nuals-ews', name: 'NUALS Kochi', minScore: 79, maxScore: 85, category: 'EWS' },
  
  // NLU Odisha
  { id: 'nlu-odisha-general', name: 'NLU Odisha', minScore: 1, maxScore: 1400, category: 'General' },
  { id: 'nlu-odisha-obc', name: 'NLU Odisha', minScore: 1, maxScore: 3400, category: 'OBC-NCL' },
  // { id: 'nlu-odisha-sc', name: 'NLU Odisha', minScore: 65, maxScore: 72, category: 'SC' },
  // { id: 'nlu-odisha-st', name: 'NLU Odisha', minScore: 63, maxScore: 70, category: 'ST' },
  // { id: 'nlu-odisha-ews', name: 'NLU Odisha', minScore: 79, maxScore: 85, category: 'EWS' },
  
  // NUSRL Ranchi
  { id: 'nusrl-general', name: 'NUSRL Ranchi', minScore: 1, maxScore: 1600, category: 'General' },
  { id: 'nusrl-obc', name: 'NUSRL Ranchi', minScore: 1, maxScore: 3600, category: 'OBC-NCL' },
  // { id: 'nusrl-sc', name: 'NUSRL Ranchi', minScore: 64, maxScore: 71, category: 'SC' },
  // { id: 'nusrl-st', name: 'NUSRL Ranchi', minScore: 62, maxScore: 69, category: 'ST' },
  // { id: 'nusrl-ews', name: 'NUSRL Ranchi', minScore: 78, maxScore: 84, category: 'EWS' },
  
  // TNNLU Trichy (BA LLB)
  { id: 'tnnlu-ba-general', name: 'TNNLU Trichy (BA LLB)', minScore: 1, maxScore: 2500, category: 'General' },
  { id: 'tnnlu-ba-obc', name: 'TNNLU Trichy (BA LLB)', minScore: 1, maxScore: 4500, category: 'OBC-NCL' },
  // { id: 'tnnlu-ba-sc', name: 'TNNLU Trichy (BA LLB)', minScore: 64, maxScore: 71, category: 'SC' },
  // { id: 'tnnlu-ba-st', name: 'TNNLU Trichy (BA LLB)', minScore: 62, maxScore: 69, category: 'ST' },
  // { id: 'tnnlu-ba-ews', name: 'TNNLU Trichy (BA LLB)', minScore: 78, maxScore: 84, category: 'EWS' },
  
  // TNNLU Trichy (BCom LLB)
  // { id: 'tnnlu-bcom-general', name: 'TNNLU Trichy (BCom LLB)', minScore: 87, maxScore: 92, category: 'General' },
  // { id: 'tnnlu-bcom-obc', name: 'TNNLU Trichy (BCom LLB)', minScore: 78, maxScore: 83, category: 'OBC-NCL' },
  // { id: 'tnnlu-bcom-sc', name: 'TNNLU Trichy (BCom LLB)', minScore: 64, maxScore: 71, category: 'SC' },
  // { id: 'tnnlu-bcom-st', name: 'TNNLU Trichy (BCom LLB)', minScore: 62, maxScore: 69, category: 'ST' },
  // { id: 'tnnlu-bcom-ews', name: 'TNNLU Trichy (BCom LLB)', minScore: 78, maxScore: 84, category: 'EWS' },
  
  // DSNLU Vishakhapatnam
  { id: 'dsnlu-general', name: 'DSNLU Vishakhapatnam', minScore: 1, maxScore: 2000, category: 'General' },
  { id: 'dsnlu-obc', name: 'DSNLU Vishakhapatnam', minScore: 1, maxScore: 4000, category: 'OBC-NCL' },
  // { id: 'dsnlu-sc', name: 'DSNLU Vishakhapatnam', minScore: 65, maxScore: 71, category: 'SC' },
  // { id: 'dsnlu-st', name: 'DSNLU Vishakhapatnam', minScore: 63, maxScore: 69, category: 'ST' },
  // { id: 'dsnlu-ews', name: 'DSNLU Vishakhapatnam', minScore: 79, maxScore: 84, category: 'EWS' },
  
  // MNLU Mumbai
  { id: 'mnlu-mumbai-general', name: 'MNLU Mumbai', minScore: 1, maxScore: 3000, category: 'General' },
  { id: 'mnlu-mumbai-obc', name: 'MNLU Mumbai', minScore: 1, maxScore: 5000, category: 'OBC-NCL' },
  // { id: 'mnlu-mumbai-sc', name: 'MNLU Mumbai', minScore: 68, maxScore: 75, category: 'SC' },
  // { id: 'mnlu-mumbai-st', name: 'MNLU Mumbai', minScore: 66, maxScore: 73, category: 'ST' },
  // { id: 'mnlu-mumbai-ews', name: 'MNLU Mumbai', minScore: 83, maxScore: 89, category: 'EWS' },
  
  // MNLU Nagpur (BA LLB)
  // { id: 'mnlu-nagpur-ba-general', name: 'MNLU Nagpur (BA LLB)', minScore: 86, maxScore: 91, category: 'General' },
  // { id: 'mnlu-nagpur-ba-obc', name: 'MNLU Nagpur (BA LLB)', minScore: 77, maxScore: 82, category: 'OBC-NCL' },
  // { id: 'mnlu-nagpur-ba-sc', name: 'MNLU Nagpur (BA LLB)', minScore: 63, maxScore: 70, category: 'SC' },
  // { id: 'mnlu-nagpur-ba-st', name: 'MNLU Nagpur (BA LLB)', minScore: 61, maxScore: 68, category: 'ST' },
  // { id: 'mnlu-nagpur-ba-ews', name: 'MNLU Nagpur (BA LLB)', minScore: 77, maxScore: 83, category: 'EWS' },
  
  // MNLU Nagpur (BBA LLB)
  // { id: 'mnlu-nagpur-bba-general', name: 'MNLU Nagpur (BBA LLB)', minScore: 87, maxScore: 92, category: 'General' },
  // { id: 'mnlu-nagpur-bba-obc', name: 'MNLU Nagpur (BBA LLB)', minScore: 78, maxScore: 83, category: 'OBC-NCL' },
  // { id: 'mnlu-nagpur-bba-sc', name: 'MNLU Nagpur (BBA LLB)', minScore: 64, maxScore: 71, category: 'SC' },
  // { id: 'mnlu-nagpur-bba-st', name: 'MNLU Nagpur (BBA LLB)', minScore: 62, maxScore: 69, category: 'ST' },
  // { id: 'mnlu-nagpur-bba-ews', name: 'MNLU Nagpur (BBA LLB)', minScore: 78, maxScore: 84, category: 'EWS' },
  
  // MNLU Aurangabad (BA LLB)
  { id: 'mnlu-aurangabad-ba-general', name: 'MNLU Aurangabad (BA LLB)', minScore: 1, maxScore: 3500, category: 'General' },
  { id: 'mnlu-aurangabad-ba-obc', name: 'MNLU Aurangabad (BA LLB)', minScore: 1, maxScore: 5500, category: 'OBC-NCL' },
  // { id: 'mnlu-aurangabad-ba-sc', name: 'MNLU Aurangabad (BA LLB)', minScore: 62, maxScore: 69, category: 'SC' },
  // { id: 'mnlu-aurangabad-ba-st', name: 'MNLU Aurangabad (BA LLB)', minScore: 60, maxScore: 67, category: 'ST' },
  // { id: 'mnlu-aurangabad-ba-ews', name: 'MNLU Aurangabad (BA LLB)', minScore: 77, maxScore: 82, category: 'EWS' },
  
  // MNLU Aurangabad (BBA LLB)
  // { id: 'mnlu-aurangabad-bba-general', name: 'MNLU Aurangabad (BBA LLB)', minScore: 86, maxScore: 91, category: 'General' },
  // { id: 'mnlu-aurangabad-bba-obc', name: 'MNLU Aurangabad (BBA LLB)', minScore: 77, maxScore: 82, category: 'OBC-NCL' },
  // { id: 'mnlu-aurangabad-bba-sc', name: 'MNLU Aurangabad (BBA LLB)', minScore: 63, maxScore: 70, category: 'SC' },
  // { id: 'mnlu-aurangabad-bba-st', name: 'MNLU Aurangabad (BBA LLB)', minScore: 61, maxScore: 68, category: 'ST' },
  // { id: 'mnlu-aurangabad-bba-ews', name: 'MNLU Aurangabad (BBA LLB)', minScore: 77, maxScore: 83, category: 'EWS' },
  
  // NLUJA Assam
  { id: 'nluja-general', name: 'NLUJA Assam', minScore: 1, maxScore: 1800, category: 'General' },
  { id: 'nluja-obc', name: 'NLUJA Assam', minScore: 1, maxScore: 3800, category: 'OBC-NCL' },
  // { id: 'nluja-sc', name: 'NLUJA Assam', minScore: 62, maxScore: 69, category: 'SC' },
  // { id: 'nluja-st', name: 'NLUJA Assam', minScore: 60, maxScore: 67, category: 'ST' },
  // { id: 'nluja-ews', name: 'NLUJA Assam', minScore: 77, maxScore: 82, category: 'EWS' },
  
  // HPNLU Shimla (BA LLB)
  { id: 'hpnlu-ba-general', name: 'HPNLU Shimla (BA LLB)', minScore: 1, maxScore: 4000, category: 'General' },
  { id: 'hpnlu-ba-obc', name: 'HPNLU Shimla (BA LLB)', minScore: 1, maxScore: 6000, category: 'OBC-NCL' },
  // { id: 'hpnlu-ba-sc', name: 'HPNLU Shimla (BA LLB)', minScore: 62, maxScore: 69, category: 'SC' },
  // { id: 'hpnlu-ba-st', name: 'HPNLU Shimla (BA LLB)', minScore: 60, maxScore: 67, category: 'ST' },
  // { id: 'hpnlu-ba-ews', name: 'HPNLU Shimla (BA LLB)', minScore: 77, maxScore: 82, category: 'EWS' },
  
  // HPNLU Shimla (BBA LLB)
  // { id: 'hpnlu-bba-general', name: 'HPNLU Shimla (BBA LLB)', minScore: 84, maxScore: 89, category: 'General' },
  // { id: 'hpnlu-bba-obc', name: 'HPNLU Shimla (BBA LLB)', minScore: 75, maxScore: 80, category: 'OBC-NCL' },
  // { id: 'hpnlu-bba-sc', name: 'HPNLU Shimla (BBA LLB)', minScore: 61, maxScore: 68, category: 'SC' },
  // { id: 'hpnlu-bba-st', name: 'HPNLU Shimla (BBA LLB)', minScore: 59, maxScore: 66, category: 'ST' },
  // { id: 'hpnlu-bba-ews', name: 'HPNLU Shimla (BBA LLB)', minScore: 76, maxScore: 81, category: 'EWS' },
  
  // DNLU Jabalpur
  { id: 'dnlu-general', name: 'DNLU Jabalpur', minScore: 1, maxScore: 4500, category: 'General' },
  { id: 'dnlu-obc', name: 'DNLU Jabalpur', minScore: 1, maxScore: 6500, category: 'OBC-NCL' },
  // { id: 'dnlu-sc', name: 'DNLU Jabalpur', minScore: 62, maxScore: 69, category: 'SC' },
  // { id: 'dnlu-st', name: 'DNLU Jabalpur', minScore: 60, maxScore: 67, category: 'ST' },
  // { id: 'dnlu-ews', name: 'DNLU Jabalpur', minScore: 77, maxScore: 82, category: 'EWS' },
  
  // DBRANLU Sonepat
  // { id: 'dbranlu-general', name: 'DBRANLU Sonepat', minScore: 85, maxScore: 90, category: 'General' },
  // { id: 'dbranlu-obc', name: 'DBRANLU Sonepat', minScore: 76, maxScore: 81, category: 'OBC-NCL' },
  // { id: 'dbranlu-sc', name: 'DBRANLU Sonepat', minScore: 62, maxScore: 69, category: 'SC' },
  // { id: 'dbranlu-st', name: 'DBRANLU Sonepat', minScore: 60, maxScore: 67, category: 'ST' },
  // { id: 'dbranlu-ews', name: 'DBRANLU Sonepat', minScore: 77, maxScore: 82, category: 'EWS' },
  
  // // GNLU Silvassa
  // { id: 'gnlu-silvassa-general', name: 'GNLU Silvassa', minScore: 88, maxScore: 93, category: 'General' },
  // { id: 'gnlu-silvassa-obc', name: 'GNLU Silvassa', minScore: 79, maxScore: 84, category: 'OBC-NCL' },
  // { id: 'gnlu-silvassa-sc', name: 'GNLU Silvassa', minScore: 65, maxScore: 72, category: 'SC' },
  // { id: 'gnlu-silvassa-st', name: 'GNLU Silvassa', minScore: 63, maxScore: 70, category: 'ST' },
  // { id: 'gnlu-silvassa-ews', name: 'GNLU Silvassa', minScore: 79, maxScore: 85, category: 'EWS' },
  
  // // NLUT Agartala
  // { id: 'nlut-general', name: 'NLUT Agartala', minScore: 83, maxScore: 88, category: 'General' },
  // { id: 'nlut-obc', name: 'NLUT Agartala', minScore: 74, maxScore: 79, category: 'OBC-NCL' },
  // { id: 'nlut-sc', name: 'NLUT Agartala', minScore: 60, maxScore: 67, category: 'SC' },
  // { id: 'nlut-st', name: 'NLUT Agartala', minScore: 58, maxScore: 65, category: 'ST' },
  // { id: 'nlut-ews', name: 'NLUT Agartala', minScore: 75, maxScore: 80, category: 'EWS' },
];