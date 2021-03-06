import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 appUser$;

  constructor(private authService: AuthService) { 
    this.appUser$ = authService.user$;
  
  }

  ngOnInit() {
  }

}
