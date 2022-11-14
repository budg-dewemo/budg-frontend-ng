export class User {
    id: number = 0;
    email: string = '';
    first_name: string = '';
    last_name: string = '';
    avatar: string = '';
    weeklySpendingsByCategory?: [];
    monthlySpendings?: [];
}

export class UserLogin {
    username: string = '';
    password: string = '';
}

export class UserLoginResponse {
    token: string = '';
}
