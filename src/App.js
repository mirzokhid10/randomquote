import QuoaraApp from './Components/QuoraApp';
import Bgimage from "./images/city.jpg"

function App() {
  return (
    <div style={{backgroundImage: `url(${Bgimage})` }} className="App w-full h-[100vh] flex justify-center items-center bg-cover bg-repeat bg-center">
      <QuoaraApp/>
    </div>
  );
}

export default App;
