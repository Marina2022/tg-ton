import {Container, Paper} from "@mui/material";
import NotesCard from "../components/NotesCard.jsx";
import Masonry from '@mui/lab/Masonry';

const notes = [
  {
    title: "Yoshi's birthday bash",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "reminders",
    id: 1
  },
  {
    title: "Complete my ninja training",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    category: "work",
    id: 2
  },
  {
    title: "Order a pizza!",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "todos",
    id: 3
  },
  {
    title: "Go home",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "todos",
    id: 4
  }
  ,
  {
    title: "Take a sleep",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "todos",
    id: 5
  }
  ,
  {
    title: "Go travel to Italy",
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "todos",
    id: 6
  }
]


const Notes = () => {

  return (
      <Container>


        <Masonry columns={{sm: 1, md: 2, lg: 3}} spacing={2}>
          {
            notes.map(item=>
                <Paper key={item.id} item md={3} xs={12}>
                  <NotesCard note={item}/>
                </Paper>
            )
          }
        </Masonry>
      </Container>
  );
};

export default Notes;