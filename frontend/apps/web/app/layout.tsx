import '@app/ui';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import Providers from '@app/web/app/providers';

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru">
      <body className="b-body">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
