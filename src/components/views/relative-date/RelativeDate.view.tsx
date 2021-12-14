import type { FC } from "react";
import Timeago from "react-timeago";
//@ts-ignore
import enShortStrings from "react-timeago/lib/language-strings/en-short";
//@ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

interface RelativeDateViewProps {
  date: number;
}

const formatter = buildFormatter(enShortStrings);

const RelativeDateView: FC<RelativeDateViewProps> = ({ date }) => {
  var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(date);
  return <Timeago date={d} formatter={formatter} />;
};

export default RelativeDateView;
