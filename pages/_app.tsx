import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { CoreBlockchainTestnet } from "@thirdweb-dev/chains";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = CoreBlockchainTestnet;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
