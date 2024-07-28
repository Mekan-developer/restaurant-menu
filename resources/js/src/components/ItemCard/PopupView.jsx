import { Constants } from "../../common";
import CloseIcon from "../../assets/icons/ItemClose";
import { useEffect } from "react";

export default function PopupView({
    onClose,
    image,
    name,
    lang,
    size,
    discount,
    discount_unit,
    ingredients,
}) {
    useEffect(function () {
        document.body.classList.add("fixed-body");
        return () => document.body.classList.remove("fixed-body");
    }, []);
    return (
        <>
            <div className="placeholder" onClick={onClose} />
            <div className="item-viewer">
                <div>
                    <div className="images">
                        <img src={image} alt="SS" />
                    </div>
                    <span onClick={onClose} className="closer">
                        <CloseIcon />
                    </span>
                    <div className="item-info">
                        <div className="p-container">
                            <div className="fooddescription">
                                <span className="pop-up-text p-h-semibold">
                                    <span>{name[lang]}</span>
                                    {Array.isArray(ingredients) ? (
                                        <ul>
                                            {ingredients.map((i, index) => (
                                                <li
                                                    key={index + "_ingredients"}
                                                    style={{
                                                        fontSize: "14px",
                                                        fontWeight: 500,
                                                        color: "var(--ing-color)",
                                                        fontStyle: "normal",
                                                        fontWeight: "500",
                                                        lineHeight: "140%",
                                                        letterSpacing:
                                                            "-0.28px",
                                                    }}
                                                >
                                                    {i.name[lang]}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </span>
                                {size.discount_price && (
                                    <div
                                        className="p-sale"
                                        style={{ marginTop: 10 }}
                                    >
                                        <div className="percentage">
                                            <span className="text02 p-b-medium">
                                                <span>
                                                    -{discount}
                                                    {discount_unit}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="saleprice">
                                            <span className="text04 p-b-medium">
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
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {(size.discount_price ? size.discount_price : size.price) >
                    0 && (
                    <span className="popup-main-price">
                        {size.discount_price ? size.discount_price : size.price}{" "}
                        {Constants.currency}
                    </span>
                )}
            </div>
        </>
    );
}
