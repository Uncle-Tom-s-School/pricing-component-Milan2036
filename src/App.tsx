import { useEffect, useState } from "react";
import PriceCard from "./components/PriceCard";
import "./index.css";

type Plan = {
  title: string;
  price: string;
  features: string[];
  highlighted: boolean;
};

function App() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div className="pricing-wrapper">
      {plans.map((plan) => (
        <PriceCard key={plan.title} {...plan} />
      ))}
    </div>
  );
}

export default App;
