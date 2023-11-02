import React from "react";
import css from "./document.module.scss";
import Rightarrow from "@/ui/icons/Rightarrow.icon";
import EyeIcon from "@/ui/icons/Eye.icon";
import EditIcon from "@/ui/icons/Edit.icon";
import ToggleIcon from "@/ui/icons/Toggle.icon";
import SearchIcon from "@/ui/icons/SearchIcon.icon";
import DeleteIcon from "@/ui/icons/Delete.icon";
import TrashsIcon from "@/ui/icons/Trashs.icon";
import TrashIcon from "@/ui/icons/Trash.Icon";
import DustIcon from "@/ui/icons/Dust.icon";
import UploadIcon from "@/ui/icons/Upload.icon";

const Documentdetails = () => {
  return (
    <div className={css["container"]}>
      <div className={css["main-head"]}>
        <div className={css["main"]}>
          <div className={css["country"]}>
            <p>Document Details</p>
          </div>
          <div className={css["sidecon"]}>
            <div className={css["dash"]}>
              <p>Home</p>
            </div>
            <div>
              <Rightarrow />
            </div>
            <div className={css["dash"]}>
              <p>Drivers</p>
            </div>
            <div className={css["icon1"]}>
              <Rightarrow />
            </div>
            <div className={css["dash1"]}>
              <p>Document details</p>
            </div>
          </div>
        </div>
        <div className={css["down-container"]}>
          <div className={css["main-page"]}>
            <div className={css["background"]}>
              <div className={css["maintable"]}>
                <div className={css["table"]}>
                  <table className={css["table"]}>
                    <tr className={css["table99"]}>
                      <th className={css["table2"]}>Rahul's Documents</th>
                    </tr>
                    <tr className={css["table"]}>
                      <td className={css["table1"]}>S.No</td>
                      <td className={css["table1"]}>Document Name</td>
                      <td className={css["table1"]}>Status</td>
                      <td className={css["table1"]}>Comment</td>
                      <td className={css["table1"]}>Action</td>
                      <td className={css["table1"]}>Action</td>
                    </tr>
                    <tr className={css["table"]}>
                      <td className={css["th1"]}>1 </td>
                      <td className={css["th2"]}>CNH com o EAR</td>
                      <td className={css["th3"]}>Not Uploaded</td>
                      <td className={css["th4"]}></td>
                      <td className={css["th5"]}>
                        <UploadIcon />
                      </td>
                      <td className={css["th6"]}></td>
                    </tr>
                    <tr className={css["table"]}>
                      <td className={css["th1"]}>2 </td>
                      <td className={css["th2"]}>Documento do Veículo</td>
                      <td className={css["th3"]}>Not Uploaded</td>
                      <td className={css["th4"]}></td>
                      <td className={css["th5"]}>
                        <UploadIcon />
                      </td>
                      <td className={css["th6"]}></td>
                    </tr>
                    <tr className={css["table"]}>
                      <td className={css["th1"]}>3</td>
                      <td className={css["th2"]}>Nada Consta </td>
                      <td className={css["th3"]}>Not Uploaded</td>
                      <td className={css["th4"]}></td>
                      <td className={css["th5"]}>
                        <UploadIcon />
                      </td>
                      <td className={css["th6"]}></td>
                    </tr>
                    <tr className={css["table"]}>
                      <td className={css["th1"]}>4 </td>
                      <td className={css["th2"]}>Utility Bill</td>
                      <td className={css["th3"]}>Not Uploaded</td>
                      <td className={css["th4"]}></td>
                      <td className={css["th5"]}>
                        <UploadIcon />
                      </td>
                      <td className={css["th6"]}></td>
                    </tr>
                    <tr className={css["table"]}>
                      <td className={css["th1"]}>5</td>
                      <td className={css["th2"]}>Police reeport</td>
                      <td className={css["th3"]}>Not Uploaded</td>
                      <td className={css["th4"]}></td>
                      <td className={css["th5"]}>
                        <UploadIcon />
                      </td>
                      <td className={css["th6"]}></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentdetails;
