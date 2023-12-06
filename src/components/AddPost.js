import React, { useState } from 'react'
import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { Add, EmojiEmotions, Image } from "@mui/icons-material";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import VideocamIcon from "@mui/icons-material/Videocam";

const AddPost = () => {
  const [addClicked, setAddClicked] = useState(false)
  return (
    <>
      <Tooltip title="Add post">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setAddClicked(true)}
          sx={{
            left: { xs: "calc(50% - 25px)", md: 30 },
            bottom: 20,
            position: "fixed",
          }}
        >
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={addClicked}
        onClose={() => setAddClicked(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          bgcolor="background.default"
          p={3}
          height={450}
          borderRadius="10px"
          sx={{ width: { xs: 300, sm: 500 } }}
          color={"text.primary"}
        >
          <Typography variant="h6" textAlign="center" color="gray">
            Create a post
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Avatar
              src="https://images.pexels.com/photos/19291404/pexels-photo-19291404/free-photo-of-moca-museum-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
            <Typography fontWeight={500} fontSize={20} variant="span" my={2}>
              John Doe
            </Typography>
          </Box>
          <TextField
            sx={{ width: "100%", my: "10px" }}
            id="filled-multiline-static"
            // label="Multiline"
            multiline
            rows={8}
            placeholder="What's on your mind?"
            variant="filled"
          />
          <Stack direction="row" spacing={1} mt={1}>
            <AudiotrackIcon color="error" />
            <VideocamIcon color="success" />
            <Image color="primary" />
            <EmojiEmotions htmlColor="#dbc037" />
          </Stack>
          <Button variant="contained" sx={{ mt: "50px" }}>
            Post
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default AddPost
