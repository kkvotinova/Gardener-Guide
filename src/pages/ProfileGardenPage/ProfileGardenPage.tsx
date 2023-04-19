import { useCallback, useMemo } from 'react';
import Image from 'mui-image';

// import { garden } from '@/pages/ProfileGardenPage/api';
import { StyledGridContainer, Square } from '@/pages/ProfileGardenPage/ProfileGardenPageStyled';

import Loader from '@/components/Loader';

import { ApiUserGarden } from '@/redux/services/auth/auth.types';
import { useGetMeQuery } from '@/redux/services/auth/auth';
import ModalGarden from '@/modals/ModalGarden/ModalGarden';

const ProfileGardenPage = () => {
  const { data: userInfo, isLoading } = useGetMeQuery();

  const openGardenModal = useCallback(
    (garden: ApiUserGarden, plantIndex: number) => () => {
      ModalGarden.show({
        garden,
        plantIndex,
      });
    },
    [],
  );

  const config = useMemo(() => {
    const isEmptyGarden = !userInfo?.garden.length;
    const garden: ApiUserGarden[] = !isEmptyGarden
      ? userInfo.garden
      : new Array(16).fill({ plant: null });

    return garden.map((item, i) => {
      const isEmpty = !item.plant;
      return (
        <Square key={i} item xs={3} $isEmpty={isEmpty} onMouseUp={openGardenModal(item, i)}>
          {!isEmpty ? (
            <Image src={item.plant!.preview} duration={600} showLoading width={100} height={100} />
          ) : null}
        </Square>
      );
    });
  }, [openGardenModal, userInfo?.garden]);

  if (isLoading) {
    return <Loader isCenter isStatic color='primary' />;
  }

  return (
    <StyledGridContainer container spacing={0}>
      {config}
    </StyledGridContainer>
  );
};

export default ProfileGardenPage;
