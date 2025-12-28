import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Box,
  Rating,
} from '@mui/material';

function RecipeCard({ recipe }) {
  return (
    <div className='recipe-card'>
      <Card variant='outlined' sx={{ width: 790 }}>
        <CardContent sx={{ height: '100%' }}>
          <>
            <Stack direction='column' sx={{ alignItems: 'center' }}>
              <Typography variant='h5' component='div'>
                {recipe.name}
              </Typography>
              <Rating
                name='read-only'
                readOnly
                value={Number(recipe.rating)}
                size='small'
              />
            </Stack>
          </>
          <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CardMedia
            sx={{ height: 240, width: 460 }}
            image={recipe.imageUrl}
            />
            </CardContent>
          <Box>
            <Stack direction='row' justifyContent='center' spacing={9}>
              <Stack direction='column'>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  <Typography display='inline' fontWeight='bold'>
                    Category:
                  </Typography>{' '}
                  {recipe.category}
                </Typography>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  <Typography display='inline' fontWeight='bold'>
                    Subcategory:
                  </Typography>{' '}
                  {recipe.subcategory}
                </Typography>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  <Typography display='inline' fontWeight='bold'>
                    Dish type:
                  </Typography>{' '}
                  {recipe.type}
                </Typography>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  <Typography display='inline' fontWeight='bold'>
                    How far in advance could be done:
                  </Typography>{' '}
                  {recipe.advance}
                </Typography>
              </Stack>
              <Stack direction='column'>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  <Typography display='inline' fontWeight='bold'>
                    Cuisine:
                  </Typography>{' '}
                  {recipe.cuisine}
                </Typography>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  <Typography display='inline' fontWeight='bold'>
                    Prep method:
                  </Typography>{' '}
                  {recipe.prepMethod}
                </Typography>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  <Typography display='inline' fontWeight='bold'>
                    Source:
                  </Typography>{' '}
                  {recipe.source}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ paddingTop: 2 }}>
            <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
              <Typography component='div'>
                <Typography sx={{ textDecoration: 'underline' }}>
                  Ingredients
                </Typography>
                <Typography
                  variant='body'
                  component='div'
                  color='text.secondary'
                >
                  Yield: {recipe.servings} servings
                </Typography>
                {recipe.ingredient.map((ing, index) => (
                  <Typography
                    variant='h6'
                    component='div'
                    color='text.secondary'
                    key={index}
                  >
                    <Typography
                      variant='body1'
                      component='div'
                      color='text.secondary'
                    >
                      {ing.quantity === 'none' ? '' : ing.quantity}{' '}
                      {ing.unit === 'none' ? '' : ing.unit}
                      {Number(ing.quantity) > 1 && ing.unit !== 'none'
                        ? 's'
                        : ''}{' '}
                      {ing.name}
                    </Typography>
                  </Typography>
                ))}
              </Typography>
              <Box>
                <Stack sx={{ width: 550 }}>
                  <Typography component='div' sx={{ paddingLeft: 5 }}>
                    <Typography sx={{ textDecoration: 'underline' }}>
                      Preparation
                    </Typography>
                    {recipe.prepStep.map((prepStep, index) => (
                      <Typography
                        variant='h6'
                        component='div'
                        color='text.secondary'
                        key={index}
                      >
                        <Typography
                          variant='body1'
                          component='div'
                          color='text.secondary'
                        >
                          <Typography
                            component='div'
                            fontWeight='fontWeightBold'
                          >
                            Step {index + 1}
                          </Typography>
                          {prepStep.name}
                        </Typography>
                      </Typography>
                    ))}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Typography variant='body1' component='div' color='text.secondary'>
            <Typography display='inline' fontWeight='bold'>
              Comments:
            </Typography>{' '}
            {recipe.comments}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecipeCard;
