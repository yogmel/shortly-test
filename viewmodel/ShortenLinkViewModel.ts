import { makeAutoObservable } from "mobx";
import { Shortlink, ShortlinkService, Error } from "model";

export class ShortenlinkViewModel {
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

  setShortlinks(value: Shortlink[]) {
    this._shortlinks = value;
  }

  setError(value: Error | undefined) {
    this._error = value;
  }

  generateShortlink = async (url: string) => {
    this.setLoading(true);
    const data = await this.shortlinkService.getShortlink(url);

    if (!data.error) {
      const shortlink = new Shortlink(data);
      this.addShortlink(shortlink);
      this.setLocalCache();
    }

    if (data.error) {
      this.setError(data.error);
    }

    this.setLoading(false);
  };

  addShortlink(shortlink: Shortlink) {
    this._shortlinks.push(shortlink);
  }

  setLocalCache() {
    localStorage.setItem("shortlinks", JSON.stringify(this.shortlinks));
  }

  getLocalCache(): Shortlink[] | undefined {
    const cachedData = localStorage.getItem("shortlinks");
    if (cachedData !== null) {
      return JSON.parse(cachedData);
    }
    return undefined;
  }

  loadCachedData = () => {
    const cachedData = this.getLocalCache() ?? [];
    this.setShortlinks(cachedData);
  };
}
