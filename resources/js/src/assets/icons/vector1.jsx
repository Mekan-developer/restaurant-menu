export default function Vector1({
    width = 55,
    height = 56,
    color = "var(--primary)",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 55 56"
            fill="none"
            color="var(--primary)"
        >
            <path
                d="M5.29503 27.5C16.5124 25.3529 25.3529 16.5124 27.5 5.29503C29.6472 16.5124 38.4881 25.3529 49.7086 27.5C38.4881 29.6472 29.6472 38.4881 27.5 49.7086C25.3529 38.4881 16.5124 29.6472 5.29503 27.5Z"
                fill={color}
                stroke={color}
            />
        </svg>
    );
}
