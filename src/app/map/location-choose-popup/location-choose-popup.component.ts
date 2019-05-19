import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-location-choose-popup',
  templateUrl: './location-choose-popup.component.html',
  styleUrls: ['./location-choose-popup.component.css']
})
export class LocationChoosePopupComponent implements OnInit, OnChanges {
  // @Input() position: {
  //   top: any,
  //   left: any
  // } = null;
  @Input() positionTop: any = null;
  @Input() positionLeft: any = null;

  @Input() isShow: boolean;

  public isHover: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.positionLeft && changes.positionTop) {
      console.log('canghe ne');
    }
  }


}
