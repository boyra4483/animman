import { User as UserDB } from "@animman/server/src/types/user";

export default interface isAuthRes {
	user: UserDB | null;
}
