import { styled } from '@mui/material/styles';

import {
  Box, Grid, Paper, Typography,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import RectangleBlueIcon from 'common/icons/RectangleBlueIcon';
import RectangleIcon from 'common/icons/RectangleIcon';
import SchoolIcon from '@mui/icons-material/School';
import LogoIcon from '../../common/icons/LogoIcon';
import { ImageStyled } from './cv-form/components/fields/personal-information/styled';
import EmailIcon from '../../common/icons/EmailIcon';
import SkypeIcon from '../../common/icons/SkypeIcon';

export const MainPageContainerStyled = styled(Grid)(({ theme }) => ({
  height: '92vh',
  overflowY: 'auto',
  [theme.breakpoints.down('xl')]: {
    overflow: 'auto',
  },
}));

export const FormWrapperStyled = styled(Grid)(() => ({}));

export const PreviewWrapperStyled = styled(Grid, {
  name: 'PreviewWrapperStyled',
})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(15, 32),
  [theme.breakpoints.up('sm')]: {
    overflow: 'auto',
  },
}));

export const PaperWrapperStyled = styled(Paper, {
  name: 'PaperWrapperStyled',
})(({ theme }) => ({
  maxWidth: '100%',
  padding: theme.spacing(4),
  margin: theme.spacing(4.5, 6, 0),
  borderRadius: theme.shape.borderRadius,
}));

export const BoxWrapperStyled = styled(Box, {
  name: 'BoxWrapperStyled',
})(({ theme }) => ({
  width: '30px',
  height: '30px',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '50%',
}));

export const CircleIconStyled = styled(CircleIcon, {
  name: 'CircleIconStyled',
})(({ theme }) => ({
  color: theme.palette.primary.main,
  width: '0.6rem',
  paddingTop: theme.spacing(1.5),
  marginRight: theme.spacing(1.5),
}));

export const BoxRatingStyled = styled(Box, {
  name: 'BoxRatingStyled',
})(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const LogoIconStyled = styled(LogoIcon, {
  name: 'LogoIconStyled',
})(() => ({
  width: '12rem',
  height: '2.8rem',
  fill: 'secondary',
}));

export const GridWrapper = styled(Grid, {
  name: 'GridWrapper',
})(({ theme }) => ({
  height: '16.8rem',
  backgroundColor: theme.palette.primary.main,
}));

export const SectionTitle = styled(Typography, {
  name: 'SectionTitle',
})(({ theme }) => ({
  margin: theme.spacing(1.5, 0, 0, 1.5),
  fontWeight: theme.typography.fontWeightBold,
}));

export const PhotoStyled = styled(ImageStyled, {
  name: 'PhotoStyled',
})(() => ({
  width: '6.8rem',
  height: '7.2rem',
}));

export const SkillsGrid = styled(Grid, {
  name: 'SkillsGrid',
})(({ theme }) => ({
  padding: theme.spacing(0, 2),
  margin: theme.spacing(3.75, 0, 0, 0),
}));

export const RectangleBlueIconStyled = styled(RectangleBlueIcon, {
  name: 'RectangleBlueIconStyled',
})(({ theme }) => ({
  color: theme.palette.primary.main,
  paddingRight: theme.spacing(0.5),
  width: '3.6rem',
}));

export const RectangleIconStyled = styled(RectangleIcon, {
  name: 'RectangleIconStyled',
})(({ theme }) => ({
  paddingRight: theme.spacing(0.5),
  width: '3.6rem',
}));

export const LogoWrapperGrid = styled(Grid, {
  name: 'LogoWrapperGrid',
})(({ theme }) => ({
  paddingTop: theme.spacing(7),
  paddingLeft: theme.spacing(9.7),
}));

export const EmailIconStyled = styled(EmailIcon, {
  name: 'EmailIconStyled',
})(({ theme }) => ({
  width: '1.6rem',
  marginRight: theme.spacing(1.5),
  paddingTop: theme.spacing(1.25),
}));

export const SkypeIconStyled = styled(SkypeIcon, {
  name: 'SkypeIconStyled',
})(({ theme }) => ({
  width: '1.6rem',
  marginRight: theme.spacing(1.5),
  paddingTop: theme.spacing(1.25),
}));

export const LinkWrapperGrid = styled(Grid, {
  name: 'LinkWrapperGrid',
})(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingRight: theme.spacing(6),
}));

export const PersonalDetailsWrapperGrid = styled(Grid, {
  name: 'PersonalDetailsWrapperGrid',
})(({ theme }) => ({
  margin: 'auto',
  marginTop: theme.spacing(-25),
  zIndex: '20',
}));

export const PaperWrapper = styled(Paper, {
  name: 'PaperWrapper',
})(({ theme }) => ({
  maxWidth: '100%',
  paddingBottom: theme.spacing(12),
  borderRadius: theme.spacing(0.5),
}));

export const SchoolIconStyled = styled(SchoolIcon, {
  name: 'SchoolIconStyled',
})(({ theme }) => ({
  color: theme.palette.primary.main,
  margin: theme.spacing(1.75),
}));
