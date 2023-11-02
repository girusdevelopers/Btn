import React from "react";
import css from "./notification.module.scss";
import ArrowIcon from "@/ui/icons/Search.icon";
import PlusIcon from "@/ui/icons/Plus.icon";
import GreaterIcon from "@/ui/icons/Greater.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import DtlIcon from "@/ui/icons/Dtl.icon";

function Notification() {
  return (
    <>
      <div className={css["main1"]}>
        <div className={css["container"]}>
          <div className={css["side"]}>
            <div className={css["dashboad"]}> Notification</div>

            <div className={css["home1"]}>
              <div className={css["home"]}>Dashboad</div>
              <div className={css["svg"]}>
               <i className={css["great"]}> <GreaterIcon /></i>
              </div>
              <div className={css["home"]}>notification</div>
            </div>
          </div>
          <div className={css["right"]}>
            <div className={css["right1"]}>
              <div className={css["right2"]}>
                <div>
                  <form>
                    <div className={css["box1"]}>
                      <div className={css["create"]}>
                        <PlusIcon />
                        create Notification
                      </div>
                      <div className={css["move"]}>
                        
                        <div className={css["user"]}>
                          <div className={css["dropdown"]}>
                            <button className={css["user"]}>Title</button>
                            <div className={css["dropdown-content"]}>
                              <a href="#">Title</a>
                              <a href="#">Message</a>
                              
                            </div>
                          </div>
                        </div>
                        <div>
                          {" "}
                          <input type="text" className={css["search"]} />
                          <i className={css["serch-icon"]}><SearchIcon /></i>
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
                            <input type="checkbox" id="check-all" />
                            <DtlIcon />
                            All
                          </div>
                        </th>

                        <th className={css["filled"]}> Title</th>
                        <th className={css["filled"]}>Message</th>
                        <th className={css["filled"]}> Created</th>
                        <th className={css["filled"]}>Actions</th>
                      </tr>
                    </thead>
                    <tr id="1" className={css["tr2"]}>
                      <td className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className="delete-checkbox filled-in"
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </td>

                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          disc
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          disc
                        </a>
                      </td>
                      <td className={css["for"]}>05 october 2023
                      <p>05:44 Pm</p></td>
                      
                      <td className={css["for"]}> <span className={css["icon-around"]}><DeleteIcon /></span></td>
                     
                    </tr>
                    <tr id="1" className={css["tr2"]}>
                      <td className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className="delete-checkbox filled-in"
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </td>
                      
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          stop
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          me
                        </a>
                      </td>
                      <td className={css["for"]}>05 october 2023
                      <p>04:51 Pm</p></td>
                      <td className={css["for"]}> <span className={css["icon-around"]}><DeleteIcon /></span>
                      </td>
                     
                    </tr>
                    <tr id="1" className={css["tr2"]}>
                      <td className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className="delete-checkbox filled-in"
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          Driver
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          DriverNotification
                        </a>
                      </td>
                      <td className={css["for"]}>05 october 2023
                      <p>10:29 Am</p></td>
                      <td className={css["for"]}><span className={css["icon-around"]}><DeleteIcon /></span></td>
                      
                    </tr>

                    <tr id="1" className={css["tr2"]}>
                      <td className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className="delete-checkbox filled-in"
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          test
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          test123
                        </a>
                      </td>
                      <td className={css["for"]}>05 october 2023
                      <p>09:54 Am</p></td>
                      <td className={css["for"]}> <span className={css["icon-around"]}><DeleteIcon /></span></td>
                    
                    </tr>

                    <tr id="1" className={css["tr2"]}>
                      <td className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className="delete-checkbox filled-in"
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          cabme
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          cabme Notification
                        </a>
                      </td>
                      <td className={css["for"]}>05 october 2023
                      <p>09:54 Am</p></td>
                      <td className={css["for"]}> <span className={css["icon-around"]}><DeleteIcon /></span> </td>
                     
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
export default Notification;
