import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { sepolia } from "viem/chains";
import { CartProvider } from '../context/CartContext';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const config = getDefaultConfig({
    appName: "SpSdkTutorial",
    projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID || "",
    chains: [sepolia],
    ssr: true
  });

  return (
    <CartProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </CartProvider>
  );
}
