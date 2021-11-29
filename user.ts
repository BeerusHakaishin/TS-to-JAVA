import { Address } from './adress';
import { Photo } from './photo';

export class User {
    birthdate: Date;
    size: number;
    photos: Photo[];
    address: Address; 
}