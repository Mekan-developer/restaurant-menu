export default function Sun({
    width = 16,
    height = 16,
    color = "var(--blue-white)",
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="sun-light" clipPath="url(#clip0_4_5320)">
                <path
                    id="Vector"
                    d="M8.5 12C10.7091 12 12.5 10.2091 12.5 8C12.5 5.79086 10.7091 4 8.5 4C6.29086 4 4.5 5.79086 4.5 8C4.5 10.2091 6.29086 12 8.5 12Z"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_2"
                    d="M15.1667 8L15.8334 8"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_3"
                    d="M8.5 1.33333V0.666667"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_4"
                    d="M8.5 15.3333V14.6667"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_5"
                    d="M13.8333 13.3333L13.1666 12.6667"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_6"
                    d="M13.8333 2.66667L13.1666 3.33333"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_7"
                    d="M3.16669 13.3333L3.83335 12.6667"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_8"
                    d="M3.16669 2.66667L3.83335 3.33333"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector_9"
                    d="M1.16669 8L1.83335 8"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
