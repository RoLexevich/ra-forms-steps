import { nanoid } from 'nanoid';

export default class Distance {
  constructor({date, distance}) {
    this.id = nanoid();
    this.date = date;
    this.dateObj = new Date(date);
    this.distance = parseFloat(distance);
  }
}