import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

var Topbar = (props) => (



<div id="onload-TopBar" style={{height: '250px', position: 'relative', marginBottom: '2em' }}>
    <Layout style={{background: 'url(https://iso.500px.com/wp-content/uploads/2018/02/500px_blog_landscape_photography_quest.jpg) center / cover'} }>
        <Header transparent title="Welcome" style={{color: 'white'} }>
            <Navigation>
                <a href="#Hello">Hello</a>
                <a href="#Resume">Resume</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Welcome">
            <Navigation>
                <a href="#Hello">Hello</a>
                <a href="#Resume">Resume</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Contact">Contact</a>
            </Navigation>
        </Drawer>

        <Content />

    </Layout>
</div>


)

export default Topbar;