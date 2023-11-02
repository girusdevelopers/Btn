import React from "react";
import css from "./dashboard.module.scss";
import WifiIcon from "@/ui/icons/Wifi.icon";
import User from "../user/page";
import UserIcon from "@/ui/icons/User.icon";
import PacketIcon from "@/ui/icons/Packet.icon";
import CalenderIcon from "@/ui/icons/Calender.icon";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Verticalchart } from "@/component/verticalchart";
import { DoughnutComponent } from "@/component/verticalchart/doughtnut";
import User1Icon from "@/ui/icons/User1.icon";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-container"]}>
      <div className={css["total"]}>
            <h2>Total Trip</h2>
          </div>
        <div className={css["main-box"]}>
          <Link href="/user">
            <div className={css["main-card"]}>
              <div className={css["data"]}>
                <p className={css["number"]}>327</p>
                <p>users</p>
              </div>
              <div className={css["user1"]}>
                <UserIcon />
              </div>
            </div>
          </Link>
          <Link href="/all-drivers">
            <div className={css["main-card"]}>
              <div className={css["data"]}>
                <p className={css["number"]}>27</p>
                <p>Drivers</p>
              </div>
              <div className={css["user"]}>
                <WifiIcon />
              </div>
            </div>
          </Link>

          <Link href="/completedrides">
            <div className={css["main-card"]}>
              <div className={css["data"]}>
                <p className={css["number"]}>300</p>
                <p>Total Earning</p>
              </div>
              <div className={css["user2"]}>
                <PacketIcon className={css["icon"]} />
              </div>
            </div>
          </Link>


          <Link href="/completedrides">
            <div className={css["main-card"]}>
              <div className={css["data"]}>
                <p className={css["number"]}>797</p>
                <p>Admin Commision</p>
              </div>
              <div className={css["user2"]}>
                <PacketIcon className={css["icon"]} />
              </div>
            </div>
          </Link>


        </div>
        {/* <div className={css["main-box1"]}>
         
        </div> */}
        <div className={css["second-box"]}>
          
          <div className={css["box"]}>
            <Link href="/completedrides">
              <div className={css["box1"]}>
                <div className={css["box-data"]}>
                  <div>
                    <p className={css["number"]}>0</p>
                    <p>Completed</p>
                  </div>
                  <div className={css["user3"]}>
                    <CalenderIcon />
                  </div>
                </div>
              </div>
            </Link>

            <div className={css["se-box"]}>
              <Link href="/confirmedrides">
                <div className={css["box2"]}>
                  <div className={css["car"]}>
                    <div>
                      <h2>1</h2>
                      <p>Confirmed</p>
                    </div>
                    <div className={css["user"]}>
                      <WifiIcon />
                    </div>
                  </div>
                  <img
                    className={css["b"]}
                    src="https://cabme.siswebapp.com/images/pink-grph.png"
                  />
                </div>
              </Link>
            </div>

            <div className={css["box3"]}>
              <div className={css["box2"]}>
                <div className={css["car"]}>
                  <div>
                    <h2>1</h2>
                    <p>Ongoing</p>
                  </div>
                  <div>
                    <WifiIcon />
                  </div>
                </div>
                <img
                  className={css["b"]}
                  src="https://cabme.siswebapp.com/images/pink-grph.png"
                />
              </div>
            </div>
          {/* </div>

          <div className={css["box"]}> */}
            <div className={css["box1"]}>
              <div className={css["box-data"]}>
                <div>
                  <p className={css["number"]}>0</p>
                  <p>Delayed</p>
                </div>
                <div className={css["user3"]}>
                  <CalenderIcon />
                </div>
              </div>
            </div>
            <div className={css["se-box"]}>
              <div className={css["box2"]}>
                <div className={css["car"]}>
                  <div>
                    <h2>1</h2>
                    <p>Pending</p>
                  </div>
                  <div className={css["user"]}>
                    <WifiIcon />
                  </div>
                </div>
                <img
                  className={css["b"]}
                  src="https://cabme.siswebapp.com/images/pink-grph.png"
                />
              </div>
            </div>
            <Link href="/canceled&rejectedrides">
              <div className={css["box3"]}>
                <div className={css["box2"]}>
                  <div className={css["car"]}>
                    <div>
                      <h2>1</h2>
                      <p>Cancelled</p>
                    </div>
                    <div>
                      <User1Icon />
                    </div>
                  </div>
                  <img
                    className={css["b"]}
                    src="https://cabme.siswebapp.com/images/pink-grph.png"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={css["third-container"]}>
          <div className={css["total"]}>
            <h2>Today's Trip</h2>
          </div>
          <div className={css["main-box"]}>
            <Link href="/user">
              <div className={css["main-card"]}>
                <div className={css["data"]}>
                  <p className={css["number"]}>327</p>
                  <p> fgfdgfdd</p>
                </div>
                <div className={css["user"]}>
                  <UserIcon />
                </div>
              </div>
            </Link>
            <div className={css["main-card"]}>
              <div className={css["data"]}>
                <p className={css["number"]}>327</p>
                <p>Drivers</p>
              </div>
              <div className={css["user"]}>
                <WifiIcon />
              </div>
            </div>

            <div className={css["main-card"]}>
              <div className={css["data"]}>
                <p className={css["number"]}>327</p>
                <p>Total Earnings</p>
              </div>
              <div className={css["user2"]}>
                <PacketIcon />
              </div>
            </div>
            <div className={css["main-card"]}>
              <div className={css["data"]}>
                <p className={css["number"]}>327</p>
                <p>Admin Commision</p>
              </div>
              <div className={css["user2"]}>
                <PacketIcon />
              </div>
            </div>

          </div>
          {/* <div className={css["main-box1"]}> */}
            
          {/* </div> */}
          <div className={css["box"]}>
            <div className={css["box1"]}>
              <div className={css["box-data"]}>
                <div>
                  <p className={css["number"]}>0</p>
                  <p>completed trip</p>
                </div>
                <User1Icon />
                <div>{/* className={css["icon"]} */}</div>
              </div>
            </div>
            <div className={css["se-box"]}>
              <div className={css["box2"]}>
                <div className={css["car"]}>
                  <div>
                    <h2>1</h2>
                    <p>Conformed Trip</p>
                  </div>
                  <div className={css["user"]}>
                    <WifiIcon />
                  </div>
                </div>
                <img
                  className={css["b"]}
                  src="https://cabme.siswebapp.com/images/pink-grph.png"
                />
              </div>
            </div>
            <div className={css["box3"]}>
              <div className={css["box2"]}>
                <div className={css["car"]}>
                  <div>
                    <h2>1</h2>
                    <p>Cancelled Trip</p>
                  </div>
                  <div>
                    <User1Icon />
                  </div>
                </div>
                <img
                  className={css["b"]}
                  src="https://cabme.siswebapp.com/images/pink-grph.png"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          {Array.from({length:1}).map((_,index)=>{
            return<data key={index}/>
          })}
        </div> */}
        <div className={css["main-bar"]}>
          <div className={css["main-bar1"]}>
            <div className={css["main-text"]}>Total Sales</div>
            <div className={css["bar"]}>
              <Verticalchart />
            </div>
          </div>
          <div className={css["main-bar1"]}>
            <div className={css["main-text"]}>Service Overview</div>
            <div className={css["bar"]}>
              <DoughnutComponent />
            </div>
          </div>
          <div className={css["main-bar1"]}>
            <div className={css["main-text"]}>Sales Overview</div>
            <div className={css["bar"]}>
              <DoughnutComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
