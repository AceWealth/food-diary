export default class DiaryEntry {
  constructor(name, timestamp){
    this.name = name;
    this.timestamp = timestamp;
  }

  toJSON(){
    return {
      name: this.name,
      timestamp: this.timestamp.getTime()
    };
  }

  static fromJSON(json){
    const {name, timestamp} = json;
    return new DiaryEntry(name, new Date(timestamp));
  }
}
