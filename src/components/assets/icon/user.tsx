import { cn } from "@/lib/utils";

interface UserIconProps {
  className?: string;
}

export const UserIcon = ({ className }: UserIconProps) => {
  return (
    <svg
      className={cn(className)}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_21_10987)">
        <path
          d="M14.6741 17.5V15.8333C14.6741 14.9493 14.3229 14.1014 13.6978 13.4763C13.0727 12.8512 12.2248 12.5 11.3408 12.5H4.67411C3.79006 12.5 2.94221 12.8512 2.31709 13.4763C1.69197 14.1014 1.34078 14.9493 1.34078 15.8333V17.5"
          stroke="#7E8986"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.00744 9.16667C9.84839 9.16667 11.3408 7.67428 11.3408 5.83333C11.3408 3.99238 9.84839 2.5 8.00744 2.5C6.16649 2.5 4.67411 3.99238 4.67411 5.83333C4.67411 7.67428 6.16649 9.16667 8.00744 9.16667Z"
          stroke="#7E8986"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.6741 17.501V15.8344C19.6736 15.0958 19.4277 14.3784 18.9752 13.7946C18.5227 13.2109 17.8892 12.794 17.1741 12.6094"
          stroke="#7E8986"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8408 2.60938C14.5578 2.79296 15.1933 3.20996 15.6471 3.79463C16.101 4.37931 16.3473 5.0984 16.3473 5.83854C16.3473 6.57868 16.101 7.29778 15.6471 7.88245C15.1933 8.46712 14.5578 8.88412 13.8408 9.06771"
          stroke="#7E8986"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_21_10987">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.507446)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
