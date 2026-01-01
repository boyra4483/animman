import arrowLeft from "@animman/tma/shared/assets/images/icons/arrow-back.svg";
import styles from "@animman/tma/pages/register/ui/register.module.scss";
import { useNavigate } from "react-router";
import { Form } from "react-router";
import Button from "@animman/tma/widgets/onboarding-slider/ui/Button";

export default function Register() {
	const navigate = useNavigate();

	return (
		<article className={styles["register"]}>
			<header className={styles["header"]}>
				<div
					className={styles["arrow-icon-wrapper"]}
					onClick={(e: React.MouseEvent): void => {
						navigate(-1);
					}}
				>
					<img
						className={styles["arrow-icon"]}
						src={arrowLeft}
						alt="arrow back icon"
					/>
				</div>
				<h1 className={styles["title"]}>Регистрация</h1>
			</header>
			<section className={styles["content"]}>
				<header className={styles["content-header"]}>
					<h2 className={styles["content-title"]}>Давайте начнем</h2>
					<p className={styles["content-subtitle"]}>
						Последние новости об аниме и манги вы найдете здесь
					</p>
				</header>

				<Form className={styles["form"]} method="post">
					<ul className={styles["form-widgets"]}>
						<li className={styles["form-widget"]}>
							<label htmlFor="username" className={styles["form-label"]}>
								Имя пользователя
							</label>
							<input
								type="text"
								id="username"
								name="username"
								placeholder="Имя"
								className={styles["form-input"]}
							/>
						</li>
						<li className={styles["form-widget"]}>
							<label htmlFor="username-email" className={styles["form-label"]}>
								Электронная почта
							</label>
							<input
								type="email"
								id="user-email"
								name="mail"
								placeholder="myemail@gmail.com"
								className={styles["form-input"]}
							/>
						</li>
						<li className={styles["form-widget"]}>
							<label htmlFor="user-password" className={styles["form-label"]}>
								Пароль
							</label>
							<input
								type="password"
								id="user-password"
								name="password"
								placeholder="•••••••••"
								className={styles["form-input"]}
							/>
						</li>
					</ul>
				</Form>

				<Button></Button>
			</section>
		</article>
	);
}
