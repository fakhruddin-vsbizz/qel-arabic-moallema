import { AuthContextProvider } from "@/components/store/auth-context";
import { BatchContextProvider } from "@/components/store/batch-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BatchContextProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </BatchContextProvider>
  );
}
