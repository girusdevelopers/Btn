import React from "react";
import css from "./information1.module.scss";
import StarIcon from "@/ui/icons/Star.icon";

const Enable = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-page"]}>
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
            <p>Holder Name:</p>
            
          </div>
        </div>

        <div className={css["phone"]}>
          <div className={css["phone1"]}>
            <p>Account Number :</p>
            
          </div>
          <div className={css["email"]}>
            <p>IFSC Code :</p>
            
          </div>
        </div>
        <div className={css["phone"]}>
          <div className={css["phone1"]}>
            <p>Other Information :</p>
            
          </div>
          <div className={css["email"]}>
            <p>Created At :</p>
            <p>03 October 2023 09:38 AM</p>
          </div>
        </div>
        <div className={css["phone"]}>
          <div className={css["phone1"]}>
            <p>Edited :</p>
            <p>04 October 2023 07:06 PM</p>
          </div>
          <div className={css["email"]}>
            <p>Wallet Balance :</p>
            <p className={css["green"]}>₹94.00</p>
          </div>
        </div>
        <div className={css["disa"]}>
          <div className={css["phone1"]}>
            <p>Rating :</p>
            <p><StarIcon/> 5.0</p>
          </div>
          <div className={css["disable"]}>
            <a href="contact">
              <p>
                Enable account&nbsp;
                <input type="checkbox" />
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enable;
