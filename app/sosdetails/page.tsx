import React from "react";
import css from "./sosdetails.module.scss";
import ArrowIcon from "@/ui/icons/Search.icon";
import PlusIcon from "@/ui/icons/Plus.icon";
import GreaterIcon from "@/ui/icons/Greater.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import DropIcon from "@/ui/icons/Drop.icon";
import DeleteblueIcon from "@/ui/icons/Deleteblue.icon";

function Bond() {
  return (
    <>
      <div className={css["main1"]}>
        <div className={css["container"]}>
          <div className={css["side"]}>
            <div className={css["dashboad"]}>SOS Detail</div>

            <div className={css["home1"]}>
              <div className={css["home"]}>Dashboad</div>
              <div className={css["svg"]}>
                <GreaterIcon />
              </div>
              <div className={css["home"]}>SOS Details</div>
            </div>
          </div>
          <div className={css["right"]}>
            <div>
              <div className={css["dev"]}>
                <h3> View Map</h3>
              </div>
              <div className={css["devs"]}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965028692!2d107.56075550588403!3d-6.903271953076563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1696657775147!5m2!1sen!2sin"
                  width="1200"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div>
              <div className={css["user-top"]}>
                <div className={css["user-title col-md-8"]}>
                  <div className={css["card-title"]}>SOS Detail</div>
                </div>
              </div>
              <div>
                <ul className={css["nav-nav-tabs"]}>
                  <li role="presentation">
                    <a
                      href="#user"
                      aria-controls="information"
                      role="tab"
                      data-toggle="tab"
                      className={css["active-shows"]}
                    >
                      User
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#driver"
                      aria-controls="driver"
                      role="tab"
                      data-toggle="tab"
                      className={css["active-show"]}
                    >
                      Driver
                    </a>
                  </li>

                  <li role="presentation">
                    <a
                      href="#rides"
                      aria-controls="rides"
                      role="tab"
                      data-toggle="tab"
                      className={css["active-show"]}
                    >
                      Ride
                    </a>
                  </li>

                  <li role="presentation">
                    <a
                      href="#sos"
                      aria-controls="sos"
                      role="tab"
                      data-toggle="tab"
                      className={css["active-show"]}
                    >
                      SOS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <div
                    role="tabpanel"
                    className={css["tab-pane-active"]}
                    id="user"
                  >
                    <div className={css["col-group"]}>
                      <label className={css["font-weight-bold"]}>
                        User Name:
                      </label>
                      <br />
                      <span>Bbb Nnnn </span>
                    </div>

                    <div className={css["col-group"]}>
                      <label className={css["font-weight-bold"]}>Phone:</label>
                      <br />
                      <span>+8801323597961</span>
                    </div>
                  </div>
                  <div className={css["col-group"]}>
                    <label className={css["font-weight-bold"]}>Image:</label>
                    <div className={css["yes"]}>
                      <span className={css["font-weight-bold"]}>
                        <img
                          src="https://cabme.siswebapp.com/assets/images/users/User_photo1696202897.jpg"
                          height={200}
                          width={100}
                          alt="image"
                        />
                      </span>
                    </div>
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
export default Bond;
