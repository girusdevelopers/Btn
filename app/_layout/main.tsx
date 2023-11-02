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
import css from "@/styles/header.module.scss";
function Main() {
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
    </div>
  );
}

export default Main;
