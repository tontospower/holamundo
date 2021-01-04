import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface CheckInEntry {
  date: string;
  comment: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public checkInEntries: CheckInEntry[] = [
    {
      date: "4/Enero/2020 8:30:00",
      comment: "entrada"
    },
    {
      date: "4/Enero/2020 13:45:00",
      comment: "salida"
    }
  ]

  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: true
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getCheckInEntries(): CheckInEntry[] {
    return this.checkInEntries;
  }
}
