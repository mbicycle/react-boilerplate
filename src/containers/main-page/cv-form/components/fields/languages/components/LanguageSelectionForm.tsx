import { memo, useEffect } from 'react';

import {
  Grid, InputLabel, MenuItem, Select,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useForm } from 'common/utils/hooks';

import AddLanguage from './AddLanguage';
import { LANGUAGE, LanguageInputName, LEVEL } from '../utils/constants';
import { FormLanguage } from './utils/types';

import { FormControlStyled, MenuItemText } from '../utils/styled';

interface LanguageSelectionFormProps{
  languages: {name: string}[];
  levels:{name: string}[];
  onGetSelectedLanguage: (language: FormLanguage) => void;
}

const LanguageSelectionForm = function ({
  languages,
  levels,
  onGetSelectedLanguage,
}:LanguageSelectionFormProps): JSX.Element {
  const { values, handleChange } = useForm<FormLanguage>({ name: '', level: '' });

  useEffect(() => {
    if (values.name) {
      onGetSelectedLanguage(values);
    }
  }, [onGetSelectedLanguage, values]);

  return (
    <>
      <Grid item xs={6}>
        <FormControlStyled fullWidth>
          <InputLabel>{LANGUAGE}</InputLabel>
          <Select
            value={values.name}
            label={LANGUAGE}
            name={LanguageInputName.Language}
            onChange={handleChange}
            fullWidth
            IconComponent={KeyboardArrowDownIcon}
          >
            <AddLanguage />
            {languages?.map((item) => (
              <MenuItem
                key={item.name}
                value={item.name}
              >
                <MenuItemText color="text.secondary">
                  &#8288;
                  {item.name}
                </MenuItemText>

              </MenuItem>
            ))}
          </Select>
        </FormControlStyled>
      </Grid>
      <Grid item xs={6}>
        <FormControlStyled fullWidth>
          <InputLabel>{LEVEL}</InputLabel>
          <Select
            value={values.level}
            label={LEVEL}
            name={LanguageInputName.Level}
            onChange={handleChange}
            fullWidth
            IconComponent={KeyboardArrowDownIcon}
          >
            {levels.map((item) => (
              <MenuItem
                key={item.name}
                value={item.name}
              >
                <MenuItemText color="text.secondary">
                  {item.name}
                </MenuItemText>
              </MenuItem>
            ))}
          </Select>
        </FormControlStyled>
      </Grid>
    </>
  );
};

export default memo(LanguageSelectionForm);
