import React from "react";
import Button from "./Button";
import "./Item.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Item = ({
    title,
    desc,
    descLink, 
    bgImage,
    leftBtnText,
    leftBtnLink,
    rightBtnText,
    rightBtnLink,
    twoButtons,
    first
}) => {
    return (
        <div 
            className="item" 
            style={{
                backgroundImage: `url(${bgImage})`
            }}
        >
            <div className="item-container">
                <div className="item-text">
                    <p>{title}</p>
                    <div className="item-text-desc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item-cta">
                    <div className="item-buttons">
                        <Button imp="primary" text={leftBtnLink} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp="primary" text={rightBtnLink} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className="item-expand">
                            <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item;
