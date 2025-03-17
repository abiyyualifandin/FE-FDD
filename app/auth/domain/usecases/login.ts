import { AuthRepository } from "@/auth/data/repositories/authRepository";

export class LoginUseCase {
  private authRepository: AuthRepository;
  
  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(email: string, password: string): Promise<string> {
    const { token } = await this.authRepository.login(email, password);
    return token;
  }
}
