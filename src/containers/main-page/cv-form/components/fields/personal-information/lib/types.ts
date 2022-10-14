import { DbUser } from 'common/models/User';

export type CreateUserModel = Pick<DbUser, 'email' | 'firstName' | 'lastName'>;
