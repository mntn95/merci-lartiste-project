import MovingText from "./MovingText";
import PricesTable from "./PricesTable";

const Prices = () => (
  <div className="prices">
    <div className="prices-container">
      <MovingText />
      <div className="price-table">
        <PricesTable marginBottom="420px" position="top" />
        <PricesTable position="bottom" />
      </div>
      <MovingText direction="toRight" />
    </div>
  </div>
);

export default Prices;
