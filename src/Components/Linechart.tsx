import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Data = {
  [key: string]: string | number;
};
type Values = {
  data: Data[];
};
interface props {
  values: Values;
  title: string;
}

function Linechart({ values, title }: props) {
  const renderLineChart = (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={values.data} margin={{ right: 50, bottom: 40 }}>
        <Line
          name="TOTAL"
          type="linear"
          dataKey={(values.data[0] && Object.keys(values.data[0])[1]) || ""}
          stroke="red"
        />
        <XAxis
          axisLine={{ stroke: "red" }}
          dataKey={(values.data[0] && Object.keys(values.data[0])[0]) || ""}
          padding={{ left: 32, right: 32 }}
          label={{
            value: values.data[0] && Object.keys(values.data[0])[0],
            position: "insideBottom",
            offset: -20,
            fill: "black",
            fontWeight: "bold",
          }}
        />
        <YAxis
          axisLine={{ stroke: "red" }}
          label={{
            value: values.data[0] && Object.keys(values.data[0])[1],
            position: "top",
            fill: "black",
            angle: -90,
            fontWeight: "bold",
            offset: -150,
          }}
        />
        <Legend verticalAlign="top" align="right" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <>
      <div className="box">
        <h1>{title}</h1>
        {renderLineChart}
      </div>
    </>
  );
}

export default Linechart;
