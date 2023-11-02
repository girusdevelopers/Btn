import React from 'react'
import css from './approval.module.scss'
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";
import DocIcon from '@/ui/icons/Doc.Icon';
import DocumentIcon from "@/ui/Document.icon";

const Approvalpendingdrivers = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Approval Pending Drivers</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Drivers</p>
            </div>
          </div>
        </div>
        <div className={css["down-container"]}>
          <div className={css["main-page"]}>
            <div className={css["background"]}>
              <div className={css["create"]}>
                <a href="createdriver">
                  <p className={css["crea"]}>+ Create Driver</p>
                </a>
              </div>
              <div className={css["search"]}>
                <div className={css["by"]}>Search By:</div>
                <div className={css["flex"]}>
                  <select className={css["name"]} name="" id="">
                    <option value="">User Name</option>
                    <option value="">Email</option>
                    <option value="">Phone</option>
                  </select>
                  <div className={css["ser"]}>
                    <input className={css["input"]} type="search" />
                    <i className={css["i"]}>
                      <SearchIcon />
                    </i>
                  </div>
                  <div className={css["clear"]}>
                    <p>clear</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={css["maintable"]}>
              <div className={css["table"]}>
                <table className={css["table"]}>
                  <tr className={css["table"]}>
                    <td className={css["table1"]}>
                      <div className={css["combine-icons"]}>
                        <input type="checkbox" className={css["checkbox"]} />
                        <p>
                          <DustIcon />
                        </p>
                        <p className={css["all"]}>All</p>
                      </div>
                    </td>
                    <td className={css["table1"]}>Image</td>
                    <td className={css["table1"]}>Driver Name</td>
                    <td className={css["table1"]}>Documents</td>
                    <td className={css["table1"]}>Email</td>
                    <td className={css["table1"]}>Phone</td>
                    <td className={css["table1"]}>Vehicle Type</td>
                    <td className={css["table1"]}>Total Rides</td>
                    <td className={css["table1"]}>Wallet History</td>
                    <td className={css["table1"]}>Status</td>
                    <td className={css["table1"]}>Actions</td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      <a href="">
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696793851.png"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="testuser">test user</a>{" "}
                    </td>
                    <td className={css["th3"]}>
                        <DocumentIcon />
                      </td>
                    <td className={css["th3"]}>gpsdeki@gmail.com</td>
                    <td className={css["th4"]}>+381668518085 </td>
                    <td className={css["th3"]}>VehicleX</td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">0</a>{" "}
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">Wallet History</a>{" "}
                    </td>
                    <td className={css["th5"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      <a href="">
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696755980.jpg"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="AAdetails">A A</a>{" "}
                    </td>
                    <td className={css["th3"]}>
                        <DocumentIcon />
                      </td>
                    <td className={css["th3"]}>A@gmail.com</td>
                    <td className={css["th4"]}>777777777 </td>
                    <td className={css["th3"]}>VehicleX</td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">0</a>{" "}
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">Wallet History</a>{" "}
                    </td>
                    <td className={css["th5"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      <a href="">
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696702001.jpeg"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="userdetails">george souza</a>{" "}
                    </td>
                    <td className={css["th3"]}>
                        <DocumentIcon />
                      </td>
                    <td className={css["th3"]}>geoteccell@gmail.com</td>
                    <td className={css["th4"]}>5521994377135</td>
                    <td className={css["th3"]}>VehicleX</td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">0</a>{" "}
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">Wallet History</a>{" "}
                    </td>
                    <td className={css["th5"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      <a href="">
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696344424.png"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="Testuser2">Test User</a>{" "}
                    </td>
                    <td className={css["th3"]}>
                        <DocumentIcon />
                      </td>
                    <td className={css["th3"]}>testuser@test.com</td>
                    <td className={css["th4"]}>+5521999998888</td>
                    <td className={css["th3"]}>VehicleX</td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">0</a>{" "}
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">Wallet History</a>{" "}
                    </td>
                    <td className={css["th5"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      <a href="">
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696394160.jpg"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="midya">mid ya</a>
                    </td>
                    <td className={css["th3"]}>
                        <DocumentIcon />
                      </td>
                    <td className={css["th3"]}>emadart24@gmail.com</td>
                    <td className={css["th4"]}>+967736100660</td>
                    <td className={css["th3"]}>VehicleX</td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">0</a>{" "}
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">Wallet History</a>{" "}
                    </td>
                    <td className={css["th5"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      <a href="">
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696394160.jpg"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="midya">mid ya</a>
                    </td>
                    <td className={css["th3"]}>
                        <DocumentIcon />
                      </td>
                    <td className={css["th3"]}>emadart24@gmail.com</td>
                    <td className={css["th4"]}>+967736100660</td>
                    <td className={css["th3"]}>VehicleX</td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">0</a>{" "}
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">Wallet History</a>{" "}
                    </td>
                    <td className={css["th5"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      <a href="">
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/dispatcher_users/dispatcher_user_profile1696394160.jpg"
                          alt=""
                        />
                      </a>
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="midya">mid ya</a>
                    </td>
                    <td className={css["th3"]}>
                        <DocumentIcon />
                      </td>
                    <td className={css["th3"]}>emadart24@gmail.com</td>
                    <td className={css["th4"]}>+967736100660</td>
                    <td className={css["th3"]}>VehicleX</td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">0</a>{" "}
                    </td>
                    <td className={css["th2"]}>
                      {" "}
                      <a href="#">Wallet History</a>{" "}
                    </td>
                    <td className={css["th5"]}>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    </td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
                        </span>
                        <span className={css["edit"]}>
                          <EditIcon />
                        </span>
                        <span className={css["trash"]}>
                          <TrashsIcon />
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>

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
              Showing 1 to 20 of 41 results{" "}
            </div>
          </div>{" "}

              </div>

              
    
            </div>
           
            

          </div>
        </div>
      </div>

    
      
    </div>
  )
}

export default Approvalpendingdrivers
