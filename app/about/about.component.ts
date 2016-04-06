import {Component} from "angular2/core";
//import {StateService} from "../common/state.service";

@Component({
  selector: "about",
  templateUrl: "app/about/about.component.html"
})

export class AboutComponent{
  body: string = "This is the about page body";
  message: string;
  title: string = "About Page";

  updateMessage(m:string) {
    console.log(m);
  }
}
