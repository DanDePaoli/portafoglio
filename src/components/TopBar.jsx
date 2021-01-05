import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

var Topbar = (props) => (



<div id="onload-TopBar" style={{height: '450px', position: 'relative', marginBottom: '2em' }}><a name="Top"></a>
    <Layout style={{background: 'url(https://ddpgithubprojects.s3-us-west-2.amazonaws.com/ZionSubwayMe.jpg) center / cover'} }>
        <Header transparent title="Welcome" style={{color: 'white'} }>
            <Navigation>
                <a href="#Hello">Hello</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Resume">Resume</a>
                <a href="#Contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Welcome">
            <Navigation>
                <a href="#Hello">Hello</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Resume">Resume</a>
                <a href="#Contact">Contact</a>
            </Navigation>
        </Drawer>

        <Content />

    </Layout>
</div>


)

export default Topbar;