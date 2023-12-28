import { useState } from "react";
import "./App.css";
import CounterApp from "./components/CounterApp";
import Card from "./components/Card";
import BG_Changer from "./components/BG_Changer";
import PasswordGenerator from "./components/PasswordGenerator";
import CurrencyConverter from "./components/CurrencyConverter";


function App() {


  return (
    <>
    {/* <CounterApp/>
    <h2 className="bg-green-500 text-black p-4 rounded-xl mb-4">tailwind test</h2>
    
{/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
{/* <Card username = "shubhanshu" /> */}
{/* <Card username="Shubhendra" />  */}

  {/* <BG_Changer/> */}

  {/* <PasswordGenerator/> */}

  <CurrencyConverter/>

 


    </>
      );
}

export default App;
