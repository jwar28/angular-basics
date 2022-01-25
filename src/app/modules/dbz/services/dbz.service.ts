import { Injectable } from "@angular/core";
import { Character } from "../models/character";

@Injectable()
export class DbzService {
    private _characters: Character[] = [
        { name: "Piccolo", power: 7000 },
        { name: "Gohan", power: 6000 },
    ];

    get characters(): Character[] {
        return [...this._characters];
    }

    addCharacter(newCharacter: Character) {
        this._characters.push(newCharacter);
    }
}
