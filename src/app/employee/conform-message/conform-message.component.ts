import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/Overlay/dialog.service';
import { CommunicationService } from '../Services/communication.service';

@Component({
  selector: 'app-conform-message',
  templateUrl: './conform-message.component.html',
  styleUrls: ['./conform-message.component.scss']
})
export class ConformMessageComponent implements OnInit {
  public close: boolean = false
  constructor(private dialogService: DialogService,
    private comunicationServices: CommunicationService) { }

  ngOnInit(): void {
  }

  public onYes() {
    this.close = true

  }


}
