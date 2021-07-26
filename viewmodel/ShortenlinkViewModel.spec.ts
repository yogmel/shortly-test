import { Shortlink, ErrorData } from "model";
import { ShortlinkService } from "./../model/services/ShortlinkService";
import { ShortenlinkViewModel } from "viewmodel";

const serviceMock = new ShortlinkService();
serviceMock.getShortlink = jest.fn(() => Promise.resolve(new Shortlink({})));

function renderShortenLinkViewModel(service: ShortlinkService = serviceMock) {
  return new ShortenlinkViewModel(service);
}

describe("ShortenlinkViewModel", () => {
  it("should start with default values", async () => {
    const viewModel = renderShortenLinkViewModel();
    expect(viewModel.shortlinks.length).toBe(0);
    expect(viewModel.loading).toBeFalsy();
    expect(viewModel.error).toBeUndefined;
  });

  it("should add shortlink", async () => {
    const viewModel = renderShortenLinkViewModel();
    viewModel.addShortlink(new Shortlink({}));

    expect(viewModel.shortlinks.length).toBe(1);
  });

  it("should call shortlink service once", async () => {
    const viewModel = renderShortenLinkViewModel();
    await viewModel.generateShortlink("url");

    expect(serviceMock.getShortlink).toBeCalledTimes(1);
  });

  it("should add shortlink if service returns valid shortlink", async () => {
    const viewModel = renderShortenLinkViewModel();
    await viewModel.generateShortlink("url");

    expect(viewModel.shortlinks.length).toBe(1);
  });

  it("should set error if service returns an error", async () => {
    const serviceMock = new ShortlinkService();
    const errorMock: ErrorData = {
      code: 2,
      message: "not allowed",
    };
    serviceMock.getShortlink = jest.fn(() =>
      Promise.resolve(new Shortlink({ error: errorMock }))
    );
    const viewModel = renderShortenLinkViewModel(serviceMock);
    await viewModel.generateShortlink("url");

    expect(viewModel.error?.code).toBe(2);
    expect(viewModel.error?.message).toBe("not allowed");
  });
});
