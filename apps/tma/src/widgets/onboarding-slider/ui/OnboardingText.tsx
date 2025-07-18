import styles from "@animman/tma/widgets/onboarding-slider/ui/onboardingText.scss";
import { Text } from "@animman/tma/widgets/onboarding-slider/model/text";
const texts: Text[] = [
	{
		title: "Добро пожаловать в Animman! ",
		description:
			"Здесь ты найдёшь всё об аниме: от новостей и рейтингов до новых релизов."
	},
	{
		title: "Animman – твой гид по миру аниме",
		description: "Ищи, сохраняй и узнавай больше о своих любимых тайтлах."
	},
	{
		title: "Найди своё новое любимое аниме уже в Animman",
		description: "Твои любимые тайтлы и свежие релизы – в одном месте."
	}
];

export default function OnboardingText({ step }: { step: number }) {
	return (
		<div className={styles.texts}>
			<p className={styles.title}>{texts[step].title}</p>
			<p className={styles["body-text"]}>{texts[step].description}</p>
		</div>
	);
}
