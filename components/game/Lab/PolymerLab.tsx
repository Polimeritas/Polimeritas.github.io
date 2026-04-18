"use client";

import React, { useState, useMemo } from "react";
import {
    Beaker,
    Thermometer,
    SunMedium,
    Info,
    Activity,
    Snowflake,
    Flame,
    AlertTriangle,
    CheckCircle2,
    ThermometerSnowflake,
    ThermometerSun,
    ShieldAlert
} from "lucide-react";
import { POLYMER_DB } from "@/data/polymerLabData";
import { calculatePolymerState } from "@/utils/polymerLogic";
import { cn } from "@/lib/utils";

const PolymerLab = () => {
    const [polymer, setPolymer] = useState<string>("PP");
    const [temp, setTemp] = useState<number>(25);
    const [uv, setUv] = useState<number>(0);

    const simulation = useMemo(() => calculatePolymerState(polymer, temp, uv), [polymer, temp, uv]);
    const activePolymer = POLYMER_DB[polymer];

    const getStateStyle = (state: string) => {
        switch (state) {
            case "glassy":
                return { wrapper: "bg-blue-50 border-blue-200", text: "text-blue-500", icon: <Snowflake className="w-5 h-5 animate-pulse" /> };
            case "rubbery":
                return { wrapper: "bg-green-50 border-green-200", text: "text-green-500", icon: <CheckCircle2 className="w-5 h-5" /> };
            case "melted":
                return { wrapper: "bg-orange-50 border-orange-200", text: "text-primary", icon: <Flame className="w-5 h-5 animate-bounce" /> };
            case "degraded":
                return { wrapper: "bg-red-50 border-red-200", text: "text-red-500", icon: <AlertTriangle className="w-5 h-5 animate-pulse" /> };
            default:
                return { wrapper: "bg-gray-50 border-gray-200", text: "text-gray-500", icon: <Activity className="w-5 h-5" /> };
        }
    };

    const getLogIcon = (type: string) => {
        switch (type) {
            case "cold": return <ThermometerSnowflake className="w-5 h-5 text-blue-500" />;
            case "hot": return <ThermometerSun className="w-5 h-5 text-orange-500" />;
            case "melted": return <Flame className="w-5 h-5 text-rose-500" />;
            case "uv-high": return <ShieldAlert className="w-5 h-5 text-red-500" />;
            case "uv-med": return <SunMedium className="w-5 h-5 text-amber-500" />;
            default: return <Info className="w-5 h-5 text-primary" />;
        }
    };

    const activeStateStyle = getStateStyle(simulation.state);

    return (
        <div className="w-full max-w-5xl mx-auto min-h-[500px] flex flex-col relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mt-8 mb-12">

            {/* HEADER SECTION */}
            <div className="flex justify-between items-center p-6 border-b bg-secondary border-gray-100">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                        <Beaker className="w-7 h-7" />
                    </div>
                    <div>
                        <h2 className="text-xl lg:text-2xl font-black text-primary tracking-tight">Polymer Interactive Lab</h2>
                        <p className="text-primary text-xs lg:text-sm mt-1 font-bold uppercase tracking-wider">Simulasi Material Polimer</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 p-6 lg:p-8 gap-8">

                {/* CONTROLS */}
                <div className="lg:col-span-5 space-y-6">

                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                            <Beaker className="w-4 h-4 text-primary" /> Pilih Material
                        </label>
                        <select
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-dark font-black text-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all cursor-pointer outline-none"
                            value={polymer}
                            onChange={(e) => setPolymer(e.target.value)}
                        >
                            {Object.values(POLYMER_DB).map((p) => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Temperature Slider */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                <Thermometer className={cn("w-4 h-4", temp > 50 ? "text-primary" : temp < 0 ? "text-blue-500" : "text-green-500")} />
                                Suhu Ruangan
                            </label>
                            <span className="text-xl font-black text-dark tabular-nums">
                                {temp}°C
                            </span>
                        </div>
                        <input
                            type="range"
                            min="-200"
                            max="200"
                            value={temp}
                            onChange={(e) => setTemp(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="flex justify-between text-xs text-gray-300 mt-2 font-bold">
                            <span>-200°C</span>
                            <span>0°C</span>
                            <span>200°C</span>
                        </div>
                    </div>

                    {/* UV Slider */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                                <SunMedium className="w-4 h-4 text-primary" />
                                Paparan UV
                            </label>
                            <span className="text-xl font-black text-dark tabular-nums">
                                {uv}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={uv}
                            onChange={(e) => setUv(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>

                </div>

                {/* RESULTS */}
                <div className="lg:col-span-7 flex flex-col gap-6">

                    <div className="bg-primary/70 border border-primary/50 p-5 rounded-2xl flex gap-4 items-start transition-all">
                        <div className="mt-1 bg-secondary p-2 rounded-xl shadow-sm">
                            <Info className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-black text-secondary text-lg">{activePolymer.name}</h4>
                            <p className="text-sm text-gray-600 mt-1.5 leading-relaxed font-medium">{activePolymer.desc}</p>
                            <div className="flex flex-wrap gap-3 mt-4 text-xs font-bold text-primary">
                                <span className="bg-secondary/70 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                                    <Snowflake className="w-3 h-3 text-primary" /> Tg: {activePolymer.tg !== null ? `${activePolymer.tg}°C` : 'N/A'}
                                </span>
                                <span className="bg-secondary/70 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5">
                                    <Flame className="w-3 h-3 text-primary" /> Tm: {activePolymer.tm !== null ? `${activePolymer.tm}°C` : 'N/A'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Result Output */}
                    <div className={cn(
                        "flex-1 rounded-2xl p-6 flex flex-col transition-all duration-500 border-2",
                        activeStateStyle.wrapper
                    )}>
                        <div className="flex justify-between items-center mb-5 border-b border-black/5 pb-4">
                            <h3 className="text-dark text-sm font-black uppercase tracking-widest flex items-center gap-2">
                                <Activity className="w-4 h-4 text-gray-400" /> Hasil Observasi
                            </h3>

                            <div className={cn(
                                "px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 bg-white shadow-sm border border-white",
                                activeStateStyle.text
                            )}>
                                {activeStateStyle.icon}
                                {simulation.state}
                            </div>
                        </div>

                        {/* Log Messages */}
                        <div className="flex-1 space-y-3">
                            {simulation.messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-4 rounded-xl text-dark text-sm font-medium leading-relaxed border border-black/5 shadow-sm animate-fade-in flex items-start gap-3"
                                    style={{ animation: `fadeIn 0.4s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
                                >
                                    <div className="mt-0.5 shrink-0">{getLogIcon(msg.iconType)}</div>
                                    <span>{msg.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
        </div>
    );
};

export default PolymerLab;