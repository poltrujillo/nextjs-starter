import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { poppins } from '@/utils/fonts';
import { Toaster } from '@/components/ui/sonner';

import '@/styles/globals.css';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster position="top-center" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
