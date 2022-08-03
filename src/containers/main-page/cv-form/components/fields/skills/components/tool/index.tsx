import React, {
  memo, useCallback, useEffect, useRef, useState,
} from 'react';

import {
  Grid, Typography, SelectChangeEvent, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useCategoryContext } from 'containers/main-page/cv-form/local-state/hooks';
import { Tool as ToolType } from 'common/models/User';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { Text, ToolInputText } from '../../utils/constants';
import { Level } from '../../../languages/components/utils/level.enum';

import LevelSelection from './LevelSelection';
import TimeUsedInput from './TimeUsedInput';

import { AccordionStyled, AddToolButtonStyled, ToolContainerStyled } from '../../utils/styled';

interface ToolProps {
  tool: ToolType;
  skillId: string;
  defaultExpanded: boolean;
}

const Tool = function ({
  tool,
  skillId,
  defaultExpanded,
}: ToolProps): JSX.Element {
  const { dispatch } = useCategoryContext();

  const listRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(defaultExpanded);

  const onDeleteToolHandle = useCallback((): void => {
    dispatch({ type: 'remove-tool', tool, skillId });
  }, [dispatch, skillId, tool]);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    dispatch({
      type: 'update-tool',
      skillId,
      tool: { ...tool, name: value },
    });
  };

  const handleLevelChange = (event: SelectChangeEvent<`${Level}`>): void => {
    const { value } = event.target;
    dispatch({
      type: 'update-tool',
      skillId,
      tool: { ...tool, level: value as `${Level}` },
    });
  };

  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    dispatch({
      type: 'update-tool',
      skillId,
      tool: { ...tool, experience: +value },
    });
  };

  const handleAccordionChange = ():void => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => setExpanded(() => defaultExpanded), [defaultExpanded]);

  return (
    <ToolContainerStyled container direction="column" ref={listRef}>
      <AccordionStyled expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h4">
            {`${Text.Tool}: ${tool.name} ${tool.level ? `(${tool.level})` : ''} ${tool.experience ? `[${tool.experience} year]` : ''}`}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <TextFieldOutlined
                defaultValue={tool.name}
                label={ToolInputText.Label}
                name={ToolInputText.Name}
                onChange={handleChangeName}
                autoFocus
              />
            </Grid>
            <Grid
              container
              gap={4}
              wrap="nowrap"
            >
              <Grid
                item
                xs={6}
                sx={{ mt: 3 }}
              >
                <LevelSelection
                  selectedLevel={tool.level}
                  onChange={handleLevelChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TimeUsedInput
                  value={tool.experience}
                  onChange={handleExperienceChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              paddingTop={3}
              display="inline-flex"
              justifyContent="flex-end"
            >
              <AddToolButtonStyled
                sx={{ width: 120 }}
                onClick={onDeleteToolHandle}
              >
                {Text.Delete}
              </AddToolButtonStyled>
            </Grid>
          </Grid>
        </AccordionDetails>
      </AccordionStyled>
    </ToolContainerStyled>
  );
};

export default memo(Tool);
