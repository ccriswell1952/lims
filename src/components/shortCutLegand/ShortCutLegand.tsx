import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Paper, Grid, Button, Dialog} from '@mui/material';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { common } from '@mui/material/colors';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary
    }));

function ShortCutLegandDialog (props: SimpleDialogProps){
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };
  
  return (
    <Dialog 
    onClose={handleClose} 
    open={open}
    hideBackdrop={true}
    scroll="body"
    sx={{disableTransition: {
      transition: 'none',
    }}}
    >
      <Box sx={{ width: 400 }}>
        <Grid container spacing={0} rowSpacing={0}>
          <Grid item xs={4}>
            <Item>F1</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Show shortcut keys</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Esc</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Hide shortcut keys</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>F3</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Assigns 'All' to Basis field</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>F4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Navigate to next column</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>Shift-F4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Navigate to previous column</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>F5</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Opens new Discrepancy form</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>Shift-F5</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Clears box discrepancy</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>F6</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Insert Row</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>Shift-F6</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Delete Row</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>Shift-F7</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Clear Form</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>Ctrl-End</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>????????</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>Ctrl-T</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Clear Item</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>PgUp</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Navigate to First Row</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>PgDn</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Navigate to Last Row</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>F7</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Next LAN</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>F8</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Executes query+Q30</Item>
          </Grid>        
          <Grid item xs={4}>
            <Item>F10</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Commits changes to database</Item>
          </Grid>  
        </Grid>
      </Box>
    </Dialog>
  )
}

export default function ShortCutLegand() {
  const [open, setOpen] = React.useState(false);
 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button 
        color="primary"
        id="btn-shortcut-legand"
        onClick={handleClickOpen}
        startIcon={<ShortcutIcon sx={{ color: common.white }} />}
        title="Keyboard shortcut legand"
    />

      <ShortCutLegandDialog
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}