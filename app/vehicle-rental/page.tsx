"use client";

import React from "react";
import css from "./vehicle.module.scss";
import ArrowdownIcon from "@/ui/icons/Arrow-down.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import MenuIcon from "@/ui/Menu-bar.icon";
import ArrowleftdoubleIcon from "@/ui/icons/Arrow-left-double-line.icon";
import ArrowrightdoubleIcon from "@/ui/icons/Arrow-right-double-line.icon";
import WalletIcon from "@/ui/icons/Wallet.icon";
import MoneydollerIcon from "@/ui/icons/Money-doller.icon";
import ArrowrightIcon from "@/ui/icons/Arrow-right.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import RedDeleteIcon from "@/ui/icons/RedDelete.icon";

const Userwallettransaction = () => {
  return (
    <>
      <div className={css["page-container"]}>
        <div className={css["header-bar"]}>
          <div>
            <h1>Rental Vehicle Type</h1>
          </div>
          <div className={css["left-side-header-bar"]}>
            <p className={css["dashbord-text"]}>Dashboard</p>
            <p className={css["lamda-text"]}>
              <ArrowrightIcon />
            </p>
            <p className={css["lamda-text"]}>User Wallet Transactions</p>
          </div>
        </div>

        <div className={css["table-div"]}>
          <div className={css["inner-page-div"]}>
            <div className={css["header-box"]}>
              <div className={css["middle-side-info"]}>
                <div className={css["create"]}>
                  <p className={css["crea"]}>+ Create Currency</p>
                </div>
                <div className={css["main"]}>
                  <p> Search By : </p>
                  <div className={css["field-box"]}>
                    <button className={css["transaction-button"]}>
                      Transactions id
                    </button>
                    <ArrowdownIcon />
                  </div>
                  <div className={css["field-box-2"]}>
                    <SearchIcon />
                    <input
                      className={css["search-bar"]}
                      type="text"
                      placeholder={"Search"}
                    />
                  </div>

                  <button className={css["clear-button"]}>Search</button>
                  <button className={css["clear-button"]}>Clear</button>
                </div>
              </div>
            </div>
          </div>
          <div className={css["div"]}>
            <table className={css["tr"]}>
              <thead>
                <tr>
                  <th className={css["filled"]}>
                    <div className={css["action"]}>
                      <input type="checkbox" id="check-all" />
                      <RedDeleteIcon />
                      All
                    </div>
                  </th>
                  <th className={css["filled"]}> Image</th>
                  <th className={css["filled"]}>Vehicle Type</th>
                  <th className={css["filled"]}>Price</th>
                  <th className={css["filled"]}> No Of Passenger</th>

                  <th className={css["filled"]}>Status</th>
                  <th className={css["filled"]}>Created At</th>
                  <th className={css["filled"]}>Action</th>
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
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    2345
                  </a>
                </td>
                <td className={css["for"]}>5543</td>

                <td className={css["for"]}>
                  {/* < Icon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>5543</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    2345
                  </a>
                </td>
                <td className={css["for"]}>5543</td>

                <td className={css["for"]}>
                  {/* < Icon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>5543</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    2345
                  </a>
                </td>
                <td className={css["for"]}>5543</td>

                <td className={css["for"]}>
                  {/* < Icon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>5543</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    2345
                  </a>
                </td>
                <td className={css["for"]}>5543</td>

                <td className={css["for"]}>
                  {/* < Icon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>5543</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    2345
                  </a>
                </td>
                <td className={css["for"]}>5543</td>

                <td className={css["for"]}>
                  {/* < Icon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>5543</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    2345
                  </a>
                </td>
                <td className={css["for"]}>5543</td>

                <td className={css["for"]}>
                  {/* < Icon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>5543</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    34564
                  </a>
                </td>
                <td className={css["for"]}>1</td>

                <td className={css["for"]}>
                  {/* <ToggleIcon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>143</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    345543
                  </a>
                </td>
                <td className={css["for"]}>34</td>

                <td className={css["for"]}>
                  {/* <ToggleIcon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>143</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    23456
                  </a>
                </td>
                <td className={css["for"]}>234</td>

                <td className={css["for"]}>
                  {/* <ToggleIcon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>143</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    34565
                  </a>
                </td>
                <td className={css["for"]}>234</td>

                <td className={css["for"]}>
                  {/* <ToggleIcon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>143</td>
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
                    className="delete-checkbox filled-in"
                  />
                  <label htmlFor={`check-data-${1}`}></label>
                </td>
                <td className={css["for"]}>
                  <img
                    className={css["ab1"]}
                    src="https://holymusic.in/upload/photos/2023/01/jKwUhKc5fPnLzKjNtmfu_15_4b1d0c97ad79939be88deed1100851f1_image.png"
                    alt="user avatar"
                  />{" "}
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    Lathasingh
                  </a>
                </td>
                <td className={css["for"]}>
                  <a href="https://holymusic.in//HolyMusic" target="_blank">
                    34554
                  </a>
                </td>
                <td className={css["for"]}>234</td>

                <td className={css["for"]}>
                  {/* <ToggleIcon /> */}
                  <label className={css["toggle-switch"]}>
                    <input type="checkbox" />
                    <span className={css["slider"]}></span>
                  </label>
                </td>
                <td className={css["for"]}>143</td>
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
          <div className={css["main3"]}>
            <div className={css["pre-main"]}>
              <div>
                <button className={css["privous"]}>« Previous</button>
              </div>
              <div>
                <button className={css["next"]}>Next »</button>
              </div>
            </div>
            <div className={css["pull-right"]}>
              Showing 1 to 20 of 316 results{" "}
            </div>
          </div>{" "}
        </div>
      </div>
      <li />
    </>
  );
};

export default Userwallettransaction;
