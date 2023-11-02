import React from "react";
import css from "./mapview.module.scss";
import DotsIcon from "@/ui/icons/dots.icon";

function Mapview() {
  return (
    <div className={css["container"]}>
      <div className={css["mapview"]}>
        <div>
          <h3>MapView</h3>                                                                                                     
        </div>
        <div className={css["dash"]}>
          <div>
            <p>Dashboard</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={20}
              width={20}
              className={css["icon"]}
            >
              <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
            </svg>
          </div>

          <div>MapView</div>
        </div>
      </div>
      <div className={css["main"]} >
      
      <div className={css["liv"]} >
          <h3> Live Tracking</h3>
        </div>
      <div className={css["live1"]}>
       

        <div className={css["live"]}>
          <div className={css["track"]}>
            <div>
             <DotsIcon/>
            </div>
            <div>Driver Name : Cabme Driver</div>
            <div>User Name : Cabme Customer</div>
            <div className={css["btn"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={20}
                width={20}
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
              </svg>
              <button className={css["btn1"]} >
                7W6W+FHC, Gujarat State Highway 167, <br></br>Gujarat 394185, India
              </button>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={20}
                  width={20}
                >
                  <path d="M13 22C7.47715 22 3 17.5228 3 12C3 6.47715 7.47715 2 13 2C18.5228 2 23 6.47715 23 12C23 17.5228 18.5228 22 13 22ZM8 11.5L12 13L13.5 17.0021L17 8L8 11.5Z"></path>
                </svg>
                <button className={css["btn1"]}>Gadhpur Twp, Khadsad, Gujarat<br></br> 395006, India</button>
              </div>
            </div>
            <div>
              <button className={css["ride"]}>On Ride</button>
            </div>
            <hr />

            <div className={css["driver"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={20}
                width={20}
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"></path>
              </svg>
            </div>
            <div>Driver Name : Rishabh Gautam</div>
            <div>User Name : Test Landry</div>
            <div className={css["btn"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={20}
                width={20}
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path>
              </svg>
              <button className={css["btn1"]}>
                Khushipura, 215, 215, Jhansi Division, <br></br>Uttar Pradesh, India,
                284002,
              </button>
            
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={20}
                width={20}
              >
                <path d="M13 22C7.47715 22 3 17.5228 3 12C3 6.47715 7.47715 2 13 2C18.5228 2 23 6.47715 23 12C23 17.5228 18.5228 22 13 22ZM8 11.5L12 13L13.5 17.0021L17 8L8 11.5Z"></path>
              </svg>
              <button className={css["btn1"]}>
                Sadar Bazar, Cantt, Jhansi, Uttar <br></br>Pradesh 284001, India
              </button>
            </div></div>
            <div>
              <button className={css["ride"]}>On Ride</button>
            </div>
            <hr></hr>
            <div>Driver Name : Sauvik Saha</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr></hr>
            <div>Driver Name : Rishabh Gautam</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr></hr>
            <div>Driver Name : Cab Driver</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr></hr>
            <div>Driver Name : Tong Gaban</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr></hr>

            <div>Driver Name : Padmaja Mandava</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr></hr>

            <div>Driver Name : Dorine Ouma</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr></hr>
            <div>Driver Name : Rajput Katan</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : driver test</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Dovla Dovla</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Jhh Nhhh</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Oko Mantse</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Jejje Uueue</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Fozi Mozi</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Douglas Silva Vivaldo</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : evandro teste</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Dian Riswandi</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Tito Gb</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
            <div>Driver Name : Zayad Mohamed</div>
            <div>
              <button className={css["ride1"]}>Available</button>
            </div>
            <hr />
          </div>
        </div>
        <div className={css["map"]}>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.60965028692!2d107.56075550588403!3d-6.903271953076563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1696657775147!5m2!1sen!2sin"
              width="680"
              height="450"
              loading="lazy"
            ></iframe>
          </div></div>
        </div>
      </div>
    </div>
  );
}

export default Mapview;
