import React from 'react'
import css from "./email.module.scss";
import GreaterIcon from '@/ui/icons/Greater.icon';
import SideArrowIcon from '@/ui/icons/SideArrow.icon';
import EditsIcon from '@/ui/icons/Edits.icon';
const email = () => {
  return (
    <div className={css["main1"]}>
      <div className={css["container"]}>
        <div className={css["container1"]}>

          <div className={css["Email"]}>Email Templates</div>

          <div className={css["main2"]}>
            <div className={css["dash"]}>Dashboad</div>
            <div className={css["svg"]}>
              <i className={css["greater"]}> < SideArrowIcon /> </i>
            </div>
            <div className={css["notif"]}>Email Templates</div>
          </div>
        </div>
      </div>
      < div className={css["main4"]}>
      < div className={css["main3"]}>
        <table className={css["table"]}>
          <tr >
            <td className={css["filled"]}>Type</td>
            <td className={css["filled"]} >Subject</td>
            <td className={css["filled"]}>Created</td>
            <td className={css["filled"]}>Actions</td>

          </tr>
          <tr  >
            <td className={css["for"]}>Payment Receipt	</td>
            <td className={css["for"]}>Payment Receipt - </td>
            <td className={css["for"]} >03 August 2023 <p>04:09 AM</p></td>
            <td className={css["for"]}> <span className={css["span"]}><EditsIcon/></span></td>
          </tr>
          <tr  >
            <td className={css["for"]}>Wallet TopUp	</td>
            <td className={css["for"]}>Wallet Topup Confirmation</td>
            <td className={css["for"]} >04 August 2023 <p>04:02 AM</p></td>
            <td className={css["for"]}> <span className={css["span"]}><EditsIcon/></span></td>

          </tr>
          <tr  >
            <td className={css["for"]}>Payout Approve DissApprove</td>
            <td className={css["for"]}>Payout Request Status</td>
            <td className={css["for"]} >04 August 2023 <p>04:03 AM</p></td>
            <td className={css["for"]}> <span className={css["span"]}><EditsIcon/></span></td>
          </tr>
          <tr  >
            <td className={css["for"]}>Payout Requests</td>
            <td className={css["for"]}>Payout Request - </td>
            <td className={css["for"]} >04 August 2023 <p>04:06 AM</p></td>
            <td className={css["for"]}> <span className={css["span"]}><EditsIcon/></span></td>
          </tr>
          <tr  >
            <td className={css["for"]}>New Registration	</td>
            <td className={css["for"]}>New Driver Registration</td>
            <td className={css["for"]} >04 August 2023 <p>11:27 AM</p></td>
            <td className={css["for"]}> <span className={css["span"]}><EditsIcon/></span></td>
          </tr>
          <tr  >
            <td className={css["for"]}>Reset Password</td>
            <td className={css["for"]}>Reset Your Password</td>
            <td className={css["for"]} >04 August 2023 <p>02:00 pM</p></td>
            <td className={css["for"]}> <span className={css["span"]}><EditsIcon/></span></td>

            </tr>

        </table>
      </div>
</div>
    </div>


    )
}

export default email;