import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [initialValue2, setInitialValue2] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0)

  const incrementHandler = () => {
    setInitialValue(initialValue + 1)
  }
  const decrementHandler = () => {
    setInitialValue(initialValue - 1)
  }
  const resetHandler = () => {
    setInitialValue(0)
  }
  const incrementHandler2 = () => {
    setInitialValue2(initialValue2 + 1)
  }
  const decrementHandler2 = () => {
    setInitialValue2(initialValue2 - 1)
  }
  const resetHandler2 = () => {
    setInitialValue2(0)
  }
  useEffect(() => {
    setTotalValue(initialValue + initialValue2)
  }, [initialValue, initialValue2])


  return (
    <>
      <div className="w-10/12 m-auto mt-16 shadow p-5 border-b-2 sm:w-10/12">
        <h1 className="text-3xl font-bold text-center">Simple Counter App</h1>
        <div className="w-10/12 m-auto mt-10 border flex justify-between flex-col p-4 m:w-full gap-5">
          <h1 className="text-3xl font-bold border-b-2 text-center">Total Value</h1>
          <h2 className="text-center text-5xl text-yellow-600 font-bold">Total: {totalValue}</h2>
        </div>
        <div className="w-10/12 m-auto mt-10 border flex justify-between flex-col p-4 m:w-full">
          <h2 className="text-center text-3xl">Value: {initialValue}</h2>
          <div className="flex flex-col sm:flex-row justify-between w-5/12 m-auto mt-5">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={incrementHandler}>Increment</button>
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={decrementHandler}>Decrement</button>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={resetHandler}>Reset</button>
          </div>
        </div>
        <div className="w-10/12 m-auto mt-10 border flex justify-between flex-col p-4 m:w-full">
          <h2 className="text-center text-3xl">Value: {initialValue2}</h2>
          <div className="flex flex-col sm:flex-row justify-between w-5/12 m-auto mt-5">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={incrementHandler2}>Increment</button>
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={decrementHandler2}>Decrement</button>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={resetHandler2}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;