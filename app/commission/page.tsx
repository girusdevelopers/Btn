import React from "react";
import css from "./commission.module.scss";
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

const Admincommision = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Admin Commission</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Admin Commission</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css["commission"]}>
        <div className={css["background"]}>
          <div className={css["legend"]}>
            <form className={css["form"]}>
              <fieldset className={css["field"]}>
                <legend className={css["admin"]}>ADMIN COMMISION</legend>
                <div className={css["check"]}>
                  <input type="checkbox" className={css["checkbox"]} />
                  <p>Enable Admin Commission</p>
                </div>
                <div className={css["type"]}>
                  <div>
                    <p>Commission Type</p>
                    <select className={css["name"]} name="" id="">
                      <option value="">Percentage</option>
                      <option value="">Fixed</option>
                    </select>
                  </div>
                  <div>
                    <p>Admin Commision</p>
                    <input className={css["input"]} type="search" />
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

export default Admincommision;
