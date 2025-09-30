"use client";
import React from "react";
import classes from "./RevenueChart.module.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { LuChartPie } from "react-icons/lu";
import clsx from "clsx";
import DropDown from "../DropDown/DropDown";

function currencyFormatter(value, prefix = "£") {
  const n = Number(value) || 0;
  return `${prefix}${n.toLocaleString(undefined, {
    maximumFractionDigits: 0,
  })}`;
}

export default function RevenueChart({
  title = "Revenue Overview",
  data = [],
  height = 280,
  currency = "£",
  year = "",
  setYear = () => {},
}) {
  const startYear = new Date().getFullYear();
  const endYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => ({
      label: startYear + i,
      value: startYear + i,
    })
  );

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.left}>
          <div className={classes.iconDiv}>
            <LuChartPie color="var(--primary-light)" />
          </div>
          <p className={clsx(classes.title, "fw500 fs16")}>{title}</p>
        </div>
        <div className={classes.right}>
          <DropDown
            values={year}
            options={yearOptions}
            onChange={setYear}
            placeholder="Select Year"
          />
        </div>
      </div>

      <div className={classes.chartWrap}>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart
            data={data}
            barSize={34}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
          >
            <defs>
              <pattern
                id="barHatch"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
                patternTransform="rotate(20)"
              >
                <rect width="6" height="6" fill="var(--blue-graph)" />
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="6"
                  stroke="#ffffff"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <CartesianGrid stroke="#E8EBEE" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "#E8EBEE" }}
            />
            <YAxis
              width={56}
              tickFormatter={(v) => currencyFormatter(v, currency)}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(47, 104, 250, 0.06)" }}
              formatter={(value) => [
                currencyFormatter(value, currency),
                "Revenue",
              ]}
              contentStyle={{ borderRadius: 8, border: "1px solid #E8EBEE" }}
            />
            <Bar dataKey="value" fill="url(#barHatch)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
