import React from 'react';
import { styled } from '@mui/material/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface Plant {
  id: number;
  name: string;
  companion: number[];
  combative: number[];
}

interface PlantTableProps {
  plants: Plant[];
}

const HeartSymbol = styled('span')({
  color: 'red',
});

const LightningBoltSymbol = styled('span')({
  color: 'yellow',
});

const GrayCell = styled(TableCell)<{ isDiagonal: boolean }>(({ theme, isDiagonal }) => ({
  backgroundColor: isDiagonal ? theme.palette.grey[200] : 'inherit',
  width: '50px',
  height: '50px',
  textAlign: 'center',
  verticalAlign: 'middle',
}));

const PlantTableComponent: React.FC<PlantTableProps> = ({ plants }) => {
  const plantNames = plants.map((plant) => plant.name);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Plant Name</TableCell>
            {plantNames.map((plantName) => (
              <TableCell key={plantName} sx={{ width: '50px', height: '50px' }}>
                {plantName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {plants.map((plant) => (
            <TableRow key={plant.id}>
              <TableCell>{plant.name}</TableCell>
              {plants.map((otherPlant) => (
                <GrayCell key={otherPlant.id} isDiagonal={plant.id === otherPlant.id}>
                  {plant.companion.includes(otherPlant.id) ? (
                    <HeartSymbol>❤️</HeartSymbol>
                  ) : plant.combative.includes(otherPlant.id) ? (
                    <LightningBoltSymbol>⚡️</LightningBoltSymbol>
                  ) : null}
                </GrayCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ProfileNeighborsPage = () => {
  const plants = [
    {
      id: 1,
      name: 'Sunflower',
      companion: [2, 3],
      combative: [4],
    },
    {
      id: 2,
      name: 'Marigold',
      companion: [1, 3],
      combative: [],
    },
    {
      id: 3,
      name: 'Lavender',
      companion: [1, 2],
      combative: [4],
    },
    {
      id: 4,
      name: 'Thistle',
      companion: [],
      combative: [1, 3],
    },
  ];

  return <PlantTableComponent plants={plants} />;
};

export default ProfileNeighborsPage;
