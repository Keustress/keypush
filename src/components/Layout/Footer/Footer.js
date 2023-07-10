import styled from "styled-components"

const Footer = () => {
    return (
        <Footer_container>
            <Footer_contents>
                Copyright 2023. Keustress all rights reserved.
            </Footer_contents>
        </Footer_container>
    )
}

export default Footer

const Footer_container = styled.footer`
    background-color: grey;
    height: 50px;
    margin-top: auto;
`

const Footer_contents = styled.div`
    width: 96%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    margin: 0 auto;
`