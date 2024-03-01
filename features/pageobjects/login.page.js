import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {
    get inputUsername() {
        return $('standard_user');
    }

    get inputPassword() {
        return $('secret_sauce');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open() {
        return super.open('login');
    }
}

export default LoginPage;
