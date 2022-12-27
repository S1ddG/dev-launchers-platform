import React, { useState } from 'react';
import './WelcomePage.css';
//import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';

import RainbowBar from '../../../../../site-projects/src/components/common/RainbowBar';
import Image from 'next/image';

import handWithLightbulbImage from '../../../images/submit-image.png';
import helpButtonImage from '../../../images/help-image.png';
import bulletinBoardPostItImage from '../../../images/bulletin-board-postit.png';
import rocketImage from '../../../images/logo-monogram.png';
import AppIdeaGeneratorButton from '../IdeaGeneratorButton/AppIdeaGeneratorButton';

import {
  Button,
  Description,
  ButtonArea,
  StyledLink,
  Header,
  BackgroundImage,
  ButtonWrapper,
} from './StyledWelcomePage';
import { flexbox } from '@mui/system';

function WelcomePage() {
  // return (
  //   <Grid container spacing={2}>
  //     <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

  //       <div id="welcomeWrapper">
  //         <h1 style={{width:"100%",textAlign:"center"}}>
  //           IdeaSpace (Beta)
  //         </h1>
  //         <SubmitIdea />
  //       </div>

  //     </Grid>
  //   </Grid>
  // )

  return (
    <Grid container direction="row" alignItems="center" spacing={2}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{
          background:
            'linear-gradient(0deg, rgba(222,222,222,1) 50%, rgba(240,237,238,1) 50%)',
        }}
      >
        <Header>
          <h1>IdeaSpace (Beta)</h1>
          <RainbowBar />
        </Header>

        <Description>
          <div style={{ fontFamily: 'Nunito Sans', marginBottom: '20px' }}>
            WELCOME TO THE IDEA PLATFORM!
          </div>
          <div
            style={{
              fontFamily: 'Nunito Sans',
              color: '#474747',
              marginBottom: '20px',
            }}
          >
            Have an idea for a development project? Want to help develop an
            idea? Want to generate an idea?
          </div>
          <div style={{ fontFamily: 'Nunito Sans', marginBottom: '10px' }}>
            LET'S GET STARTED
            <img
              src={rocketImage}
              style={{
                width: '25px',
                height: '25px',
                paddingLeft: '5px',
              }}
            />
          </div>
        </Description>

        <ButtonArea>
          <ButtonWrapper
            style={{
              backgroundColor: '#FF7F0E',
            }}
          >
            <StyledLink href="/ideas/submit">
              <div
                style={{
                  height: '100%',
                  minHeight: '300px',
                  maxHeight: '300px',
                  display: 'inline',
                  background: `linear-gradient( rgba(255,127,14, 0.9), rgba(255,127,14, 0.9)), url(${bulletinBoardPostItImage})`,
                  backgroundSize: 'cover',
                  borderRadius: '30px',
                  alignContent: 'center',
                  overflow: 'initial',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    width: '100%',
                    border: 'solid',
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                  }}
                >
                  Submit Your Idea
                </div>
                <p style={{ color: 'white' }}>
                  Have an idea for development? Turn your idea into a product
                  through the community.
                </p>
                <div
                  style={{
                    textAlign: 'right',
                    position: 'relative',
                    paddingRight: '2%',
                    paddingTop: '1%',
                  }}
                >
                  <p style={{ color: 'white' }}>CONTINUE &#8594;</p>
                </div>
              </div>
            </StyledLink>
          </ButtonWrapper>
          <ButtonWrapper
            style={{
              backgroundColor: '#FFAB00',
            }}
          >
            <StyledLink href="/ideas/browse">
              <div
                style={{
                  height: '100%',
                  minHeight: '300px',
                  maxHeight: '300px',
                  display: 'inline',
                  background: `linear-gradient( rgba(255,171,0, 0.9), rgba(255,171,0, 0.9)), url(${helpButtonImage})`,
                  backgroundSize: 'cover',
                  borderRadius: '30px',
                  alignContent: 'center',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    width: '100%',
                    border: 'solid',
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                  }}
                >
                  Help Existing Idea
                </div>
                <p style={{ color: 'white' }}>
                  Want to help developing an idea? Check out ideas submitted by
                  other Dev Launchers!
                </p>
                <div
                  style={{
                    textAlign: 'right',
                    position: 'relative',
                    paddingRight: '2%',
                  }}
                >
                  <p style={{ color: 'white' }}>CONTINUE &#8594;</p>
                </div>
              </div>
            </StyledLink>
          </ButtonWrapper>

          <ButtonWrapper
            style={{
              background: '#3A7CA5',
              display: 'inline-flex',
            }}
          >
            <AppIdeaGeneratorButton
              style={{
                background: '#FFAB00',
                height: '100%',
                width: '100%',
                minHeight: '300px',
                maxHeight: '300px',
                background: `linear-gradient( rgba(58,124,165, 0.9), rgba(58,124,165, 0.9)), url(${handWithLightbulbImage})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                alignItems: 'center',
              }}
              showExtendedContent
            ></AppIdeaGeneratorButton>
          </ButtonWrapper>
        </ButtonArea>
      </Grid>
    </Grid>
  );
}

export default WelcomePage;
