import css from "@/styles/header.module.scss";

import MapviewIcon from "@/ui/icons/Mapview.Icon";
import ComplaintsIcon from "@/ui/icons/Complaints.Icon";
import SosIcon from "@/ui/icons/Sos.Icon";
import NotificationIcon from "@/ui/icons/Notification.Icon";
import VechicleIcon from "@/ui/icons/Vechicle.Icon";
import VechiclesettingsIcon from "@/ui/icons/Vehiclesettings.Icon";
import CmspagesIcon from "@/ui/icons/Cmspages.Icon";
import PaymentIcon from "@/ui/icons/Payment.Icon";
import AdministationIcon from "@/ui/icons/Admini.Icon";
import ReportIcon from "@/ui/icons/Report.Icon";
import Link from "next/link";
import HomeIcon from "@/ui/icons/Home.icon";
import SideuserIcon from "@/ui/icons/Sideuser.Icon";
import DispatcherIcon from "@/ui/icons/Dispatcher.Icon";
import CouponsIcon from "@/ui/icons/Coupons.Icon";
import AllrideIcon from "@/ui/icons/Allrides.Icon";
import DriverIcon from "@/ui/icons/Driver.Icon";
function Sidebar() {
  return (
    <div className={css["container"]}>
      <div className={css["sidebar"]}>
       
      
        <Link href="/dashboard">
          <div className={css["sidebar1"]}>
            <HomeIcon className={css["svg"]}/>
            <p className={css["tittle"]}>Dashboard</p>
          </div>
        </Link>

        <Link href="/user">
          <div className={css["sidebar1"]}>
            <SideuserIcon />

            <p className={css["tittle"]}> Users</p>
          </div>
        </Link>

        <Link href="/dispatcherusers">
          <div className={css["sidebar1"]}>
            <DispatcherIcon />

            <p className={css["tittle"]}> Dispatcher Users</p>
          </div>
        </Link>

        <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              
              <li className={css["tittle"]}>Drivers</li>

              <option value="">
                <Link href="/all-driver">All Drivers</Link>
              </option>

              <option value="">

                <Link href="/approveddrivers">Approved Drivers</Link>
              </option>

              <option value="">

                <Link href="/approvalpendingdrivers">Approved Pending Drivers</Link>
              </option>
            </select>
          </div>

        {/* <div className={css["sidebar1"]}>
          <DriverIcon />
          <div className={css["dropdown"]}>
            <ul className={css["list"]}>
              <p className={css["tittle"]}> Drivers</p>
              <li>

                <Link href="/all-drivers">All Drivers</Link>
              </li>
              <li>
<<<<<<< HEAD
=======

>>>>>>> 44be6b211148f5ef8c40633ec4638f4f867748fc
                <Link href="/approveddrivers">Approved Drivers</Link>
              </li>
              <li>
                <Link href="/approvalpendingdrivers">
                  Approval Pending Drivers
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <div className="dropdown-container">
          <a href="#">"/all-drivers"</a>
          <a href="#"> "/approveddrivers"</a>
          <a href="#">"/approvalpendingdrivers"</a>
        </div> */}

        <Link href="/coupons">
          <div className={css["sidebar1"]}>
            <CouponsIcon />

            <p className={css["tittle"]}> Coupons</p>
          </div>
        </Link>
        <Link href="/riders">
          <div className={css["sidebar1"]}>
            <AllrideIcon />

            <p className={css["tittle"]}> All Rides</p>
          </div>
        </Link>
        <Link href="/mapview">
          <div className={css["sidebar1"]}>
            <MapviewIcon />

            <p className={css["tittle"]}>Map View</p>
          </div>
        </Link>
        <p>
          <p className={css["btn"]}>OTHER SERVICES</p>
        </p>
        <Link href="/complaints">
          <div className={css["sidebar1"]}>
            <ComplaintsIcon />

            <p className={css["tittle"]}> Complaints</p>
          </div>
        </Link>
        <Link href="/sos">
          <div className={css["sidebar1"]}>
            <SosIcon />

            <p className={css["tittle"]}> SOS</p>
          </div>
        </Link>
        <Link href="/notification">
          <div className={css["sidebar1"]}>
            <NotificationIcon />

            <p className={css["tittle"]}> Notification</p>
          </div>
        </Link>
        <div className={css["sidebar1"]}>
          <VechicleIcon />
          <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              <li className={css["tittle"]}>Vehicle Rental</li>

              <option value="">
                <Link href="/rentalvehiclebooking">Rental Vehicle Type</Link>
              </option>

              <option value="">
                <Link href="/rentalvehiclebooking">Rented Vehicle Booking</Link>
              </option>
            </select>
          </div>
        </div>
        <div className={css["sidebar1"]}>
          <VechiclesettingsIcon />
          <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              <li className={css["tittle"]}>Vehicle Settings</li>

              <option value="">
                <Link href="/vehicletype">Vehicle Type </Link>
              </option>

              <option value="">
                <Link href="/brand">Brand</Link>
              </option>

              <option value="/car-model">
                <Link href="/car-model">Model</Link>
              </option>
            </select>
          </div>
        </div>
        <p>
          <p className={css["btn"]}>GENERAL SETTINGS</p>
        </p>
        <Link href="/cms-pagescopy">
          <div className={css["sidebar1"]}>
            <CmspagesIcon />
            <p className={css["tittle"]}>CMS Pages</p>
          </div>
        </Link>
        <div className={css["sidebar1"]}>
          <PaymentIcon />
          <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              <li className={css["tittle"]}>Payments</li>

              <option value="">
                <Link href="/">Drivers Payout </Link>
              </option>

              <option value="">
                <Link href="/payout-requests">Payout Requests </Link>
              </option>

              <option value="">
                <Link href="/driverwallet-transactions">
                  Driver Wallet Transaction
                </Link>
              </option>

              <option value="">
                <Link href="/userwallet-transactions">
                  user Wallet Transaction{" "}
                </Link>
              </option>
            </select>
          </div>
        </div>

        <div className={css["sidebar1"]}>
          <AdministationIcon />
          <select className={css["select"]} name="" id="">
            <li className={css["tittle"]}> Administartion Tools</li>

            <option value="">
              <Link href="/country">Country </Link>
            </option>

            <option value="">
              {" "}
              <Link href="/currency"> Currency</Link>
            </option>

            <option value="">
              <Link href="/commission">Commission </Link>{" "}
            </option>

            <option value="">
              <Link href="/taxsetting"> Tax Setting </Link>{" "}
            </option>

            <option value="">
              <Link href="/email"> Email template</Link>{" "}
            </option>

            <option value="">
              <Link href="/driverdocument"> Driver Document </Link>{" "}
            </option>

            <option value="">
              <Link href="/settings">Settings </Link>
            </option>

            <option value="">
              <Link href="/term"> Terms and Condition </Link>
            </option>

            <option value="">
              <Link href="/language">Language </Link>
            </option>

            <option value="">
              <Link href="/paymentmethods">patment Methods </Link>
            </option>
          </select>
        </div>

        <Link href="">
          <div className={css["sidebar1"]}>
            <ReportIcon />
            <select className={css["select"]} name="" id="">
              <li className={css["tittle"]}>Report</li>

              <option value="">
                <Link href="/user-reports"> Reports </Link>
              </option>

              <option value="">
                <Link href="/driver-reports"> Driver Reports </Link>{" "}
              </option>

              <option value="">
                {" "}
                <Link href="/travel-reports"> Travel Reports </Link>{" "}
              </option>
            </select>
          </div>
        </Link>
        <div className={css["v"]}>
          <h4>V:3.3.2</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
