import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { ClueGridComponent } from './clue-grid/clue-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ScoreBoardComponent,
    ClueGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
