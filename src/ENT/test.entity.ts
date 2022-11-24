import {PrimaryGeneratedColumn, Column} from 'typeorm';

export class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
