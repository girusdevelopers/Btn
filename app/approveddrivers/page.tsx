import React from "react";
import css from "./drivers.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";
import DocumentIcon from "@/ui/Document.icon";
import Link from "next/link";

const Drivers = () => {
    return (
      <div className={css["container"]}>
        <div className={css["main-head"]}>
          <div className={css["main"]}>
            <div className={css["country"]}>
              <p>Approved Drivers</p>
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
                    <p className={css["crea"]}>+Create Driver</p>
                    </a>
                  
                </div>
                <div className={css["search"]}>
                  <div className={css["by"]}>Search By:</div>
                  <div className={css["flex"]}>
                    <select className={css["name"]} name="" id="">
                      <option value="">User Name</option>
                      <option value="">Phone</option>
                      <option value="">Email</option>
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
                  <table className={css["table2"]}>
                    <tr className={css["table3"]}>
                      <th className={css["table1"]}>
                        <div className={css["combine-icons"]}>
                          <input type="checkbox" className={css["checkbox"]} />
                          <p>
                            <DustIcon />
                          </p>
                          <p className={css["all"]}>All</p>
                        </div>
                      </th>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/driver_image_1696663117.png"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>
                        Advertising official riddhi siddhi
                      </td>
                      <td className={css["th3"]}>
                        <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>testnmh1@gmail.com</td>
                      <td className={css["th5"]}>8770377341</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696526854.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Dian Riswandi</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>aleshadian7@gmail.com</td>
                      <td className={css["th5"]}>+6285869092608</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>2</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696427961.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Test yakup</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>richdesign544@gmail.com</td>
                      <td className={css["th5"]}>+905439638241 </td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>0</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/driver_image_1696349927.png"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Douglas silva vivaldo</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>vivaldo@gmail.com</td>
                      <td className={css["th5"]}>69999292193</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696326130.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Fozi Mozi</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>Fozimozi@gmail.com</td>
                      <td className={css["th5"]}>+201025991889</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696304833.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>jejje Uueue</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>Jejjd@gmail.com</td>
                      <td className={css["th5"]}>+524438762228</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696203347.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>jhh Nhhh</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>obuj590@gmail.com</td>
                      <td className={css["th5"]}>+8801928663482</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1696125158.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Dovla Dovla</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>Shefserisa@gmail.com</td>
                      <td className={css["th5"]}>+38163255599</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1695894338.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Dorine Ouma</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>Hillarychegemugo@gmail.com</td>
                      <td className={css["th5"]}>+254714687981</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1695783935.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Padmaja Mandava</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>padmajawd@gmail.com</td>
                      <td className={css["th5"]}>+919951027800</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/driver_image_1695783672.png"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Kishore ratna</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>dgsuidesigner@gmail.com</td>
                      <td className={css["th5"]}>9347393121</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1695722118.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>cab driver</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>user1@cabme.com</td>
                      <td className={css["th5"]}>+918596743210</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1695709326.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Rishab gautham</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>driver@cabme.com</td>
                      <td className={css["th5"]}>+917043755472</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/driver_image_1695702691.png"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Cabme Driver</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>testnmh1@gmail.com</td>
                      <td className={css["th5"]}>8770377341</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                        {" "}
                        <img
                          className={css["image"]}
                          src="https://cabme.siswebapp.com/assets/images/driver/Driver_photo1695670026.jpg"
                          alt=""
                        />
                      </td>
                      <td className={css["th2"]}>Sauvik saha</td>
                      <td className={css["th3"]}>
                      <Link href="/approveddocument"><DocumentIcon /></Link>
                      </td>
                      <td className={css["th4"]}>sauvik.me@gmail.com</td>
                      <td className={css["th5"]}>+918670766430</td>
                      <td className={css["th6"]}>Mercado</td>
                      <td className={css["th7"]}>1</td>
                      <td className={css["th8"]}>Wallet History</td>

                      <td className={css["th9"]}>
                        <td className={css["for"]}>
                          {/* <ToggleIcon /> */}
                          <label className={css["toggle-switch"]}>
                            <input type="checkbox" />
                            <span className={css["slider"]}></span>
                          </label>
                        </td>
                      </td>
                      <td className={css["th10"]}>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Drivers;
