"use client";
import React from 'react'
import css from './useruser.module.scss'
import Rightarrow from '@/ui/icons/Rightarrow.icon';
import StarIcon from '@/ui/icons/Star.icon';
import Link from 'next/link';
import SvgIcon from '@/ui/icons/Svg.icon';
import MoreIcon from '@/ui/icons/More.icon';
import TrashIcon from '@/ui/icons/Trash.Icon';

const Useruser = () => {
  const [state, setState] = React.useState("information");

  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>User Details</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Administration tools</p>
            </div>
            <div className={css["icon1"]}>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>User Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css["box"]}>
        <div className={css["blue-box"]}>
          <div>
            <img
              className={css["image"]}
              src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696326130.jpg"
              alt=""
            />
          </div>
          <div>
            <p className={css["para"]}>Details of Fozi Mozi</p>
          </div>
        </div>
        <div className={css["info"]}>
          <div className={css["inform"]}>
            <a onClick={() => setState("information")}>
              <p>Information</p>
            </a>
          </div>

          <div className={css["ride"]}>
            <a onClick={() => setState("rides")}>
              <p>Rides</p>
            </a>
          </div>
          <div className={css["veh"]}>
            <a onClick={() => setState("vehicle")}>
              <p>vehicle</p>
            </a>
          </div>

          <div className={css["wallet"]}>
            <a onClick={() => setState("wallet Transaction")}>
              <p>wallet Transaction</p>
            </a>
          </div>

        </div>
        <div className={css["horizontal"]}>
          <hr />
        </div>
        <div className={css["minicontainer"]}>
          {state === "information" && (
            <div className={css["minimain-page"]}>
              <div className={css["phone"]}>
                <div className={css["phone1"]}>
                  <p>Phone:</p>
                  <p>+201025991889</p>
                </div>
                <div className={css["email"]}>
                  <p>Email :</p>
                  <p>Fozimozi@gmail.com</p>
                </div>

              </div>
              <div className={css["phone"]}>
                <div className={css["phone1"]}>
                  <p>Bank Name:</p>

                </div>
                <div className={css["creat"]}>
                  <p>Branch Name:</p>
                </div>


              </div>

              <div className={css["status"]}>
                <div className={css["stat"]}>
                  <p>Status:</p>
                  <button className={css["btn"]}>Disabled</button>
                </div>

                <div className={css["creat"]}>
                  <p>Holder Name :</p>

                </div>
              </div>
              <div className={css["status"]}>
                <div className={css["stat"]}>
                  <p>Account Number :</p>

                </div>

                <div className={css["creat"]}>
                  <p>IFSC Code</p>

                </div>
              </div>
              <div className={css["status"]}>
                <div className={css["stat"]}>
                  <p>Other Information :</p>

                </div>

                <div className={css["creat"]}>
                  <p>Created at :</p>
                  <p>03 October 2023 09:38 AM</p>

                </div>
              </div>
              <div className={css["status"]}>
                <div className={css["stat"]}>
                  <p>Edited :</p>
                  <p>04 October 2023 07:06 PM</p>
                </div>

                <div className={css["creat"]}>
                  <p>Wallet Balance :</p>
                  <p>₹94.00</p>

                </div>

              </div>
              <div className={css["status1"]}>
                <div className={css["stat"]}>
                  <p>Rating :</p>
                  <p><StarIcon /> 5.0</p>

                </div>


                <div className={css["disable"]}>
                  <Link href="enableaccount">

                    <p>Diable Account<SvgIcon /></p>

                  </Link>
                </div>








              </div>



            </div>











          )}

          {state === "rides" && (
            <div>
              <div className={css["container1"]}>
                <div className={css["main-page1"]}>
                  <div className={css["phone1"]}>
                    <div className={css["table"]}>
                      <table className={css["table"]}>
                        <tr className={css["table"]}>
                          <td className={css["table1"]}>Ride Id</td>
                          <td className={css["table1"]}>Driver Name</td>
                          <td className={css["table1"]}>Ride Type</td>
                          <td className={css["table1"]}>Status</td>
                          <td className={css["table1"]}>Created</td>
                          <td className={css["table1"]}>Actions</td>
                        </tr>
                        <tr className={css["table"]}>
                          <td className={css["th1"]}>2438</td>
                          <td className={css["th2"]}>Fozi mozi</td>
                          <td className={css["th3"]}>
                            Normal
                          </td>
                          <td className={css["th4"]}> <button className={css["complt"]}>completed</button></td>
                          <td className={css["th5"]}>04 October 2023 07:07 PM</td>
                          <th className={css["th"]}>
                            <div className={css["action"]}>
                              <span className={css["icon-around"]}>
                                <MoreIcon />
                              </span>
                              &nbsp;
                              <span className={css["edit"]}>
                                <TrashIcon />
                              </span>
                            </div>
                          </th>
                        </tr>
                        <tr className={css["table"]}>
                          <td className={css["th1"]}>2437</td>
                          <td className={css["th2"]}>Fozi mozi</td>
                          <td className={css["th3"]}>
                            Normal
                          </td>
                          <td className={css["th4"]}> <button className={css["complt"]}>completed</button></td>
                          <td className={css["th5"]}>04 October 2023 06:44 PM</td>
                          <th className={css["th"]}>
                            <div className={css["action"]}>
                              <span className={css["icon-around"]}>
                                <MoreIcon />
                              </span>
                              &nbsp;
                              <span className={css["edit"]}>
                                <TrashIcon />
                              </span>
                            </div>
                          </th>
                        </tr>

                      </table>
                    </div>
                  </div>
                </div>
              </div>


            </div>


          )}
          {state === "rides" && (

            <div className={css["container2"]}>
              <div className={css["cont1"]}>

                <div>
                  jvjlzc

                </div>
                <div>
                  ,vn,mxc

                </div>
                <div>
                  jvjlzc

                </div>
                <div>
                  ,vn,mxc

                </div>
                <div>
                  jvjlzc

                </div>
                <div>
                  ,vn,mxc

                </div>
                <div>
                  jvjlzc

                </div>
                <div>
                  ,vn,mxc

                </div>

              </div>

            </div>

          )}

        </div>
      </div>
    </div>
  );
};

export default Useruser;