import React from "react";
import css from "./rides.module.scss";
import StarIcon from "@/ui/icons/Star.icon";
import MoreIcon from "@/ui/icons/More.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";

const Rides = () => {
    return (
        <div className={css["tablecontainer"]}>
            <div className={css["tablemain-page"]}>
                <div className={css["tablephone"]}>
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
                                <td className={css["th1"]}>2442</td>
                                <td className={css["th2"]}>Advertising official riddhi siddhi</td>
                                <td className={css["th3"]}>
                                    Normal
                                </td>
                                <td className={css["th4"]}> <button className={css["complt"]}>completed</button></td>
                                <td className={css["th5"]}>07 October 2023 07:24 AM</td>
                                <th className={css["th"]}>
                                    <div className={css["action"]}>
                                        <span className={css["icon-around"]}>
                                            <MoreIcon />
                                        </span>
                                        &nbsp;
                                        <span className={css["edit1"]}>
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
export default Rides;
