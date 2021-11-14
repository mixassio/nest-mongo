import { ConfigService } from "@nestjs/config";
import { ITelegramOptions } from "src/telegram/telegram.interfase";

export const getTelegramConfig = (configService: ConfigService): ITelegramOptions => {
	const token = configService.get('TELEGRAM_TOKEN');
	if (!token) {
		throw new Error('TELEGRAM_TOKEN not found')
	}
	return {
		chaiId: configService.get('CHAT_ID') ?? '',
		token
	};
};