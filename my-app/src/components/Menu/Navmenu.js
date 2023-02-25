import { React, useEffect } from "react";
import { Dropdown, Space } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
//import {getUserDetails, removeSession} from "../helper/SessionHelper";
import image from "../../assets/images/image.png";
import { getUserDetails, removeSession } from "../../helper/SesssionHelper";

const items = [
  
  {
    key: "1",
    label: (
      <a className="Item" rel="noopener noreferrer" href="/create">
        Create New
      </a>
    ),
  }
 
];

const Navmenu = () => {
  const logout = () => {
    removeSession()

  };
useEffect(()=>{
    console.log(getUserDetails()[0]['email'])

    
},[])
  return (
    <div className="shadow-lg ">
      <row>
        <nav className="navbar ">
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                }}
                placement="topRight"
              >
                <i className="navicon">
                  <MenuUnfoldOutlined />
                </i>
              </Dropdown>
            </Space>
          </Space>

          <div className="row">
            
            <div className=" float-right h-auto d-flex">
              <div className="user-dropdown">
                <img className="icon-nav-img icon-nav " src={getUserDetails()[0]['photo']} alt="" />

                <div className="user-dropdown-content ">
                  <div className="mt-4 text-center">
                    <img className="icon-nav-img icon-nav" src="" alt="" />

                    <p></p>
                    <hr className="user-dropdown-divider  p-0" />
                  </div>
                    <p>{getUserDetails()[0].name}</p>
                  <div>
                    <a className="side-bar-item" href="/profile">
                      <span className="col-md-12 side-bar-item-caption">
                        Profile
                      </span>
                    </a>
                  </div>
                  

                  <div className="row-md-5">
                    <a className="side-bar-item">
                      <span
                        onClick={logout}
                        className="col-md-12 side-bar-item-caption btn btn-primary"
                      >
                        Logout
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </row>
    </div>
  );
};

export default Navmenu;
