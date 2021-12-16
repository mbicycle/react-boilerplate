import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTE } from 'common/components/routes/utils/constants';

import { useFormData } from '../../local-state/hooks';
import { CV_FORM_STEPS, Step } from '../../utils/constants';

interface SetLanguagesReturnType {
  activeStep: Step;
  handlePrevious: VoidFunction;
  handleNext: VoidFunction;
}

export const useSetLanguages = (): SetLanguagesReturnType => {
  const { state, dispatch } = useFormData();
  const navigate = useNavigate();
  const location = useLocation();

  const { activeStep } = state;

  const handlePrevious = useCallback((): void => {
    navigate(-1);
    dispatch({ type: 'prev' });
  }, [dispatch, navigate]);

  const handleNext = useCallback((): void => {
    if (activeStep < Step.Certifications) {
      dispatch({ type: 'next' });
    }
  }, [activeStep, dispatch]);

  useEffect(() => {
    if (location.pathname.includes(ROUTE.DASHBOARD.LANGUAGES.ADD)) {
      return navigate(ROUTE.DASHBOARD.LANGUAGES.ADD);
    }
    return navigate(CV_FORM_STEPS[+activeStep].route);
  }, [activeStep, location.pathname, navigate]);

  return {
    activeStep,
    handlePrevious,
    handleNext,
  };
};
