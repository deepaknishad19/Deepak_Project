import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Paper,
  CardActions,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

const bestCars = [
  {
    id: 1,
    name: 'Bugatti Chiron',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'The ultimate hypercar with 1500 horsepower.',
    price: '$3.3M'
  },
  {
    id: 2,
    name: 'Rolls-Royce Phantom',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'The pinnacle of luxury motoring.',
    price: '$460,000'
  },
  {
    id: 3,
    name: 'Ferrari SF90 Stradale',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Ferrari\'s most powerful production car.',
    price: '$510,000'
  },
  {
    id: 4,
    name: 'McLaren P1',
    image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A hybrid hypercar that redefined performance.',
    price: '$1.15M'
  },
  {
    id: 5,
    name: 'Mercedes-Maybach S-Class',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'The ultimate luxury sedan experience.',
    price: '$200,000'
  }
];

const cars = [
  {
    id: 1,
    name: 'Luxury Sedan',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Experience luxury and comfort in our premium sedan.',
    price: '$45,000'
  },
  {
    id: 2,
    name: 'Sports Car',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Feel the power and excitement of our sports car collection.',
    price: '$65,000'
  },
  {
    id: 3,
    name: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Perfect for family adventures and outdoor activities.',
    price: '$55,000'
  },
  {
    id: 4,
    name: 'Electric Vehicle',
    image: 'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Eco-friendly and efficient electric vehicle.',
    price: '$50,000'
  },
  {
    id: 5,
    name: 'Compact Car',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Perfect for city driving and parking.',
    price: '$25,000'
  },
  {
    id: 6,
    name: 'Luxury SUV',
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Premium SUV with advanced features.',
    price: '$75,000'
  },
  {
    id: 7,
    name: 'Hybrid Car',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Fuel-efficient hybrid technology.',
    price: '$35,000'
  },
  {
    id: 8,
    name: 'Convertible',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Enjoy the open road with our convertible.',
    price: '$60,000'
  },
  {
    id: 9,
    name: 'Family Van',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Spacious and comfortable for the whole family.',
    price: '$40,000'
  },
  {
    id: 10,
    name: 'Luxury Coupe',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Elegant and powerful luxury coupe.',
    price: '$70,000'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bestCars.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === bestCars.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80)',
          height: '500px'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Welcome to CarLanding
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Discover the perfect car for your journey. From luxury sedans to powerful sports cars,
            we have the perfect match for your driving needs.
          </Typography>
          {!user && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/register')}
              sx={{ mt: 2, maxWidth: '200px' }}
            >
              Get Started
            </Button>
          )}
        </Box>
      </Paper>

      {/* Best Cars Carousel */}
      <Box sx={{ bgcolor: 'grey.900', py: 8, color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            Best Cars of the World
          </Typography>
          <Box sx={{ position: 'relative', height: '500px' }}>
            <Card
              sx={{
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              <CardMedia
                component="img"
                image={bestCars[currentSlide].image}
                alt={bestCars[currentSlide].name}
                sx={{ width: '100%', height: 350, objectFit: 'cover' }}
              />
              <CardContent sx={{ bgcolor: 'rgba(0,0,0,0.7)', color: 'white', position: 'absolute', bottom: 0, width: '100%' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {bestCars[currentSlide].name}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {bestCars[currentSlide].price}
                </Typography>
                <Typography variant="body1">
                  {bestCars[currentSlide].description}
                </Typography>
              </CardContent>
            </Card>
            <Button
              onClick={handlePrevSlide}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                minWidth: '40px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                zIndex: 1,
                fontSize: '24px',
                padding: 0
              }}
            >
              &#8249;
            </Button>
            <Button
              onClick={handleNextSlide}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white',
                bgcolor: 'rgba(0,0,0,0.5)',
                minWidth: '40px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                zIndex: 1,
                fontSize: '24px',
                padding: 0
              }}
            >
              &#8250;
            </Button>
            <Box sx={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
              {bestCars.map((_, index) => (
                <Button
                  key={index}
                  sx={{
                    width: 12,
                    height: 12,
                    minWidth: 12,
                    mx: 0.5,
                    p: 0,
                    borderRadius: '50%',
                    bgcolor: index === currentSlide ? 'primary.main' : 'rgba(255,255,255,0.5)',
                    '&:hover': { bgcolor: index === currentSlide ? 'primary.main' : 'rgba(255,255,255,0.7)' }
                  }}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Cars Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Our Collection
        </Typography>
        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item key={car.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={car.image}
                  alt={car.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {car.name}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {car.price}
                  </Typography>
                  <Typography>
                    {car.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                  <Button size="small" color="primary">
                    Contact Dealer
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Why Choose Us
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Wide Selection
                </Typography>
                <Typography color="text.secondary">
                  Choose from our extensive collection of premium vehicles
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Best Prices
                </Typography>
                <Typography color="text.secondary">
                  Competitive pricing and flexible financing options
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom>
                  Expert Support
                </Typography>
                <Typography color="text.secondary">
                  Professional assistance throughout your car buying journey
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 