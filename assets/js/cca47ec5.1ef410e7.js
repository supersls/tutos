"use strict";(self.webpackChunktutos=self.webpackChunktutos||[]).push([[4550],{4709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(4848),l=t(8453);const i={},r=void 0,o={id:"angular/angular",title:"angular",description:"Certainly! Here's a concise cheat sheet for Angular, covering some of the fundamental concepts and syntax:",source:"@site/docs/angular/angular.md",sourceDirName:"angular",slug:"/angular/",permalink:"/tutos/docs/angular/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/angular/angular.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rest",permalink:"/tutos/docs/archi/rest"},next:{title:"nosql",permalink:"/tutos/docs/databases/nosql"}},a={},c=[{value:"Angular CLI Commands:",id:"angular-cli-commands",level:3},{value:"Components:",id:"components",level:3},{value:"Templates:",id:"templates",level:3},{value:"Directives:",id:"directives",level:3},{value:"Services:",id:"services",level:3},{value:"Modules:",id:"modules",level:3},{value:"Routing:",id:"routing",level:3},{value:"Forms:",id:"forms",level:3},{value:"HTTP Client:",id:"http-client",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Certainly! Here's a concise cheat sheet for Angular, covering some of the fundamental concepts and syntax:"}),"\n",(0,s.jsx)(n.h3,{id:"angular-cli-commands",children:"Angular CLI Commands:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new Angular project:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ng new my-project\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Generate components, services, modules, etc.:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ng generate component my-component\nng generate service my-service\nng generate module my-module\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"components",children:"Components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new component:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ng generate component my-component\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Component decorator:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Component({\n  selector: 'app-my-component',\n  templateUrl: './my-component.component.html',\n  styleUrls: ['./my-component.component.css']\n})\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"templates",children:"Templates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Interpolation:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<p>{{ variable }}</p>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Property binding:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<img [src]="imageUrl">\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Event binding:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<button (click)="onClick()">\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"directives",children:"Directives:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Structural directives:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div *ngIf="condition">Visible when condition is true</div>\n<ul>\n  <li *ngFor="let item of items">{{ item }}</li>\n</ul>\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Attribute directives:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div [ngStyle]="{ \'background-color\': color }"></div>\n<input [(ngModel)]="property">\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"services",children:"Services:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a service:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ng generate service my-service\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Injecting services:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"constructor(private myService: MyService) {}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"modules",children:"Modules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a module:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ng generate module my-module\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["NgModule decorator:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@NgModule({\n  declarations: [MyComponent],\n  imports: [CommonModule],\n  providers: [MyService],\n  exports: [MyComponent]\n})\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"routing",children:"Routing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure routes:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const routes: Routes = [\n  { path: 'path', component: MyComponent }\n];\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["RouterOutlet:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<router-outlet></router-outlet>\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["RouterLink:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<a routerLink="/path">Link Text</a>\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"forms",children:"Forms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Template-driven forms:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Reactive forms:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"this.myForm = this.formBuilder.group({\n  // Form controls\n});\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"http-client",children:"HTTP Client:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Import HttpClientModule:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { HttpClientModule } from '@angular/common/http';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Make HTTP requests:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"this.http.get('url').subscribe(data => { });\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This cheat sheet covers the basics of Angular. Refer to the official Angular documentation for more in-depth explanations and advanced concepts."}),"\n",(0,s.jsx)(n.p,{children:"Sure, here's a simple example of an Angular application that displays a list of items:"}),"\n",(0,s.jsx)(n.p,{children:"First, let's create a new Angular project using the Angular CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng new simple-angular-example\n"})}),"\n",(0,s.jsx)(n.p,{children:"Navigate into the project directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd simple-angular-example\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's generate a component to display our list of items:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng generate component item-list\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's define our list of items in ",(0,s.jsx)(n.code,{children:"item-list.component.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// item-list.component.ts\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-item-list',\n  template: `\n    <h2>Item List</h2>\n    <ul>\n      <li *ngFor=\"let item of items\">{{ item }}</li>\n    </ul>\n  `,\n})\nexport class ItemListComponent {\n  items: string[] = ['Item 1', 'Item 2', 'Item 3'];\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This component simply displays a list of items defined in the ",(0,s.jsx)(n.code,{children:"items"})," array."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's update ",(0,s.jsx)(n.code,{children:"app.component.html"})," to include our ",(0,s.jsx)(n.code,{children:"app-item-list"})," component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- app.component.html --\x3e\n\n<div style="text-align:center">\n  <h1>Welcome to {{ title }}!</h1>\n</div>\n<app-item-list></app-item-list>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's run our Angular application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng serve\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Visit ",(0,s.jsx)(n.code,{children:"http://localhost:4200"})," in your browser, and you should see your Angular application displaying the list of items."]}),"\n",(0,s.jsx)(n.p,{children:"That's it! This is a simple example of an Angular application that displays a list of items. You can build upon this example by adding more components, services, and features as needed."}),"\n",(0,s.jsx)(n.h1,{id:"separate-html-templates-and-typescript",children:"separate HTML templates and TypeScript"}),"\n",(0,s.jsx)(n.p,{children:"Certainly! In Angular, it's common practice to separate HTML templates and TypeScript logic into separate files. Here's an example of how you can create an Angular component with separate HTML and TypeScript files:"}),"\n",(0,s.jsx)(n.p,{children:"First, let's create a new Angular project using the Angular CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng new angular-separate-example\n"})}),"\n",(0,s.jsx)(n.p,{children:"Navigate into the project directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd angular-separate-example\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's generate a component named ",(0,s.jsx)(n.code,{children:"item-list"})," with a separate HTML template:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng generate component item-list\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will create several files, including ",(0,s.jsx)(n.code,{children:"item-list.component.ts"})," for TypeScript code and ",(0,s.jsx)(n.code,{children:"item-list.component.html"})," for the HTML template."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's define the logic in ",(0,s.jsx)(n.code,{children:"item-list.component.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// item-list.component.ts\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-item-list',\n  templateUrl: './item-list.component.html',\n})\nexport class ItemListComponent {\n  items: string[] = ['Item 1', 'Item 2', 'Item 3'];\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's define the HTML template in ",(0,s.jsx)(n.code,{children:"item-list.component.html"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- item-list.component.html --\x3e\n\n<h2>Item List</h2>\n<ul>\n  <li *ngFor="let item of items">{{ item }}</li>\n</ul>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This HTML template will display the list of items defined in the ",(0,s.jsx)(n.code,{children:"items"})," array."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, let's include the ",(0,s.jsx)(n.code,{children:"app-item-list"})," component in the ",(0,s.jsx)(n.code,{children:"app.component.html"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- app.component.html --\x3e\n\n<div style="text-align:center">\n  <h1>Welcome to {{ title }}!</h1>\n</div>\n<app-item-list></app-item-list>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's run our Angular application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng serve\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Visit ",(0,s.jsx)(n.code,{children:"http://localhost:4200"})," in your browser, and you should see your Angular application displaying the list of items."]}),"\n",(0,s.jsx)(n.p,{children:"That's it! This is an example of an Angular component with separate HTML and TypeScript files. You can expand upon this example by adding more components, services, and features as needed."}),"\n",(0,s.jsx)(n.h1,{id:"angular-application-with-routing",children:"Angular application with routing"}),"\n",(0,s.jsx)(n.p,{children:"Sure! Here's an example of how to set up a basic Angular application with routing:"}),"\n",(0,s.jsx)(n.p,{children:"First, let's create a new Angular project using the Angular CLI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng new angular-routing-example --routing\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"--routing"})," flag is used to generate routing configuration along with the initial project setup."]}),"\n",(0,s.jsx)(n.p,{children:"Navigate into the project directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd angular-routing-example\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's generate two components and set up routing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng generate component home\nng generate component about\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will create the ",(0,s.jsx)(n.code,{children:"home"})," and ",(0,s.jsx)(n.code,{children:"about"})," components along with their corresponding files."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's define the routes in the ",(0,s.jsx)(n.code,{children:"app-routing.module.ts"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// app-routing.module.ts\n\nimport { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\nimport { HomeComponent } from './home/home.component';\nimport { AboutComponent } from './about/about.component';\n\nconst routes: Routes = [\n  { path: '', redirectTo: '/home', pathMatch: 'full' },\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's update the ",(0,s.jsx)(n.code,{children:"app.component.html"})," file to include navigation links:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- app.component.html --\x3e\n\n<div style="text-align:center">\n  <h1>Welcome to {{ title }}!</h1>\n</div>\n\n<nav>\n  <ul>\n    <li><a routerLink="/home" routerLinkActive="active">Home</a></li>\n    <li><a routerLink="/about" routerLinkActive="active">About</a></li>\n  </ul>\n</nav>\n\n<router-outlet></router-outlet>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this code, ",(0,s.jsx)(n.code,{children:"routerLink"})," is used to navigate to the specified route when the link is clicked, and ",(0,s.jsx)(n.code,{children:"routerLinkActive"})," is used to apply a CSS class when the link is active."]}),"\n",(0,s.jsxs)(n.p,{children:["Now, let's update the ",(0,s.jsx)(n.code,{children:"home.component.html"})," and ",(0,s.jsx)(n.code,{children:"about.component.html"})," files with some simple content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"\x3c!-- home.component.html --\x3e\n\n<p>Welcome to the Home Page!</p>\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"\x3c!-- about.component.html --\x3e\n\n<p>This is the About Page.</p>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, let's run our Angular application:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ng serve\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Visit ",(0,s.jsx)(n.code,{children:"http://localhost:4200"})," in your browser, and you should see your Angular application with navigation links for the home and about pages."]}),"\n",(0,s.jsx)(n.p,{children:"That's it! You have set up a basic Angular application with routing. You can expand upon this example by adding more components, routes, and features as needed."})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);