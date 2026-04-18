import { POLYMER_DB } from "@/data/polymerLabData";

export interface LogMessage {
  text: string;
  iconType: "cold" | "hot" | "melted" | "uv-high" | "uv-med" | "info";
}

export interface SimulationResult {
  state: "glassy" | "rubbery" | "melted" | "degraded";
  messages: LogMessage[];
}

export const calculatePolymerState = (polymerId: string, temp: number, uv: number): SimulationResult => {
  const poly = POLYMER_DB[polymerId];
  const messages: LogMessage[] = [];
  let currentState: SimulationResult["state"] = "rubbery";

  if (!poly) {
    return { state: "glassy", messages: [{ text: "Data polimer tidak valid.", iconType: "info" }] };
  }

  // Evaluasi Suhu (Tg)
  if (poly.tg !== null) {
    if (temp < poly.tg) {
      messages.push({ text: `Suhu ${temp}°C berada di bawah Titik Transisi Gelas (Tg = ${poly.tg}°C).`, iconType: "cold" });
      messages.push({ text: `Rantai polimer terkunci. Material bersifat kaku, keras, dan getas (Glassy State).`, iconType: "info" });
      currentState = "glassy";
    } else {
      messages.push({ text: `Suhu ${temp}°C melewati Titik Transisi Gelas (Tg = ${poly.tg}°C).`, iconType: "hot" });
      messages.push({ text: `Rantai polimer mulai bergerak bebas. Material menjadi lebih fleksibel dan kenyal (Rubbery State).`, iconType: "info" });
      currentState = "rubbery";
    }
  }

  // Evaluasi Suhu (Tm)
  if (poly.tm !== null) {
    if (temp >= poly.tm) {
      messages.push({ text: `Suhu melewati Titik Leleh (Tm = ${poly.tm}°C). Material telah mencair (Melted State).`, iconType: "melted" });
      currentState = "melted";
    }
  }

  // Evaluasi UV
  if (uv > 75) {
    messages.push({ text: `Paparan UV Tinggi (${uv}%): Terjadi pemutusan rantai polimer (Photo-degradation). Material akan cepat rapuh.`, iconType: "uv-high" });
    if (currentState !== "melted") currentState = "degraded";
  } else if (uv > 40) {
    messages.push({ text: `Paparan UV Sedang (${uv}%): Polimer perlahan mengalami penuaan (aging). Disarankan menggunakan UV Stabilizer.`, iconType: "uv-med" });
  }

  return { state: currentState, messages };
};