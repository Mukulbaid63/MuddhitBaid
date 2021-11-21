import React from 'react';
import styles from '../styles/ProfileHeader.scss';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import instagram from 'react-useanimations/lib/instagram'
import twitter from 'react-useanimations/lib/twitter'
import useScript from '../hooks/useScript';
// @ts-ignore
import ConvertKitForm from 'convertkit-react';
// @ts-ignore
import styled from 'styled-components';

export const MY_FORM_ID = 2558985;
export const config = {
    formId: MY_FORM_ID,
    template: 'clare',
    emailPlaceholder: 'Enter an email address',
    submitText: 'Stay Updated!',
    buttonBackground:'#273036',
    format:'inline',
  }
const About = () => {
	return (
		<div className={styles.aboutContent}>
			<p style={{width:'190%'}}>
				<span style={{textAlign:'justify'}}>
                I am <b>Software Engineer at Rocketium</b>. I love to build
				websites and cool stuffs. I write about Web apps. I am on a target to improve me as a Full-stack Developer. I spend my
				time on internet on exploring new builds, reading and crafting
				articles. I love to mentor people also.
                </span>
                <br/>
                <br/>
                <span>
                  <ul style={{textAlign:'left'}}>
                  <span >My under construction articles:</span>
                    <li>Building a React app with Typescript, Antd and Sass using Webpack from scratch</li>
                    <li>10 awesome browser APIs , you may have missed!!</li>
                  </ul>
                </span>
                <div style={{marginTop:'30px'}}>
                <span >Wanna connect with me ?</span>
                <div className={styles.iconContainer}>
                <a href = 'https://github.com/Mukulbaid63' target='_blank'><UseAnimations animation={github} /></a>
                <a href='https://www.linkedin.com/in/mukulbaid63/' target='_blank'><UseAnimations animation={linkedin} /></a>
                <a href='https://twitter.com/MuddhitBaid' target='_blank'><UseAnimations animation={twitter} /></a>
                <a href='https://www.instagram.com/baidmukul' target='_blank'><UseAnimations animation={instagram} /></a>
                </div>
                </div>
                <div >
                <p style={{fontSize:'16px'}}>Subscribe to get my latest content and newsletters.</p>
                <StyledConvertKitForm {...config} >
                </StyledConvertKitForm>
                </div>
			</p>
		</div>
	);
};

const StyledConvertKitForm = styled(ConvertKitForm)`
font-family: 'Lato';
.formkit-powered-by-convertkit{
	display: none !important;
}
`;

export default About;
