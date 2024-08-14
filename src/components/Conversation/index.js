import { Stack, Box, Avatar, Badge, Typography, IconButton, Divider, TextField, InputAdornment, Icon } from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker';
import { useTheme, styled } from "@mui/material/styles";
import { MagnifyingGlass, Phone, VideoCamera, CaretDown, LinkSimple, Smiley, PaperPlaneTilt } from 'phosphor-react';

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

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

const Conversation = () => {
  const theme = useTheme();
  const color = theme.palette.mode === "light"
    ? "#F8FAFF"
    : "#14191e"
  const color2 = theme.palette.mode === "light"
    ? "#F8FAFF"
    : "#060606"
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
      <Box p={2} sx={{ backgroundColor: "#000", height: 100,       backgroundColor:color }}>
        <Stack alignItems="center" direction={"row"} justifyContent={"space-between"} sx={{ height: "100%", width: "100%" }}>
          <Stack direction={"row"} spacing={2}>
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt={faker.name.fullName()}
                  src={faker.image.avatar()}
                />
              </StyledBadge>
            </Box>
            <Stack spacing={0.2}>
              <Typography variant='subtitle2'>
                {faker.name.fullName()}
              </Typography>
              <Typography variant='caption'>
                Online
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>

          </Stack>
        </Stack>
      </Box>
      {/* msgs */}
      <Box sx={{backgroundColor: color2, flexGrow: 1, width: "100%"}} >
      </Box>
      {/* Footer */}
      <Box p={2} sx={{
        backgroundColor: "#000",
        height: 100,
        width: "100%",
        backgroundColor: color
      }}>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <TextField
            fullWidth
            alignItems={"center"}
            justifyContent={"center"}
            placeholder='Type a message'
            variant='filled'
            InputProps={{
              disableUnderline: true,
              startAdornment:
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>,
              endAdornment:
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
            }} />
          <Box sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5
          }}>
            <Stack sx={{
              height: "100%",
              width: "100%"
            }}
            alignItems={"center"}
            justifyContent={"center"}>
              <IconButton>
                <PaperPlaneTilt color='white'/>
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Conversation
