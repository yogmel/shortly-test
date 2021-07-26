import { Shortlink } from "./Shortlink";

describe("Shortlink", () => {
  it("should set the correct default values it empty object is passed", () => {
    const shortlink = new Shortlink({});
    expect(shortlink.code).toBe("");
    expect(shortlink.originalUrl).toBe("");
    expect(shortlink.shortUrl).toBe("");
    expect(shortlink.error).toBeUndefined();
  });

  it("should set values if passed down", () => {
    const shortlink = new Shortlink({
      code: "01",
      originalUrl: "url",
      shortUrl: "shorturl",
      error: {
        code: 2,
        message: "error",
      },
    });
    expect(shortlink.code).toBe("01");
    expect(shortlink.originalUrl).toBe("url");
    expect(shortlink.shortUrl).toBe("shorturl");
    expect(shortlink?.error?.code).toBe(2);
    expect(shortlink?.error?.message).toBe("error");
  });

  it("should copy create new Shortlink instance", () => {
    const shortlink = new Shortlink({});
    const copyShortlink = shortlink.copy();

    expect(copyShortlink).toBeInstanceOf(Shortlink);
  });
});
