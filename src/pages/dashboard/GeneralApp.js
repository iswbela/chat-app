import { Box,  Stack,  } from '@mui/material'
import Chat from "./Chat";
import Conversation from '../../components/Conversation';

const GeneralApp = () => {

  return (
    <Stack direction={"row"} sx={{width:"100%"}}>
      <Chat/>

      <Box sx={{height:"100%", width:"calc(100vw - 420px)", backgroundColor:'black'}}>
        <Conversation></Conversation>
      </Box>

    </Stack>
  );
};

export default GeneralApp;
