import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

var Topbar = (props) => (



<div style={{height: '250px', position: 'relative'}}>
    <Layout style={{background: 'url(https://iso.500px.com/wp-content/uploads/2018/02/500px_blog_landscape_photography_quest.jpg) center / cover'} }>
        <Header transparent title="Title" style={{color: 'white'} }>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>

        <Content />

    </Layout>
</div>


)

export default Topbar;