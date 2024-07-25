import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  showSidebar!: boolean;

  constructor(
    private router: Router, 
    private titleService: Title,
     private customTitleService: TitleService
    ){}

 ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateTitle();
      }
    });

    // Restore title on application start
    this.updateTitle();
  }

  private updateTitle(): void {
    const routeTitle = this.getTitleFromRoute(this.router.routerState, this.router.routerState.root).join(' | ');

    // Fallback to the default behavior if no title is found in the route data
    const defaultTitle = 'Enthuse';
    const pageTitle = routeTitle || defaultTitle;

    // Set the title using the custom service to persist it
    this.customTitleService.setPageTitle(pageTitle);

    // Set the title for the current page
    this.titleService.setTitle(pageTitle);
  }

  private getTitleFromRoute(state: any, parent: any): string[] {
    const titleParts: string[] = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      titleParts.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      titleParts.push(...this.getTitleFromRoute(state, state.firstChild(parent)));
    }

    return titleParts;
  }

  getToggleState(toggleState: boolean) {
    console.log({toggleState});
    this.showSidebar = toggleState;
    console.log({showSidebar: this.showSidebar});
  }
}
