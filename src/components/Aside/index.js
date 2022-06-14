import ArrowDown from "./ArrowDown";
import ArrowUp from "./ArrowUp";

const Aside = ({ arrowDownOpacity, arrowUpOpacity }) => {
  return (
    <>
      <ArrowDown arrowOpacity={arrowDownOpacity} />
      <ArrowUp arrowOpacity={arrowUpOpacity} />
    </>
  );
};

export default Aside;
