import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  item:any;
  ngAfterViewInit(): void {
    
    gsap.to("#rect", {
      duration: 5, 
      repeat: 12,
      repeatDelay: 3,
      yoyo: true,
      ease: "power1.inOut",
      motionPath:{
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    });
    
  }

  ngOnInit(): void {

  }
  test(){
 
  }
}
