import React from "react";
import css from "./createuser.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";
import SaveIcon from "@/ui/icons/Save.icon";
import BackIcon from "@/ui/icons/Back.icon";

const Createuser = () => {
    return (
      <div className={css["container"]}>
        <div className={css["main-head"]}>
          <div className={css["main"]}>
            <div className={css["country"]}>
              <p>Create User</p>
            </div>
            <div className={css["sidecon"]}>
              <div className={css["dash"]}>
                <a href="">
                <p>Dashboard</p>
                </a>
                
              </div>
              <div>
                <Rightarrow />
              </div>
              <div className={css["dash"]}>
                <a href="#">
                  <p>Users</p>
                </a>
              </div>
              <div>
                <Rightarrow />
              </div>
              <div className={css["dash1"]}>
                <p>Create Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css["commission"]}>
          <div className={css["background"]}>
            <div className={css["legend"]}>
              <form className={css["form"]}>
                <fieldset className={css["field"]}>
                  <legend className={css["admin"]}>USER DETAILS</legend>
                  <div className={css["first"]}>
                    <div>
                      <div>
                        <p className={css["file"]}>First Name</p>
                        <input
                          className={css["input"]}
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <p className={css["insert"]}>Insert FirstName</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className={css["file"]}>Last Name</p>
                        <input
                          className={css["input"]}
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <p className={css["insert"]}>Insert LastName</p>
                      </div>
                    </div>
                  </div>
                  <div className={css["second"]}>
                  <div>
                      <div>
                        <p className={css["file"]}>Phone</p>
                        <input
                          className={css["input"]}
                          type="number"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <p className={css["insert"]}>Insert Phone Number</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className={css["file"]}>Email</p>
                        <input
                          className={css["input"]}
                          type="email"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <p className={css["insert"]}>Insert Email</p>
                      </div>
                    </div>
                  </div>
                  <div className={css["third"]}>
                    <div>
                      <div>
                        <p className={css["file"]}>Password</p>
                        <input
                          className={css["input"]}
                          type="password"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <p className={css["insert"]}>Insert Password</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className={css["file"]}>Confirm Password</p>
                        <input
                          className={css["input"]}
                          type="password"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <p className={css["insert"]}>Confirm Password</p>
                      </div>
                    </div>
                  </div>
                  <div className={css["third"]}>
                  <div className={css["toggle"]}>
                  <div>
                    <p className={css["file"]}>Profile Image</p>
                  </div>
                  <div>
                  <input
                        className={css["input"]}
                        type="file"
                        placeholder=""
                      />
                    &nbsp;
                    {/* <a className={css["nofile"]} href="">
                      No file choosen
                    </a> */}
                  </div>
                </div>

                <div className={css["check"]}>
                    <input type="checkbox" className={css["checkbox"]} />
                    &nbsp;
                    <p>Active</p>
                </div>
                </div>
                </fieldset>
                
              </form>
              <div className={css["btn"]}>
                <div className={css["saveicon"]}>
                  <p>
                    <SaveIcon />
                  </p>
                  <p>Save</p>
                </div>
                <div className={css["backicon"]}>
                  <p>
                    <BackIcon />
                  </p>
                  <p>Back</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Createuser;