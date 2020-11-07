import { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faStore,
  faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";

import "../styles/globals.scss";

library.add(faSearch, faStore, faLongArrowAltDown);

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
