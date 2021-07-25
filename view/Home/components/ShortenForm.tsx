import React, { useCallback, useState } from "react";
import { Button, ButtonType } from "view/shared";
import shortenFormStyles from "../styles/ShortenForm.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";
import { ShortenLinkViewModel } from "viewmodel";
import { observer } from "mobx-react";

interface ShortFormProps {
  viewModel: ShortenLinkViewModel;
}

function ShortenForm(props: ShortFormProps) {
  const {
    viewModel: { loading, generateShortLink },
  } = props;

  const [link, setLink] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  }, []);

  const shortenLink = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      generateShortLink(link);
    },
    [generateShortLink, link]
  );

  return (
    <section className={shortenFormStyles.section}>
      <div className={layoutStyles.grid}>
        <form className={shortenFormStyles.form} onSubmit={shortenLink}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={shortenFormStyles.input}
            onChange={onChange}
            disabled={loading}
          />
          <Button
            type={ButtonType.Secondary}
            className={shortenFormStyles.submit}
            disabled={loading}
          >
            Shorten it!
          </Button>
        </form>
      </div>
    </section>
  );
}

export default observer(ShortenForm);
