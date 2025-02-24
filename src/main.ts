import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()); // Habilita CORS para permitir solicitudes desde el frontend
  await app.listen(3000);
  console.log('Servidor corriendo en http://localhost:3000');
}
bootstrap();
