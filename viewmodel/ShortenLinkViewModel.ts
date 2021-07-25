import { makeAutoObservable } from "mobx";
import { Shortlink, ShortlinkService } from "model";

export class ShortenLinkViewModel {
  private _shortlinks: Shortlink[] = [];
  private _loading: boolean = false;

  constructor(
    private readonly shortlinkService: ShortlinkService = new ShortlinkService()
  ) {
    makeAutoObservable(this);
  }

  get loading() {
    return this._loading;
  }

  get shortlinks() {
    return this._shortlinks;
  }

  setLoading(value: boolean) {
    this._loading = value;
  }

  generateShortLink = async (url: string) => {
    this.setLoading(true);
    const data = await this.shortlinkService.getShortlink(url);
    const shortlink = new Shortlink(data);
    this.addShortlink(shortlink);
    this.setLoading(false);
  };

  addShortlink(shortlink: Shortlink) {
    this._shortlinks.push(shortlink);
  }
}
