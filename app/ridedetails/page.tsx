import React from "react";
import css from "./ridedetails.module.scss";
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
import StarIcon from "@/ui/icons/Star.icon";
import StariconIcon from "@/ui/icons/staricon.icon";

const Ridedetails = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Ride Detail</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Home</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash"]}>
              <p>All Rides</p>
            </div>
            <div className={css["icon1"]}>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Ride Detail</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css["commission"]}>
        <div className={css["background"]}>
          <div className={css["legend-head"]}>
            <div className={css["legend"]}>
              <div className={css["general"]}>
                <p>General Details</p>
              </div>
              <div className={css["hr"]}>
                <hr />
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>Ride Id :</p>
                </div>
                <div>
                  <p>2457</p>
                </div>
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>Date Created :</p>
                </div>
                <div>
                  <p>13 October 2023 05:19 AM</p>
                </div>
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>Payment Status :</p>
                </div>
                <div>
                  <p>
                    <button className={css["btn"]}>paid</button>
                  </p>
                </div>
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>Payment Method :</p>
                </div>
                <div>
                  <p>
                    <img
                      className={css["image"]}
                      src="https://cabme.siswebapp.com/assets/images/payment_method/image_method_1578411935.0009_2031756.png"
                      alt=""
                    />
                  </p>
                </div>
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>Ride Distance :</p>
                </div>
                <div>
                  <p>14.605 KM</p>
                </div>
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>How many passanger :</p>
                </div>
                <div>
                  <p>3</p>
                </div>
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>Any Children :</p>
                </div>
                <div>
                  <p>No</p>
                </div>
              </div>
              <div className={css["ride"]}>
                <div className={css["rider"]}>
                  <p>Booked By :</p>
                </div>
                <div>
                  <p>Customer</p>
                </div>
              </div>
              <div className={css["ride1"]}>
                <div>
                  <p>
                    <p>Ride Status:</p>
                    <select className={css["name"]} name="" id="">
                      <option value="">New</option>
                      <option value="">Confirmed</option>
                      <option value="">on ride</option>
                      <option value="">Completed</option>
                      <option value="">Canceled</option>
                      <option value="">rejected</option>
                    </select>
                  </p>
                </div>
              </div>
            </div>
            <div className={css["legend2"]}>
              <div className={css["billing2"]}>
                <div className={css["billing"]}>
                  <div className={css["general1"]}>
                    <p>Billing Details</p>
                  </div>
                  <div className={css["hor"]}>
                    <hr />
                  </div>
                  <div className={css["table2"]}>
                    <div className={css["rider"]}>
                      <p>Name:</p>
                    </div>
                    <div className={css["display"]}>
                      <div>
                        <img
                          className={css["image2"]}
                          src="https://cabme.siswebapp.com/assets/images/users/User_photo1697169035.jpg"
                          alt=""
                        />
                      </div>
                      <div className={css["star2"]}>
                        <p>tharit Wanna</p>
                        <p className={css["star"]}>
                          <StariconIcon />5
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={css["ride"]}>
                    <div className={css["rider"]}>
                      <p>Email:</p>
                    </div>
                    <div>
                      <p>tharit.w@kkumail.com</p>
                    </div>
                  </div>
                  <div className={css["ride"]}>
                    <div className={css["rider"]}>
                      <p>Phone:</p>
                    </div>
                    <div>
                      <p>+66937483667</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css["legend3"]}>
                <div className={css["general3"]}>
                  <p>Map View</p>
                </div>
                <div className={css["hor3"]}>
                  <hr />
                </div>
                <div className={css["map"]}>
                  <div className={css["map1"]}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15231.555972766824!2d78.51608279404866!3d17.369073765619497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e8b4b2913b%3A0x49366cfa18225a9e!2sDilsukhnagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1697264162229!5m2!1sen!2sin"
                      width="550"
                      height="300"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css["container3"]}>
            <div className={css["flex"]}>
              <div className={css["mapcon"]}>
                <div className={css["location"]}>
                  <div className={css["general2"]}>
                    <p>Location Details</p>
                  </div>
                  <div className={css["border"]}>
                    <hr />
                  </div>
                  <div className={css["hor3"]}>
                    <hr />
                  </div>
                  <div className={css["thai"]}>
                    <div>
                      <p>
                        4558+QXG ตำบล งิ้วด่อน อำเภอเมืองสกลนคร สกลนคร 47000
                        ประเทศไทย, 4558+QXG, อำเภอเมืองสกลนคร, สกลนคร,
                      </p>
                    </div>
                    <div className={css["para"]}>
                      <p>
                        680 Thanon Nittayo, Muang Chang Wat Sakon Nakhon 47000,
                        Thailand
                      </p>
                    </div>
                  </div>
                  <div className={css["border2"]}>
                    {" "}
                    <hr />
                  </div>
                </div>
              </div>
              <div className={css["price"]}>
                <div className={css["general1"]}>
                  <p>Price Details</p>
                </div>
                <div>
                  <hr />
                </div>
                <div className={css["trans"]}>
                  <div>
                    <p>Transaction Id</p>
                  </div>
                  <div>
                    <p>1697174441347701</p>
                  </div>
                </div>
                <span>
                  <div className={css["main"]}>
                    <div className={css["sub"]}></div>
                    <div className={css["total"]}>
                      <p>Sub Total</p>
                    </div>
                    <div className={css["sub"]}></div>
                  </div>
                </span>
                <div className={css["amount"]}>
                  <div>
                    <p>Sub Total </p>
                  </div>
                  <div>
                    <p>₹30.00</p>
                  </div>
                </div>
                <span>
                  <div className={css["main"]}>
                    <div className={css["sub"]}></div>
                    <div className={css["total"]}>
                      <p>TOTAL</p>
                    </div>
                    <div className={css["sub"]}></div>
                  </div>
                </span>
                <div className={css["trans"]}>
                  <div>
                    <p>Total Amount </p>
                  </div>
                  <div>
                    <p className={css["green"]}>₹30.00</p>
                  </div>
                </div>
                <div className={css["trans"]}>
                  <div>
                    <p>Admin Commission</p>
                  </div>
                  <div>
                    <p className={css["red"]}>( ₹6.00)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={css["contact"]}>
              <div className={css["contact2"]}>
                <div className={css["general5"]}>
                  <p>Driver Detail</p>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img"]}>
                      <img
                        className={css["image4"]}
                        src="https://cabme.siswebapp.com/assets/images/placeholder_image.jpg"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className={css["star3"]}>
                    <p className={css["color"]}>Wannasen Tharit</p>
                    <p className={css["star"]}>
                      <StariconIcon />5
                    </p>
                  </div>
                </div>
                <div>
                  <p className={css["img1"]}>Contact Info :</p>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img"]}>Email:</p>
                  </div>
                  <div>
                    <p className={css["color"]}>admin@cabme.com</p>
                  </div>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img"]}>Phone:</p>
                  </div>
                  <div>
                    <p className={css["color"]}>+66617106669</p>
                  </div>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>

                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img2"]}>Car Information :</p>
                  </div>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img"]}>Brand : </p>
                  </div>
                  <div>
                    <p className={css["color"]}>Modelo teste</p>
                  </div>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img"]}>Car Number :</p>
                  </div>
                  <div>
                    <p className={css["color"]}>123211</p>
                  </div>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img"]}>Car Model :</p>
                  </div>
                  <div>
                    <p className={css["color"]}>Teste Clássico</p>
                  </div>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
                <div className={css["ridee"]}>
                  <div className={css["riders"]}>
                    <p className={css["img"]}>Car Make :</p>
                  </div>
                </div>
                <div className={css["hor5"]}>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className={css["draw"]}>
            <div className={css["box1"]}>
              <div className={css["customer5"]}>
                <div className={css["generals"]}>
                  <p>Customer Review</p>
                </div>
                <div className={css["hor6"]}>
                  <hr />
                </div>
                <div className={css["riderr"]}>
                  <p>ขับเร็วดีครับ</p>
                </div>
              </div>
              <div>
                <div className={css["box2"]}>
                  <div className={css["generals2"]}>
                    <p>Driver Review</p>
                  </div>
                  <div className={css["hor6"]}>
                    <hr />
                  </div>
                  <div className={css["riderrs"]}>
                    <p>No Review Found</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css["btn4"]}>
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
  );
};

export default Ridedetails;
