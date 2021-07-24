export class Shortlink {
  originalUrl: string = "";
  shortUrl: string = "";

  constructor(data: Shortlink) {
    Object.assign(this, data);
  }

  copy(data: Partial<Shortlink>) {
    return Object.assign(this, data);
  }
}
