import styles from "@animman/tma/pages/auth/ui/auth.module.scss";
import logo from "@animman/tma/shared/assets/images/icons-xxl/logo.svg";
import Button from "@animman/tma/shared/ui/button/Button";
// import googleIcon from "@animman/tma/shared/assets/images/icons-xxl/google.svg";
import { Link } from "react-router";

export default function Auth() {
	return (
		<div className={styles.auth}>
			<img src={logo} alt="logo of animman" className={styles.logo} />
			<h1 className={styles.title}>ANIMMAN</h1>
			<p className={styles["reg-info"]}>
				Enter your details <br /> to Sign Up
			</p>
			<section className={styles["auth-methods"]}>
				<Button width="100%" height="3.5rem" color="blue">
					Sign Up
				</Button>
				<p className={styles["login-text"]}>
					I already have an account?{" "}
					<Link className={styles["login-link"]} to={"/auth/login"}>
						Login
					</Link>
				</p>
			</section>
			{/* <section className={styles["alt-auth"]}>
				<p className={styles["alt-text"]}>Or Sign up with</p>
				<img src={googleIcon} alt="google icon" />
			</section> */}
		</div>
	);
}
