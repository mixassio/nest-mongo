import { Inject, Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';
import { TELEGRAM_MODULE_OPTIONS } from './telegram.constants';
import { ITelegramOptions } from './telegram.interfase';

@Injectable()
export class TelegramService {
	bot: Telegraf;
	options: ITelegramOptions;

	constructor(
		@Inject(TELEGRAM_MODULE_OPTIONS) options: ITelegramOptions
	) {
		this.bot = new Telegraf(options.token)
		this.options = options
	}

	async sendMessage(message: string, chaiId: string = this.options.chaiId) {
		await this.bot.telegram.sendMessage(chaiId, message)
	}
}
