interface Props {
  className?: string;
}

export const ic_logo = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      rx="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_559_3428)">
        <rect width="48" height="48" rx="15" fill="#DE3151" />
        <rect
          width="9.39732"
          height="21.5255"
          rx="4.69866"
          y="3"
          x="-10"
          transform="matrix(0.861775 0.507291 -0.492744 0.870174 30.0063 12)"
          stroke="white"
          strokeWidth="1.94762"
        />
        <rect
          width="9.39732"
          height="21.5255"
          rx="4.69866"
          y="4"
          x="-7"
          transform="matrix(0.861775 0.507291 -0.492744 0.870174 40.1016 13.1875)"
          stroke="white"
          strokeWidth="1.94762"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_559_3428"
          x="0"
          y="0"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="10" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.941667 0 0 0 0 0.490451 0 0 0 0 0.490451 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_559_3428"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_559_3428"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
