import '../scss/App.scss';
import rates from './rates.json';
import { createRef } from "react";


const fromRef = createRef();
const toRef = createRef();
const fromİnputRef = createRef();
const changeValues = () => {
  const from = fromRef.current.value;
  const to = toRef.current.value
  fromRef.current.value = to;
  toRef.current.value = from
}
const exChange = () => {
  var fromExchange = rates.find(r => r.code == (fromRef.current.value));
  var ftoExchange = rates.find(r => r.code == (toRef.current.value));
  var result = fromExchange.value * fromİnputRef.current.value / ftoExchange.value;
  const res = document.querySelector(".toValue")
  res.innerText = result.toFixed(4);
}

function App() {
  return (
    <div className=" row justify-content-center align-items-center HH">
      <div className="col-lg-3 col-xl-6  col-md-5 col-12 cardd exchangeForm row flex-wrap">
        <div className="col-12 p-5">
          <p className="from">From:</p>
          <div className="d-flex justify-content-between " >
            <div className="mainValue">
              <input defaultValue={1} ref={fromİnputRef} placeholder="1" type="number" className="w-100" />
            </div>
            <select className="mainSelect" defaultValue="USD" ref={fromRef}>
              {rates.map(m => <option > {m.code}</option>)}
            </select>
          </div>
        </div>
        <div className="col-12 p-5 covertToPart">
          <div className="changeBtn" onClick={changeValues} >
            <img className="w-100" src="https://th.bing.com/th/id/R24d6c772be9edd73b22773d88ec63341?rik=W%2fDZqp2RB9uqGA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_204174.png&ehk=E4MN9e4V51c7H%2bL4FUo116tHOfgZrSRqx%2ftb%2bDQTunU%3d&risl=&pid=ImgRaw" />
          </div>
          <p className="to">From:</p>
          <div className="d-flex justify-content-between " >
            <div className="mainValue">
              <div className="toValue">1.7002</div>
            </div>
            <select className="seconSelect" defaultValue="AZN" ref={toRef}>
              {rates.map(m => <option> {m.code}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="row col-12 justify-content-center">
        <div className="row col-12 col-lg-6 col-md-5">
          <button className="w-100 btnSubmit" onClick={exChange}>Exchange</button>
        </div>
      </div>
    </div>


  );

}

export default App;
