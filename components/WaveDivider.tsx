type WaveDividerProps = {
  className?: string;
};

export default function WaveDivider({ className = "" }: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`block h-24 w-full sm:h-32 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,0
           L0,45
           Q360,0 720,45
           Q1080,90 1440,45
           L1440,0
           Z"
        fill="#223d6e"
      />
    </svg>
  );
}