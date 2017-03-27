"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CreateUserComponent = (function () {
    function CreateUserComponent() {
    }
    CreateUserComponent.prototype.ngOnInit = function () {
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
        };
    };
    CreateUserComponent.prototype.reset = function () {
        var _this = this;
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
        };
        this.flag = false;
        setTimeout(function () { return _this.flag = true; }, 0);
    };
    CreateUserComponent.prototype.onSubmit = function (values) {
        console.log(values);
        this.reset();
    };
    CreateUserComponent.prototype.onReset = function () {
        this.reset();
    };
    CreateUserComponent.prototype.test = function (data) {
        console.log("Data: ", data);
    };
    return CreateUserComponent;
}());
CreateUserComponent = __decorate([
    core_1.Component({
        selector: 'app-User',
        templateUrl: './app/User/create-user.component.html',
        styleUrls: ['./app/User/create-user.component.css']
    }),
    __metadata("design:paramtypes", [])
], CreateUserComponent);
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=create-user.component.js.map