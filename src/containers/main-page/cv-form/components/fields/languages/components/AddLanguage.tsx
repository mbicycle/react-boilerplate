import { memo, useCallback, useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { useForm } from 'common/utils/hooks';

import { Language } from 'common/models/User';
import AddLanguageEndAdornmentButton from './AddLanguageEndAdornmentButton';
import { ADD_INPUT_LANGUAGE_NAME, BUTTON_TEXT } from './utils/constants';

import { AddLanguageButtonStyled, AddLanguageStyled } from './utils/styled';

const AddLanguage = function (): JSX.Element {
  const { handleChange, values } = useForm<Language>({ name: '', level: '' });

  const [isActive, setIsActive] = useState(false);

  const onLanguageChangeHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    e.stopPropagation();
    handleChange(e);
  }, [handleChange]);

  const onFocusHandle = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.stopPropagation();
  }, []);

  const onAddLanguageActivate = useCallback((e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsActive(true);
  }, []);

  return (
    <AddLanguageStyled>
      {isActive
        ? (
          <TextFieldOutlined
            defaultValue={values.name}
            name={ADD_INPUT_LANGUAGE_NAME}
            onChange={onLanguageChangeHandle}
            onClick={onFocusHandle}
            InputProps={{
              endAdornment: <AddLanguageEndAdornmentButton values={values} />,
            }}
          />
        ) : (
          <AddLanguageButtonStyled
            onClick={onAddLanguageActivate}
            variant="contained"
            fullWidth
          >
            <AddCircleIcon />
            &nbsp;
            {BUTTON_TEXT}
          </AddLanguageButtonStyled>
        )}
    </AddLanguageStyled>
  );
};

export default memo(AddLanguage);
