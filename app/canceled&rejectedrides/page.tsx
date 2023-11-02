import React from 'react'
import css from './canceled&rejectedrides.module.scss'
import SearchIcon from '@/ui/icons/SearchIcon.icon'
import DustIcon from '@/ui/icons/Dust.icon'
import EyeIcon from '@/ui/icons/Eye.icon'
import TrashsIcon from '@/ui/icons/Trashs.icon'
import Rightarrow from '@/ui/icons/Rightarrow.icon'

const Canceledrejectedrides = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>All Rides</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Dashboard</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Taxi booking</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Canceled & Rejected Rides</p>
            </div>
          </div>
        </div>
        <div className={css["down-container"]}>
          <div className={css["main-page"]}>
            <div className={css["background"]}>

              <div className={css["search"]}>
                <div className={css["by"]}>Search By:</div>
                <div className={css["flex"]}>
                  <select className={css["name"]} name="" id="">
                    <option value="">User Name</option>
                    <option value="">Driver Name</option>
                    <option value="">Status</option>
                    <option value="">Ride Type</option>

                  </select></div>

                  <div className={css["ser"]}>
                    <input className={css["input"]} type="search" />
                    <i className={css["i"]}>
                      <SearchIcon />
                    </i></div></div>

                    <div className={css["bt"]}>
            <div>
              <button className={css["btn2"]}>Search</button>
            </div>
            <div>
              <button className={css["btn3"]}>Clear</button>
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
                        <p>Al</p>
                      </div>
                    </td>
                    <td className={css["table1"]}>Ride Id</td>
                    <td className={css["table1"]}>User Name</td>
                    <td className={css["table1"]}>Driver Name</td>
                    <td className={css["table1"]}>Amount</td>
                    <td className={css["table1"]}>Ride Type</td>
                    <td className={css["table1"]}>Status</td>
                    <td className={css["table1"]}>Created</td>
                    <td className={css["table1"]}>Actions</td>
                  </tr>
                  <tr className={css["table"]}>
                    <th className={css["th"]}>
                      <input type="checkbox" className={css["checkbox"]} />
                    </th>
                    <td className={css["th2"]}>2444 </td>

                    <td className={css["th2"]}>jim Tan </td>
                    <td className={css["th3"]}>Dian Riswandi</td>
                    <td className={css["th4"]}>	₹30.00 </td>
                    <td className={css["th4"]}>	Normal </td>
                    <td className={css["th4"]}>	<button className={css["rej"]}>Rejected</button></td>
                    <td className={css["th4"]}>	07 October 2023 <p>01:26 PM</p> </td>


                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
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
                    <td className={css["th2"]}>2443</td>
                   <td className={css["th2"]}>Aakash S </td>
                    <td className={css["th3"]}>Padmaja Mandava</td>
                    <td className={css["th4"]}>	₹30.00 </td>

                    <td className={css["th3"]}>Normal</td>
                    <td className={css["th4"]}>	<button className={css["rej"]}>Rejected</button></td>
                    
                    <td className={css["th3"]}>07 October 2023 <p>08:11 AM</p></td>

                   <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
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
                    <td className={css["th2"]}>2442 </td>
                    <td className={css["th2"]}>Modelo Teste APP </td>
                    <td className={css["th3"]}>Advertising Official Riddhi Siddhi</td>
                     <td className={css["th4"]}>₹430.22	</td>
                     <td className={css["th2"]}>Driver Created	 </td>
                     <td className={css["th4"]}><button className={css["rej"]}>Rejected</button></td>
                     
                     <td className={css["th2"]}>07 October 2023 <p>07:24 AM</p> </td>

                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
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
                    <td className={css["th2"]}>2441</td>
                    <td className={css["th2"]}>Nas Lati</td>
                    <td className={css["th3"]}>Tito Gb</td>
                    <td className={css["th4"]}>	₹30.00 </td>
                    <td className={css["th3"]}>Normal</td>
                    <td className={css["th4"]}>	<button className={css["rej"]}>Rejected</button></td>

                    


                    <td className={css["th4"]}>05 October 2023 <p>08:35 PM</p></td>
                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
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
                    <td className={css["th2"]}>2440</td>

                    <td className={css["th2"]}>Tito Vich </td>
                    <td className={css["th3"]}>Tito Gb</td>
                    <td className={css["th4"]}>	₹30.00 </td>
                    <td className={css["th4"]}>	Normal </td>
                    <td className={css["th4"]}>	<button className={css["rej"]}>Rejected</button></td>
                    
                    <td className={css["th4"]}>	05 October 2023 <p>08:04 PM</p> </td>


                    <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
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
                    <td className={css["th2"]}>2439</td>
                    <td className={css["th2"]}>Mustafa Musa </td>
                    <td className={css["th3"]}>Dian Riswandi</td>
                    <td className={css["th4"]}>	₹30.00 </td>

                    <td className={css["th3"]}>Driver Created</td>
                    <td className={css["th4"]}>	<button className={css["rej"]}>Rejected</button></td>
                    
                    <td className={css["th3"]}>05 October 2023 <p>05:33 PM</p></td>

                   <td className={css["th6"]}>
                      <div className={css["action"]}>
                        <span className={css["icon-around"]}>
                          <EyeIcon />
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

export default Canceledrejectedrides
