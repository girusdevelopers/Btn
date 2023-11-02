import css from "./infodisable.module.scss";
import StarIcon from "@/ui/icons/Star.icon";

const Disable = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-page"]}>
        <div className={css["phone"]}>
          <div className={css["phone1"]}>
            <p>Phone:</p>
            <p>8770377341</p>
          </div>
          <div className={css["email"]}>
            <p>Email :</p>
            <p>testnmh1@gmail.com</p>
          </div>
        </div>
        <div className={css["edited"]}>
          <div className={css["edit"]}>
            <p>Bank Name:</p>
            <p>Lena Dena Bank</p>
          </div>
          <div className={css["creat"]}>
            <p>Branch Name:</p>
            <p>NEEMUCH</p>
          </div>
        </div>
        <div className={css["status"]}>
          <div className={css["stat"]}>
            <p>Status:</p>
            <button className={css["btn"]}>Disabled</button>
          </div>
          <div className={css["creat"]}>
            <p>Holder Name:</p>
            <p>Fraud</p>
          </div>
        </div>

        <div className={css["phone"]}>
          <div className={css["phone1"]}>
            <p>Account Number :</p>
            <p>65465465646</p>
          </div>
          <div className={css["email"]}>
            <p>IFSC Code :</p>
            <p>SMNB0000006</p>
          </div>
        </div>
        <div className={css["phone"]}>
          <div className={css["phone1"]}>
            <p>Other Information :</p>
            <p>dnfgndfn</p>
          </div>
          <div className={css["email"]}>
            <p>Created At :</p>
            <p>07 October 2023 07:18 AM</p>
          </div>
        </div>
        <div className={css["phone"]}>
          <div className={css["phone1"]}>
            <p>Edited :</p>
            <p>07 October 2023 07:19 AM</p>
          </div>
          <div className={css["email"]}>
            <p>Wallet Balance :</p>
            <p className={css["green"]}>₹100,000.00</p>
          </div>
        </div>
        <div className={css["disa"]}>
          <div className={css["phone1"]}>
            <p>Rating :</p>
            <p>
              <StarIcon />
              0.0
            </p>
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

export default Disable;
