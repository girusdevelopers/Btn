import React from "react";
import css from "./country.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import Header from "../_layout/main";
import Sidebar from "../_layout/sidebar";
import { Main } from "next/document";

const Country = () => {
  return ( 
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Country</p>
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
              <p>Country</p>
            </div>
          </div>
        </div>
        <div className={css["down-container"]}>
          <div className={css["main-page"]}>
            <div className={css["background"]}>
              <div className={css["create"]}>
                <p className={css["crea"]}>+ Create Country</p>
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
                    <td className={css["table1"]}>Name</td>
                    <td className={css["table1"]}>Code</td>
                    <td className={css["table1"]}>Status</td>
                    <td className={css["table1"]}>Created</td>
                    <td className={css["table1"]}>Modified</td>
                    <td className={css["table1"]}>Actions</td>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Côte d'Ivoire</td>
                    <td className={css["th2"]}>CI</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 02:38 AM</td>
                    <td className={css["th5"]}>09 April 2023 03:16 PM</td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>India </td>
                    <td className={css["th2"]}>IN </td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 02:46 AM </td>
                    <td className={css["th5"]}>12 June 2023 08:00 AM</td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Andorra</td>
                    <td className={css["th2"]}>AD</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:04 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>United Arab Emirates</td>
                    <td className={css["th2"]}>AE</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:07 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Afghanistan</td>
                    <td className={css["th2"]}>AF</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:07 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Antigua and Barbuda</td>
                    <td className={css["th2"]}>AG</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:08 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Anguilla</td>
                    <td className={css["th2"]}>AI</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:08 AM </td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Albania</td>
                    <td className={css["th2"]}>AL</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:08 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Armenia</td>
                    <td className={css["th2"]}>AM</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:08 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Netherlands Antilles</td>
                    <td className={css["th2"]}>AN</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:09 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Angola</td>
                    <td className={css["th2"]}>AO</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:09 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Antarctica</td>
                    <td className={css["th2"]}>AQ</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:10 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Argentina</td>
                    <td className={css["th2"]}>AR</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:10 AM</td>
                    <td className={css["th5"]}>15 March 2023 10:17 PM</td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>American Samoa</td>
                    <td className={css["th2"]}>AS</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:10 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Austria</td>
                    <td className={css["th2"]}>AT</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:11 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Australia</td>
                    <td className={css["th2"]}>AU</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:11 AM</td>
                    <td className={css["th5"]}>12 March 2023 12:20 AM</td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Aruba</td>
                    <td className={css["th2"]}>AW</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:14 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Azerbaijan </td>
                    <td className={css["th2"]}>AZ</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:14 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Bosnia and Herzegovin</td>
                    <td className={css["th2"]}>BA</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:14 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr className={css["table"]}>
                    <td className={css["th1"]}>Barbados</td>
                    <td className={css["th2"]}>BB</td>
                    <td className={css["th3"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th4"]}>27 December 2019 03:14 AM</td>
                    <td className={css["th5"]}></td>
                    <th className={css["th"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        &nbsp;
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                      </div>
                    </th>
                  </tr>
                </table>
              </div>
            </div>
            <div className={css["border"]}>
              <div className={css["prev"]}>
                <p>« Previous</p>
              </div>
              <div className={css["next"]}>
                <p>Next »</p>
              </div>
            </div>
            <div className={css["show"]}>
              <p>
                Showing <b>1</b> to <b>20</b> of <b>95 </b> results
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
