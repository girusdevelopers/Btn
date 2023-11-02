import React from 'react'
import css from "./contact.module.scss";
import Link from 'next/link';

const Contact = () => {
    return (
      <div className={css["minicontainer"]}>
        <div className={css["minimain-page"]}>
          <div className={css["phone"]}>
            <div className={css["phone1"]}>
              <p>Phone:</p>
              <p>777777777</p>
            </div>
            <div className={css["email"]}>
              <p>Email :</p>
              <p>A@gmail.com</p>
            </div>
          </div>
          <div className={css["status"]}>
            <div className={css["stat"]}>
              <p>Status:</p>
              <button className={css["btn"]}>Enabled</button>
            </div>
            <div className={css["creat"]}>
              <p>Created At :</p>
              <p>08 October 2023 09:06 AM</p>
            </div>
          </div>
          <div className={css["edited"]}>
            <div className={css["edit"]}>
              <p>Edited :</p>
              <p>08 October 2023 09:06 AM</p>
            </div>
          </div>
          <div className={css["disa"]}>
            <div className={css["disable"]}>
              <Link href="enableaccount">
                <p>
                  Disable account&nbsp;
                  <input type="checkbox" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact