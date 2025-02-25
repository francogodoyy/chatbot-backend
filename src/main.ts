import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, type NestFastifyApplication } from '@nestjs/platform-fastify';
import cors from '@fastify/cors';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  await app.register(cors, {
    origin: ["https://chatbot-frontend.up.railway.app/"], 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
