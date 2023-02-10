import { useCallback } from 'react';
import { Typography } from '@mui/material';

import { InfoCardProps } from '@/components/InfoCard/InfoCardTypes';
import { StyledInfoCard } from '@/components/InfoCard/InfoCardStyled';

import IconWateringCan from '@/icons/IconWateringCan';
import IconThermometer from '@/icons/IconThermometer';
import IconSun from '@/icons/IconSun';
import IconSnowflake from '@/icons/IconSnowflake';
import IconEarth from '@/icons/IconEarth';
import IconDownload from '@/icons/IconDownload';
import IconCalendar from '@/icons/IconCalendar';

import { translateQuickInfoTitle } from '@/resources/constants';

import ModalCardInfo from '@/modals/ModalCardInfo/ModalCardInfo';
import { PossibleQuickInfo } from '@/api/types';

const infoIcons: Record<PossibleQuickInfo, JSX.Element> = {
  [PossibleQuickInfo.DEPTH]: <IconDownload />,
  [PossibleQuickInfo.SUN]: <IconSun />,
  [PossibleQuickInfo.WATER]: <IconWateringCan />,
  [PossibleQuickInfo.SEASON]: <IconThermometer />,
  [PossibleQuickInfo.FROST]: <IconSnowflake />,
  [PossibleQuickInfo.GERMINATION]: <IconEarth />,
  [PossibleQuickInfo.SPROUT_TO_HARVEST]: <IconCalendar />,
};

const InfoCard = ({ type, value, info }: InfoCardProps) => {
  const hasInfo = Boolean(info);

  const openInfoCardModal = useCallback(() => {
    if (hasInfo) {
      ModalCardInfo.show(info);
    }
  }, [hasInfo, info]);

  return (
    <StyledInfoCard
      spacing={2}
      $hasInfo={hasInfo}
      alignItems='center'
      flexDirection='column'
      onClick={openInfoCardModal}
    >
      <Typography sx={{ fontWeight: 500 }}>{translateQuickInfoTitle(type)}</Typography>
      {infoIcons[type]}
      <Typography>{value}</Typography>
    </StyledInfoCard>
  );
};

export default InfoCard;
