import {
  Box, Rating,
} from '@mui/material';
import RectangleIcon from 'common/icons/RectangleIcon';
import RectangleBlueIcon from 'common/icons/RectangleBlueIcon';
import theme from '../../../common/theme';

const labels: { [index: string]: number } = {
  Beginner: 1,
  'Pre-Intermediate': 2,
  Intermediate: 3,
  'Upper-Intermediate': 4,
  Advanced: 5,
  Proficiency: 6,
};

const RatingLanguage = function (props: { [index : string] : string }): JSX.Element {
  const { level } = props;

  return (
    <Box
      sx={{

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={labels[level]}
        max={6}
        precision={1}
        readOnly
        icon={(
          <RectangleBlueIcon
            fontSize="large"
            color="primary"
            sx={{
              paddingRight: theme.spacing(0.5),
              width: '3.6rem',
            }}
          />
        )}
        emptyIcon={(
          <RectangleIcon
            fontSize="large"
            sx={{
              paddingRight: theme.spacing(0.5),
              width: '3.6rem',
            }}
          />
        )}
      />
    </Box>
  );
};

export default RatingLanguage;
