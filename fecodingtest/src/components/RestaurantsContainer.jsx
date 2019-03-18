import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CardHeader, CardMedia, CardContent, Card, AppBar, Grid, Typography } from '@material-ui/core';

class RestaurantsContainer extends Component {
    state ={
        restaurants: []
    }
    //when the component loads, fetch data from api
    componentDidMount = () =>{
        fetch('http://localhost:3000/api/list')
        .then(res => res.json())
        .then(data => {
            this.setState({
            restaurants: data
            })
        })
        .catch('Failed to fetch data from API')
    } 
    

  render() {
    const { state: { restaurants } } = this;
    return (

      <Content src={"public/assets/images/background.jpg"}>
        <StyledAppBar position="static" color="default" elevation={0}>
            <Typography variant="h1" color="inherit" align="center">
                    Where to Eat?
            </Typography>
            <Typography variant="subtitle1" color="inherit" align="center">
                    Your restaurant guide in Stockholm
            </Typography>
        </StyledAppBar>

        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={24} >    
          {restaurants.map((restaurants) => 
            <StyledCard key={restaurants.id} elevation={2}>
                <StyledCardHeader title={restaurants.name}></StyledCardHeader>
                <StyledCardMedia image={restaurants.photo}/>
                <StyledCardContent>
                    <Link to={{pathname: `/restaurant/${restaurants.id}`, state:{id: restaurants.id}}}>
                        Read more here
                    </Link>
                </StyledCardContent>    
            </StyledCard>
            )}
        </Grid>   
      </Content>
    )
  }
}

export default RestaurantsContainer;

const Content = styled.div`

`;

const StyledCard = styled(Card)`
    &&&{
        height: 350px;
        width: 300px;
        margin: 30px;
        font-family: 'Nanum Myeongjo', serif;
        
        &:hover{
            box-shadow: 0 0 6px #666;
        }
    }
`;

const StyledCardMedia = styled(CardMedia)`
    &&&{
        height: 60%;
    }
`;
const StyledCardContent = styled(CardContent)`
    &&&{
        text-align: right;
        a{
            text-decoration: none;
            color: #666;
        }
        a:hover{
            text-decoration: underline;
            color: #333;
        }
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
        }
    }
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