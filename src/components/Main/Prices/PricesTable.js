import { pricesTranslation } from "../intl";

const PricesTable = ({ marginBottom, position }) => (
  <div className="prices-table-item" style={{ marginBottom }}>
    <div className="prices-table-item--left">
      {pricesTranslation[position + "FirstItem"]}
      <span className="prices-table-item--left-span">
        {pricesTranslation[position + "FirstPrice"]}
      </span>
    </div>
    <div className="prices-table-item--right">
      {pricesTranslation[position + "SecondItem"]}
      <span className="prices-table-item--right-span">
        {pricesTranslation[position + "SecondPrice"]}
      </span>
    </div>
  </div>
);

export default PricesTable;
