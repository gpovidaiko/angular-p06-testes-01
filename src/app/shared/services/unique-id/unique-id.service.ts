import { Injectable } from '@angular/core';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class UniqueIdService {

	private numbeOfGeneratedIds = 0;

	constructor() { }

	getNumbeOfGeneratedIds(): number {
		return this.numbeOfGeneratedIds;
	}

	generateUniqueIdWithPrefix(prefix: string): string {
		if (!prefix) throw Error('Prefix can not be empty');

		const uniqueId = this.generateUniqueId();
		this.numbeOfGeneratedIds++;
		return `${prefix}-${uniqueId}`
	}

	private generateUniqueId(): string {
		return uuidV4();
	}

}
