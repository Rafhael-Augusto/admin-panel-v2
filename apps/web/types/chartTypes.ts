type PieDataType = {
  id: string;
  label: string;
  value: number;
};

type LineDataType = {
  id: string;
  data: {
    x: string;
    y: number;
  }[];
};

export interface PieData {
  data: PieDataType[];
}

export interface LineData {
  data: LineDataType[];
}
