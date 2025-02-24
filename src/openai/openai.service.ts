import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class OpenAIService {
  private readonly openaiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  constructor(private readonly httpService: HttpService) {}

  async sendMessage(message: string): Promise<string> {
    try {
      const apiKey = process.env.OPENAI_API_KEY;

      const response = await firstValueFrom(
        this.httpService.post(
          this.openaiUrl,
          {
            model: 'openai/gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          },
        ),
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error en OpenRouter:', error.response?.data || error.message);
      return 'Lo siento, ocurrió un error al procesar tu solicitud.';
    }
  }
}
