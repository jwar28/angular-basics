import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../models/character";
import { DbzService } from "../../services/dbz.service";

@Component({
    selector   : "app-character-register",
    templateUrl: "./character-register.component.html",
})
export class CharacterRegisterComponent {
    @Input() character!: Character;
    //@Output() onCharacterRegistered: EventEmitter<Character> = new EventEmitter();

    constructor( private dbzService: DbzService) {}

    addCharacter() {
        if (this.character.name.trim().length === 0) {
            return;
        }

        // this.onCharacterRegistered.emit(this.character);
        this.dbzService.addCharacter(this.character);

        this.character = {
            name : "",
            power: 0,
        };
    }
}
