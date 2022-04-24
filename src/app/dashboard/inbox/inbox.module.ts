import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { InboxComponent } from "./inbox.component";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { PrimaryComponent } from './primary/primary.component';
import { SocialComponent } from './social/social.component';
import { PromotionComponent } from './promotion/promotion.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
    children: [
      {
        path: "primary",
        component: PrimaryComponent,
      },
      {
        path: "social",
        component: SocialComponent,
      },
      {
        path: "promotion",
        component: PromotionComponent,
      }
    ]
  },

]

@NgModule({
  declarations: [InboxComponent, PrimaryComponent, SocialComponent, PromotionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
  ]
})
export class InboxModule { }
