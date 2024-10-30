// app/layout.js
import { GlobalContextProvider } from '@/context/globalContext'
import HeaderFooterLayout from './HeaderFooterLayout'
import './globals.css'
import { Roboto } from 'next/font/google'
import ScheduleDemo from '@/section/ScheduleDemo'
import ScheduleForm from '@/section/ScheduleForm'
import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import ClientProvider from './ClientProvider';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'TechForing Growth',
  description: 'Developed by TechForing Ltd.',
};


export default function RootLayout({ children }) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body className={`${roboto.className} bg-white mainBody`} suppressHydrationWarning={true}>
          <ClientProvider>
            <HeaderFooterLayout>
              {children}
            </HeaderFooterLayout>
            <ScheduleDemo />
            <ScheduleForm />
          </ClientProvider>
        </body>
      </html>
    </GlobalContextProvider>
  );
}

