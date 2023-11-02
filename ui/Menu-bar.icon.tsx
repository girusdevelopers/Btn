import { SVGProps } from "@/typings/svg";

const MenuIcon = (props: SVGProps) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  height={16}
      width={16}
      fill={"currentColor"}
      {...props}
      >
  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>


  );
};
export default MenuIcon;
