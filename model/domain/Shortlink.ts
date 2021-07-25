export interface ShortlinkDTO {
  code: string;
  originalUrl: string;
  shortUrl: string;
}

export class Shortlink {
  code: string = "";
  originalUrl: string = "";
  shortUrl: string = "";

  constructor(data: Partial<Shortlink>) {
    Object.assign(this, data);
  }

  copy(data: Partial<Shortlink>) {
    return Object.assign(this, data);
  }
}
