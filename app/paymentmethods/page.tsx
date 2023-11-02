import React from "react";
import css from "./payment.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";
import SaveIcon from "@/ui/icons/Save.icon";
import BackIcon from "@/ui/icons/Back.icon";

const Paymentmethods = () => {
    return (
      <div className={css["container"]}>
        <div className={css["background"]}>
          <div className={css["stripe"]}>
            <div className={css["cod"]}>
              <p>Stripe</p>
              <p className={css["active"]}>
                COD <button className={css["act"]}>Active</button>
              </p>
              <p> Apple Pay</p>
              <p>Razorpay</p>
              <p className={css["active"]}>
                Paypal <button className={css["act"]}>Active</button>
              </p>
              <p>Paytm</p>
              <p className={css["active"]}>
                Wallet <button className={css["act"]}>Active</button>
              </p>
              <p> Payfast</p>
            </div>
            <div className={css["pay"]}>
              <p>Paystack</p>
              <p>FlutterWave</p>
              <p className={css["active"]}>
                Mercadopago <button className={css["act"]}>Active</button>
              </p>
            </div>
          </div>
          <div className={css["legend"]}>
            <form className={css["form"]}>
              <fieldset className={css["field"]}>
                <legend className={css["admin"]}>STRIPE</legend>
                <div className={css["check"]}>
                  <input type="checkbox" className={css["checkbox"]} />
                  <p>Enable Stripe</p>
                </div>
                <div className={css["method"]}>
                  <p>Check it to enable Stripe payment method</p>
                </div>
                <div className={css["type"]}>
                  <div>
                    <div>
                      <p>Stripe Key</p>
                      <input
                        className={css["input"]}
                        type="password"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <p className={css["insert"]}>Insert Stripe Key</p>
                    </div>
                  </div>
                  <div className={css["secret"]}>
                    <div>
                      <p>Stripe Secret</p>
                      <input className={css["input"]} type="password" />
                    </div>
                    <div>
                      <p className={css["insert1"]}>Insert Stripe Secret</p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            <div className={css["btn"]}>
              <div className={css["saveicon"]}>
                <p>
                  <SaveIcon />
                </p>
                <p>Save</p>
              </div>
              <div className={css["backicon"]}>
                <p>
                  <BackIcon />
                </p>
                <p>Back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Paymentmethods;
