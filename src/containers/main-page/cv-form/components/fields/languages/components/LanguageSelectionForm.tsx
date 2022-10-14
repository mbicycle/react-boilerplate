import { memo, useEffect, useState } from 'react';

import {
  Grid, InputLabel, MenuItem, Select,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

import { useForm } from 'common/utils/hooks';
import { UserLanguage } from 'common/models/User';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { LANGUAGE, LanguageInputName, LEVEL } from '../utils/constants';
import { ADD_INPUT_LANGUAGE_NAME, LEVELS as levels } from './utils/constants';

import { useGetAllLanguages } from '../lib/query-hooks';

import { FormControlStyled, MenuItemText } from '../utils/styled';
import { SearchPaperStyled } from './utils/styled';

interface LanguageSelectionFormProps{
  onGetSelectedLanguage: (language: UserLanguage) => void;
}

const LanguageSelectionForm = function ({
  onGetSelectedLanguage,
}:LanguageSelectionFormProps): JSX.Element {
  const { data } = useGetAllLanguages();
  const { values, handleChange } = useForm<UserLanguage>({ name: '', level: 'Beginner' });

  const [languages, setLanguages] = useState(data);

  const onLanguageSearchHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.stopPropagation();

    setLanguages(
      data?.filter((item) => Object.values(item)
        .join('')
        .toLowerCase()
        .includes(event.target.value.toLowerCase())),
    );
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    event.stopPropagation();
  };

  useEffect(() => { if (values.name) onGetSelectedLanguage(values); }, [onGetSelectedLanguage, values]);
  useEffect(() => { if (data) setLanguages(data); }, [data]);

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
            MenuProps={{ sx: { maxHeight: 360, '& :nth-of-type(2):not(svg)': { mt: 10 } } }}
          >
            <SearchPaperStyled elevation={4}>
              <TextFieldOutlined
                role="heading"
                name={ADD_INPUT_LANGUAGE_NAME}
                onChange={onLanguageSearchHandle}
                onClick={handleClick}
                InputProps={{ endAdornment: <SearchIcon fontSize="large" /> }}
              />
            </SearchPaperStyled>
            {languages?.map((item) => (
              <MenuItem
                key={item}
                value={item}
              >
                <MenuItemText color="text.secondary">
                  &#8288;
                  {item}
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
