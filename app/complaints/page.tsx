import React from "react";
import css from "./complaints.module.scss";
import ArrowIcon from "@/ui/icons/Search.icon";
import PlusIcon from "@/ui/icons/Plus.icon";
import GreaterIcon from "@/ui/icons/Greater.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import DtlIcon from "@/ui/icons/Dtl.icon";
import RemoveIcon from "@/ui/Trashs.icon";
import FindIcon from "@/ui/Find.icon";

function complaints() {
  return (
    <>
      <div className={css["main1"]}>
        <div className={css["container"]}>
          <div className={css["side"]}>
            <div className={css["dashboad"]}> Complaints</div>

            <div className={css["home1"]}>
              <div className={css["home2"]}>Dashboad</div>
              &nbsp;
              <div className={css["svg"]}>
                <i className={css["great"]}>
                  {" "}
                  <GreaterIcon />
                </i>
              </div>
              <div className={css["home"]}>complaints</div>
            </div>
          </div>
          <div className={css["right"]}>
            <div className={css["right1"]}>
              <div className={css["right2"]}>
                <div>
                  <form>
                    <div className={css["box1"]}>
                      <div className={css["move"]}>
                        <div className={css["searchby"]}>
                            <p>Search By:</p>
                          </div>
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
                          <i className={css["serch-icon"]}>
                            <FindIcon />
                          </i>
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
                            <input
                              type="checkbox"
                              id="check-all"
                              className={css["checkbox"]}
                            />
                            <DtlIcon />
                            <p className={css["all"]}>All</p>
                          </div>
                        </th>

                        <td className={css["filled"]}> Drivers</td>
                        <td className={css["filled"]}>User Name</td>
                        <td className={css["filled"]}> Title</td>
                        <td className={css["filled"]}>Message</td>
                        <td className={css["filled"]}>Created</td>
                        <td className={css["filled"]}>Actions</td>

                        <th className={css["filled"]}></th>
                      </tr>
                    </thead>
                    <tr id="1" className={css["tr2"]}>
                      <th className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["checkbox"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </th>

                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          fozi
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          Ahmad
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          Test
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          Just a test
                        </a>
                      </td>

                      <td className={css["for"]}>04 october 2023 06:53 PM</td>

                      <td className={css["for"]}>
                        <div className={css["eye"]}>
                          <span className={css["icon-around"]}>
                            <EyeIcon />
                          </span>
                          <span className={css["icon-around1"]}>
                            <RemoveIcon />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr id="1" className={css["tr2"]}>
                      <th className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["checkbox"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </th>

                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          jejje
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          behd
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>

                      <td className={css["for"]}>03 october 2023 04:13 AM</td>
                      <td className={css["for"]}>
                        <div className={css["eye"]}>
                          <span className={css["icon-around"]}>
                            <EyeIcon />
                          </span>
                          <span className={css["icon-around1"]}>
                            <RemoveIcon />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr id="1" className={css["tr2"]}>
                      <th className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["checkbox"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </th>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          jejje
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          behd
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>

                      <td className={css["for"]}> 03 october 2023 04:12 AM</td>
                      <td className={css["for"]}>
                        <div className={css["eye"]}>
                          <span className={css["icon-around"]}>
                            <EyeIcon />
                          </span>
                          <span className={css["icon-around1"]}>
                            <RemoveIcon />
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr id="1" className={css["tr2"]}>
                      <th className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["checkbox"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </th>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          jejje
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          behd
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>

                      <td className={css["for"]}>03 october 2023 04:09 AM</td>
                      <td className={css["for"]}>
                        <div className={css["eye"]}>
                          <span className={css["icon-around"]}>
                            <EyeIcon />
                          </span>
                          <span className={css["icon-around1"]}>
                            <RemoveIcon />
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr id="1" className={css["tr2"]}>
                      <th className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["checkbox"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </th>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          jejje
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          behd
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>

                      <td className={css["for"]}>03 october 2023 04:09 AM</td>
                      <td className={css["for"]}>
                        <div className={css["eye"]}>
                          <span className={css["icon-around"]}>
                            <EyeIcon />
                          </span>
                          <span className={css["icon-around1"]}>
                            <RemoveIcon />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr id="1" className={css["tr2"]}>
                      <th className={css["for"]}>
                        <input
                          type="checkbox"
                          id={`check-data-${1}`}
                          className={css["checkbox"]}
                        />
                        <label htmlFor={`check-data-${1}`}></label>
                      </th>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          jejje
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          behd
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>
                      <td className={css["for"]}>
                        <a
                          href="https://holymusic.in//HolyMusic"
                          target="_blank"
                        >
                          ok
                        </a>
                      </td>

                      <td className={css["for"]}> 03 october 2023 04:09 AM</td>
                      <td className={css["for"]}>
                        <div className={css["eye"]}>
                          <span className={css["icon-around"]}>
                            <EyeIcon />
                          </span>
                          <span className={css["icon-around1"]}>
                            <RemoveIcon />
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
    </>
  );
}
export default complaints;
