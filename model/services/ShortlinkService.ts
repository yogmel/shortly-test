export class ShortlinkService {
  async getShortlink(url: string) {
    const shortlink = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    return shortlink;
  }
}
