import { User as UserDB } from "@prisma/client";

export default interface isAuthRes {
	user: UserDB | null;
}
