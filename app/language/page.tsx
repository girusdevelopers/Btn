import React from "react";
import css from "./language.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon"; 
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";

const Language = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Language</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Languages</p>
            </div>
            
          </div>
        </div>
        <div className={css["down-container"]}>
          <div className={css["main-page"]}>
            <div className={css["background"]}>
              <div className={css["create"]}>
                <p className={css["crea"]}>+Language create</p>
              </div>
              <div className={css["search"]}>
                <div className={css["by"]}>Search By:</div>
                <div className={css["flex"]}>
                  <select className={css["name"]} name="" id="">
                    <option value="">Language</option>
                  </select>
                  <div className={css["ser"]}>
                    <input className={css["input"]} type="search" />
                    <i className={css["i"]}>
                      <SearchIcon />
                    </i>
                  </div>
                  <div className={css["clear"]}>
                    <p>clear</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={css["maintable"]}>
              <div className={css["table"]}>
                <table className={css["table"]}>
                  <tr className={css["table"]}>
                    <td className={css["table1"]}>Image</td>
                    <td className={css["table1"]}>Language</td>
                    <td className={css["table1"]}>Code</td>
                    <td className={css["table1"]}>Status</td>
                    <td className={css["table1"]}>Actions</td>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>
                      <img
                        className={css["image"]}
                        src="https://cabme.siswebapp.com/assets/images/flags/Brasil.png"
                        alt=""
                      />
                    </td>
                    <td className={css["th2"]}>Brasil </td>
                    <td className={css["th3"]}>br</td>
                    <td className={css["th4"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th5"]}>
                      <div className={css["action"]}>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>
                      <img
                        className={css["image"]}
                        src="https://cabme.siswebapp.com/assets/images/flags/arabic.jpg"
                        alt=""
                      />
                    </td>
                    <td className={css["th2"]}>arabic </td>
                    <td className={css["th3"]}>ar</td>
                    <td className={css["th4"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th5"]}>
                      <div className={css["action"]}>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>
                      <img
                        className={css["image"]}
                        src="https://cabme.siswebapp.com/assets/images/flags/ENglish.png"
                        alt=""
                      />
                    </td>
                    <td className={css["th2"]}>English </td>
                    <td className={css["th3"]}>EN</td>
                    <td className={css["th4"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th5"]}>
                      <div className={css["action"]}>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>
                      <img
                        className={css["image"]}
                        src="https://cabme.siswebapp.com/assets/images/flags/Amharic.jpg"
                        alt=""
                      />
                    </td>
                    <td className={css["th2"]}>Amharic </td>
                    <td className={css["th3"]}>ET </td>
                    <td className={css["th4"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th5"]}>
                      <div className={css["action"]}>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>
                      <img
                        className={css["image"]}
                        src="https://cabme.siswebapp.com/assets/images/flags/Ti%E1%BA%BFng%20Vi%E1%BB%87t.jpg"
                        alt=""
                      />
                    </td>
                    <td className={css["th2"]}>Tiếng Việt </td>
                    <td className={css["th3"]}>vi</td>
                    <td className={css["th4"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th5"]}>
                      <div className={css["action"]}>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
