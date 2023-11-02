"use client";

import React from "react";
import css from "./userwallet-transaction.module.scss";
import ArrowdownIcon from "@/ui/icons/Arrow-down.icon";
import SearchIcon from "@/ui/icons/Search.icon";
import MenuIcon from "@/ui/Menu-bar.icon";
import ArrowleftdoubleIcon from "@/ui/icons/Arrow-left-double-line.icon";
import ArrowrightdoubleIcon from "@/ui/icons/Arrow-right-double-line.icon";
import WalletIcon from "@/ui/icons/Wallet.icon";
import MoneydollerIcon from "@/ui/icons/Money-doller.icon";
import ArrowrightIcon from "@/ui/icons/Arrow-right.icon";

const Userwallettransaction = () => {
  return (
    <div className={css["page-container"]}>
      <div className={css["header-bar"]}>
        <div className={css["driverwallet-text"]}>
          <h2>User Wallet Transactions</h2>
        </div>
        <div className={css["left-side-header-bar"]}>
          <p className={css["dashbord-text"]}>Dashboard</p>
          <p className={css["lamda-text"]}><ArrowrightIcon/></p>
          <p className={css["lamda-text"]}>User Wallet Transactions</p>
        </div>
      </div>
      <div className={css["driver-wallet-headbar-box"]}>
        <button className={css["driver-transaction"]}>
          <MenuIcon /> User Wallet Transaction Table
        </button>
      </div>
      <div className={css["table-div"]}>
        <div className={css["inner-page-div"]}>
          <div className={css["header-box"]}>
            <div className={css["middle-side-info"]}>
              <p> Search By : </p>
              <div className={css["field-box"]}>
                <button className={css["transaction-button"]}>
                  Transactions id
                </button>
                <ArrowdownIcon />
              </div>
              <div className={css["field-box-2"]}>
                <SearchIcon />
                <input
                  className={css["search-bar"]}
                  type="text"
                  placeholder={"Search"}
                />
              </div>

              <button className={css["clear-button"]}>Search</button>
              <button className={css["clear-button"]}>Clear</button>
            </div>
          </div>

          <table className={css["table"]}>
            <tr>
              <th className={css["th"]}>Transaction Id</th>
              <th className={css["th"]}>Driver</th>
              <th className={css["th"]}>Amount</th>
              <th className={css["th"]}>Date</th>
              <th className={css["th"]}>Payment Method</th>
              <th className={css["th"]}>Payment Status</th>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>498</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Tito Gb</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info"]}>₹500.00</span>
              </td>
              <td className={css["td"]}>05 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>497</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Tito Gb</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>05 October 2023 08:35 PM </td>
              <td className={css["md"]}>
                <MoneydollerIcon />
              </td>

              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>496</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Dian Riswandi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info"]}>₹500.00</span>
              </td>
              <td className={css["td"]}>05 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>495</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Dian Riswandi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>05 October 2023 08:35 PM</td>
              <td>
                <MoneydollerIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>494</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Test Yakup</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info"]}>₹1.00</span>
              </td>
              <td className={css["td"]}>04 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>493</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Test Yakup</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info"]}>₹9.00</span>
              </td>
              <td className={css["td"]}>04 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>492</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Test Yakup</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info"]}>₹4.00</span>
              </td>
              <td className={css["td"]}>04 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <MoneydollerIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>491</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Fozi Mozi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>03 October 2023 08:35 PM</td>
              <td>
                <MoneydollerIcon/>
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>490</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Fozi Mozi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info"]}>₹4.00</span>
              </td>
              <td className={css["td"]}>03 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <MoneydollerIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>489</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Fozi Mozi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>02 October 2023 08:35 PM</td>
              <td>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>488</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Dian Riswandi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>02 October 2023 08:35 PM</td>
              <td>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>487</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Dian Riswandi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>02 October 2023 08:35 PM</td>
              <td>
                {" "}
                <MoneydollerIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>486</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Tito Gb</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info"]}>₹500.00</span>
              </td>
              <td className={css["td"]}>05 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <MoneydollerIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>485</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Dian Riswandi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>01 October 2023 08:35 PM</td>
              <td>
                <MoneydollerIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>484</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Dian Riswandi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>01 October 2023 08:35 PM</td>
              <td>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
            <tr className={css["tr"]}>
              <td className={css["td"]}>483</td>
              <td className={css["td"]}>
                <span className={css["driver-info"]}>Dian Riswandi</span>
              </td>
              <td className={css["td"]}>
                <span className={css["amount-info-2"]}>(-₹3.00)</span>
              </td>
              <td className={css["td"]}>01 October 2023 08:35 PM</td>
              <td className={css["td"]}>
                <WalletIcon />
              </td>
              <td className={css["td"]}>
                <button className={css["success-button"]}>Success</button>
              </td>
            </tr>
          </table>
        </div>
        <div className={css["fotter-button"]}>
          <div className={css["previous-button"]}>
            <p>
              <ArrowleftdoubleIcon />
            </p>
            <button className={css["previous"]}>Previous</button>
          </div>
          <div className={css["next-button"]}>
            <button className={css["next"]}>Next</button>
            <p>
              <ArrowrightdoubleIcon />
            </p>
          </div>
        </div>
        <div className={css["end-div"]}>
          <p className={css["end"]}>Showing 1 to 20 of 61 results</p>
        </div>
      </div>
      <li/>
    </div>
  );
};

export default Userwallettransaction;