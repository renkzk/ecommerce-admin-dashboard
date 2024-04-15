import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user-avatar",
  standalone: true,
  imports: [],
  template: ` <div class="avatar">
    <div class="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
      <img [src]="userAvatar || '/assets/images/default_avatar.png'" />
    </div>
  </div>`,
})
export class UserAvatarComponent {
  @Input() userAvatar: string | undefined;
}
