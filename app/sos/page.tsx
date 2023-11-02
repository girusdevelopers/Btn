import React from "react";
import css from "./sos.module.scss";
import GreaterIcon from "@/ui/icons/Greater.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import DustbinIcon from "@/ui/icons/Dustbin.icon";

function Sos() {
  return (
    <div className={css["container"]}>
      <div className={css["sos"]}>
        <div>
          <h3>SOS</h3>
        </div>
        <div className={css["dash"]}>
          <div>
            <p>Dashboard</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={20}
              width={20}
              className={css["icon"]}
            >
              <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
            </svg>
          </div>

          <div>
            <p>SOS</p>
          </div>
        </div>
      </div>
      <div className={css["border"]}>
        <div className={css["search"]}>
          <div className={css["by"]}>Search By :</div>
          <div>
            <select className={css["btn"]} name="" id="">
              <option value="">Status</option>
            </select>
          </div>
          <div>
            {" "}
            <select className={css["btn1"]} name="" id="">
              <option value="">Completed</option>
              <option value="">processing</option>
              <option value="">Initiated</option>
              <option value="">User Feel Do Not Safe </option>
            </select>
          </div>
          <div className={css["bt"]}>
            <div>
              <button className={css["btn2"]}>Search</button>
            </div>
            <div>
              <button className={css["btn3"]}>Clear</button>
            </div>
          </div>
        </div>
        <table className={css["table"]}>
          <tr className={css["table"]}>
            <th className={css["tb"]}>
              {" "}
              <input className={css["check"]} type="checkbox" />{" "}
              <span className={css["dust"]}>
                <DustbinIcon />{" "}
              </span>
              All
            </th>

            <th className={css["th4"]}>Ride Id</th>
            <th className={css["th4"]}>User Name</th>
            <th className={css["th4"]}>Driver Name</th>
            <th className={css["th4"]}>Status</th>
            <th className={css["th4"]}>Created</th>
            <th className={css["th4"]}>Actions</th>
          </tr>
          <tr className={css["table"]}>
            <th className={css["th"]}>
              {" "}
              <input className={css["check"]} type="checkbox" />{" "}
            </th>
            <td className={css["th"]}> 2427</td>
            <td className={css["th6"]}>Bbb Nnnn</td>
            <td className={css["th3"]}> Jhh Nhhh</td>
            <td className={css["th5"]}>
              {" "}
              <button className={css["init2"]}>Processing</button>
            </td>
            <td className={css["th2"]}> 01 October 2023 11:53 PM</td>
            <td className={css["th"]}>
              <div className={css["eye"]}>
                <span className={css["che1"]}>
                  <EyeIcon />
                </span>
                <span className={css["che"]}>
                  <DeleteIcon />
                </span>
              </div>
            </td>
          </tr>
          <tr className={css["table"]}>
            <th className={css["th"]}>
              {" "}
              <input className={css["check"]} type="checkbox" />{" "}
            </th>
            <td className={css["th"]}> 2427</td>
            <td className={css["th6"]}>Bbb Nnnn</td>
            <td className={css["th3"]}> Jhh Nhhh</td>
            <td className={css["th5"]}>
              {" "}
              <button className={css["init"]}> Initiated</button>
            </td>
            <td className={css["th2"]}> 01 October 2023 11:53 PM</td>
            <td className={css["th"]}>
              <div className={css["eye"]}>
                <span className={css["che1"]}>
                  <EyeIcon />
                </span>
                <span className={css["che"]}>
                  <DeleteIcon />
                </span>
              </div>
            </td>
          </tr>
          <tr className={css["table"]}>
            <th className={css["th"]}>
              {" "}
              <input className={css["check"]} type="checkbox" />
            </th>
            <td className={css["th"]}>2428</td>
            <td className={css["th6"]}>Bbb Nnnn</td>
            <td className={css["th3"]}> Jhh Nhhh</td>
            <td className={css["th5"]}>
              {" "}
              <button className={css["init"]}> Initiated</button>
            </td>
            <td className={css["th2"]}> 02 October 2023 12:00 AM</td>
            <td className={css["th"]}>
              <div className={css["eye"]}>
                <span className={css["che1"]}>
                  <EyeIcon />
                </span>
                <span className={css["che"]}>
                  <DeleteIcon />
                </span>
              </div>
            </td>
          </tr>
          <tr className={css["table"]}>
            <th className={css["th"]}>
              {" "}
              <input className={css["check"]} type="checkbox" />
            </th>
            <td className={css["th"]}>2436</td>
            <td className={css["th6"]}>Yakup Z</td>
            <td className={css["th3"]}> Padamaja Mandava</td>
            <td className={css["th5"]}>
              {" "}
              <button className={css["init"]}> Initiated</button>
            </td>
            <td className={css["th2"]}> 04 October 2023 01:42 PM</td>
            <td className={css["th"]}>
              <div className={css["eye"]}>
                <span className={css["che1"]}>
                  <EyeIcon />
                </span>
                <span className={css["che"]}>
                  <DeleteIcon />
                </span>
              </div>
            </td>
          </tr>
          <tr className={css["table"]}>
            <th className={css["th"]}>
              {" "}
              <input className={css["check"]} type="checkbox" />
            </th>
            <td className={css["th"]}>2437</td>
            <td className={css["th6"]}>Ahmad Kolakji</td>
            <td className={css["th3"]}> Fozi Mozi</td>
            <td className={css["th5"]}>
              {" "}
              <button className={css["init"]}> Initiated</button>
            </td>
            <td className={css["th2"]}> 04 October 2023 06:47 PM</td>
            <td className={css["th"]}>
              <div className={css["eye"]}>
                <span className={css["che1"]}>
                  <EyeIcon />
                </span>
                <span className={css["che"]}>
                  <DeleteIcon />
                </span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Sos;
