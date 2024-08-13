import { Box, IconButton, Stack, Typography, Button, Divider, Avatar, Badge } from '@mui/material'
import { useTheme, styled } from "@mui/material/styles";
import { CircleDashed, MagnifyingGlass, ArchiveBox, ArrowsHorizontal } from 'phosphor-react'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import React from 'react'
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box sx={{
      width: "100%",
      borderRadius: 1,
      backgroundColor:theme.palette.mode === "light"
      ? "#F8FAFF"
      : "#14191e",
    }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between">
        <Stack
          direction="row"
          spacing={2}
        >
          {online ? <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={img} />
          </StyledBadge> :
            <Avatar src={img} />}

          <Stack spacing="0.3">
            <Typography variant='subtitle2'>
              {name}
            </Typography>
            <Typography variant='caption'>
              {msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant='caption'>
            {time}
          </Typography>
          <Badge
            color="primary"
            badgeContent={unread}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

const Chat = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      position: "relative",
      width: 320,
      backgroundColor:
      theme.palette.mode === "light"
        ? "#F8FAFF"
        : "#1d242b",
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
    }}>

      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h5">
            Chats
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color='#709CE6' />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }} />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button width={"100%"}>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack direction={"column"} sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}>
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={1.5}>
              <Typography variant='subtitle'>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />
              })}
            </Stack>
            <Stack spacing={1.5}>
              <Typography variant='subtitle'>
                All chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Chat
