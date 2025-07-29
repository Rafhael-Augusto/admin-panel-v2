"use client";

import { ResponsivePie } from "@nivo/pie";
import { PieData } from "@/types/chartTypes";

export function PieChart({ data }: PieData) {
  return (
    <ResponsivePie /* or Pie for fixed dimensions */
      data={data}
      margin={{ top: 40, right: 0, bottom: 120, left: 0 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
