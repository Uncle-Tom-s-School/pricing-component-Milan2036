type PriceCardProps = {
  title: string;
  price: string;
  features: string[];
  highlighted: boolean;
};

function PriceCard({ title, price, features, highlighted }: PriceCardProps) {
  return (
    <div className={`card ${highlighted ? "card--highlight" : ""}`}>
      <h4>{title}</h4>
      <h2>{price}</h2>

      <ul>
        {features.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button>Try for Free</button>
    </div>
  );
}

export default PriceCard;
