class Bug {

    constructor(title, contents, email) {
        this._title = title;
        this._contents = contents;
        this._email = email;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get contents() {
        return this._contents;
    }

    set contents(value) {
        this._contents = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    toJSON() {
        return {
            title: this._title,
            contents: this._contents,
            email: this._email
        };
    }
}

export default Bug