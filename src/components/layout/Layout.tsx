import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
	children: React.ReactNode;
};

class Layout extends React.Component<Props> {
	render() {
		return (
			<>
				<Header />
				<main>{this.props.children}</main>
				<Footer />
			</>
		);
	}
}
export default Layout;
