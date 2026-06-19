import React, { useId } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const STROKE = "#C07842";
const BAR_LIGHT = "#EAD4C0";

// ECG waveform using Gaussian peaks for P-QRS-T complex
function ecgY(t: number): number {
  return (
    0.14 * Math.exp(-((t - 0.15) ** 2) / (2 * 0.035 ** 2)) -
    0.10 * Math.exp(-((t - 0.30) ** 2) / (2 * 0.015 ** 2)) +
    0.85 * Math.exp(-((t - 0.34) ** 2) / (2 * 0.018 ** 2)) -
    0.20 * Math.exp(-((t - 0.39) ** 2) / (2 * 0.015 ** 2)) +
    0.22 * Math.exp(-((t - 0.55) ** 2) / (2 * 0.045 ** 2))
  );
}

const ECG_DATA = Array.from({ length: 240 }, (_, i) => ({
  x: i,
  y: parseFloat(ecgY((i % 80) / 80).toFixed(3)),
}));

export function EcgChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={ECG_DATA} margin={{ top: 2, right: 4, bottom: 2, left: 4 }}>
        <XAxis dataKey="x" hide />
        <YAxis domain={[-0.28, 0.92]} hide />
        <Line
          type="linear"
          dataKey="y"
          stroke={STROKE}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function AreaSparkline({
  data,
  domain,
}: {
  data: { x: number; v: number }[];
  domain: [number, number];
}) {
  const uid = useId().replace(/:/g, "");
  const gradId = `ag-${uid}`;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
        <XAxis dataKey="x" hide />
        <YAxis domain={domain} hide />
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor={STROKE} stopOpacity={0.12} />
            <stop offset="90%" stopColor={STROKE} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke={STROKE}
          strokeWidth={1.5}
          fill={`url(#${gradId})`}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function BpSparkline() {
  const data = [119, 124, 121, 128, 122, 125, 122].map((v, x) => ({ x, v }));
  return <AreaSparkline data={data} domain={[110, 135]} />;
}

export function FluidChart() {
  const data = [0.8, 1.1, 0.9, 1.4, 1.0, 1.2].map((v, x) => ({ x, v }));
  return <AreaSparkline data={data} domain={[0, 2]} />;
}

export function HrvChart() {
  const data = [52, 48, 55, 49, 51, 47, 48].map((v, x) => ({ x, v }));
  return <AreaSparkline data={data} domain={[40, 65]} />;
}

export function RhrChart() {
  const data = [66, 65, 64, 67, 63, 65, 64].map((v, x) => ({ x, v }));
  return <AreaSparkline data={data} domain={[58, 72]} />;
}

export function Spo2Chart() {
  const data = [97, 98, 98, 97, 99, 98, 98].map((v, x) => ({ x, v }));
  return <AreaSparkline data={data} domain={[95, 100]} />;
}

export function RespChart() {
  const data = [13, 14, 14, 15, 13, 14, 14].map((v, x) => ({ x, v }));
  return <AreaSparkline data={data} domain={[11, 17]} />;
}

function WeekBarChart({
  data,
  domain,
}: {
  data: { d: string; v: number }[];
  domain: [number, number];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 8 }} barSize={18}>
        <XAxis dataKey="d" hide />
        <YAxis domain={domain} hide />
        <Bar dataKey="v" radius={[3, 3, 0, 0]} isAnimationActive={false}>
          {data.map((_, i) => (
            <Cell key={i} fill={i === data.length - 1 ? STROKE : BAR_LIGHT} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function MovementChart() {
  const data = [
    { d: "M", v: 4200 },
    { d: "T", v: 7800 },
    { d: "W", v: 6500 },
    { d: "T", v: 9100 },
    { d: "F", v: 5400 },
    { d: "S", v: 7200 },
    { d: "S", v: 6200 },
  ];
  return <WeekBarChart data={data} domain={[0, 10000]} />;
}

export function SleepChart() {
  const data = [
    { d: "M", v: 6.5 },
    { d: "T", v: 7.2 },
    { d: "W", v: 7.8 },
    { d: "T", v: 6.9 },
    { d: "F", v: 7.5 },
    { d: "S", v: 6.8 },
    { d: "S", v: 7.1 },
  ];
  return <WeekBarChart data={data} domain={[0, 9]} />;
}

export function LdlChart() {
  const data = [
    { p: "Sep", v: 78 },
    { p: "Dec", v: 75 },
    { p: "Mar", v: 70 },
    { p: "May", v: 72 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: 8 }} barSize={30}>
        <XAxis dataKey="p" hide />
        <YAxis domain={[55, 90]} hide />
        <Bar dataKey="v" radius={[3, 3, 0, 0]} isAnimationActive={false}>
          {data.map((_, i) => (
            <Cell key={i} fill={i === data.length - 1 ? STROKE : BAR_LIGHT} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function TempChart() {
  const data = [
    { d: "M", v: 36.6 },
    { d: "T", v: 36.7 },
    { d: "W", v: 36.8 },
    { d: "T", v: 36.7 },
    { d: "F", v: 36.9 },
    { d: "S", v: 36.8 },
    { d: "S", v: 36.8 },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 4, right: 12, bottom: 4, left: 12 }}>
        <XAxis dataKey="d" hide />
        <YAxis domain={[36.4, 37.1]} hide />
        <Line
          type="monotone"
          dataKey="v"
          stroke={STROKE}
          strokeWidth={1.5}
          dot={{ fill: STROKE, r: 2.5, strokeWidth: 0 }}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
