import * as React from 'react';
import Box from '@mui/joy/Box';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function TabsBottomNavExample() {
  const [index, setIndex] = React.useState(0);
  const colors = ['primary', 'danger', 'success', 'warning'] as const;
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: -3,
        p: 4,
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        bgcolor: `${'var(--colors-index)'}.500`,
      }}
      style={{ '--colors-index': colors[index] } as any}
    >
      <Tabs
        size="lg"
        aria-label="Bottom Navigation"
        value={index}
        onChange={(event, value) => setIndex(value as number)}
        sx={(theme) => ({
          p: 1,
          borderRadius: 16,
          maxWidth: 400,
          mx: 'auto',
          boxShadow: theme.shadow.sm,
          '--joy-shadowChannel': theme.vars.palette[colors[index]].darkChannel,
          [`& .${tabClasses.root}`]: {
            py: 1,
            flex: 1,
            transition: '0.3s',
            fontWeight: 'md',
            fontSize: 'md',
            [`&:not(.${tabClasses.selected}):not(:hover)`]: {
              opacity: 0.7,
            },
          },
        })}
      >
        <TabList
          variant="plain"
          size="sm"
          disableUnderline
          sx={{ borderRadius: 'lg', p: 0 }}
        >
          <Link to="/it-services" style={{ textDecoration: 'none', flex: 1 }}>
            <Tab
              disableIndicator
              orientation="vertical"
              {...(index === 0 && { color: colors[0] })}
            >
              <ListItemDecorator>
                <HomeRoundedIcon />
              </ListItemDecorator>
              Home
            </Tab>
          </Link>
          <Link to="/it-manager_approve" style={{ textDecoration: 'none', flex: 1 }}>
            <Tab
              disableIndicator
              orientation="vertical"
              {...(index === 1 && { color: colors[1] })}
            >
              <ListItemDecorator>
                <FavoriteBorder />
              </ListItemDecorator>
              Approve
            </Tab>
          </Link>
          <Link to="/it-services" style={{ textDecoration: 'none', flex: 1 }}>
            <Tab
              disableIndicator
              orientation="vertical"
              {...(index === 2 && { color: colors[2] })}
            >
              <ListItemDecorator>
                <Search />
              </ListItemDecorator>
              Search
            </Tab>
          </Link>
          <Link to="/it-services" style={{ textDecoration: 'none', flex: 1 }}>
            <Tab
              disableIndicator
              orientation="vertical"
              {...(index === 3 && { color: colors[3] })}
            >
              <ListItemDecorator>
                <Person />
              </ListItemDecorator>
              Profile
            </Tab>
          </Link>
        </TabList>
      </Tabs>
    </Box>
  );
}