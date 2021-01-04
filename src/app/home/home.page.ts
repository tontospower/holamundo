import { Component } from '@angular/core';
import { DataService, Message, CheckInEntry } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', second: '2-digit' };

  constructor(private data: DataService) { }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getCheckInEntries(): CheckInEntry[] {
    return this.data.getCheckInEntries();
  }

  addCheckInEntry() {
    let date = new Date().toLocaleString("es-es", this.dateFormatOptions)
    let comment = "comment"
    this.data.checkInEntries.push({ date: date, comment: comment })
  }

}
