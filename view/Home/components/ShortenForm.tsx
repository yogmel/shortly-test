import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonType } from "view/shared";
import shortenFormStyles from "../styles/ShortenForm.module.scss";
import layoutStyles from "view/shared/styles/Layout.module.scss";
import { ShortenLinkViewModel } from "viewmodel";
import { observer } from "mobx-react";
import Loader from "view/shared/components/Loader";

interface ShortFormProps {
  viewModel: ShortenLinkViewModel;
}

function ShortenForm(props: ShortFormProps) {
  const {
    viewModel: { error: requestError, loading, generateShortLink },
  } = props;

  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (requestError) {
      setError(requestError.message);
    }
  }, [requestError]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  }, []);

  const shortenLink = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      if (link) {
        generateShortLink(link);
        setLink("");
      }
      if (!link) {
        setError("Please add a link");
      }
    },
    [generateShortLink, link]
  );

  return (
    <section className={shortenFormStyles.section}>
      <div className={layoutStyles.grid}>
        <form className={shortenFormStyles.form} onSubmit={shortenLink}>
          <div className={shortenFormStyles.inputContainer}>
            <input
              type="text"
              placeholder="Shorten a link here..."
              className={
                error ? shortenFormStyles.inputError : shortenFormStyles.input
              }
              onChange={onChange}
              disabled={loading}
            />
            {error && <span className={shortenFormStyles.error}>{error}</span>}
          </div>
          <Button
            type={ButtonType.Secondary}
            className={shortenFormStyles.submit}
            disabled={loading}
          >
            {loading ? <Loader /> : "Shorten it!"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default observer(ShortenForm);
