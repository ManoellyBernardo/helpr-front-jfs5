import { Component, HostBinding, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private onDark = false;

  @HostBinding("class")
  get themeMode() {
    return this.onDark ? "theme-dark" : "theme-light";
  }

  constructor() { }

  ngOnInit(): void {
  }

  public AltTheme(): void {
    this.onDark ? this.onDark = false : this.onDark = true;
  }

  public logout(): void {
    // LOGOUT
  }
}