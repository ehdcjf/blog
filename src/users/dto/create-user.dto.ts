export class CreateUserDto {
        readonly name: string;
        readonly id: string;
        readonly password: string;
        readonly dob?: Date;
}
