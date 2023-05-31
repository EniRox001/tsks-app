import { AppBar, Box, Button, Link, TextField, Toolbar, Typography } from "@mui/material"
import TaskItem from "../../components/TaskItem";
import NavigationBar from "../../components/NavigationBar";
import CreateTask from "../../components/CreateTask";

const Home = () => {
    return (
        <Box>
            {/* Navigation Bar */}
            <NavigationBar 
                title='tsks.'
                onClick={() => console.log('click')}
            />

            {/* Main Body Container */}
            <Box sx={{
                width: '80%',
                margin: 'auto',
                marginTop: '2rem'
            }}>
                {/* Create Task */}
                <CreateTask
                    onAdd={() => console.log('add')}
                    textFieldValue=""
                    onTextFieldChange={() => console.log('change')}    
                />
                
                {/* Task List */}
                <Box sx={{
                    my: '2rem',
                }}>
                    <Typography sx={{
                        fontSize: '2rem',
                        fontWeight: '500'
                    }}>Task List</Typography>
                    <TaskItem 
                        title='Task 1'
                        onEdit={() => console.log('edit')}
                        onDelete={() => console.log('delete')}
                    />
                </Box>
            </Box>
        </Box>
    )
}


export default Home;