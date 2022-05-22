// type About = {
//   image: string;
// };
import { useEffect } from "react";
import { clicked } from "./main";
import { useSelector } from "react-redux";

function About() {
  const state: any = useSelector((state) => state);
  const element = state.data.data.datalist.list[clicked];
  console.log(state.data.data.datalist.list[clicked].name);
  return (
    <>
      <div className="main-app">
        <div className="header-app">
          <img className="app-icon" src={element.icon} />
          <div className="desc">
            <h3>{element.name}</h3>
            <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
            <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
            <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
            <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
            <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
            <p>({element.stats.rating.total} Reviews)</p>
            <p>{Math.floor(element.file.filesize / 100000) / 10} MB</p>
            {element.file.malware.rank === "TRUSTED" ? (
              <>
                <img src="https://cdn-mobile.aptoide.com/static/imgs/trusted-new.svg" />
                <p>Trusted App</p>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
