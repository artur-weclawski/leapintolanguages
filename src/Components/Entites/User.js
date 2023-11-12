


class User {
    id;
    username;
    password;
    email;

    constructor(id, username, password, email) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._email = email;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }
}

export default User();