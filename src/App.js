import { useDispatch, useSelector } from 'react-redux';
import { addCar, decrementNum, incrementNum, incrementByFive, decrementByFive } from './redux/reducers/reducer';


function App() {
  const dispatch = useDispatch();
  const cars = useSelector(s => s.reducer.cars);
  const num = useSelector(s => s.reducer.num);

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={() => {
        dispatch(incrementNum());
      }}>+1</button>
      <button onClick={() => {
        dispatch(decrementNum());
      }}>-1</button>
      <button onClick={() => {
        dispatch(incrementByFive());
      }}>+5</button>
      <button onClick={() => {
        dispatch(decrementByFive());
      }}>-5</button>
      <button onClick={() => {
        dispatch(addCar);
      }}>add</button>
      {
        cars.map((item, index) => (
          <h1 key={index}>{item.model}</h1>
        ))
      }
    </div>
  );
}

export default App;