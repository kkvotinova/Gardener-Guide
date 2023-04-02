import ModalNote from '@/modals/ModalNote/ModalNote';
import ModalLogin from '@/modals/ModalLogin/ModalLogin';
import ModalConfirm from '@/modals/ModalConfirm/ModalConfirm';
import ModalCardInfo from '@/modals/ModalCardInfo/ModalCardInfo';

const AppModalsList = () => {
  return (
    <>
      <ModalNote />
      <ModalLogin />
      <ModalConfirm />
      <ModalCardInfo />
    </>
  );
};

export default AppModalsList;
