import { Component } from "@angular/core";
import { Character } from "../../models/character";
import { DbzService } from "../../services/dbz.service";

@Component({
    selector   : "app-main-page",
    templateUrl: "./main-page.component.html",
})
export class MainPageComponent {
    newCharacter: Character = {
        name : "",
        power: 0,
    };

    constructor() {}
}
