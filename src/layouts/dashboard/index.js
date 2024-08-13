import { Box, Divider, IconButton, Stack, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Gear, Sun, Moon } from "phosphor-react"; // Import sun and moon icons
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from "../../data";
import { faker } from '@faker-js/faker';
import useSettings from "../../hooks/useSettings";

import Logo from "../../assets/Images/logo.ico";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();

  return (
    <>
      <Box sx={{
        display: 'flex'
      }}>
        <Box
          p={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            height: "100vh",
            width: 100
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent={"space-between"}
            sx={{ height: "100%" }}
            spacing={3}
          >
            <Stack alignItems={"center"} spacing={4}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                  borderRadius: 2.5,
                }}
              >
                <img src={Logo} alt="logo" />
              </Box>
              <Stack spacing={3} direction="column" alignItems="center" sx={{ width: "max-content" }}>
                {Nav_Buttons.map((el) => (
                  <Box
                    key={el.index}
                    sx={{
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{
                        width: "max-content",
                        color: el.index === selected ? "#fff" : theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
                        backgroundColor: el.index === selected ? (theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.secondary.main) : "transparent",
                        '&:hover': {
                          backgroundColor: el.index === selected ? (theme.palette.mode === "light" ? "#ddd" : "#444") : "rgba(0, 0, 0, 0.08)", // Hover effect
                        },
                      }}
                      onClick={() => setSelected(el.index)}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ))}
                <Divider sx={{ width: "48px" }} />
                {selected === 3 ? (
                  <Box
                    sx={{
                      borderRadius: 1.5
                    }}>
                    <IconButton
                      sx={{
                        width: "max-content",
                        color: "#fff",
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: theme.palette.mode === "light" ? "#ddd" : "#444", // Hover effect
                        },
                      }}
                      key={3}
                    >
                      <Gear />
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: "rgba(0, 0, 0, 0.08)", // Hover effect
                      },
                    }}
                    onClick={() => setSelected(3)}>
                    <Gear />
                  </IconButton>
                )}
              </Stack>
            </Stack>
            <Stack spacing={4}>
              <IconButton
                onClick={onToggleMode}
                sx={{
                  color: theme.palette.mode === 'dark' ? "#fff" : "#000",
                  backgroundColor: theme.palette.mode === 'dark' ? "#000" : "#fff",
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark' ? "#333" : "#21409b", // Hover effect
                  },
                }}
              >
                {theme.palette.mode === 'dark' ? <Sun /> : <Moon />}
              </IconButton>
              <Avatar src = "https://i.pinimg.com/564x/e5/55/40/e555402af290cd801befb31f56adfa79.jpg"/>
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Box>

    </>
  );
};

export default DashboardLayout;
