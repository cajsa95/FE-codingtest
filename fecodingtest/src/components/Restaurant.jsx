import React, { Component } from 'react'
import styled from 'styled-components';
import { Card, CardHeader, CardContent, Grid, AppBar, Typography, ListItem, List  } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Place from '@material-ui/icons/Place';
import Phone from '@material-ui/icons/Phone';
import Computer from '@material-ui/icons/Computer';
import Star from '@material-ui/icons/Star';

class Restaurant extends Component {
    state = {
        name: '',
        address: '',
        openingHours: [],
        phoneNumber: '',
        rating: '',
        website: '',
    }

   componentDidMount = async () =>{
    const id = this.props.location.state.id; //get id for selected restaurant

    const req = await fetch(`http://localhost:3000/api/restaurant/${id}`)
    const res = await req.json();

    this.setState({
        name: res.name,
        address: res.address,
        openingHours: res.opening_hours,
        phoneNumber: res.phone_number,
        rating: res.rating,
        website: res.website,
        photo: res.photo,
        googleMapsUrl: res.google_maps_url
    })
    
   }
  render() {
      const{ state: {name, address, openingHours, phoneNumber, rating, website,} ,} = this;
    return (
      <div>
          <Content>
            <StyledAppBar position="static" color="default" elevation={0}>
             <Typography variant="h1" color="inherit" align="center">
                    Where to Eat?
             </Typography>
              <Typography variant="subtitle1" color="inherit" align="center">
                    Your restaurant guide in Stockholm
             </Typography>
             <StyledLink to={{pathname: `/`}}>
              <StyledArrowBack fontSize="large"/>  
             </StyledLink>
             
            </StyledAppBar>
            <Grid container direction="row" justify="center" alignItems="baseline"> 
              <StyledCard>
                <StyledCardHeader title={name} elevation={2}/>
                <Grid container direction="row" justify="center" alignItems="baseline" > 
                  <StyledCardContent>
                    <List>
                    <Typography variant="h6" color="inherit">
                      Opening Hours</Typography>
                        <Ul>
                            {openingHours.map((opening_hours) => 
                            <StyledListItem key={Math.random()}>
                                {opening_hours}
                            </StyledListItem>
                            )}
                        </Ul>
                    </List>
                    </StyledCardContent>

                    <StyledCardContent2>
                      <Typography variant="subtitle1" color="inherit">
                        <br/>
                        <Phone fontSize="large"/> {phoneNumber} <br/>
                        <Star fontSize="large"/> {rating} <br/>
                        <Computer fontSize="large"/> <a href={website}>Visit homepage</a><br/>
                        <Place fontSize="large"/> {address} 
                      </Typography>
                    </StyledCardContent2>
                </Grid>
              </StyledCard>
            </Grid>
          </Content>
        
      </div>
    )
  }
}

export default Restaurant;

const Content = styled.div`
`;
const StyledAppBar = styled(AppBar)`
    &&&{
        height: 130px;
        position: relative;
        background-color: transparent;
        display: flex;
        margin-bottom: 30px;
        h1{
            padding-top: 40px;
            line-height: 70px;
            font-family: 'Great Vibes', cursive;  
        }
        h6{
            font-family: 'Nanum Myeongjo', serif;  
        }
    }
`;

const StyledCard = styled(Card)`
    &&&{
        width: 70%;
        margin: 30px;
    }
`;

const StyledCardHeader = styled(CardHeader)`
    &&&{
        text-align: center;
        p{
            line-height: 50px;  
        }
        span{
            font-family: 'Nanum Myeongjo', serif !important;
            font-size: 36px;
        }
    }
`;
const StyledCardContent = styled(CardContent)`
    &&&{
      display: flex;
      h6{
            font-family: 'Nanum Myeongjo', serif;  
            text-align: center;
        }
    }
`;

const StyledCardContent2 = styled(CardContent)`
    &&&{
      display: flex;
      h6{
            font-family: 'Nanum Myeongjo', serif;  
            text-align: left;
        }
      a{
        text-decoration: none;
        color: #333;
      }
      a:hover{
        text-decoration: underline;
      }
    }
`;

const StyledLink = styled(Link)`
  &&&{
    text-decoration: none;
    margin-left: 120px;
  }
`;
const StyledArrowBack = styled(ArrowBack)`
  &&&{
    color: #333;
  }
`;

const StyledListItem = styled(ListItem)`
  &&& {
      width: 100%;
    }
`;

const Ul = styled.ul`
    font-family: 'Nanum Myeongjo', serif;  
`;