import img_1 from "../images/group_1.png";

export default function Logo({ width = "176px", height = "147px" }) {
    return <img src={img_1} style={{ width: { width }, height: { height } }} />;
}
