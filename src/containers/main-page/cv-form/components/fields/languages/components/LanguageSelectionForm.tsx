import { memo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Grid, InputLabel,
  MenuItem, Select,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useForm } from 'common/utils/hooks';
import { LeveledLanguageType } from 'containers/main-page/cv-form/local-state/LanguageContext';

import { LANGUAGE, LEVEL } from '../utils/constants';
import { Language as LanguageType } from '../mock';

import { FormControlStyled, MenuItemText } from '../utils/styled';

type SelectionType = {
    language: string;
    level: string;
}

interface LanguageSelectionFormProps{
languages: LanguageType[];
 levels:LanguageType[];
onGetSelectedLanguage: (language: LeveledLanguageType) => void;
}

const LanguageSelectionForm = function ({
  languages,
  levels,
  onGetSelectedLanguage,
}:LanguageSelectionFormProps): JSX.Element {
  const { values, handleChange } = useForm<SelectionType>({ language: '', level: '' });

  useEffect(() => {
    if (values.language && values.level) {
      onGetSelectedLanguage(values);
    }
  }, [onGetSelectedLanguage, values]);

  return (
    <>
      <Grid item xs={6}>
        <FormControlStyled fullWidth>
          <InputLabel>{LANGUAGE}</InputLabel>
          <Select
            value={values.language}
            label={LANGUAGE}
            name={LANGUAGE.toLowerCase()}
            onChange={handleChange}
            fullWidth
            IconComponent={KeyboardArrowDownIcon}
          >
            {languages.map((item) => (
              <MenuItem
                key={uuidv4()}
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
      <Grid item xs={6}>
        <FormControlStyled fullWidth>
          <InputLabel>{LEVEL}</InputLabel>
          <Select
            value={values.level}
            label={LEVEL}
            name={LEVEL.toLowerCase()}
            onChange={handleChange}
            fullWidth
            IconComponent={KeyboardArrowDownIcon}
          >
            {levels.map((item) => (
              <MenuItem
                key={uuidv4()}
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
