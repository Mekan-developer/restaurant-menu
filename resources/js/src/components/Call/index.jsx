import PhoneFlip from "../../assets/icons/PhoneFlip";
import Constants from "../../common/Constants";
import Locales from "../../common/Locales";
import { useState } from "react";
import Cancel from "../../assets/icons/Cancel";
import { useAppContext } from "../../Context";

import "./css.css";

export default function Call() {
    const [isActive, setActive] = useState(false);
    const { state } = useAppContext();
    return (
        <>
            <div
                className="call-wrapper"
                onClick={function () {
                    setActive(true);
                }}
            >
                <PhoneFlip />
            </div>
            {isActive && (
                <div
                    className="placeholder"
                    onClick={function () {
                        setActive(false);
                    }}
                />
            )}
            <div className={"call-content" + " " + (isActive ? "active" : "")}>
                <div
                    className="cancel"
                    onClick={function () {
                        setActive(false);
                    }}
                >
                    <Cancel />
                </div>
                <h3>{Locales[state.lang].Call}</h3>
                {Constants.storePhones.map(function (phone) {
                    return (
                        <a key={phone} href={"tel:" + phone}>
                            {phone}
                        </a>
                    );
                })}
            </div>
        </>
    );
}
