"use client";

import { LineData } from "@/types/chartTypes";
import { ResponsiveLine } from "@nivo/line";

export function LineChart({ data }: LineData) {
  return (
    <ResponsiveLine /* or Line for fixed dimensions */
      data={data}
      margin={{ top: 10, right: 10, bottom: 100, left: 40 }}
      yScale={{
        type: "log",
        min: "auto",
        max: "auto",
        reverse: false,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          translateX: 100,
          itemWidth: 80,
          itemHeight: 22,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
