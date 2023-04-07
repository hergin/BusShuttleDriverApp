export class allStops {
    [x: string]: any;
      stops?: string;
      id?: string;
      name?: string;
      loop?: string;
      constructor(id: string, name: string, loop: string) {
        this.id = id;
        this.name = name;
        this.loop = loop;
      }
    }
  