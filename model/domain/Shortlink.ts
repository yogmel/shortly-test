export interface ShortlinkSuccessResponse {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export interface ShortlinkErrorResponse {
  ok: boolean;
  error_code: number;
  error: string;
}

export interface ShortlinkResponse {
  ok: boolean;
  result: ShortlinkSuccessResponse;
}

export interface Error {
  code: number;
  message: string;
}

export class Shortlink {
  code: string = "";
  originalUrl: string = "";
  shortUrl: string = "";
  error?: Error;

  constructor(data: Partial<Shortlink>) {
    Object.assign(this, data);
  }

  copy(data: Partial<Shortlink>) {
    return Object.assign(this, data);
  }
}
