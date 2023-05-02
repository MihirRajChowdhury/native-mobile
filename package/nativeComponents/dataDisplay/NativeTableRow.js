import React from "react";
import { SCTableRow } from "../../styledComponents/dataDisplay/SCTableRow";

export default function NativeTableRow(props) {
  return <SCTableRow {...props}>{props.children}</SCTableRow>;
}
