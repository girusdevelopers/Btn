import React from "react";
import css from "./currency.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";

const Currency = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Currency</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Administration tools</p>
            </div>
            <div className={css["icon1"]}>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Currency</p>
            </div>
          </div>
        </div>
        <div className={css["down-container"]}>
          <div className={css["main-page"]}>
            <div className={css["background"]}>
              <div className={css["create"]}>
                <p className={css["crea"]}>+Currency Create</p>
              </div>
              <div className={css["search"]}>
                <div className={css["by"]}>Search By:</div>
                <div className={css["flex"]}>
                  <select className={css["name"]} name="" id="">
                    <option value="">NAME</option>
                    <option value="">Code</option>
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
                    <th className={css["table1"]}>
                      <div className={css["combine-icons"]}>
                        <input
                          type="checkbox"
                          className={css["checkbox"]}
                        />
                        <p>
                          <DustIcon />
                        </p>
                        <p className={css["all"]}>All</p>
                      </div>
                    </th>
                    <td className={css["table1"]}>Name</td>
                    <td className={css["table1"]}>Symbol</td>
                    <td className={css["table1"]}>Status</td>
                    <td className={css["table1"]}>Actions</td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>TZS</td>
                    <td className={css["th2"]}>Tsh</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
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
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>QAR</td>
                    <td className={css["th2"]}>QAR</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
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
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>BRL</td>
                    <td className={css["th2"]}>R$</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
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
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>EGP</td>
                    <td className={css["th2"]}>LE</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
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
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>Tanzania Shilling </td>
                    <td className={css["th2"]}>Tsh.</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
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
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>Tanzania Shilling</td>
                    <td className={css["th2"]}>Tsh.</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
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
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>INR</td>
                    <td className={css["th2"]}>₹</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
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

export default Currency;
