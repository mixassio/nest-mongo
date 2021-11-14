import { ModuleMetadata } from "@nestjs/common";

export interface ITelegramOptions {
	chaiId: string;
	token: string;
}

export interface ITelegramModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
	useFactory: (...args: any[]) =>  Promise<ITelegramOptions> | ITelegramOptions,
	inject?: any[]
}