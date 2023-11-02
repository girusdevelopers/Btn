import React from "react";
import css from "./vehicle.module.scss";
import StarIcon from "@/ui/icons/Star.icon";

const vehicle = () => {
    return (
        <div className={css["container1"]}>
            <div className={css["main-page1"]}>
                <div className={css["phone3"]}>
                    <div className={css["phone4"]}>
                        <p className={css["brand"]}>Brand:</p>
                        <p>Modelo teste</p>
                    </div>
                    <div className={css["email1"]}>
                        <p className={css["brand"]}>Model:</p>
                        <p>Teste Clássico</p>
                    </div>
                </div>
                <div className={css["edited1"]}>
                    <div className={css["edit1"]}>
                        <p className={css["brand"]}>Car Number:</p>
                        <p>35215</p>
                    </div>
                    <div className={css["creat1"]}>
                        <p className={css["brand"]}>No of passenger:</p>
                        <p>1</p>
                    </div>
                </div>
                <div className={css["status1"]}>
                    <div className={css["stat1"]}>
                        <p className={css["brand"]}>Color:</p>
                        <p>#ff0000</p>
                    </div>
                    <div className={css["creat1"]}>
                        <p className={css["brand"]}>Milage:</p>
                        <p>5</p>
                    </div>
                </div>

                <div className={css["phone3"]}>
                    <div className={css["phone4"]}>
                        <p className={css["brand"]}>KM:</p>
                        <p>1000</p>
                    </div>
                    <div className={css["email1"]}>
                        <p className={css["brand"]}>Created At :</p>
                        <p>07 October 2023 07:18 AM</p>
                    </div>
                </div>
                <div className={css["vehicle"]}>
                    <div className={css["phone4"]}>
                        <p className={css["brand"]}>Edited :</p>
                        <p>07 October 2023 07:19 AM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default vehicle;
