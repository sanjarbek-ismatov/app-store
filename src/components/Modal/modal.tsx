import type { Dispatch, FC, SetStateAction } from "react";
import { List } from "../../types";
const Modal: FC<{
  display: "none" | "block";
  setDisplay: Dispatch<SetStateAction<"none" | "block">>;
  content?: List;
}> = ({ display, setDisplay, content }) => {
  return (
    <div
      style={{ display, backdropFilter: "brightness(0.2)" }}
      className="modal"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          {content && (
            <>
              <div className="modal-header">
                <h5 className="modal-title">{content.name}</h5>
                <button
                  onClick={() => setDisplay("none")}
                  className="btn btn-close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex flex-wrap">
                  <img
                    style={{ width: "200px", height: "auto" }}
                    className="img-thumbnail rounded rounded-4"
                    src={content.icon}
                  />
                  <div className="mx-2">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center ">
                        <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
                        <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
                        <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
                        <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
                        <img src="https://musical-ly.en.aptoide.com/static/imgs/golden-star.svg" />
                        <p className="card-subtitle mx-2">
                          {content.stats.prating.avg.toFixed(1)}
                        </p>
                      </div>
                      <p className="card-subtitle">
                        ({content.stats.prating.total} Reviews)
                      </p>
                    </div>
                    <p className="lead">Version: {content.file.vername}</p>
                    <p>{Math.floor(content.size / 100000) / 10} MB</p>
                    {content.file.malware.rank === "TRUSTED" ? (
                      <>
                        <div className="d-flex">
                          <img src="https://cdn-mobile.aptoide.com/static/imgs/trusted-new.svg" />
                          <p className="card-subtitle">Trusted App</p>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <p className="my-4">
                      (
                      {content.stats.pdownloads >= 1000000
                        ? `${Math.floor(content.stats.pdownloads / 1000000)}M+`
                        : content.stats.pdownloads + " "}
                      Downloads)
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <a className="btn btn-primary" href={content.file.path}>
                  Download Apk {Math.floor(content.file.filesize / 100000) / 10}{" "}
                  MB
                </a>
                {content.obb ? (
                  <a className="btn btn-primary" href={content.obb.main.path}>
                    Download Cache{" "}
                    {Math.floor(content.obb.main.filesize / 100000) / 10} MB
                  </a>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
