import { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faStore } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

import "../styles/globals.scss";

library.add(faSearch, faStore);

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
