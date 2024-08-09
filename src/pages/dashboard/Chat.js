import { Box, IconButton, Stack, Typography, Button, Divider } from '@mui/material'
import { CircleDashed, MagnifyingGlass, ArchiveBox } from 'phosphor-react'
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import React from 'react'

const Chat = () => {
  return (
    <Box sx={{
      position: "relative",
      height: "100vh",
      width: 320,
      backgroundColor: "#F8FAFF",
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
    }}>

      <Stack p={3} spacing={2}>
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
        <Stack direction={"column"}>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Chat
