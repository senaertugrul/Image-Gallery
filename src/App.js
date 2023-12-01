import data from "./data";
import Image from "./image";

function App() {
  console.log(data);

  return (
    <div >
     <Image data={data}/>
    </div>
  );
}

export default App;
