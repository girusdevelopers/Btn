import React from "react";
import css from "./setting.module.scss";
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

const Setting = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Settings</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Users</p>
            </div>
            <div className={css["icon1"]}>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css["commission"]}>
        <div className={css["background"]}>
          <div className={css["legend"]}>
            <form className={css["form"]}>
              <fieldset className={css["field"]}>
                <legend className={css["admin"]}>SETTINGS</legend>
                <div className={css["first"]}>
                  <div>
                    <div>
                      <p className={css["file"]}>Admin Panel title</p>
                      <input
                        className={css["input"]}
                        type="text"
                        placeholder="Cabme"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className={css["file"]}> Admin panel footer</p>
                      <input
                        className={css["input"]}
                        type="text"
                        placeholder="© 2022-2023 Cabme. All rights reserved."
                      />
                    </div>
                  </div>
                </div>
                <div className={css["second"]}>
                  <div>
                    <p className={css["file"]}>Customer App Color</p>
                    <input
                      className={css["dri"]}
                      type="color"
                      value="#006cfa"
                    />
                  </div>
                  <div>
                    <p className={css["file"]}>Driver App color</p>
                    <input
                      className={css["dri"]}
                      type="color"
                      value="#006cfa"
                    />
                  </div>
                </div>
                <div className={css["third"]}>
                  <div>
                    <p className={css["file"]}>Admin panel color</p>
                    <input
                      className={css["blue"]}
                      type="color"
                      value="#092a77"
                    />
                  </div>
                  <div>
                    <p className={css["file"]}>Driver Radius (KM)</p>
                    <input
                      className={css["input"]}
                      type="search"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className={css["fourth"]}>
                  <div>
                    <div>
                      <p className={css["file"]}>Admin Panel Logo</p>
                    </div>
                    <div>
                      <a href="">
                        <button className={css["choose"]}>Choose File</button>
                      </a>
                      &nbsp;
                      <a href="">No file chosen</a>
                    </div>
                    <div>
                      <img
                        src="https://cabme.siswebapp.com/assets/images/app_logo.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className={css["file"]}>Toggle menu logo</p>
                    </div>
                    <div>
                      <a href="">
                        <button className={css["choose"]}>Choose File</button>
                      </a>
                      &nbsp;
                      <a href="">No file chosen</a>
                    </div>
                    <div>
                      <img
                        src="https://cabme.siswebapp.com/assets/images/app_logo.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className={css["form2"]}>
                <fieldset className={css["field1"]}>
                  <legend className={css["admin1"]}>GOOGLE MAP API KEY</legend>
                  <div className={css["google"]}>
                    <p className={css["file1"]}>Google Map API Key</p>
                    <input
                      className={css["input1"]}
                      type="password"
                      placeholder=""
                    />
                  </div>
                </fieldset>
              </div>

              <div className={css["form2"]}>
                <fieldset className={css["field2"]}>
                  <legend className={css["admin2"]}>RIDE SETTINGS</legend>
                  <div className={css["google"]}>
                    <p className={css["file1"]}>
                      Trip Accept/Reject Duration For Driver in Seconds
                    </p>
                    <input
                      className={css["input1"]}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className={css["google1"]}>
                    <p className={css["file1"]}>Show Ride Otp Feature</p>
                    <select className={css["name"]} name="" id="">
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </div>
                </fieldset>
              </div>

              <div className={css["form2"]}>
                <fieldset className={css["field1"]}>
                  <legend className={css["admin3"]}>
                    DELIVERY CHARGE DISTANCE
                  </legend>
                  <div className={css["google"]}>
                    <p className={css["file1"]}>Distance</p>
                    <select className={css["name1"]} name="" id="">
                      <option value="">KM</option>
                      <option value="">Miles</option>
                    </select>
                  </div>
                </fieldset>
              </div>
              <div className={css["form2"]}>
                <fieldset className={css["field3"]}>
                  <legend className={css["admin4"]}>
                    WALLET SETTINGS (FOR DRIVER)
                  </legend>
                  <div className={css["google"]}>
                    <p className={css["file1"]}>
                      Minimum wallet amount to receiving Ride (For Driver)
                    </p>
                    <input
                      className={css["input1"]}
                      type="number"
                      placeholder=""
                    />
                  </div>
                  <div className={css["google2"]}>
                    <p className={css["file1"]}>
                      Minimum wallet amount to withdrawal (For Driver)
                    </p>
                    <input
                      className={css["input1"]}
                      type="number"
                      placeholder=""
                    />
                  </div>
                </fieldset>
              </div>
              <div className={css["form2"]}>
                <fieldset className={css["field4"]}>
                  <legend className={css["admin5"]}>REFERRAL SETTINGS</legend>
                  <div className={css["google"]}>
                    <p className={css["file1"]}>Referral Amount</p>
                    <input
                      className={css["input1"]}
                      type="number"
                      placeholder=""
                    />
                    <p className={css["num"]}>
                      Note : Customer will get refer earnings after the first
                      order is successfully delivered.
                    </p>
                  </div>
                </fieldset>
              </div>
              <div className={css["form2"]}>
                <fieldset className={css["field2"]}>
                  <legend className={css["admin6"]}>
                    MAP TRACKING OPTIONS
                  </legend>
                  <div className={css["google1"]}>
                    <p className={css["file1"]}>
                      Select your map tracking option
                    </p>
                    <select className={css["name"]} name="" id="">
                      <option value="">Select Type</option>
                      <option value="">Google Map</option>
                      <option value="">GoogleGo Map</option>
                      <option value="">Waze Map</option>
                      <option value="">MapsWithMe Map</option>
                      <option value="">VandexNavi Map</option>
                      <option value="">Vandex Map</option>
                      <option value="">In application Map(Google Map)</option>
                    </select>
                  </div>
                  <div className={css["google3"]}>
                    <p className={css["file1"]}>
                      Driver Location Update (meter)
                    </p>
                    <input
                      className={css["input1"]}
                      type="password"
                      placeholder=""
                    />
                  </div>
                </fieldset>
              </div>
              <div className={css["form2"]}>
                <fieldset className={css["field5"]}>
                  <legend className={css["admin7"]}>CONTACT US</legend>
                  <div className={css["google5"]}>
                    <div>
                      <p className={css["file1"]}>Email</p>
                      <input
                        className={css["input2"]}
                        type="text"
                        placeholder="teste@teste.com"
                      />
                    </div>
                    <div>
                      <p className={css["file1"]}>Phone</p>
                      <input
                        className={css["input2"]}
                        type="number"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className={css["address"]}>
                    <p className={css["file1"]}>Address</p>
                    <input
                      className={css["input3"]}
                      type="text"
                      placeholder=""
                    />
                  </div>
                </fieldset>
              </div>
              <div className={css["form2"]}>
                <fieldset className={css["field1"]}>
                  <legend className={css["admin8"]}>VERSION</legend>
                  <div className={css["google5"]}>
                    <div>
                      <p className={css["file1"]}>App Version</p>
                      <input
                        className={css["input2"]}
                        type="text"
                        placeholder="3.3.2"
                      />
                    </div>
                    <div>
                      <p className={css["file1"]}>Web Version</p>
                      <input
                        className={css["input2"]}
                        type="number"
                        placeholder="3.3.2"
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
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
      <div></div>
    </div>
  );
};

export default Setting;
