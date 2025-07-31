export interface User {
	id: string;
	telegramId: string;
	username: string | null;
	firstName: string | null;
	lastName: string | null;
	photoUrl: string | null;
	createdAt: Date;
	updatedAt: Date;
}
