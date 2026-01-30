import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counter/counterSlice";
import UpdateCount from "./components/counter/UpdateCount";
import { useState } from "react";
import { update } from "./features/namechanger/change-name";
import ChaeckStates from "./components/check-state";
import Users from "./components/user/Users";

function App() {

  const [name,setName] = useState('njb')
  const count = useSelector((state) => state.counter.value);
  const named = useSelector((state) => state.updateName.name);
  const dispatch = useDispatch();
const updateName = (s)=>{
   dispatch(update(s));
}
  return (
    <div className="min-h-fit flex items-center flex-col gap-8 justify-center ">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center">
        <div className="mb-10">
          <h1>This is testing of our states are working or not </h1>
          <ChaeckStates />
        </div>
        <h2 className="text-lg font-semibold text-gray-500 mb-4">
          Redux Counter {count}
        </h2>

        <h1 className="text-6xl font-bold text-gray-900 mb-8">{count}</h1>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => dispatch(increment())}
            className="px-5 py-2 text-lg font-semibold text-white bg-green-500 rounded-xl hover:bg-green-600 active:scale-95 transition"
          >
            +
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="px-5 py-2 text-lg font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600 active:scale-95 transition"
          >
            −
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-xl hover:bg-indigo-600 active:scale-95 transition"
          >
            Reset
          </button>
        </div>
      </div>
      <UpdateCount />
      <h1>{named}</h1>
      <input
        type="text"
        className="border-2"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
         ;
        }}
      />
      <h1>This is name - {named}</h1>
      <button onClick={()=>updateName(name)}>Update Name</button>
      <br />
      <br />
      <br />
      <br />
      <Users/>
    </div>
    
  );
}

export default App;