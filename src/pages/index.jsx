import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

// Components
import Button from '../components/shared/Button';

// Assets
import home from '../../config/home';

const Container = styled.div`
  ${tw`
    bg-color-secondary
    grid
    h-full
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    p-5
    /* overflow-x-hidden */
    overflow-y-hidden
    `}
`;
const Heading = styled.div`
  ${tw`
    text-6xl
    flex
    justify-center
    items-center
    gap-4
    m-4
    `}
`;
const FrameImg = styled.img`
  ${tw`
    /* row-span-6 */
    h-full
    sm:w-full
    `}
`;
const SubHeading = styled.p`
  ${tw`
    /* row-span-1 */
    text-lg
    mt-4
    text-frame-lgray
    `}
`;
const Description = styled.p`
  ${tw`
    row-span-2
    text-center
    text-sm
    text-frame-gray
    w-1/2
    md:w-full
    sm:w-full
    `}
`;
const Pink = styled.span`
  ${tw`
    text-pink-500	
    `}
`;

const SlimText = styled.span`
  ${tw`
    font-light
    text-white
    `}
`;

const Home = () => (
  <>
    {/* <Helmet> */}
    {/* <title>Frameboi | HackNITR 3.0</title> */}
    {/* <meta name='Frameboi | HackNITR 3.0' contect='Virtual badges for HackNITR 3.0' /> */}
    {/* </Helmet> */}
    <Container>
      {/* <Head /> */}
      {/* <FrameImg src={home.frame.src} alt={home.frame.alt} /> */}
      {/* <SubHeading>{home.subheading}</SubHeading> */}
      <Heading>
        <h1>
          <Pink>Cheers</Pink>
        </h1>
        <SlimText>Magnet Styling</SlimText>
      </Heading>
      <Description>שמור לעמוד התחברות באמצעות שם משתמש וסיסמה אם יהיה צורך בכך</Description>
      <Link to='/frame'>
        <Button>המשך</Button>
      </Link>
    </Container>
  </>
);

export default Home;
