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
function PredictLinechart({ values, title }: props) {
  const formatDateToMonthYear = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const renderLineChart = (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={values.data} margin={{ left: 20, right: 50, bottom: 40 }}>
        <Line
          name="TOTAL"
          type="linear"
          dataKey={(values.data[0] && Object.keys(values.data[0])[1]) || ""}
          stroke="red"
        />
        <XAxis
          axisLine={{ stroke: "red" }}
          dataKey={(values.data[0] && Object.keys(values.data[0])[0]) || ""}
          tickFormatter={formatDateToMonthYear}
          padding={{ left: 32, right: 32 }}
          label={{
            value: "Month",
            position: "insideBottom",
            offset: -20,
            fill: "black",
            fontWeight: "bold",
          }}
        />
        <YAxis
          axisLine={{ stroke: "red" }}
          domain={["auto", "auto"]}
          tickCount={5}
          padding={{ bottom: 20 }}
          label={{
            value: values.data[0] && Object.keys(values.data[0])[1],
            position: "insideLeft",
            angle: "-90",
            fill: "black",
            fontWeight: "bold",
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

export default PredictLinechart;
