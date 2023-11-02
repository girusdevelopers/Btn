import React from "react";
import css from "./rides1.module.scss";
import StarIcon from "@/ui/icons/Star.icon";
import MoreIcon from "@/ui/icons/More.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";

const Rides1 = () => {
    return (
        <div className={css["container"]}>
            <div className={css["main-page"]}>
                <div className={css["phone"]}>
                    <div className={css["table"]}>
                        <table className={css["table"]}>
                            <tr className={css["table"]}>
                                <td className={css["table1"]}>Ride Id</td>
                                <td className={css["table1"]}>Driver Name</td>
                                <td className={css["table1"]}>Ride Type</td>
                                <td className={css["table1"]}>Status</td>
                                <td className={css["table1"]}>Created</td>
                                <td className={css["table1"]}>Actions</td>
                            </tr>
                            <tr className={css["table"]}>
                                <td className={css["th1"]}>2438</td>
                                <td className={css["th2"]}>Fozi mozi</td>
                                <td className={css["th3"]}>
                                    Normal
                                </td>
                                <td className={css["th4"]}> <button className={css["complt"]}>completed</button></td>
                                <td className={css["th5"]}>04 October 2023 07:07 PM</td>
                                <th className={css["th"]}>
                                    <div className={css["action"]}>
                                        <span className={css["icon-around"]}>
                                            <MoreIcon />
                                        </span>
                                        &nbsp;
                                        <span className={css["edit"]}>
                                            <TrashsIcon />
                                        </span>
                                    </div>
                                </th>
                            </tr>
                            <tr className={css["table"]}>
                                <td className={css["th1"]}>2437</td>
                                <td className={css["th2"]}>Fozi mozi</td>
                                <td className={css["th3"]}>
                                    Normal
                                </td>
                                <td className={css["th4"]}> <button className={css["complt"]}>completed</button></td>
                                <td className={css["th5"]}>04 October 2023 06:44 PM</td>
                                <th className={css["th"]}>
                                    <div className={css["action"]}>
                                        <span className={css["icon-around"]}>
                                            <MoreIcon />
                                        </span>
                                        &nbsp;
                                        <span className={css["edit"]}>
                                            <TrashsIcon />
                                        </span>
                                    </div>
                                </th>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
            </div>

    );
};
export default Rides1;
