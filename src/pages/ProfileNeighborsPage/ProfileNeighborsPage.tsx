import { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

import Loader from '@/components/Loader';

import transientProps from '@/utils/transientProps';

import { useGetMeQuery } from '@/redux/services/auth/auth';

const GrayCell = styled(
  TableCell,
  transientProps,
)<{ $isDiagonal: boolean }>(({ theme, $isDiagonal }) => ({
  backgroundColor: $isDiagonal ? theme.palette.grey[200] : 'inherit',
  textAlign: 'center',
}));

const ProfileNeighborsPage = () => {
  const { data, isLoading } = useGetMeQuery();

  const plants = (data?.garden || []).filter(
    (obj, index, self) =>
      index === self.findIndex((o) => o.plant?._id === obj.plant?._id) && obj.plant?._id,
  );
  const plantNames = plants.map((a) => a.plant?.name);

  const config = useMemo(() => {
    if (!plants.length) return;

    return plants.map(({ plant }) => {
      if (!plant?._id) return null;

      const render = plants.map(({ plant: otherPlant }) => {
        if (!otherPlant?._id) return null;

        const hasCompanion = plant?.neighbors.companion.some((a) => a._id === otherPlant._id);
        const hasCombative = plant?.neighbors.combative.some((a) => a._id === otherPlant._id);

        return (
          <GrayCell key={otherPlant._id} $isDiagonal={plant._id === otherPlant._id}>
            {hasCompanion ? (
              <FavoriteIcon color='error' />
            ) : hasCombative ? (
              <ElectricBoltIcon color='warning' />
            ) : null}
          </GrayCell>
        );
      });

      return (
        <TableRow key={plant._id}>
          <TableCell sx={{ fontWeight: 500 }}>{plant.name}</TableCell>
          {render}
        </TableRow>
      );
    });
  }, [plants]);

  if (isLoading) {
    return <Loader isCenter isStatic color='primary' />;
  }

  if (plantNames.length <= 1) {
    return (
      <Typography textAlign='center' fontSize={20} color='text.secondary'>
        Посадите хотя бы 2 растения
      </Typography>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название растения</TableCell>
            {plantNames.map((plantName) => (
              <TableCell key={plantName}>{plantName}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>{config}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileNeighborsPage;
