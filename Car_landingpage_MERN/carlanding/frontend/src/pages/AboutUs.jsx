import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const AboutUs = () => {
  const ownerInfo = {
    name: "John Smith",
    position: "Founder & CEO",
    address: "123 Car Street, Auto City, AC 12345",
    phone: "+1 (555) 123-4567",
    email: "john.smith@carlanding.com",
    description: "With over 15 years of experience in the automotive industry, John has built CarLanding into one of the most trusted car dealerships in the region. His passion for cars and commitment to customer satisfaction drives our success."
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        About Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Our Story
            </Typography>
            <Typography paragraph>
              CarLanding was founded with a simple mission: to make car buying and selling a seamless, 
              enjoyable experience. We believe that everyone deserves access to quality vehicles and 
              exceptional service.
            </Typography>
            <Typography paragraph>
              Since our establishment, we've helped thousands of customers find their perfect vehicles, 
              whether they're looking for a family SUV, a sporty coupe, or a luxury sedan.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Meet Our Founder
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" color="primary">
                  {ownerInfo.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {ownerInfo.position}
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                {ownerInfo.description}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                  <strong>Address:</strong> {ownerInfo.address}
                </Typography>
                <Typography variant="body2">
                  <strong>Phone:</strong> {ownerInfo.phone}
                </Typography>
                <Typography variant="body2">
                  <strong>Email:</strong> {ownerInfo.email}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs; 