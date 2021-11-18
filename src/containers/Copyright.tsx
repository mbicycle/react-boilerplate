import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = function (): JSX.Element {
  return (
    <Typography variant="body2" color="HighlightText" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      .
    </Typography>
  );
};

export default Copyright;
