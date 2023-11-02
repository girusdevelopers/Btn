import React from "react";
import css from "./car.module.scss";
import ArrowIcon from "@/ui/icons/Search.icon";
import PlusIcon from "@/ui/icons/Plus.icon";
import GreaterIcon from "@/ui/icons/Greater.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import DeleteblueIcon from "@/ui/icons/Deleteblue.icon";

function Bond() {
  return (
    <>
      <div className={css["main1"]}>
        <div className={css["container"]}>
          <div className={css["side"]}>
            <div className={css["dashboad"]}> Car Model</div>

            <div className={css["home1"]}>
              <div className={css["home"]}>Dashboad</div>
              <div className={css["svg"]}>
                <GreaterIcon />
              </div>
              <div className={css["home"]}>User</div>
            </div>
          </div>
          <div className={css["right"]}>
            <div className={css["right1"]}>
              <div className={css["right2"]}>
                <div>
                  <form>
                    <div className={css["box1"]}>
                      <div className={css["create"]}>
                      
                       + Create Car Model
                      </div>
                      <div className={css["move"]}>
                        <div className={css["se"]}>Search By</div>
                        <div className={css["user"]}>
                          
                          <select className={css["select"]} name="" id="">
                            <option value="">User Name</option>
                            <option value="">Email</option>
                            <option value="">Phone</option>
                          </select>
                        </div>
                        <div>
                          {" "}
                          <input type="text" className={css["search"]} />
                          <i className={css["search-icon"]}><SearchIcon /></i>
                        </div>
                        <div className={css["clear"]}>Clear</div>
                      </div>
                    </div>
                  </form>
                </div>
                <div>
                  <table className={css["tr"]}>
                    <thead>
                      <tr>
                        <th className={css["filled"]}>
                          <div className={css["action"]}>
                            <input type="checkbox" id="check-all" className={css["check"]} />
                            <DeleteblueIcon />
                            All
                          </div>
                        </th>

                        <th className={css["filled"]}> Name</th>
                        <th className={css["filled"]}>Brand</th>
                        <th className={css["filled"]}>Vehicle Type</th>
                        <th className={css["filled"]}> Status</th>

                        <th className={css["filled"]}>Action</th>
                      </tr>
                    </thead>
                    <tr id="1" className={css["tr2"]}>
                      <td className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["check"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </td>

                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          Golf
                        </a>
                      </td>

                      <td className={css["for"]}>VW</td>
                      <td className={css["for"]}>Mercado</td>
                      <td className={css["for"]}>
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye2"]}>
                            <span className={css["icon-around"]}>
                              <EditIcon />
                            </span>
                          </div>
                          <div className={css["eye3"]}>
                            <span className={css["edit"]}>
                              <DeleteIcon />
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr id="1" className={css["tr2"]}>
                      <td className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["check"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </td>

                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          Teste Clássico
                        </a>
                      </td>

                      <td className={css["for"]}>Modelo teste</td>
                      <td className={css["for"]}>Mercado</td>
                      <td className={css["for"]}>
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye2"]}>
                            <span className={css["icon-around"]}>
                              <EditIcon />
                            </span>
                          </div>
                          <div className={css["eye3"]}>
                            <span className={css["edit"]}>
                              <DeleteIcon />
                            </span>
                          </div>
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
    </>
  );
}
export default Bond;
