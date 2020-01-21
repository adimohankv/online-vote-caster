import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import CustomButton from '../../components/custom-button/custom-button';
import { 
    Container, 
    InnerContainer,
    LinkContainer 
} from './Homepage.styles';

const Homepage = (props) => {
    return (
        <Container>
            <InnerContainer>
                <h1 className="title">Real Time Vote Caster</h1>
                <h3 className="description">Create real time voting surveys. Either as guest or login/ signup to save the results</h3>
                <LinkContainer>
                    <CustomButton>
                        <Link className="guest" to="/guest">Create As Guest</Link>
                    </CustomButton>
                    <CustomButton>
                        <Link className="signin" to="/signin">Sign In Instead</Link>
                    </CustomButton>
                </LinkContainer>
            </InnerContainer>
        </Container>
    )
};

export default Homepage;