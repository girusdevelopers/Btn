import React from "react";
import css from "./regiater.module.scss";

const Registration = () => {
  return (
    <div className={css["container"]}>
        <h1>registration </h1>
      <div className={css["main"]}>
        <input className={css["data"]} type="text" placeholder="Frist name" />
        <input className={css["data"]} type="text" placeholder="Last name" />
        <input className={css["data"]} type="email" placeholder="Email" />
        <input className={css["data"]} type="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default Registration;
