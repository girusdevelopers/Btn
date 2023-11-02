import React from 'react';
import css from "./coupons.module.scss";
import TrashIcon from '@/ui/icons/Trash.Icon';
import EditIcon from '@/ui/icons/Edit.icon';
import EyeIcon from '@/ui/icons/Eye.icon';
import DustIcon from '@/ui/icons/Dust.icon';
import SearchIcon from '@/ui/icons/SearchIcon.icon';
import Rightarrow from '@/ui/icons/Rightarrow.icon';
import TrashsIcon from '@/ui/icons/Trashs.icon';

function Coupons  ()  {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Coupons</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow/>
            </div>
            <div className={css["dash1"]}>
              <p>Coupon List</p>
            </div>
          </div>
        </div>
        <div className={css["down-container"]}>
          <div className={css["main-page"]}>
            <div className={css["background"]}>
              <div className={css["create"]}>
                <a href="createdcoupon">
                  <p className={css["crea"]}>+Create Coupon</p>
                </a>
              </div>
              <div className={css["search"]}>
                <div className={css["by"]}>Search By:</div>
                <div className={css["flex"]}>
                  <select className={css["name"]} name="" id="">
                    <option value="">Code</option>
                    <option value="">Discount</option>
                    
                  </select>
                  <div className={css["ser"]}>
                    <input className={css["input"]} type="search" />
                    <i className={css["i"]}>
                      <SearchIcon/>
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
                          <DustIcon/>
                        </p>
                        <p>All</p>
                      </div>
                    </td>
                    <td className={css["table1"]}>Code</td>
                    <td className={css["table1"]}>Discount</td>
                    <td className={css["table1"]}>Type</td>
                    <td className={css["table1"]}>Description</td>
                    <td className={css["table1"]}>Expires At</td>
                    <td className={css["table1"]}>Enabled</td>
                    <td className={css["table1"]}>Actions</td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th1"]}>
                      ride7
                    </td>
                    <td className={css["th2"]}>7 </td>
                    <td className={css["th3"]}>Percentage</td>
                    <td className={css["th4"]}>7 off </td>
                    <td className={css["th5"]}>28 December 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon2/> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      
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
                    CAB15
                    </td>
                    <td className={css["th2"]}>15</td>
                    <td className={css["th3"]}>Fix Price</td>
                    <td className={css["th4"]}>flat 15 off</td>
                    <td className={css["th5"]}>28 August 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    2779d
                    </td>
                    <td className={css["th2"]}>100 </td>
                    <td className={css["th3"]}>Fix Price</td>
                    <td className={css["th4"]}>outsititon cab</td>
                    <td className={css["th5"]}>20 August 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
                      </td>
                    
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon/>
                        </span>
                        <span className={css["edit"]}>
                        <EditIcon/>
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
                    cesita
                    </td>
                    <td className={css["th2"]}>10</td>
                    <td className={css["th3"]}>Percentage</td>
                    <td className={css["th4"]}>test coupon</td>
                    <td className={css["th5"]}>12 June 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    Fhfydyfyfu
                    </td>
                    <td className={css["th2"]}>100</td>
                    <td className={css["th3"]}>Percentage</td>
                    <td className={css["th4"]}>Hhhh</td>
                    <td className={css["th5"]}>31 May 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    new50
                    </td>
                    <td className={css["th2"]}>10</td>
                    <td className={css["th3"]}>	Fix Price</td>
                    <td className={css["th4"]}>ghkjdsiwbvhdvw ndjiwrj</td>
                    <td className={css["th5"]}>31 May 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    new121
                    </td>
                    <td className={css["th2"]}>10</td>
                    <td className={css["th3"]}>Percentage</td>
                    <td className={css["th4"]}>test </td>
                    <td className={css["th5"]}>17 May 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    ZEGO10
                    </td>
                    <td className={css["th2"]}>10</td>
                    <td className={css["th3"]}>Percentage</td>
                    <td className={css["th4"]}>10% off</td>
                    <td className={css["th5"]}>30 April 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    Z1
                    </td>
                    <td className={css["th2"]}>20</td>
                    <td className={css["th3"]}>Fix Price</td>
                    <td className={css["th4"]}>gift</td>
                    <td className={css["th5"]}>26 April 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    New23
                    </td>
                    <td className={css["th2"]}>23</td>
                    <td className={css["th3"]}>	Fix Price</td>
                    <td className={css["th4"]}>New Customers of 2023</td>
                    <td className={css["th5"]}>31 March 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    CAB20
                    </td>
                    <td className={css["th2"]}>20</td>
                    <td className={css["th3"]}>Fix Price</td>
                    <td className={css["th4"]}>fixed 20 off</td>
                    <td className={css["th5"]}>02 March 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    CAB25
                    </td>
                    <td className={css["th2"]}>25</td>
                    <td className={css["th3"]}>	Fix Price</td>
                    <td className={css["th4"]}>fix 25 off</td>
                    <td className={css["th5"]}>22 February 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    GH0909
                    </td>
                    <td className={css["th2"]}>5</td>
                    <td className={css["th3"]}>Percentage</td>
                    <td className={css["th4"]}>test </td>
                    <td className={css["th5"]}>22 February 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    ridenow
                    </td>
                    <td className={css["th2"]}>9</td>
                    <td className={css["th3"]}>Fix Price</td>
                    <td className={css["th4"]}>offer 9</td>
                    <td className={css["th5"]}>16 February 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    RIDE
                    </td>
                    <td className={css["th2"]}>10</td>
                    <td className={css["th3"]}>	Fix Price</td>
                    <td className={css["th4"]}>RIDEE 10</td>
                    <td className={css["th5"]}>02 February 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
                    CAB5
                    </td>
                    <td className={css["th2"]}>5</td>
                    <td className={css["th3"]}>Percentage</td>
                    <td className={css["th4"]}>5% off</td>
                    <td className={css["th5"]}>131 January 2023 12:00 AM</td>
                      <td className={css["for"]}>
                        {/* <ToggleIcon /> */}
                        <label className={css["toggle-switch"]}>
                          <input type="checkbox" />
                          <span className={css["slider"]}></span>
                        </label>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Coupons
