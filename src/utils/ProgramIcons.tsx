// utils/programIcons.ts
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { RiFlashlightLine } from "react-icons/ri";

export const programIcons: Record<string, JSX.Element> = {
  rocket: <HiOutlineRocketLaunch size={40} />,
  globe: <TbWorld size={40} />,
  users: <FiUsers size={40} />,
  flash: <RiFlashlightLine size={40} />, // optional
};
