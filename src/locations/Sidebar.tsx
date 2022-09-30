import React from "react";
import { Button, Modal, Notification, NotificationItem, Paragraph } from "@contentful/f36-components";
import { SidebarExtensionSDK } from "@contentful/app-sdk";
import { /* useCMA, */ useSDK } from "@contentful/react-apps-toolkit";
import axios from "axios";

const Sidebar = () => {
  const sdk = useSDK<SidebarExtensionSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  const handleClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paragraph>
      Click below custom link
      <hr />
      {/* <NotificationItem>asd</NotificationItem> */}
      <Button
        style={{
          width: "100%",
          background: "gray",
          color: "black",
        }}
        onClick={handleClick}
      >
        Click
      </Button>
    </Paragraph>
  );
};

export default Sidebar;
