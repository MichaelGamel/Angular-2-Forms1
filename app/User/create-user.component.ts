import { Component, OnInit } from '@angular/core';
import { IUser, IFavorite, ICountry } from '../../models/user.model';

@Component({
    selector: 'app-User',
    templateUrl: './app/User/create-user.component.html',
    styleUrls: ['./app/User/create-user.component.css']
})
export class CreateUserComponent implements OnInit {
    pageTitle: string;
    flag: boolean;
    countries: ICountry[];
    favorite: IFavorite[];
    user: IUser;

    ngOnInit() {
        this.pageTitle = 'Create New User';
        this.flag = true;
        this.countries = [
            { id: 1, name: "Egypt" },
            { id: 2, name: "Ecuador" },
            { id: 3, name: "El Salvador" },
            { id: 4, name: "Eritrea" },
            { id: 5, name: "Germany" },
            { id: 6, name: "Greece" },
            { id: 7, name: "Kuwait" },
            { id: 8, name: "Qatar" }
        ];
        this.favorite = [
            { id: 1, name: "Sport" },
            { id: 2, name: "Games" },
            { id: 3, name: "Football" },
            { id: 4, name: "Swimming" },
        ];
        this.user = {
            firstName: '',
            lastName: '',
            birthDate: '',
            email: '',
            username: '',
            password: '',
            gender: 'M',
            country: 0,
            favorites: [],
            notes: '',
            isActive: false,
        }
    }

    reset() {
        this.user = {
            firstName: '',
            lastName: '',
            birthDate: '',
            email: '',
            username: '',
            password: '',
            gender: 'M',
            country: 0,
            favorites: [],
            notes: '',
            isActive: false,
        }
        this.flag = false;
        setTimeout(() => this.flag = true, 0);
    }

    onSubmit(values: IUser) {
        console.log(values);
        this.reset();
    }

    onReset() {
        this.reset();
    }

    test(data: any) {
        console.log("Data: ", data);
    }

}
