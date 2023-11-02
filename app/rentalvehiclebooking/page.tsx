import React from "react";
import css from "./booking.module.scss";
import ArrowIcon from "@/ui/icons/Search.icon";
import PlusIcon from "@/ui/icons/Plus.icon";
import GreaterIcon from "@/ui/icons/Greater.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import DelectblueIcon from "@/ui/icons/Delectblue.icon";
import DeleteblueIcon from "@/ui/icons/Deleteblue.icon";

function Booking() {
  return (
    <>
      <div className={css["main1"]}>
        <div className={css["container"]}>
          <div className={css["side"]}>
            <div className={css["dashboad"]}>Vehicle Rental Booking </div>

            <div className={css["home1"]}>
              <div className={css["home2"]}>Dashboad</div>
              <div className={css["svg"]}>
                <GreaterIcon />
              </div>
              <div className={css["home"]}>Vehicle Rental</div>
            </div>
          </div>
          <div className={css["right"]}>
            <div className={css["right1"]}>
              <div className={css["right2"]}>
                <div>
                  <form>
                    <div className={css["box1"]}>
                      <div className={css["move"]}>
                        <div className={css["se"]}>Search By</div>
                        <div className={css["user"]}>
                          <select className={css["select"]} name="" id="">
                            <option value="">User Name</option>
                            <option value=""> Email</option>
                            <option value="">Phone</option>
                          </select>
                        </div>
                        <div>
                          {" "}
                          <input type="text" className={css["search"]} />
                          <i className={css["serch-icon"]}>
                            <SearchIcon />
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
                          <div className={css["action1"]}>
                            <input
                              type="checkbox"
                              id="check-all"
                              className={css["check"]}
                            />
                            <DeleteblueIcon />
                            All
                          </div>
                        </th>
                        <th className={css["filled"]}> Vehicle Type</th>
                        <th className={css["filled"]}> Costomer</th>
                        <th className={css["filled"]}>No. Of Days</th>

                        <th className={css["filled"]}>Start Date</th>
                        <th className={css["filled"]}>End Date</th>
                        <th className={css["filled"]}>Contact</th>
                        <th className={css["filled"]}>Status</th>
                        <th className={css["filled"]}>Created At</th>
                        <th className={css["filled"]}>Modified At</th>
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                        <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                      <td className={css["for"]}>Renualt</td>
                      <td className={css["for"]}>Lathasingh</td>
                      <td className={css["for"]}>5</td>
                      <td className={css["for"]}>07 oct 2023</td>
                      <td className={css["for"]}>12 oct 2023</td>
                      <td className={css["for"]}>9876567898</td>
                      <td className={css["for"]}>
                      <div className={css["prograss"]}>In Progress</div>
                      </td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>7 oct 2023 02:08 Am</td>
                      <td className={css["for"]}>
                        <div className={css["action"]}>
                          <div className={css["eye1"]}>
                            <span className={css["icon-around1"]}>
                              <EyeIcon />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Booking;
