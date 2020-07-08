import React from 'react';
import './SideDrawer.scss';
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    let attachedClasses = ['header__side-drawer', 'close'];
    if (props.isOpen) {
        attachedClasses = ['header__side-drawer', 'open'];
    }

    return (
        <>
            <Backdrop show={props.isOpen} cancel={props.hideDrawer}/>
            <div className={attachedClasses.join(' ')} onClick={props.hideDrawer}>
                <div className="header__side-drawer--cross">
                    <i className="fas fa-times cross"/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    );
};

export default SideDrawer;