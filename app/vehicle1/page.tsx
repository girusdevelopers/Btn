import React from "react";
import css from "./vehicle1.module.scss";
import StarIcon from "@/ui/icons/Star.icon";

const vehicle1 = () => {
    return (
        <div className={css["container"]}>
            <div className={css["main-page"]}>
                <div className={css["phone"]}>
                    <div className={css["phone1"]}>
                        <p className={css["brand"]}>Brand:</p>
                        <p>Modelo teste</p>
                    </div>
                    <div className={css["email"]}>
                        <p className={css["brand"]}>Model:</p>
                        <p>Teste Clássico</p>
                    </div>
                </div>
                <div className={css["edited"]}>
                    <div className={css["edit"]}>
                        <p className={css["brand"]}>Car Number:</p>
                        <p>ABC123</p>
                    </div>
                    <div className={css["creat"]}>
                        <p className={css["brand"]}>No of passenger:</p>
                        <p>4</p>
                    </div>
                </div>
                <div className={css["status"]}>
                    <div className={css["stat"]}>
                        <p className={css["brand"]}>Color:</p>
                        <p>Black</p>
                    </div>
                    <div className={css["creat"]}>
                        <p className={css["brand"]}>Milage:</p>
                        <p>5000</p>
                    </div>
                </div>

                <div className={css["phone"]}>
                    <div className={css["phone1"]}>
                        <p className={css["brand"]}>KM:</p>
                        <p>5000</p>
                    </div>
                    <div className={css["email"]}>
                        <p className={css["brand"]}>Created At :</p>
                        <p>03 October 2023 09:38 AM</p>
                    </div>
                </div>
                <div className={css["vehicle"]}>
                    <div className={css["phone1"]}>
                        <p className={css["brand"]}>Edited :</p>
                        <p>04 October 2023 07:06 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default vehicle1;
