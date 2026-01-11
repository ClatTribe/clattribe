import React, { useState } from "react";
import IIMIndoreCutoffTable from "./IIMIndoreCutoffTable";
import IIMRohtakCutoffTable from "./IIMRohtakCutoffTable";
import IIMShillongCutoffTable from "./IIMShillongCutoffTable";
import IIMRanchiCutoffTable from "./IIMRanchiCutoffTable";
import IIMBodhgayaCutoffTable from "./IIMBodhgayaCutoffTable";
import IIMSirmaurCutoffTable from "./IIMSirmaurCutoffTable";

const primaryColor = "#fce4ec";
const secondaryColor = "#FB923C";

// Define city keys type
type CityKey =
  | "indore"
  | "rohtak"
  | "shillong"
  | "ranchi"
  | "bodhgaya"
  | "sirmaur";

// Define available years for each IIM
const iimYearsData: Record<CityKey, { name: string; years: number[] }> = {
  indore: {
    name: "IIM Indore",
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019],
  },
  rohtak: {
    name: "IIM Rohtak",
    years: [2025, 2024, 2023, 2022, 2021],
  },
  shillong: {
    name: "IIM Shillong",
    years: [2025],
  },
  ranchi: {
    name: "IIM Ranchi",
    years: [2025, 2024, 2023],
  },
  bodhgaya: {
    name: "IIM Bodh Gaya",
    years: [2025, 2024, 2023, 2022],
  },
  sirmaur: {
    name: "IIM Sirmaur",
    years: [2025],
  },
};

const UnifiedCutoffsPage = () => {
  const [selectedCity, setSelectedCity] = useState<CityKey>("indore");
  const [selectedYear, setSelectedYear] = useState(2025);

  // Update year when city changes
  const handleCityChange = (city: CityKey) => {
    setSelectedCity(city);
    // Set to the most recent year available for this city
    setSelectedYear(iimYearsData[city].years[0]);
  };

  // Render the appropriate component based on selection
  const renderCutoffComponent = () => {
    switch (selectedCity) {
      case "indore":
        return <IIMIndoreCutoffTable selectedYear={selectedYear} />;
      case "rohtak":
        return <IIMRohtakCutoffTable selectedYear={selectedYear} />;
      case "shillong":
        return <IIMShillongCutoffTable />;
      case "ranchi":
        return <IIMRanchiCutoffTable selectedYear={selectedYear} />;
      case "bodhgaya":
        return <IIMBodhgayaCutoffTable selectedYear={selectedYear} />;
      case "sirmaur":
        return <IIMSirmaurCutoffTable />;
      default:
        return <IIMIndoreCutoffTable selectedYear={selectedYear} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100"></h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-6">
            IIM <span style={{ color: primaryColor }}>IPM</span> Cutoff Data
          </h1>
          <p className="text-slate-400 text-sm">
            Select Institute and Year for Detailed Analysis
          </p>
        </div>

        {/* Dropdown Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          {/* City/IIM Selector */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">
              Select Institute
            </label>
            <select
              value={selectedCity}
              onChange={(e) => handleCityChange(e.target.value as CityKey)}
              className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all bg-slate-800 text-slate-100"
              style={{
                borderColor: primaryColor,
              }}
            >
              {(
                Object.entries(iimYearsData) as [
                  CityKey,
                  { name: string; years: number[] }
                ][]
              ).map(([key, data]) => (
                <option key={key} value={key}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          {/* Year Selector */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-300">
              Select Year
            </label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all bg-slate-800 text-slate-100"
              style={{
                borderColor: secondaryColor,
              }}
            >
              {iimYearsData[selectedCity].years.map((year: number) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-3xl mx-auto mb-8">
          <div
            className="rounded-xl p-4 shadow-md bg-slate-900/40 border-l-4"
            style={{ borderColor: primaryColor }}
          >
            <p className="text-center text-sm text-slate-300">
              <span className="font-semibold" style={{ color: secondaryColor }}>
                Currently Viewing:
              </span>{" "}
              {iimYearsData[selectedCity].name} - {selectedYear}
            </p>
          </div>
        </div>

        {/* Render Selected Component */}
        <div>{renderCutoffComponent()}</div>
      </div>
    </div>
  );
};

export default UnifiedCutoffsPage;
