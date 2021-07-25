import { Shortlink, ShortlinkResponse, ShortlinkErrorResponse } from "model";

type Response = ShortlinkResponse | ShortlinkErrorResponse;

function isError(response: Response): response is ShortlinkErrorResponse {
  return (response as ShortlinkErrorResponse).error !== undefined;
}

export class ShortlinkService {
  async getShortlink(url: string): Promise<Shortlink> {
    const shortlinkData: Response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    ).then((data) => data.json());

    if (!isError(shortlinkData)) {
      const shortlink = {
        code: shortlinkData.result.code,
        originalUrl: shortlinkData.result.original_link,
        shortUrl: shortlinkData.result.full_short_link,
      };
      return new Shortlink(shortlink);
    }

    const shortlink = {
      error: {
        code: shortlinkData.error_code,
        message: shortlinkData.error,
      },
    };
    return new Shortlink(shortlink);
  }
}
