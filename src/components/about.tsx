// type About = {
//   image: string;
// };
import { useEffect } from "react";
import { clicked } from "./main";
import { useSelector } from "react-redux";

function About() {
  const state: any = useSelector((state) => state);
  return (
    <>
      <p>{state && state.data.data.datalist.list[clicked].name}</p>
    </>
  );
}

export default About;
