import { makeAutoObservable } from "mobx";
import { Shortlink, ShortlinkService, Error } from "model";

export class ShortenLinkViewModel {
  private _shortlinks: Shortlink[] = [];
  private _loading: boolean = false;
  private _error: Error | undefined;

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

  get error() {
    return this._error;
  }

  setLoading(value: boolean) {
    this._loading = value;
  }

  setError(value: Error | undefined) {
    this._error = value;
  }

  generateShortLink = async (url: string) => {
    this.setLoading(true);
    const data = await this.shortlinkService.getShortlink(url);

    if (!data.error) {
      const shortlink = new Shortlink(data);
      this.addShortlink(shortlink);
    }

    if (data.error) {
      this.setError(data.error);
    }

    this.setLoading(false);
  };

  addShortlink(shortlink: Shortlink) {
    this._shortlinks.push(shortlink);
  }
}
