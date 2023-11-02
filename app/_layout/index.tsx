import React from "react";
import Main from "./main";
import Sidebar from "./sidebar";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Main />
      <div style={{
       display:'flex',
       gap:'10',
       
      }}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
