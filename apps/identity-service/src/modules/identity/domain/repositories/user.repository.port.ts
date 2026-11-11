import { User } from "../entities/user.entity";

export abstract class UserRepositoryPort {
  abstract findById(id: string): Promise<User | null>;
  abstract findByPhoneNumber(phone: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
}
