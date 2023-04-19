import ModalNote from '@/modals/ModalNote/ModalNote';
import ModalLogin from '@/modals/ModalLogin/ModalLogin';
import ModalGarden from '@/modals/ModalGarden/ModalGarden';
import ModalConfirm from '@/modals/ModalConfirm/ModalConfirm';
import ModalCardInfo from '@/modals/ModalCardInfo/ModalCardInfo';

const AppModalsList = () => {
  return (
    <>
      <ModalNote />
      <ModalLogin />
      <ModalGarden />
      <ModalConfirm />
      <ModalCardInfo />
    </>
  );
};

export default AppModalsList;
