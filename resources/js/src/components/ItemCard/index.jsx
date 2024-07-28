import { Constants } from "../../common";
import { useState } from "react";
import PopupView from "./PopupView";

import "./css.css";

export default function Card({
    image,
    discount,
    discount_unit,
    sizes,
    name,
    lang,
    popupImage,
    ingredients,
}) {
    const [isOpen, setOpen] = useState(false);
    const size = sizes[0] ? sizes[0] : {};
    if (size.discount_price === "null") size.discount_price = null;
    return (
        <div className="item-card">
            <img onClick={() => setOpen(true)} src={image} alt="SS" />
            <div onClick={() => setOpen(true)}>
                <div className="container">
                    <div className="food-description">
                        <div className="inner-frame">
                            <div className="sale">
                                {size.discount_price && (
                                    <>
                                        <div className="percentage">
                                            <span className="text b-medium">
                                                <span>
                                                    -{discount}
                                                    {discount_unit}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="saleprice">
                                            <span className="text01 b-medium">
                                                <span
                                                    style={{
                                                        whiteSpace: "nowrap",
                                                        textDecoration:
                                                            "line-through",
                                                        textDecorationColor:
                                                            "#FF3939",
                                                    }}
                                                >
                                                    {size.price}
                                                    {Constants.currency}
                                                </span>
                                            </span>
                                            {/* <img
                                                src="/images/vector1.svg"
                                                alt="Vector1I1997"
                                                className="vector1"
                                            /> */}
                                        </div>
                                    </>
                                )}
                            </div>
                            {(size.discount_price
                                ? size.discount_price
                                : size.price) > 0 ? (
                                <div className="price">
                                    <span className="text h-semibold">
                                        <span>
                                            {size.discount_price
                                                ? size.discount_price
                                                : size.price}
                                        </span>
                                    </span>
                                    <div className="frame2286">
                                        <span className="text b-medium">
                                            <span>{Constants.currency}</span>
                                        </span>
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        <span className="text b-regular ellipsis">
                            <span>
                                {name[lang]}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: " ",
                                    }}
                                />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            {/* End New */}
            {isOpen && (
                <PopupView
                    onClose={() => setOpen(false)}
                    ingredients={ingredients}
                    discount={discount}
                    image={popupImage}
                    name={name}
                    lang={lang}
                    size={size}
                    discount_unit={discount_unit}
                />
            )}
        </div>
    );
}
