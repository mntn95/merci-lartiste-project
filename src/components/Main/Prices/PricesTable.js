import { useFela } from "react-fela";

import { pricesTranslation } from "../intl";

const commonItemStyle = {
  padding: "2rem",
  fontSize: "28px",
  "> span": {
    paddingLeft: "3rem",
  },
};

const pricesTableItem = ({ marginBottom }) => ({
  width: "100%",
  display: "flex",
  color: "white",
  borderTop: "1px solid white",
  borderBottom: "1px solid white",
  marginBottom,
});

const pricesTableItemLeft = ({ commonItemStyle }) => ({
  ...commonItemStyle,
});

const pricesTableItemRight = ({ commonItemStyle }) => ({
  ...commonItemStyle,
  borderLeft: "1px solid white",
});

const PricesTable = ({ marginBottom, position }) => {
  const { css } = useFela();

  return (
    <div className={css(pricesTableItem({ marginBottom }))}>
      <div className={css(pricesTableItemLeft({ commonItemStyle }))}>
        {pricesTranslation[position + "FirstItem"]}
        <span>{pricesTranslation[position + "FirstPrice"]}</span>
      </div>
      <div className={css(pricesTableItemRight({ commonItemStyle }))}>
        {pricesTranslation[position + "SecondItem"]}
        <span>{pricesTranslation[position + "SecondPrice"]}</span>
      </div>
    </div>
  );
};

export default PricesTable;
