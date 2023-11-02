import React from "react";
import css from "./createdriver.module.scss";
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

const Createdriver = () => {
    return (
      <div className={css["container"]}>
        <div className={css["main-head"]}>
          <div className={css["main"]}>
            <div className={css["country"]}>
              <p>Create Driver</p>
            </div>
            <div className={css["sidecon"]}>
              <div className={css["dash"]}>
                <p>Dashboard</p>
              </div>
              <div>
                <Rightarrow />
              </div>
              <div className={css["dash"]}>
                <a href="dispatcherusers">
                  <p>Drivers</p>
                </a>
              </div>
              <div>
                <Rightarrow />
              </div>
              <div className={css["dash1"]}>
                <p>Create Driver</p>
              </div>
            </div>
          </div>
        </div>
        <div className={css["commission"]}>
          <div className={css["background"]}>
            <div className={css["legend"]}>
              <form className={css["form"]}>
                <fieldset className={css["field"]}>
                  <legend className={css["admin"]}>DRIVER DETAILS</legend>
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
                        <p className={css["file"]}>Email</p>
                        <input
                          className={css["input"]}
                          type="text"
                          placeholder=""
                        />
                      </div>
                      <div>
                        <p className={css["insert"]}>Insert Email</p>
                      </div>
                    </div>
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
                  </div>
                  <div className={css["third"]}>
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
                  </div>

                  <div className={css["check"]}>
                    <input type="checkbox" className={css["checkbox"]} />
                    &nbsp;
                    <p>Active</p>
                  </div>
                </fieldset>
                <div className={css["car"]}>
                  <fieldset className={css["field1"]}>
                    <legend className={css["admin1"]}>CAR DETAILS</legend>
                    <div className={css["first"]}>
                      <div className={css["google1"]}>
                        <p className={css["file"]}>Vehicle Type</p>
                        <select className={css["name"]} name="" id="">
                          <option value="">Select Type</option>
                          <option value="">Mercado</option>
                          <option value="">Bebz</option>
                          <option value="">Pet's</option>
                          <option value="">Mercado</option>
                          <option value="">Entrega</option>
                          <option value="">Limosine</option>
                          <option value="">Economy</option>
                        </select>
                      </div>
                      <div>
                        <div className={css["google1"]}>
                          <p className={css["file"]}>Brand</p>
                          <select className={css["name"]} name="" id="">
                            <option value="">Select Brand</option>
                            <option value="">Modelo teste</option>
                            <option value="">VW</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className={css["second"]}>
                      <div>
                        <div className={css["google1"]}>
                          <p className={css["file"]}>Model</p>
                          <select className={css["name"]} name="" id="">
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className={css["file"]}>KMS driven</p>
                          <input
                            className={css["input"]}
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className={css["third"]}>
                      <div>
                        <div>
                          <p className={css["file"]}>Mileage</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <p className={css["insert"]}>Insert Mileage</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className={css["file"]}>Numberplate</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <p className={css["insert"]}>Insert Car Number</p>
                        </div>
                      </div>
                    </div>
                    <div className={css["fourth"]}>
                      <div>
                        <div>
                          <p className={css["file"]}>Color</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <p className={css["insert"]}>Insert Car Color</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className={css["file"]}>No of passengers</p>
                          <input
                            className={css["input"]}
                            type="number"
                            placeholder=""
                          />
                        </div>
                        <div>
                          <p className={css["insert"]}>
                            Insert Number of Passengers
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className={css["bank"]}>
                  <fieldset className={css["field2"]}>
                    <legend className={css["admin3"]}>BANK DETAILS</legend>
                    <div className={css["first"]}>
                      <div>
                        <div>
                          <p className={css["file"]}>Bank Name</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className={css["file"]}>Branch Name</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className={css["second"]}>
                      <div>
                        <div>
                          <p className={css["file"]}>Holder Name</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className={css["file"]}>Account Number</p>
                          <input
                            className={css["input"]}
                            type="number"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className={css["third"]}>
                      <div>
                        <div>
                          <p className={css["file"]}>IFSC Code</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <p className={css["file"]}>Other Information</p>
                          <input
                            className={css["input"]}
                            type="text"
                            placeholder=""
                          />
                        </div>
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
      </div>
    );
};

export default Createdriver;