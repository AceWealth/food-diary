export default class DiaryEntry {
  constructor(id, name, date, period){
    this.id = id;
    this.name = name;
    this.date = date;
    this.period = period;
  }

  toJSON(){
    return {
      id: this.id,
      name: this.name,
      date: this.date.getTime(),
      period: this.period
    };
  }

  static fromJSON(json){
    const {id, name, date, period} = json;
    return new DiaryEntry(id, name, new Date(date), period);
  }
}
