export default function Vector1({
    width = 42,
    height = 42,
    color = "var(--primary)",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 42 42"
            fill="none"
        >
            <path
                d="M20.5052 0C20.5052 11.3229 11.3229 20.5052 0 20.5052C11.3229 20.5052 20.5052 29.6823 20.5052 41.0052C20.5052 29.6823 29.6823 20.5052 41.0052 20.5052C29.6823 20.5052 20.5052 11.3229 20.5052 0Z"
                fill={color}
            />
        </svg>
    );
}
