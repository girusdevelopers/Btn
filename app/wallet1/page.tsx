import React from "react";
import css from "./wallet1.module.scss";
import StarIcon from "@/ui/icons/Star.icon";
import MoreIcon from "@/ui/icons/More.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";

const Wallet1 = () => {
    return (
        <div className={css["container"]}>
            <div className={css["main-page"]}>
                <div className={css["phone"]}>
                    <div className={css["table"]}>
                        <table className={css["table"]}>
                            <tr className={css["table"]}>
                                <td className={css["table1"]}>Transaction Id</td>
                                <td className={css["table1"]}>Amount</td>
                                <td className={css["table1"]}>Date</td>
                                <td className={css["table1"]}>Payment Method</td>
                                <td className={css["table1"]}>Status</td>
                            </tr>
                            <tr className={css["table"]}>
                            <td className={css["th1"]}>291</td>
                                <td className={css["th2"]}>(-₹3.00)	</td>
                                <td className={css["th3"]}>04 October 2023 07:10 PM	</td>
                                <td className={css["th4"]}>
                                    <img className={css["image"]}
                                        src=" https://cabme.siswebapp.com/assets/images/payment_method/image_method_1575136572.6831_944653490.png"                                    
                                           alt=""
                                    />
                                </td>
                                <td className={css["th5"]}>
                                    <button className={css["complt"]}>success</button>
                                </td>
                            </tr>
                            <tr className={css["table"]}>
                            <td className={css["th1"]}>290</td>
                                <td className={css["th2"]}>₹100.00	</td>
                                <td className={css["th3"]}>04 October 2023 07:06 PM	</td>
                                <td className={css["th4"]}>
                                    <img className={css["image"]}
                                        src=" https://cabme.siswebapp.com/assets/images/payment_method/image_method_1578411935.0009_2031756.png"
                                                                               alt=""
                                    />
                                </td>
                                <td className={css["th5"]}>
                                    <button className={css["complt"]}>success</button>
                                </td>
                            </tr>
                            <tr className={css["table"]}>
                            <td className={css["th1"]}>289</td>
                                <td className={css["th2"]}>(-₹3.00)	</td>
                                <td className={css["th3"]}>04 October 2023 06:50 PM	</td>
                                <td className={css["th4"]}>
                                    <img className={css["image"]}
                                        src="https://cabme.siswebapp.com/assets/images/payment_method/image_method_1575136572.6831_944653490.png"
                                        alt=""
                                    />
                                </td>
                                <td className={css["th5"]}>
                                    <button className={css["complt"]}>success</button>
                                </td>
                            </tr>
                            

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wallet1;
