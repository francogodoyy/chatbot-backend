import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';

@Injectable()
export class ChatbotService {
  constructor(private readonly openAIService: OpenAIService) {}

  async getResponse(message: string): Promise<string> {
    return this.openAIService.sendMessage(message);
  }
}
