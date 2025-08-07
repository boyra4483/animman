import { User as UserDB } from "@prisma/client";

export default interface User {
	userData: UserDB | null;
}
