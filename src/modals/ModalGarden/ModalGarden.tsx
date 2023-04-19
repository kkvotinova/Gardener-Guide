import { debounce } from 'throttle-debounce';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'mui-image';
import {
  DialogActions,
  FormControl,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import EastIcon from '@mui/icons-material/East';

import Select from '@/components/Select';
import Modal from '@/components/Modal';
import Loader from '@/components/Loader';

import routes from '@/resources/routes';

import { useDebounceValue } from '@/hooks/useDebounceValue';

import { ApiPlant, ApiPlantType } from '@/redux/services/plants/plants.type';
import { useGetAllPlantsQuery } from '@/redux/services/plants/plants';
import { ApiUserUpdateGardenPatchBody } from '@/redux/services/auth/auth.types';
import {
  useDeleteUserGardenMutation,
  useUpdateUserGardenMutation,
} from '@/redux/services/auth/auth';
import withStaticModal, { StaticModalWrappedComponent } from '@/modals/withStaticModal';
import { ModalGardenProps } from '@/modals/ModalGarden/ModalGardenTypes';
import { StyledFormControlLabel } from '@/modals/ModalGarden/ModalGardenStyled';

const options = [
  {
    label: 'Сад и Огород',
    value: ApiPlantType.VEGETABLE,
  },
  {
    label: 'Цветы и растения',
    value: ApiPlantType.HERB,
  },
];

const ModalGarden: StaticModalWrappedComponent<ModalGardenProps> = (props) => {
  const navigate = useNavigate();

  const isEmpty = !props.data?.garden.plant;

  const [selectValue, changeSelectValue] = useState(
    props.data?.garden.plant?.type || options[0].value,
  );
  const [searchValue, setSearchValue] = useState(props.data?.garden.plant?.name || '');
  const [selectedPlant, setSelectedPlant] = useState(props.data?.garden.plant?._id || '');

  const debouncedInputValue = useDebounceValue(searchValue, 400);

  const [updateUserGarden, { isLoading: isUpdateLoading }] = useUpdateUserGardenMutation();
  const [deleteUserGarden, { isLoading: isDeleteLoading }] = useDeleteUserGardenMutation();
  const { data: plants, isLoading: isGetLoading } = useGetAllPlantsQuery({
    type: selectValue,
    name: debouncedInputValue || undefined,
  });

  const handleSetSelectedPlant = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPlant((event.target as HTMLInputElement).value);
  };

  const handleChangeSelectValue = debounce(400, (value: string) => {
    changeSelectValue(value as ApiPlantType);
  });

  const handleSetSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleUpdateGarden = async () => {
    const plantType = plants?.find((a) => a._id === selectedPlant)?.type || ApiPlantType.HERB;

    const body: ApiUserUpdateGardenPatchBody = {
      plantType,
      plantId: selectedPlant,
      plantIndex: props.data!.plantIndex,
    };

    const response = await updateUserGarden(body);

    if ('data' in response) {
      props.onClose();
    }
  };

  const handleDeleteGarden = async () => {
    const response = await deleteUserGarden({
      plantIndex: props.data!.plantIndex,
    });

    if ('data' in response) {
      props.onClose();
    }
  };

  const handlePlantNavigate = useCallback(
    (plant: ApiPlant) => () => {
      const linkToView =
        plant.type === ApiPlantType.HERB
          ? routes.herbs.detailPath(plant._id)
          : routes.vegetables.detailPath(plant._id);

      props.onClose();
      navigate(linkToView);
    },
    [navigate, props],
  );

  useEffect(() => {
    if (!isEmpty) return;
    if (!plants?.length) return;

    setSelectedPlant(plants[0]._id);
  }, [isEmpty, plants]);

  const config = useMemo(() => {
    return plants?.map((plant) => {
      return (
        <StyledFormControlLabel
          key={plant._id}
          value={plant._id}
          control={<Radio />}
          label={
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Stack direction='row' spacing={4} marginLeft={2}>
                <Image src={plant.preview} showLoading duration={0} width={60} height={60} />
                <Typography alignSelf='center' fontSize={20}>
                  {plant.name}
                </Typography>
              </Stack>
              <IconButton onClick={handlePlantNavigate(plant)} color='primary'>
                <EastIcon />
              </IconButton>
            </Stack>
          }
        />
      );
    });
  }, [handlePlantNavigate, plants]);

  const title = isEmpty ? 'Добавить растение' : 'Редактировать';
  const buttonText = isEmpty ? 'Добавить' : 'Сохранить';

  return (
    <Modal {...props} title={title} hasEmptyPadding={isGetLoading}>
      {isGetLoading ? (
        <div style={{ marginBottom: 24 }}>
          <Loader color='primary' size={30} isStatic isCenter />
        </div>
      ) : (
        <>
          <Stack direction='column' spacing={4}>
            <Select
              label='Тип'
              options={options}
              value={selectValue}
              onSelect={handleChangeSelectValue}
            />
            <TextField label='Поиск' value={searchValue} onChange={handleSetSearchValue} />

            {!config?.length ? (
              <Typography textAlign='center' fontSize={20} color='text.secondary'>
                По вашему запросу ничего не найдено
              </Typography>
            ) : (
              <FormControl>
                <RadioGroup value={selectedPlant} onChange={handleSetSelectedPlant}>
                  {config}
                </RadioGroup>
              </FormControl>
            )}
          </Stack>

          <DialogActions>
            {!isEmpty && (
              <LoadingButton
                color='error'
                variant='contained'
                loading={isDeleteLoading}
                onClick={handleDeleteGarden}
              >
                Удалить
              </LoadingButton>
            )}
            <LoadingButton
              type='submit'
              variant='contained'
              loading={isUpdateLoading}
              onClick={handleUpdateGarden}
            >
              {buttonText}
            </LoadingButton>
          </DialogActions>
        </>
      )}
    </Modal>
  );
};

export default withStaticModal<ModalGardenProps>(ModalGarden);
