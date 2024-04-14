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
  constructor(name,surname,age,gender,nationality,username,email, isAdmin,password,bio = "") {
    super(name, surname, age, gender, nationality);
    this.username = username;
    this.email = email;
    this.isAdmin = isAdmin;
    this.isLogged = false;
    if (password.length < 5) {
      console.log("short password");
    } else {
      this.password = password;
    }
    this.bio = bio.length <= 30 ? bio : bio.substring(0, 30);
  }

  changePassword(currentPassword, newPassword) {
    if (currentPassword === this.password) {
      if (currentPassword === newPassword) {
        return "New password and current password are the same";
      } else {
        this.password = newPassword;
        return "Password updated";
      }
    } else {
      return "Incorrect current password";
    }
  }

  changeEmail(users, newEmail) {
    const existingUser = users.find((user) => user.email === newEmail);
    if (existingUser) {
      return "email is already in use";
    } else {
      this.email = newEmail;
      return "email changed successfully";
    }
  }
  sortUsersByUsername(users) {
    

  }
  filterByBirthYear(users, year) {
   
  }
  Login(users, username, password) {}
  LogOut(users, username) {}
  CreateUser(users, newUser) {}
  DeleteUser(users, username) {}
}

const user1 = new User("Dinara","Aydamirova",19,"Female","Aze","dinara_ayd","dinaraaydamirova@gmail.com",false,"77777da","yflkfjytkyfluyfy");
const user2 = new User("Dinara","Aydamirova",25,"Female","Aze", "dinara_ayd","dinaraaydamirova@gmail.com", false,"77777da","yflkfjytkyfluyfy");

const users = [user1, user2];

console.log(users);

console.log(user1.changePassword("55555da", "123456da"));
console.log(user1.changePassword("77777da", "55555da"));
console.log(user1.changeEmail(users, "dinaraaydamirova@gmail.com"));
console.log(user1.changeEmail(users, "dinara@gmail.com"));

