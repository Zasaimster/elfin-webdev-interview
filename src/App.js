import DataCard from './components/DataCard'


// Let's assume you received this data from one of our internal APIs. 
// You want to display all of the data on the telemetry page for our operators!
const DATA = [
  {run_title: "Iteration #1", x: 0.12, y: 0.78, z: 0.91},
  {run_title: "Iteration #2", x: 0.14, y: 0.76, z: 0.09},
  {run_title: "Iteration #3", x: 0.18, y: 0.72, z: 0.11},
]

function App() {
  return (
    <>
      <div> Use this as a sanity check to make sure you can see something. </div>
      <div className="App">
        {/** 
         * TODO: We want to iterate over the data in each card and list it out on the page
        */}
      </div>
    </>
  );
}

export default App;
