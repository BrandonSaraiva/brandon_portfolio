import Header from '@/components/Header';
import './globals.css';
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '700'],
	variable: '--font-roboto',
});

export const metadata = {
	title: 'Brandon Cardoso',
	description: 'Portfolio pessoal Brandon Cardoso',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} ${inter.variable} font-alt`}>
				{children}
			</body>
		</html>
	);
}
