import { SVGProps } from "@/typings/svg";

const PlusIcon = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={15}
      width={15}
      viewBox="0 0 24 24"
    >
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
    </svg>
  );
};
export default PlusIcon;
