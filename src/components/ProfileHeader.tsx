import { Menu } from 'antd';
import React from 'react';
// @ts-ignore
import profile from '../assets/profile-pic.png';
import profileStyles from '../styles/ProfileHeader.scss';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
	// @ts-ignore
  } from "react-router-dom";
import About from './About';
import Reads from './Reads';
import Writes from './Writes';
import Join from './Join';
import useScript from '../hooks/useScript';



const ProfileHeader = () => {

	const profileMenu = () => {
		return (
			<Menu mode="horizontal" className={profileStyles.menuOptions}>
				<Menu.Item key="about"><Link to="/">About me</Link></Menu.Item>
				<Menu.Item key="writes"><Link to="/writes">Writes</Link></Menu.Item>
				<Menu.Item key="reads"><Link to="/reads">Reads</Link></Menu.Item>
        		{/* <Menu.Item key="join"><Link to="/join">Join me</Link></Menu.Item> */}
			</Menu>
		);
	};
	return (
		<div className={profileStyles.profileHeader}>
			<Router>
				<div className={profileStyles.profileImage}>
				<img src={profile} />
				</div>
				<span className={profileStyles.introTitle}>Hello, there! 👋🏻 I'm <span>Muddhit.</span></span>
				<p className={profileStyles.introDesc}>I am a Software engineer, tech blogger and also a foodie.</p>
				{profileMenu()}
				<Switch>
					<Route exact path="/">
						<About/>
						
					</Route>
					<Route path="/reads">
						<Reads/>
					</Route>
					<Route path="/writes">
						<Writes/>
					</Route>
					<Route path="/join">
						<Join/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default ProfileHeader;
