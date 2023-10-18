import Charts from "./Components/Charts";

function App() {
  return (
    <>
      <Charts
        location={"./72_machine_wise.csv"}
        title={"PLANT 72 Machine wise for each year"}
      ></Charts>
      <Charts
        location={"./72_year_wise.csv"}
        title={"PLANT 72 Yearly for each machine"}
      ></Charts>
      <Charts
        location={"./72_predicted.csv"}
        title={"Predicted OEE values for plant 72 for next 2 years"}
      ></Charts>
      <Charts
        location={"./76_machine_wise.csv"}
        title={"PLANT 76 Machine Wise for each year"}
      ></Charts>
      <Charts
        location={"./76_year_wise.csv"}
        title={"PLANT 76 Yearly for each machine"}
      ></Charts>
      <Charts
        location={"./76_predicted.csv"}
        title={"Predicted OEE values for plant 76 for next 2 years"}
      ></Charts>
      <Charts
        location={"./95_machine_wise.csv"}
        title={"PLANT 95 Machine Wise for each year"}
      ></Charts>
      <Charts
        location={"./95_year_wise.csv"}
        title={"PLANT 95 Yearly for each machine"}
      ></Charts>
      <Charts
        location={"./95_predicted.csv"}
        title={"Predicted OEE values for plant 95 for next 2 years"}
      ></Charts>
    </>
  );
}

export default App;
