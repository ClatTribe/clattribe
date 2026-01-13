import React from 'react';
import { 
  FileText, 
  Zap, 
  Star, 
  BookOpen, 
  Calendar, 
  Info, 
  School,
  LayoutDashboard,
  BarChart3,
  Video,
  Users,
  CreditCard
} from 'lucide-react';
import { ResourceTab, CollegeInfo, ExamForm } from './types';

export const SIDEBAR_ITEMS = [
  { id: 'nlu_predictor', label: 'NLU Predictor', icon: <LayoutDashboard className="w-5 h-5" />, active: true },
  { id: 'pref_list', label: 'NLU Preference List', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'ailet_predictor', label: 'AILET Predictor', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'written_analysis', label: 'Written Analysis', icon: <FileText className="w-5 h-5" /> },
  { id: 'video_analysis', label: 'Video Analysis', icon: <Video className="w-5 h-5" /> },
  { id: 'mentors', label: 'Connect With Mentors', icon: <Users className="w-5 h-5" /> },
  { id: 'flashcards', label: 'GK Flashcards', icon: <CreditCard className="w-5 h-5" /> },
];

export const RESOURCE_TABS = [
  { id: ResourceTab.PYQ, icon: <FileText className="w-5 h-5" />, label: 'PYQ' },
  { id: ResourceTab.CHEATSHEETS, icon: <Zap className="w-5 h-5" />, label: 'CheatSheets' },
  { id: ResourceTab.MIND_JOURNALS, icon: <Star className="w-5 h-5" />, label: "Mind Journals", isNew: true },
  { id: ResourceTab.GK_NOTES, icon: <BookOpen className="w-5 h-5" />, label: 'GK Notes' },
  { id: ResourceTab.FORMS, icon: <Calendar className="w-5 h-5" />, label: 'Forms' },
  { id: ResourceTab.DESK, icon: <Info className="w-5 h-5" />, label: 'Desk of CT' },
  { id: ResourceTab.COLLEGES, icon: <School className="w-5 h-5" />, label: 'Cut-offs' },
];

export const COLLEGES_DATA: CollegeInfo[] = [
  {
    name: "NLSIU Bangalore",
    location: "Karnataka",
    rank: 1,
    description: "The Harvard of the East, NLSIU is the premier law institute in India known for its rigorous academic culture.",
    stats: { seats: 240, medianPackage: "18.5 LPA", cutOff: "Rank 1-100" }
  },
  {
    name: "NALSAR Hyderabad",
    location: "Telangana",
    rank: 2,
    description: "Famous for its liberal culture and beautiful residential campus, NALSAR consistently produces top legal minds.",
    stats: { seats: 132, medianPackage: "16 LPA", cutOff: "Rank 101-250" }
  },
  {
    name: "WBNUJS Kolkata",
    location: "West Bengal",
    rank: 3,
    description: "Strongly focused on corporate law and public litigation, NUJS has a vibrant student community.",
    stats: { seats: 127, medianPackage: "15 LPA", cutOff: "Rank 251-450" }
  }
];

export const FORMS_DATA: ExamForm[] = [
  {
    name: "CLAT 2026",
    startDate: "July 2025",
    endDate: "Oct 2025",
    examDate: "Dec 1, 2025",
    link: "https://consortiumofnlus.ac.in",
    status: "Coming Soon"
  },
  {
    name: "AILET 2026",
    startDate: "Aug 2025",
    endDate: "Nov 2025",
    examDate: "Dec 8, 2025",
    link: "https://nationallawuniversitydelhi.in",
    status: "Coming Soon"
  },
  {
    name: "SLAT 2026",
    startDate: "May 2026",
    endDate: "May 2026",
    examDate: "Jun 15, 2026",
    link: "https://set-test.org",
    status: "Coming Soon"
  },
  {
    name: "CUET 2026",
    startDate: "Jan 3, 2026",
    endDate: "Jan 30, 2026",
    examDate: "May 15, 2026",
    link: "https://examinationservices.nic.in/ExamSysCUETUG26/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFYsjZOdyj8DuPcxGBqAK2DwPXgGzSvy8OkvXqQJ0Bni9",
    status: "Open"
  },
  {
    name: "NMIMS-LAT",
    startDate: "Jan 2026",
    endDate: "May 2026",
    examDate: "Jun 10, 2026",
    link: "https://nmims.edu",
    status: "Coming Soon"
  },
  {
    name: "MHCET Law",
    startDate: "March 2025",
    endDate: "May 2026",
    examDate: "Jun 20, 2026",
    link: "https://cetcell.mahacet.org",
    status: "Open"
  },
  {
    name: "IPU CET / CLAT Score",
    startDate: "March 2026",
    endDate: "May 2026",
    examDate: "Jun 25, 2026",
    link: "https://ipu.ac.in",
    status: "Coming Soon"
  },
  {
    name: "LSAT-India",
    startDate: "Jan 2026",
    endDate: "May 2026",
    examDate: "Jun 30, 2026",
    link: "https://lsatindia.in",
    status: "Coming Soon"
  }
];