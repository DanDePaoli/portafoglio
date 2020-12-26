import React from 'react';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';

var BottomBar = (props) => (

<Footer size="mega" id="onload-TopBar" >
<a name="Contact"></a>
    <FooterSection type="middle">
    <FooterDropDownSection title="">
            <FooterLinkList>
                <a href="#Hello">Hello</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="">
            <FooterLinkList>
                <a href="#Resume">Resume</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="">
            <FooterLinkList>
                <a href="#Contact">Contact</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="">
            <FooterLinkList>
                <a href="#Top">Back To Top</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
</Footer>


)

export default BottomBar;