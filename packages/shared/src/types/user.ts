import { User as UserDB } from "@prisma/client";

interface User {
	userData: UserDB | null;
}
