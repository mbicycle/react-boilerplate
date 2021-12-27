import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTE } from 'common/components/routes/utils/constants';

import { CV_FORM_STEPS, Step } from '../../utils/constants';

interface SetLanguagesReturnType {
  activeStep: Step;
  handlePrevious: VoidFunction;
  handleNext: VoidFunction;
}

export const useSetStep = (): SetLanguagesReturnType => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeStep, setStep] = useState<number>(0);

  const handlePreviousStep = useCallback((): void => {
    const isAddLanguagePath = location.pathname.includes(ROUTE.DASHBOARD.LANGUAGES.ADD);

    if (isAddLanguagePath) {
      navigate(ROUTE.DASHBOARD.LANGUAGES.MAIN);
    }
    navigate(-1);
  }, [location.pathname, navigate]);

  const handleNextStep = useCallback((): void => {
    if (activeStep < Step.Certifications) {
      navigate(CV_FORM_STEPS[+activeStep + 1].route);
    }
  }, [activeStep, navigate]);

  useEffect(() => {
    const index = CV_FORM_STEPS.findIndex((stepItem) => location.pathname.includes(stepItem.route));
    if (index !== -1) setStep(index);
  }, [activeStep, location.pathname]);

  return {
    activeStep,
    handlePrevious: handlePreviousStep,
    handleNext: handleNextStep,
  };
};
