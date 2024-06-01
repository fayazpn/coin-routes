import { Typography } from '@mui/material';

type SectionHeaderProps = {
  title: string;
};

function SectionHeader({ title }: SectionHeaderProps) {
  return <Typography>{title}</Typography>;
}

export default SectionHeader;
