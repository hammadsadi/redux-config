import './App.css'
import { decreament, increament } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
const dispatch = useAppDispatch()
const {count} = useAppSelector((state) => state.counter)
const handleIncreament = (data: number) => {
  dispatch(increament({ amount: data }));
};
const handleDecreament = () => {
  dispatch(decreament());
};
return (
  <>
    <div>
      <h2 className="text-4xl">Count is {count} </h2>
      <div className="space-x-3 mt-3">
        <button
          onClick={() => handleIncreament(1)}
          className="bg-slate-800 text-white py-3 px-4"
        >
          Increament
        </button>
        <button
          onClick={() => handleIncreament(5)}
          className="bg-slate-800 text-white py-3 px-4"
        >
          Increament By 5
        </button>
        <button
          onClick={handleDecreament}
          className="bg-slate-800 text-white py-3 px-4"
        >
          Decreament
        </button>
      </div>
    </div>
  </>
);
}

export default App
