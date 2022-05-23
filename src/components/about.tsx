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
            <div>
              <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
              <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
              <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
              <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
              <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
              <p>{element.stats.prating.avg.toFixed(1)}</p>
              <p>({element.stats.prating.total} Reviews)</p>
            </div>
            <p>Version: {element.file.vername}</p>
            <p>{Math.floor(element.size / 100000) / 10} MB</p>
            {element.file.malware.rank === "TRUSTED" ? (
              <>
                <div>
                  <img src="https://cdn-mobile.aptoide.com/static/imgs/trusted-new.svg" />
                  <p>Trusted App</p>
                </div>
              </>
            ) : (
              ""
            )}
            <p>
              (
              {element.stats.pdownloads >= 1000000
                ? `${Math.floor(element.stats.pdownloads / 1000000)}M+`
                : `${Math.floor(element.stats.pdownloads / 1000)}K+`}{" "}
              Downloads)
            </p>
          </div>
        </div>
        <div className="download">
          <a className="btn-download" href={element.file.path}>
            Download Apk {Math.floor(element.file.filesize / 100000) / 10} MB
          </a>
          {element.obb ? (
            <a className="btn-download" href={element.obb.main.path}>
              Download Cache{" "}
              {Math.floor(element.obb.main.filesize / 100000) / 10} MB
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default About;
