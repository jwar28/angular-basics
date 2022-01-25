import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MainPageComponent } from "./components/main-page/main-page.component";
import { CharactersComponent } from "./components/characters/characters.component";
import { CharacterRegisterComponent } from "./components/character-register/character-register.component";
import { DbzService } from "./services/dbz.service";

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    CharacterRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    DbzService
  ],
})
export class DbzModule {}
