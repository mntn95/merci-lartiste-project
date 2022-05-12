import { pricesTranslation } from "../intl";

const PricesTable = () => (
  <div className="prices-table">
    <div className="prices-table--left">
      {pricesTranslation.beardHaircut}
      <span className="prices-table--left-span">
        {pricesTranslation.beardHaircutPrice}
      </span>
    </div>
    <div className="prices-table--right">
      {pricesTranslation.colorHaircut}
      <span className="prices-table--right-span">
        {pricesTranslation.colorHaircutPrice}
      </span>
    </div>
  </div>
);

export default PricesTable;
