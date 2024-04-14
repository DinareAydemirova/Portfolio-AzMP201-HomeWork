class Person {
    constructor(name, surname, age = 0, gender, nationality) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}

class User extends Person {
    constructor(name, surname, age, gender, nationality, username, email, isAdmin, password, bio = '') {
        super(name, surname, age, gender, nationality);
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.isLogged = false;
        this.password = password && password.length >= 5 ? password : '';
        this.bio = bio.length <= 30 ? bio : bio.substring(0, 30);
    }

    changePassword(currentPassword, newPassword) {
        if (currentPassword === this.password) {
            if (currentPassword === newPassword) {
                return 'New password and current password are the same';
            } else {
                this.password = newPassword;
                return 'Password updated successfully';
            }
        } else {
            return 'Incorrect current password';
        }
    }

    changeEmail(users, newEmail) {
        const foundUser = users.find(user => user !== this && user.email === newEmail);
        if (!foundUser) {
            this.email = newEmail;
            return 'Email updated successfully';
        } else {
            return 'Email already in use';
        }
    }
}


const user1 = new User('John', 'Doe', 25, 'Male', 'US', 'johndoe', 'john@example.com', false, 'password123', 'A bio');
const user2 = new User('Jane', 'Doe', 30, 'Female', 'UK', 'janedoe', 'jane@example.com', true, 'password456', 'Another bio');
const user3 = new User('Alice', 'Smith', 35, 'Female', 'Canada', 'alice', 'alice@example.com', false, 'password789', 'Yet another bio');


const users = [user1, user2, user3];


console.log(users);


console.log(user1.changePassword('password123', 'newPassword')); 
console.log(user1.changePassword('wrongPassword', 'newPassword')); 
console.log(user1.changeEmail(users, 'john@example.com'));
console.log(user1.changeEmail(users, 'newemail@example.com')); 