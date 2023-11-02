import React from "react";
import css from "@/styles/header.module.scss";
import HomeIcon from "@/ui/icons/Home.icon";
import SideuserIcon from "@/ui/icons/Sideuser.Icon";
import DispatcherIcon from "@/ui/icons/Dispatcher.Icon";
import DriverIcon from "@/ui/icons/Driver.Icon";
import CouponsIcon from "@/ui/icons/Coupons.Icon";
import AllrideIcon from "@/ui/icons/Allrides.Icon";
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
function Header() {
  return (
    <div className={css["container"]}>
      <div className={css["logo"]}>
        <img
          className={css["logo1"]}
          src="https://cabme.siswebapp.com/assets/images/app_logo.png"
          alt=""
        />

        <div className={css["icon"]}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="icon"
            viewBox="0 0 512 512"
            height={40}
            width={35}
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
          

          <div className={css["globe"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="ionicon"
              viewBox="0 0 512 512"
              height={20}
              width={20}
            >
              <path
                d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M256 48v416M464 256H48"
              />
            </svg>
          </div>
          <div className={css["br"]}>Brasil</div>

          <div className={css["icon2"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon2"
              viewBox="0 0 512 512"
              height={15}
              width={15}
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M112 184l144 144 144-144"
              />
            </svg>
          </div>
          <img
            className={css["person"]}
            src="https://cabme.siswebapp.com/images/user.png"
            alt=""
          />
        </div>
      </div>
      <div className={css["sidebar"]}>
        <Link href="/dashboard">
          <div className={css["sidebar1"]}>
            <HomeIcon />
            Dashboard
          </div>
        </Link>

        <Link href="/user">
          <div className={css["sidebar1"]}>
            <SideuserIcon />
            Users
          </div>
        </Link>

        <Link href="">
          <div className={css["sidebar1"]}>
            <DispatcherIcon />
            Dispatcher Users
          </div>
        </Link>

        <div className={css["sidebar1"]}>

          Dashboard
        </div>
        <div className={css["sidebar1"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#092a77"
            className="ionicon"
            viewBox="0 0 512 512"
            height={30}
            width={30}
          >
            <path
              d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
            />
          </svg>
          Users
        </div>
        <div className={css["sidebar1"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            height={30}
            width={30}
            className={css["dis"]}
                      >
            <path d="M3 4.99509C3 3.89323 3.89262 3 4.99509 3H19.0049C20.1068 3 21 3.89262 21 4.99509V19.0049C21 20.1068 20.1074 21 19.0049 21H4.99509C3.89323 21 3 20.1074 3 19.0049V4.99509ZM6.35687 18H17.8475C16.5825 16.1865 14.4809 15 12.1022 15C9.72344 15 7.62182 16.1865 6.35687 18ZM12 13C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.067 6 8.5 7.567 8.5 9.5C8.5 11.433 10.067 13 12 13Z"></path>
          </svg>
          Dispatcher Users
        </div>{" "}
        <div className={css["sidebar1"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="ionicon"
            viewBox="0 0 512 512"
            height={30}
            width={30}
          >
            <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
            <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
          </svg>
=======
          <DriverIcon />

          <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              <option value=""> Drivers</option>

              
                <option value=""><Link href="/approveddrivers">Approved Drivers</Link></option>
              
             
                <option value=""> <Link href="/approvalpendingdrivers">Approval Pending Drivers  </Link></option>
            
            </select>
          </div>
        </div>
        <Link href="/coupons">
          <div className={css["sidebar1"]}>
            <CouponsIcon />
            Coupons
          </div>
        </Link>
        <Link href="/riders">
          <div className={css["sidebar1"]}>
            <AllrideIcon />
            All Rides
          </div>
        </Link>
        <Link href="/mapview">
          <div className={css["sidebar1"]}>
            <MapviewIcon />
            Map View
          </div>
        </Link>
        <p>
          <p className={css["btn"]}>OTHER SERVICES</p>
        </p>
        <Link href="/complaints">
          <div className={css["sidebar1"]}>
            <ComplaintsIcon />
            Complaints
          </div>
        </Link>
        <Link href="/sos">
          <div className={css["sidebar1"]}>
            <SosIcon />
            SOS
          </div>
        </Link>
        <Link href="/notification">
          <div className={css["sidebar1"]}>
            <NotificationIcon />
            Notification
          </div>
        </Link>
        <div className={css["sidebar1"]}>
          <VechicleIcon />
          <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              <option value=""> Vehicle Rental</option>

              
                <option value=""><Link href="/rentalvehiclebooking">Rental Vehicle Type</Link></option>
              
             
                <option value=""> <Link href="/rentalvehiclebooking">Rented Vehicle Booking</Link></option>
              
            </select>
          </div>
        </div>
        <div className={css["sidebar1"]}>
          <VechiclesettingsIcon />
          <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              <option value=""> Vehicle Settings</option>

              
                <option value=""><Link href="/vehicletype">Vehicle Type </Link></option>
             
              
                <option value=""><Link href="/brand">Brand</Link></option>
           
             
                <option value="/car-model"> <Link href="/car-model">Model</Link></option>
              
            </select>
          </div>
        </div>
        <p>
          <p className={css["btn"]}>GENERAL SETTINGS</p>
        </p>
        <Link href="/cms-pagescopy">
          <div className={css["sidebar1"]}>
            <CmspagesIcon />
            CMS Pages
          </div>
        </Link>
        <div className={css["sidebar1"]}>
          <PaymentIcon />
          <div className={css["dropdown"]}>
            <select className={css["select"]} name="" id="">
              <option value=""> Payments</option>

              
                <option value=""><Link href="/">Drivers Payout </Link></option>
             
              
                <option value=""><Link href="/payout-requests">Payout Requests </Link></option>
             
              
                <option value=""><Link href="/driverwallet-transactions">Driver Wallet Transaction</Link></option>
              
              
                <option value=""><Link href="/userwallet-transactions">user Wallet Transaction   </Link></option>
           
            </select>
          </div>
        </div>

        <div className={css["sidebar1"]}>
          <AdministationIcon />
          <select className={css["select"]} name="" id="">
            <option value="">Administartion Tools </option>
            
              
              <option value=""><Link href="/country">Country </Link></option>
            
           
              <option value=""> <Link href="/currency"> Currency</Link></option>
            
            
              <option value=""><Link href="/commission">Commission </Link> </option>
           
           
              
              <option value=""> <Link href="/taxsetting"> Tax Setting </Link> </option>
            
          
              
              <option value="">  <Link href="/email"> Email template</Link> </option>
            
           
              <option value=""> <Link href="/driverdocument"> Driver Document </Link> </option>
           
            
              
              <option value=""><Link href="/settings">Settings  </Link></option>
           

           
              
              <option value=""> <Link href="/term"> Terms and Condition </Link></option>
           
            
              <option value=""><Link href="/language">
            Language    </Link></option>
         
            
              <option value=""><Link href="/paymentmethods">patment Methods </Link></option>
            
          </select>
        </div>

        <Link href="">
          <div className={css["sidebar1"]}>
            <ReportIcon />
            <select className={css["select"]} name="" id="">
              <option value="">Report</option>
              
                <option value=""> <Link href="/user-reports"> Reports </Link></option>
             
              
                <option value=""><Link href="/driver-reports"> Driver Reports </Link> </option>
              
              
                <option value=""> <Link href="/travel-reports"> Travel Reports  </Link> </option>
              
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

export default Header;
