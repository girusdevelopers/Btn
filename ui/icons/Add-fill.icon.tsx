import { SVGProps } from "@/typings/svg";

const AddIcon = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={16}
      width={16}
      fill={"currentColor"}
      {...props}
      
    >
      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
    </svg>
  );
};
export default AddIcon;
