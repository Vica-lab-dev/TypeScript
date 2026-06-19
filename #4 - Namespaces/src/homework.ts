interface UserInfo {
    name: string,
    email: string,
    age: number
}

function updateUser(data: Partial<UserInfo>) {
    return {
        name: data.name ?? "Unknown",
        email: data.email ?? "none",
        age: data.age ?? 0
    }
}

function createUser(data: Required<UserInfo>) {
    return {
        name: data.name,
        email: data.email,
        age: data.age,
    }
}

const user: UserInfo = {
    name: "Vica",
    email: "vica123@gmail.com",
    age: 32
}

function getField<UserInfo, Key extends keyof UserInfo>(user: UserInfo, key: Key): UserInfo[Key] {
    return user[key];
}