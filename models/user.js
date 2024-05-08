import { randomUUID } from 'node:crypto';

export class UserModel {
    static async getAll() {
        return [
            {
                id: 1,
                name: 'Wassim'
            }
        ]
    }

    static async getById(id) {
        return {
            id: 1,
            name: 'Wassim'
        }
    }

    static async create(user) {
        const newUser = {
            id: randomUUID(),
            ...user
        }
        return newUser;
    }

}