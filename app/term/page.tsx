"use client";
import React from "react";
import css from "./term.module.scss";
import BoldIcon from "@/ui/icons/Bold";
import ItalicIcon from "@/ui/icons/Italic";
import UnderlineIcon from "@/ui/icons/Underline.icon";
import PageIcon from "@/ui/icons/page";
import SuperscriptIcon from "@/ui/icons/Superscript";
import Script from "next/script";
import DownarrowIcon from "@/ui/icons/Downarrow";
import ScriptIcon from "@/ui/icons/Script";
import GreaterIcon from "@/ui/icons/Greater.icon";
import SaveIcon from "@/ui/icons/Save.icon";
const Terms = () => {
  return (
    <div>
      <div>
        <div className={css["side"]}>
          <div className={css["dashboad"]}> Terms and Conditions</div>

          <div className={css["home1"]}>
            <div className={css["home2"]}>Dashboard</div>
            <div className={css["svg"]}>
              <GreaterIcon />
            </div>
            <div className={css["home"]}>Administration tools</div>
            <div className={css["svg"]}>
              <GreaterIcon />
            </div>
            <div className={css["home"]}>Terms and Conditions</div>
          </div>
        </div>
        <div className={css["jill"]}>
          <div className={css["container-main"]}>
            <form>
              <div className={css["container"]}>
                <div className={css["restaurant_payout_create-inner"]}>
                  <fieldset>
                    <legend>Terms and Conditions</legend>
                    <div className={css["form-group row"]}>
                      <div className={css["col-12 p-0"]}>
                        <input type="hidden" name="id" id="id" value="2" />

                        <div className={css["right"]}>
                          <div className={css["main"]}>
                            <div className={css["bold"]}>
                              <BoldIcon />
                            </div>
                            <div className={css["bold"]}>
                              <ItalicIcon />
                            </div>
                            <div className={css["bold"]}>
                              <UnderlineIcon />
                            </div>
                            <div className={css["bold"]}>
                              <BoldIcon />
                            </div>
                          </div>
                          <div className={css["main"]}>
                            <div className={css["bold"]}>
                              <PageIcon />
                            </div>
                            <div className={css["bold"]}>
                              <SuperscriptIcon />
                            </div>
                            <div className={css["bold"]}>
                              <ScriptIcon />
                            </div>
                          </div>
                          <div className={css["main"]}>
                            <div className={css["bold"]}>
                              <h3>16</h3>
                            </div>
                            <div className={css["bold"]}>
                              <DownarrowIcon />
                            </div>
                          </div>
                          <div className={css["main"]}>
                            <div className={css["bold"]}>
                              <h3>A</h3>
                            </div>
                            <div className={css["bold"]}>
                              <DownarrowIcon />
                            </div>
                          </div>
                          <div className={css["main"]}>
                            <div className={css["bold"]}>
                              <h3>A</h3>
                            </div>
                            <div className={css["bold"]}>
                              <DownarrowIcon />
                            </div>
                          </div>
                        </div>
                        <textarea
                          className={css["form-control"]}
                          name="terms_and_conditions"
                          id="terms_and_conditions"
                        >
                          Terms and Conditions
                        </textarea>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className={css["good"]}>
                <div className={css["a"]}>
                  <button className={css["s"]}>
                    <SaveIcon />
                    Save
                  </button>
                </div>
              </div>
              {/* <div
          className={css["btm-btn.form-group "]}>
      
          <button type="submit" className={css["btm-btn.form-group "]}>
          Save
          </button>
        </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Terms;
