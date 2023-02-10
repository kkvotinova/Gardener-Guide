import { styled, Typography } from '@mui/material';

import Modal from '@/components/Modal';

import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';
import { CommonInfo } from '@/api/types';

const StyledTypography = styled(Typography)`
  padding-left: 8px;
  padding-bottom: 16px;
`;

const ModalCardInfo: StaticModalWrappedComponent<CommonInfo> = (props) => {
  return (
    <Modal {...props} maxWidth='xs' title={props.data!.title} hasEmptyPadding>
      <StyledTypography>{props.data?.description}</StyledTypography>
    </Modal>
  );
};

export default withStaticModal<CommonInfo>(ModalCardInfo);
