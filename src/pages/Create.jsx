
import {
  Box,
  Button,
  Container, FormControl,
  FormControlLabel, FormLabel,
  Radio,
  RadioGroup,
  styled,
  TextField,
  Typography
} from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { useState} from "react";

const CustomBtn = styled(Button)({
  color: 'red',
  '&:hover': {
    color: 'blue'
  }
})

const classes = {
  btn: {
    backgroundColor: 'yellow'
  }
}

const CustomContainer = styled(Container)(({theme}) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],

  [theme.breakpoints.up('md')]: {
    maxWidth: 1024,
  }
  // добавьте свои стили здесь
}));


const Create = () => {
  

  const [title, setTitle] = useState('')
  const [radio, setRadio] = useState('male')

  return (
      <CustomContainer>
        <Typography
            noWrap

        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem dolorem doloribus ipsum iusto, numquam
          obcaecati odio pariatur provident qui quis quisquam reprehenderit! Atque dicta earum in molestias mollitia
          sequi!
        </Typography>

        <Button variant="contained" color="primary" sx={{alignItems: 'center'}}
                startIcon={<AddReactionIcon/>}>one</Button>
        <Button sx={classes.btn}>two</Button>
        <CustomBtn>three</CustomBtn>

        <form noValidate autoComplete="off">
          <TextField variant="outlined" label="привет" sx={{marginTop: 3, display: 'block'}} value={title}
                     onChange={(e) => setTitle(e.target.value)}/>
          <TextField variant="outlined" label="hello" sx={{marginTop: 3}} multiline rows={4} error={false}/>

          <FormControl sx={{width: 300, marginTop: 2, display: 'block'}}>
            <FormLabel>Radio things</FormLabel>
            <RadioGroup value={radio} onChange={(e)=>setRadio(e.target.value)}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />              
            </RadioGroup>
          </FormControl>

        </form>


      </CustomContainer>
  );
};

export default Create;