import BaseController from './BaseController';

class UserController extends BaseController {
    constructor(id, dni, pass, gmail) {
        super('https://app.nocodb.com/api/v2/tables', '');
        this.id = id;
        this.dni = dni;
        this.pass = pass;
        this.gmail = gmail;
    }

    async getUser() {
        let user = await this.getAll();
        return user;
    }
}

export default UserController;


