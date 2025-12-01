// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// export const askGKQuestion = async (query: string): Promise<string> => {
//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash',
//       contents: `You are Yash Ji, a famous CLAT GK teacher. Answer this General Knowledge question concisely and accurately for a law student. Keep it under 50 words. Question: ${query}`,
//     });
//     return response.text || "Sorry, I couldn't find an answer to that at the moment.";
//   } catch (error) {
//     console.error("Error asking GK question:", error);
//     return "Network error. Please try again later.";
//   }
// };
