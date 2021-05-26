import React from 'react';
import BaseSidebar from '../../components/Sidebar';
import ReactLogo from '../../assets/react_logo.png';
import { ReactComponent as UserSVG } from '../../assets/user.svg';

//sidebarColor, iconsColor, textColor, logoImage, logoTitle, username, itemsObject, hasMouseOverEffect,
//onLogoutEvent, onFixedEvent, onSidebarExpandedEvent, onSidebarCollapsedEvent

const Dashboard = () => {
    return (
        <BaseSidebar
            sidebarColor="#000000" //SIDEBAR COLOR
            iconsColor="#FFFFFF" //SIDEBAR ICONS COLOR
            textColor="#FFFFFF" //TEXT COLOR
            logoImage={<img src={ReactLogo} />} //LOGO IMAGE
            logoTitle="Logo" //LOGO TITLE
            username="XXX" //USERNAME
            itemsObject={[ //OBJECTS MENU E SUBMENU
                {
                    id: "parent001", //PARENT ID
                    icon: <UserSVG />, //PARENT ICON
                    text: "parent001", //PARENT TEXT
                    isLocked: false, //IS LOCKED
                    hideLocked: false, //IS HIDE
                    child: [ //CHILDS
                        {
                            id: "child001", //CHILD ID
                            icon: <UserSVG />, //CHILD ICON
                            text: "submenu001", //CHILD TEXT
                            onClickEvent: () => alert("menu001 clicked") //CHILD ONCLICK EVENT
                        }
                    ]
                }
            ]}

            hasMouseOverEffect={true} // HAS MOUSE OVER EFFECT

            onLogoutEvent={() => console.log("Logout clicked!")} //ON LOGOUT EVENT
            onFixedEvent={(e) => console.log(e ? "Fixed" : "Unfixed")} //ON FIXED EVENT
            onSidebarExpandedEvent={() => console.log("Expanded")} // ON EXPANDED EVENT
            onSidebarCollapsedEvent={() => console.log("Collapsed")} //ON COLLAPSED EVENT
        />
    )
}

export default Dashboard;
