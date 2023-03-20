import { styled, Typography } from '@mui/material';

import Modal from '@/components/Modal';

import { translateQuickInfoDescriptionTitle } from '@/resources/constants/plant';

import { ApiPlantQuickInfo } from '@/redux/services/plants/plants.type';
import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';

const StyledTypography = styled(Typography)`
  padding-left: 8px;
  padding-bottom: 16px;
`;

const ModalCardInfo: StaticModalWrappedComponent<ApiPlantQuickInfo> = (props) => {
  const title = translateQuickInfoDescriptionTitle(props.data?.type);

  return (
    <Modal {...props} maxWidth='xs' title={title} hasEmptyPadding>
      <StyledTypography>{props.data?.description}</StyledTypography>
    </Modal>
  );
};

export default withStaticModal<ApiPlantQuickInfo>(ModalCardInfo);
