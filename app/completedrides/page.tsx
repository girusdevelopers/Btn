import React from 'react'
import css from './completedrides.module.scss'
import SearchIcon from '@/ui/icons/SearchIcon.icon'
import DustIcon from '@/ui/icons/Dust.icon'
import EyeIcon from '@/ui/icons/Eye.icon'
import TrashsIcon from '@/ui/icons/Trashs.icon'
import Rightarrow from '@/ui/icons/Rightarrow.icon'
import Link from 'next/link'

const Completedrides = () => {
  return (
    <div className={css["container"]}>
    <div className={css["main-head"]}>
      <div className={css["main"]}>
        <div className={css["country"]}>
          <p>Completed Rides</p>
        </div>
        <div className={css["sidecon"]}>
          <div className={css["dash"]}>
            <p>Dashboard</p>
          </div>
          <div>
            <Rightarrow />
          </div>
          <div className={css["dash1"]}>
            <p>Tax booking </p>
          </div>
          <div>
            <Rightarrow />
          </div>
          <div className={css["dash1"]}>
            <p>Completed Rides </p>
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

                  <td className={css["th2"]}> <Link href="/userdetails">jim Tan</Link>  </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Dian Riswandi</Link> </td>
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
                 <td className={css["th2"]}> <Link href="/userdetails">Aakash S</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Padmaja Mandava</Link> </td>
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
                  <td className={css["th2"]}> <Link href="/userdetails">Modelo Teste APP</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Advertising Official Riddhi Siddhi</Link> </td>
                   <td className={css["th4"]}>₹430.22	</td>
                   <td className={css["th2"]}>Driver Created	 </td>
                   <td className={css["th4"]}><button className={css["rej1"]}>Completed</button></td>
                   
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
                  <td className={css["th2"]}> <Link href="/userdetails">Nas Lati</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Tito Gb</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th3"]}>Normal</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>

                  


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

                  <td className={css["th2"]}> <Link href="/userdetails">Tito Vich</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Tito Gb</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th4"]}>	Normal </td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  
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
                  <td className={css["th2"]}> <Link href="/userdetails">Mustafa Musa</Link> </td>
                  <td className={css["th3"]}>  <Link href="/userdetails">Dian Riswandi</Link></td>
                  <td className={css["th4"]}>	₹30.00 </td>

                  <td className={css["th3"]}>Driver Created</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  
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
                <tr className={css["table"]}>
                  <th className={css["th"]}>
                    <input type="checkbox" className={css["checkbox"]} />
                  </th>
                 <td className={css["th2"]}>2438</td>
               <td className={css["th2"]}> <Link href="/userdetails">Ahmad Kolakji</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Fozi Mozi</Link></td>
                   <td className={css["th4"]}>₹30.00		</td>
                   <td className={css["th2"]}>Normal	 </td>
                   <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                   
                   <td className={css["th2"]}>04 October 2023 <p>07:07 PM</p> </td>

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
                 <td className={css["th2"]}>2437</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Ahmad Kolakji</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Fozi Mozi</Link> </td>
                  <td className={css["th4"]}>	₹35.00 </td>
                  <td className={css["th3"]}>Normal</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  


                  <td className={css["th4"]}>04 October 2023 <p>06:44 PM</p></td>
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
                  <td className={css["th2"]}>2436</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Yakup Z</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Padmaja Mandava</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th4"]}>	Normal </td>
                  <td className={css["th4"]}>	<button className={css["rej2"]}>New</button></td>
                  
                  <td className={css["th4"]}>	04 October 2023 <p>01:40 PM</p> </td>


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
                  <td className={css["th2"]}>2435</td>

                  <td className={css["th2"]}>  <Link href="/userdetails">Alair Silva</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Douglas Silva Vivaldo</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>

                  <td className={css["th3"]}>Normal</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  
                  <td className={css["th3"]}>03 October 2023 <p>04:25 PM</p></td>

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
                  <td className={css["th2"]}>2434</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Afsar Khan</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Rishabh Gautam</Link> </td>
                   <td className={css["th4"]}>₹30.00</td>
                   <td className={css["th2"]}>Normal </td>
                   <td className={css["th4"]}>	<button className={css["rej"]}>Rejected</button></td>
                   
                   <td className={css["th2"]}>03 October 2023 <p>06:42 AM</p> </td>

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
                  <td className={css["th2"]}>2433</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Behd Jjsjs</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jejje Uueue</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th3"]}>Normal</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>

              


                  <td className={css["th4"]}>03 October 2023 <p>04:04 AM</p></td>
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

                  <td className={css["th2"]}>2432</td>

                  <td className={css["th2"]}>  <Link href="/userdetails">Bbb Nnnn</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jhh Nhhh</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th4"]}>	Driver Created </td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  
                  <td className={css["th4"]}>	02 October 2023 <p>12:08 AM</p> </td>


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
                  <td className={css["th2"]}>2431</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Teste 01</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jhh Nhhh</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>

                  <td className={css["th3"]}>Driver Created</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  
                  <td className={css["th3"]}>02 October 2023 <p>12:07 AM</p></td>

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
                  <td className={css["th2"]}>2430</td>

                  <td className={css["th2"]}>  <Link href="/userdetails">Mustafa Musa</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jhh Nhhh</Link> </td>
                   <td className={css["th4"]}>₹30.00 	</td>
                   <td className={css["th2"]}>Driver Created	 </td>
                   <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                   
                   <td className={css["th2"]}>02 October 2023 <p>12:04 AM</p> </td>

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
                  <td className={css["th2"]}>2429</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Bbb Nnnn</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jhh Nhhh</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th3"]}>Driver Created</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  


                  <td className={css["th4"]}>02 October 2023 <p>12:01 AM</p></td>
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
                  <td className={css["th2"]}>2428</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Bbb Nnnn</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jhh Nhhh</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th4"]}>	Driver Created </td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
          
                  <td className={css["th4"]}>	01 October 2023 <p>11:58 PM</p> </td>


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
                  <td className={css["th2"]}>2427</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Bbb Nnnn</Link>  </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jhh Nhhh</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>

                  <td className={css["th3"]}>Driver Created	</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                  
                  <td className={css["th3"]}>01 October 2023 <p>11:49 PM</p></td>

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

                  <td className={css["th2"]}>2426</td>

                  <td className={css["th2"]}>  <Link href="/userdetails">Modelo Teste APP</Link> </td>
                  <td className={css["th3"]}> <Link href="/userdetails">Jhh Nhhh</Link> </td>
                   <td className={css["th4"]}>₹30.00		</td>
                   <td className={css["th2"]}>Driver Created </td>
                   <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>
                   
                   <td className={css["th2"]}>01 October 2023 <p>11:43 PM</p> </td>

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
                 <td className={css["th2"]}>2425</td>

                  <td className={css["th2"]}> <Link href="/userdetails">Davla user</Link> </td>
                  <td className={css["th3"]}>  <Link href="/userdetails">Davla Davla</Link> </td>
                  <td className={css["th4"]}>	₹30.00 </td>
                  <td className={css["th3"]}>Normal</td>
                  <td className={css["th4"]}>	<button className={css["rej1"]}>Completed</button></td>

                  


                  <td className={css["th4"]}>01 October 2023 <p>02:01 AM</p></td>
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

export default Completedrides
