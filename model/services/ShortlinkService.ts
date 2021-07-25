import { Shortlink } from "model";

interface ShortLinkResultDTO {
  code: string;
  short_link: string;
  full_short_link: string;
  short_link2: string;
  full_short_link2: string;
  share_link: string;
  full_share_link: string;
  original_link: string;
}

export interface ShortlinkDTO {
  ok: boolean;
  result: ShortLinkResultDTO;
}
export class ShortlinkService {
  async getShortlink(url: string): Promise<Shortlink> {
    const shortlinkData: ShortlinkDTO = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    ).then((data) => data.json());

    const shortlink = {
      code: shortlinkData.result.code,
      originalUrl: shortlinkData.result.original_link,
      shortUrl: shortlinkData.result.full_short_link,
    };

    return new Shortlink(shortlink);
  }
}
