import './App.css';
import Steps from './components/Steps';
import DistanceModel from './models/Distance';
import dates from './data/dates.json'


export default function App() {
   const datesObjList = dates.map(item => new DistanceModel(item));

  return (
    <div className="App">
      <Steps items={datesObjList}/>
    </div>
  );
}