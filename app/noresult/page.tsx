import React from "react";
import css from "./noresult.module.scss";

const Noresult = () => {
    return (
        <div className={css["maxcontainer"]}>
            <div className={css["maxmain-page"]}>
                <div className={css["result"]}>
                    <div className={css["found"]}>
                        <p>NO RESULT FOUND</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Noresult;
