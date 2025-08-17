import { ReactNode } from "react";
import styles from "@animman/tma/shared/ui/button/button.module.scss";
import playIcon from "@animman/tma/shared/assets/images/icons/play.svg";

interface ButtonProps {
	children: ReactNode;
	before?: boolean;
	color: "blue" | "orange";
	width: string;
	height: string;
}

export default function Button({
	children,
	before,
	color,
	width,
	height
}: ButtonProps) {
	const icon = before ? <img src={playIcon} alt="play icon" /> : null;

	return (
		<div
			className={styles.button}
			style={{
				backgroundColor: color === "orange" ? "#ff8700" : "#12cdd9",
				width,
				height
			}}
		>
			{icon}
			{children}
		</div>
	);
}
